import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

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
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-4xl mx-auto px-6">
        {/* Intro */}
        <section className="mb-12">
          <h1 className="text-3xl md:text-4xl mb-2" style={{ fontFamily: "Arial, sans-serif" }}>
            Selected Work
          </h1>
          <p className="text-muted-foreground text-sm" style={{ fontFamily: "Arial, sans-serif" }}>
            Production design, art direction, and art department work for film, television, and commercials.
          </p>
          <hr className="border-t-2 border-foreground mt-4" />
        </section>

        {/* Projects */}
        <section className="mb-16">
          {projects.map((project, i) => (
            <article key={project.slug} className={`grid md:grid-cols-[280px_1fr] gap-6 ${i > 0 ? "mt-10 pt-10 border-t border-foreground/20" : ""}`}>
              <Link to={`/project/${project.slug}`} className="block no-underline">
                <div
                  className="w-full aspect-[4/3] border-2 border-foreground"
                  style={{ backgroundColor: project.color }}
                  title={`${project.title} — placeholder image`}
                />
              </Link>
              <div>
                <p className="text-xs text-muted-foreground mb-1" style={{ fontFamily: "Arial, sans-serif" }}>
                  {project.role} — {project.year}
                </p>
                <h2 className="text-xl mb-2" style={{ fontFamily: "Arial, sans-serif" }}>
                  <Link to={`/project/${project.slug}`} className="text-foreground no-underline hover:text-primary">
                    {project.title}
                  </Link>
                </h2>
                <p className="text-sm leading-relaxed mb-3">{project.shortDescription}</p>
                <Link
                  to={`/project/${project.slug}`}
                  className="text-sm text-primary underline hover:text-accent"
                  style={{ fontFamily: "Arial, sans-serif" }}
                >
                  View project →
                </Link>
              </div>
            </article>
          ))}
        </section>

        {/* Misc */}
        <section className="mb-8">
          <h2 className="text-2xl mb-1" style={{ fontFamily: "Arial, sans-serif" }}>Bits &amp; Pieces</h2>
          <p className="text-sm text-muted-foreground mb-6" style={{ fontFamily: "Arial, sans-serif" }}>
            Process, details, and other work.
          </p>
          <hr className="border-t border-foreground/20 mb-6" />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {miscPhotos.map((item, i) => (
              <div key={i}>
                <div
                  className="w-full aspect-square border-2 border-foreground mb-2"
                  style={{ backgroundColor: item.color }}
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
