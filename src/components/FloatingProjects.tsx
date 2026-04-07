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

const SPEED = 0.55;

function randomVelocity() {
  const angle = Math.random() * Math.PI * 2;
  return { vx: Math.cos(angle) * SPEED, vy: Math.sin(angle) * SPEED };
}

// No collision needed — boxes pass over each other

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
    boxRefs.current.forEach((el, i) => {
      if (!el) return;
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      let x = Math.random() * Math.max(0, cw - w);
      let y = Math.random() * Math.max(0, ch - h);
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
    // Wait for refs to be set
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

        // Track overlaps and swap z-indices when boxes fully separate after overlapping
        const n = states.length;
        const tracker = overlapTracker.current;
        const zArr = zIndicesRef.current;
        let zChanged = false;
        // First pass: detect current overlaps
        for (let i = 0; i < n; i++) {
          for (let j = i + 1; j < n; j++) {
            const a = states[i], b = states[j];
            const overlapping = a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
            const key = `${i}-${j}`;
            if (overlapping) {
              tracker[key] = true;
            } else if (tracker[key]) {
              tracker[key] = false;
            }
          }
        }

        // Second pass: only randomize z for boxes that have NO current overlaps
        const pendingRandomize = new Set<number>();
        for (let i = 0; i < n; i++) {
          for (let j = i + 1; j < n; j++) {
            const key = `${i}-${j}`;
            // Just separated (tracker was cleared above)
            if (!tracker[key]) {
              // Check if key was true last frame — use a separate "was overlapping" tracker
            }
          }
        }

        // Simplified: track "just separated" pairs and check isolation
        const justSeparated: [number, number][] = [];
        for (let i = 0; i < n; i++) {
          for (let j = i + 1; j < n; j++) {
            const a = states[i], b = states[j];
            const overlapping = a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y;
            const key = `${i}-${j}`;
            if (!overlapping && tracker[key] === false) {
              // was overlapping, now separated — mark for potential z randomization
              justSeparated.push([i, j]);
            }
          }
        }

        // For each box in a just-separated pair, check it's not overlapping ANY other box
        const isOverlappingAny = (idx: number) => {
          for (let k = 0; k < n; k++) {
            if (k === idx) continue;
            const a = states[idx], b = states[k];
            if (a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y) return true;
          }
          return false;
        };

        for (const [i, j] of justSeparated) {
          if (!isOverlappingAny(i)) {
            zArr[i] = Math.floor(Math.random() * n * 10);
            zChanged = true;
          }
          if (!isOverlappingAny(j)) {
            zArr[j] = Math.floor(Math.random() * n * 10);
            zChanged = true;
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
              width: "min(440px, 55%)",
              backgroundColor: "hsl(60, 20%, 97%)",
              border: "2px solid #0000EE",
              boxShadow: "6px 6px 0px #0000EE",
              zIndex: zIndices[i] ?? (projects.length - i),
              transform: positions[i]
                ? `translate(${positions[i].x}px, ${positions[i].y}px)`
                : "translate(-9999px, -9999px)",
              willChange: "transform",
            }}
            onClick={() => handleSelect(project)}
          >
            <div className="p-4">
              <div className={`grid grid-cols-[140px_1fr] sm:grid-cols-[180px_1fr] gap-4`}>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full aspect-square bg-primary object-cover"
                />
                <div className="flex flex-col justify-start">
                  <h2 className="text-lg mb-0.5 no-underline" style={{ color: "#0000EE" }}>{project.title}</h2>
                  <p className="text-xs text-muted-foreground mb-1.5 italic">
                    {project.role} · {project.year}
                  </p>
                  <p className="text-sm leading-relaxed">{project.shortDescription}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail popup overlay */}
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
              {selectedProject.galleryColors.map((color, i) => (
                <img
                  key={i}
                  src="/placeholder.svg"
                  alt={`${selectedProject.title} gallery ${i + 1}`}
                  className="w-full aspect-[4/3] border border-foreground/15 object-cover"
                  style={{ backgroundColor: color }}
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
