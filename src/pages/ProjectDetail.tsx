import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
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
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-4xl mx-auto px-6">
        <Link to="/" className="text-sm text-primary hover:text-accent" style={{ fontFamily: "Arial, sans-serif" }}>
          ← Back to selected work
        </Link>

        <section className="mt-6 mb-8">
          <p className="text-xs text-muted-foreground mb-1" style={{ fontFamily: "Arial, sans-serif" }}>
            {project.role} — {project.year}
          </p>
          <h1 className="text-3xl md:text-4xl mb-4" style={{ fontFamily: "Arial, sans-serif" }}>
            {project.title}
          </h1>
          <hr className="border-t-2 border-foreground mb-6" />

          {/* Hero image */}
          <div
            className="w-full aspect-[16/9] border-2 border-foreground mb-8"
            style={{ backgroundColor: project.color }}
            title={`${project.title} — hero placeholder`}
          />

          {/* Description */}
          <div className="max-w-2xl space-y-4 mb-10">
            {project.longDescription.map((para, i) => (
              <p key={i} className="text-sm leading-relaxed">{para}</p>
            ))}
          </div>

          {/* Gallery */}
          <h2 className="text-xl mb-4" style={{ fontFamily: "Arial, sans-serif" }}>Gallery</h2>
          <hr className="border-t border-foreground/20 mb-6" />
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            {project.galleryColors.map((color, i) => (
              <div
                key={i}
                className="w-full aspect-[4/3] border-2 border-foreground"
                style={{ backgroundColor: color }}
                title={`${project.title} — gallery image ${i + 1}`}
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
