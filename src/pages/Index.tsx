import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingProjects from "@/components/FloatingProjects";
import { X } from "lucide-react";

const miscPhotos = [
  { src: "/assets/misc/misc1.png", caption: "Floor plan sketches for a short film set build." },
  { src: "/assets/misc/misc2.png", caption: "Developing the palette for an upcoming period piece." },
  { src: "/assets/misc/misc3.png", caption: "Sourcing and aging props for a commercial shoot." },
  { src: "/assets/misc/misc4.png", caption: "Miniature tree fabrication, close-up." },
  { src: "/assets/misc/misc5.png", caption: "Fabric swatches for set dressing research." },
  { src: "/assets/misc/misc6.png", caption: "Workshop detail — scenic paint mixing station." },
  { src: "/assets/misc/misc7.png", caption: "On-set dressing for a music video shoot." },
  { src: "/assets/misc/misc8.png", caption: "Custom wallpaper printing process." },
  { src: "/assets/misc/misc9.png", caption: "Prop aging — distressed book spines." },
];

interface MiscItem {
  src: string;
  caption: string;
}

const Index = () => {
  const [selectedMisc, setSelectedMisc] = useState<MiscItem | null>(null);

  return (
    <div className="min-h-screen">
      <Header />

      <main className="max-w-4xl mx-auto px-6">
        {/* Intro */}
        <section className="mb-4">
          <h1 className="text-lg md:text-xl font-semibold text-muted-foreground uppercase tracking-wide mb-2">
            Select Work
          </h1>
        </section>

        {/* Floating Projects */}
        <section className="mb-16">
          <FloatingProjects />
        </section>

        {/* Misc */}
        <section className="mb-8">
          <h2 className="text-lg md:text-xl font-semibold text-muted-foreground uppercase tracking-wide mb-1">Miscellaneous</h2>
          <p className="text-sm text-muted-foreground mb-6 italic">
            Process, details, and other work.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {miscPhotos.map((item, i) => (
              <div key={i} className="cursor-pointer" onClick={() => setSelectedMisc(item)}>
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full aspect-square border border-foreground/15 bg-primary object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Misc photo popup */}
      {selectedMisc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={() => setSelectedMisc(null)}
        >
          <div
            className="relative max-w-lg w-[90vw] p-5"
            style={{ backgroundColor: "hsl(60, 20%, 97%)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end mb-3">
              <button
                onClick={() => setSelectedMisc(null)}
                className="p-1 hover:opacity-70"
                aria-label="Close"
              >
                <X className="h-5 w-5 text-foreground" />
              </button>
            </div>
            <img
              src={selectedMisc.src}
              alt={selectedMisc.caption}
              className="w-full aspect-square object-cover border border-foreground/15 mb-4"
            />
            <p className="text-sm text-muted-foreground">{selectedMisc.caption}</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Index;
