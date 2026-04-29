import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingProjects from "@/components/FloatingProjects";
import { X } from "lucide-react";

const miscPhotos = [
  { src: "/assets/misc/misc1.png", caption: "Food styling (Liberty Mutual x Pinterest)" },
  { src: "/assets/misc/misc2.png", caption: "Construction of break-through drywall (CognAItive)" },
  { src: "/assets/misc/misc3.png", caption: "Scoring of drywall for easy break-through (CognAItive)" },
  { src: "/assets/misc/misc4.png", caption: "Impromtu old-west sign painting (Of Lambs and Wolves)" },
  { src: "/assets/misc/misc5.png", caption: "Fabrication of prop marijuana (Greg's Going to Rehab)" },
  { src: "/assets/misc/misc6.png", caption: "&quot;Mystical Machine&quot; inside &quot;stone wall&quot;. Textured concrete over wood flats. (Song of the Wind)" },
  { src: "/assets/misc/misc7.png", caption: "Pagan altar from surrounding dessert materials (The Red Troth)" },
  { src: "/assets/misc/misc8.png", caption: "Photoshop graphics for JW literature (Her Choice)" },
  { src: "/assets/misc/misc9.png", caption: "Photoshop graphics for JW literature II (Her Choice)" },
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
        {/* 
        <section className="mb-4">
          <h1 className="text-lg md:text-xl font-semibold text-muted-foreground uppercase tracking-wide mb-2">
            Selected Work
          </h1>
        </section>
        */}
        {/* Floating Projects */}
        <section className="mb-16">
          <FloatingProjects />
        </section>

        {/* Misc */}
        <section className="mb-8">
          <h2 className="text-lg md:text-xl font-semibold text-muted-foreground tracking-wide mb-1">misc.</h2>
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
