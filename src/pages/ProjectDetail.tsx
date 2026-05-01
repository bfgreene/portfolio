import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

const isPlaceholder = (src?: string) =>
  !src || src.endsWith("placeholder.svg") || src.endsWith(".svg");

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

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

  const galleryPhotos = project.photos.slice(1).filter((p) => !isPlaceholder(p));

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
          <h1 className="text-3xl md:text-4xl mb-6">
            {project.title}
          </h1>

          {!isPlaceholder(project.image) && (
            <img
              src={project.image}
              alt={`${project.title} — hero`}
              className="w-full aspect-[16/9] mb-8 object-cover"
            />
          )}

          {(project.director || project.productionDesigner) && (
            <div className="text-xs text-muted-foreground mb-6 space-y-0.5">
              {project.director && <p>Director: {project.director}</p>}
              {project.productionDesigner && <p>Production Designer: {project.productionDesigner}</p>}
            </div>
          )}

          <div className="max-w-2xl space-y-4 mb-10">
            {project.longDescription.map((para, i) => (
              <p key={i} className="text-sm leading-relaxed">{para}</p>
            ))}
          </div>

          {project.slug === "mitski" && (
            <div className="mb-10 aspect-video w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/BPy1NIiKKW0"
                title="Mitski — I'll Change For You"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          {galleryPhotos.length > 0 && (
            <>
              <h2 className="text-xl mb-4">Gallery</h2>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {galleryPhotos.map((photo, i) => (
                  <img
                    key={i}
                    src={photo}
                    alt={`${project.title} — gallery image ${i + 2}`}
                    className="w-full aspect-[4/3] object-cover"
                  />
                ))}
              </div>
            </>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
