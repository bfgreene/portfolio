import { useState, useEffect, useRef, useCallback } from "react";
import { projects, ProjectData } from "@/data/projects";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

interface BoxState {
  x: number;
  y: number;
  vx: number;
  vy: number;
  w: number;
  h: number;
}

const SPEED = 0.7;

function randomVelocity() {
  const angle = Math.random() * Math.PI * 2;
  return { vx: Math.cos(angle) * SPEED, vy: Math.sin(angle) * SPEED };
}

const FloatingProjects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);
  const statesRef = useRef<BoxState[]>([]);
  const pausedRef = useRef(false);
  const animRef = useRef<number>(0);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);
  const [zIndices, setZIndices] = useState<number[]>([]);
  const overlapTracker = useRef<Record<string, boolean>>({});
  const zIndicesRef = useRef<number[]>([]);
  const initialized = useRef(false);

  const initBoxes = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const cw = container.clientWidth;
    const ch = container.clientHeight;

    const states: BoxState[] = [];
    boxRefs.current.forEach((el) => {
      if (!el) return;
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      const x = Math.random() * Math.max(0, cw - w);
      const y = Math.random() * Math.max(0, ch - h);
      const { vx, vy } = randomVelocity();
      states.push({ x, y, vx, vy, w, h });
    });
    statesRef.current = states;
    const initialZ = projects.map((_, i) => projects.length - i);
    zIndicesRef.current = initialZ;
    setZIndices(initialZ);
    setPositions(states.map((s) => ({ x: s.x, y: s.y })));
    initialized.current = true;
  }, []);

  useEffect(() => {
    const timer = setTimeout(initBoxes, 100);
    return () => clearTimeout(timer);
  }, [initBoxes]);

  useEffect(() => {
    const tick = () => {
      if (!pausedRef.current && initialized.current) {
        const container = containerRef.current;
        if (!container) { animRef.current = requestAnimationFrame(tick); return; }
        const cw = container.clientWidth;
        const ch = container.clientHeight;
        const states = statesRef.current;

        states.forEach((s) => {
          s.x += s.vx;
          s.y += s.vy;
          if (s.x < 0) { s.x = 0; s.vx = Math.abs(s.vx); }
          if (s.y < 0) { s.y = 0; s.vy = Math.abs(s.vy); }
          if (s.x + s.w > cw) { s.x = cw - s.w; s.vx = -Math.abs(s.vx); }
          if (s.y + s.h > ch) { s.y = ch - s.h; s.vy = -Math.abs(s.vy); }
        });

        const n = states.length;
        const tracker = overlapTracker.current;
        const zArr = zIndicesRef.current;
        let zChanged = false;

        const currentOverlap: Record<string, boolean> = {};
        for (let i = 0; i < n; i++) {
          for (let j = i + 1; j < n; j++) {
            const a = states[i], b = states[j];
            currentOverlap[`${i}-${j}`] = a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
          }
        }

        const isOverlappingAny = (idx: number) => {
          for (let k = 0; k < n; k++) {
            if (k === idx) continue;
            const key = idx < k ? `${idx}-${k}` : `${k}-${idx}`;
            if (currentOverlap[key]) return true;
          }
          return false;
        };

        for (let i = 0; i < n; i++) {
          for (let j = i + 1; j < n; j++) {
            const key = `${i}-${j}`;
            if (currentOverlap[key]) {
              tracker[key] = true;
            } else if (tracker[key]) {
              if (!isOverlappingAny(i)) {
                zArr[i] = Math.floor(Math.random() * n * 10);
                zChanged = true;
              }
              if (!isOverlappingAny(j)) {
                zArr[j] = Math.floor(Math.random() * n * 10);
                zChanged = true;
              }
              if (!isOverlappingAny(i) && !isOverlappingAny(j)) {
                tracker[key] = false;
              }
            }
          }
        }

        setPositions(states.map((s) => ({ x: s.x, y: s.y })));
        if (zChanged) setZIndices([...zArr]);
      }
      animRef.current = requestAnimationFrame(tick);
    };
    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const handleSelect = (project: ProjectData) => {
    pausedRef.current = true;
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
    pausedRef.current = false;
  };

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden"
        style={{ height: "800px" }}
      >
        {projects.map((project, i) => (
          <div
            key={project.slug}
            ref={(el) => { boxRefs.current[i] = el; }}
            className="absolute cursor-pointer"
            style={{
              width: "min(300px, 45%)",
              backgroundColor: "hsl(60, 20%, 97%)",
              border: "2px solid #0000EE",
              boxShadow: "4px 4px 0px #0000EE",
              zIndex: zIndices[i] ?? (projects.length - i),
              transform: positions[i]
                ? `translate(${positions[i].x}px, ${positions[i].y}px)`
                : "translate(-9999px, -9999px)",
              willChange: "transform",
            }}
            onClick={() => handleSelect(project)}
          >
            <div className="p-3">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full aspect-[4/3] object-cover mb-3"
              />
              <h2 className="text-xl font-semibold mb-1" style={{ color: "#0000EE" }}>
                {project.title}
              </h2>
              <p className="text-sm text-muted-foreground italic">
                {project.role} · {project.year}
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={handleClose}
        >
          <div
            className="relative border border-foreground max-w-2xl w-[90vw] max-h-[85vh] overflow-y-auto p-6"
            style={{ backgroundColor: "hsl(60, 20%, 97%)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 p-1 hover:opacity-70"
              aria-label="Close"
            >
              <X className="h-5 w-5 text-foreground" />
            </button>

            <p className="text-xs text-muted-foreground mb-1 italic">
              {selectedProject.role} · {selectedProject.year}
            </p>
            <h2 className="text-2xl mb-4 text-foreground">{selectedProject.title}</h2>

            <img
              src={selectedProject.image || "/placeholder.svg"}
              alt={selectedProject.title}
              className="w-full aspect-[16/9] border border-foreground/15 mb-6 object-cover"
              style={{ backgroundColor: selectedProject.color }}
            />

            <div className="space-y-3 mb-6">
              {selectedProject.longDescription.map((para, i) => (
                <p key={i} className="text-sm leading-relaxed">{para}</p>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              {selectedProject.photos.slice(1).map((photo, i) => (
                <img
                  key={i}
                  src={photo}
                  alt={`${selectedProject.title} gallery ${i + 2}`}
                  className="w-full aspect-[4/3] border border-foreground/15 object-cover"
                  style={{ backgroundColor: selectedProject.color }}
                />
              ))}
            </div>

            <Link
              to={`/project/${selectedProject.slug}`}
              className="text-sm text-primary underline hover:text-accent"
            >
              View full project →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingProjects;
