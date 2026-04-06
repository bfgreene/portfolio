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
    <div className="min-h-screen">
      <Header />

      <main className="max-w-4xl mx-auto px-6">
        {/* Intro */}
        <section className="mb-4">
          <h1 className="text-2xl md:text-3xl mb-2">
            Selected Work
          </h1>
        </section>

        {/* Projects */}
        <section className="mb-16">
        {projects.map((project, i) => (
            <article
              key={project.slug}
              className={`border-2 border-foreground p-5 ${i > 0 ? "mt-6" : ""}`}
              style={{ backgroundColor: "hsl(60, 20%, 97%)" }}
            >
              <div className="grid md:grid-cols-[260px_1fr] gap-5">
                <Link to={`/project/${project.slug}`} className="block no-underline">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} — placeholder image`}
                    className="w-full aspect-[4/3] border border-foreground/15 bg-primary object-cover"
                  />
                </Link>
                <div className="flex flex-col justify-start">
                  <h2 className="text-xl mb-1">
                    <Link to={`/project/${project.slug}`} className="text-black no-underline hover:text-primary">
                      {project.title}
                    </Link>
                  </h2>
                  <p className="text-xs text-muted-foreground mb-2 italic">
                    {project.role} · {project.year}
                  </p>
                  <p className="text-sm leading-relaxed mb-3 text-black">{project.shortDescription}</p>
                  <Link
                    to={`/project/${project.slug}`}
                    className="text-sm text-primary underline hover:text-accent"
                  >
                    View project →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Misc */}
        <section className="mb-8">
          <h2 className="text-2xl md:text-3xl mb-1">Misc.</h2>
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
