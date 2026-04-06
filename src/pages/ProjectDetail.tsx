import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="max-w-4xl mx-auto px-6 py-12">
          <p>Project not found.</p>
          <Link to="/" className="text-sm">← Back to work</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="max-w-4xl mx-auto px-6">
        <Link to="/" className="text-sm text-primary hover:text-accent">
          ← Back to selected work
        </Link>

        <section className="mt-6 mb-8">
          <p className="text-xs text-muted-foreground mb-1 italic">
            {project.role} · {project.year}
          </p>
          <h1 className="text-3xl md:text-4xl mb-6 text-black">
            {project.title}
          </h1>

          {/* Hero image */}
          <img
            src={project.image || "/placeholder.svg"}
            alt={`${project.title} — hero`}
            className="w-full aspect-[16/9] border border-foreground/15 mb-8 object-cover"
            style={{ backgroundColor: project.color }}
          />

          {/* Description */}
          <div className="max-w-2xl space-y-4 mb-10">
            {project.longDescription.map((para, i) => (
              <p key={i} className="text-sm leading-relaxed text-black">{para}</p>
            ))}
          </div>

          {/* Gallery */}
          <h2 className="text-xl mb-4">Gallery</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {project.galleryColors.map((color, i) => (
              <img
                key={i}
                src="/placeholder.svg"
                alt={`${project.title} — gallery image ${i + 1}`}
                className="w-full aspect-[4/3] border border-foreground/15 object-cover"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
