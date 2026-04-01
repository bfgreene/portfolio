import heroBg from "@/assets/hero-bg.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import MiscGallery from "@/components/MiscGallery";

const projects = [
  {
    title: "The Gilded Hour",
    role: "Production Designer",
    year: "2025",
    description:
      "Period drama set in 1920s New York. Oversaw full set construction of a five-room brownstone interior, sourced over 200 period-accurate props, and developed the film's warm amber and burgundy palette.",
    imageSrc: project1,
    imageAlt: "Mood board for The Gilded Hour",
  },
  {
    title: "Neon Diner",
    role: "Art Director",
    year: "2024",
    description:
      "Short film requiring a complete retro diner build on a soundstage. Managed scenic painting, custom signage fabrication, and coordinated with the DP on practical lighting integration.",
    imageSrc: project2,
    imageAlt: "Behind the scenes of Neon Diner set",
  },
  {
    title: "Small Town, USA",
    role: "Production Designer",
    year: "2024",
    description:
      "Built a 1:24 scale miniature of a fictional American main street for a mixed-media documentary. Handled model-making, weathering, and miniature lighting rigs.",
    imageSrc: project3,
    imageAlt: "Miniature city street model",
  },
  {
    title: "Canvas & Curtain",
    role: "Scenic Artist / Art Director",
    year: "2023",
    description:
      "Large-format scenic painting for a theatre-to-film adaptation. Created a 30-foot painted backdrop and managed the art department through a tight three-week prep schedule.",
    imageSrc: project4,
    imageAlt: "Scenic painting in progress on set",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img
          src={heroBg}
          alt="Production design workspace"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-6">
          <div className="max-w-5xl mx-auto w-full">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary-foreground/70 mb-3">
              Production Designer & Art Director
            </p>
            <h1 className="font-heading text-5xl md:text-7xl text-primary-foreground leading-[0.95]">
              Your Name
            </h1>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-24">
          <div>
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-1">Selected</p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground">Projects</h2>
          </div>
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} reverse={i % 2 !== 0} />
          ))}
        </div>
      </section>

      {/* Misc Gallery */}
      <div className="border-t border-border">
        <MiscGallery />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
