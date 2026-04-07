import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingProjects from "@/components/FloatingProjects";

const miscPhotos = [
  { color: "hsl(45, 30%, 75%)", caption: "Floor plan sketches for a short film set build." },
  { color: "hsl(200, 20%, 65%)", caption: "Developing the palette for an upcoming period piece." },
  { color: "hsl(0, 15%, 70%)", caption: "Sourcing and aging props for a commercial shoot." },
  { color: "hsl(120, 15%, 65%)", caption: "Miniature tree fabrication, close-up." },
  { color: "hsl(280, 15%, 70%)", caption: "Fabric swatches for set dressing research." },
  { color: "hsl(30, 25%, 68%)", caption: "Workshop detail — scenic paint mixing station." },
];

const Index = () => {
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
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {miscPhotos.map((item, i) => (
              <div key={i}>
                <img
                  src="/placeholder.svg"
                  alt={item.caption}
                  className="w-full aspect-square border border-foreground/15 bg-primary object-cover mb-2"
                />
                <p className="text-xs text-muted-foreground">{item.caption}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
