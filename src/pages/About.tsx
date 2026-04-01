import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cvEntries = [
  { year: "2025", title: "The Gilded Hour", role: "Production Designer", type: "Feature Film" },
  { year: "2024", title: "Neon Diner", role: "Art Director", type: "Short Film" },
  { year: "2024", title: "Small Town, USA", role: "Production Designer", type: "Documentary" },
  { year: "2023", title: "Canvas & Curtain", role: "Scenic Artist / Art Director", type: "Feature Film" },
  { year: "2023", title: "Reverie", role: "Set Decorator", type: "Music Video" },
  { year: "2022", title: "Glass Houses", role: "Art Director", type: "Short Film" },
  { year: "2022", title: "The Long Way Home", role: "Standby Art Director", type: "TV Series" },
  { year: "2021", title: "Rust & Bloom", role: "Art Department Assistant", type: "Feature Film" },
];

const skills = [
  "Set Design & Construction",
  "Scenic Painting",
  "Model Making",
  "Technical Drafting (SketchUp, AutoCAD)",
  "Props Sourcing & Fabrication",
  "Budget Management",
  "Colour & Material Research",
  "On-Set Art Direction",
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-5xl mx-auto px-6 py-20">
        {/* Bio */}
        <div className="grid md:grid-cols-3 gap-12 mb-24">
          <div className="md:col-span-1">
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-1">About</p>
            <h1 className="font-heading text-4xl md:text-5xl text-foreground">Hello.</h1>
          </div>
          <div className="md:col-span-2 space-y-5 text-muted-foreground font-body text-sm leading-relaxed">
            <p>
              I'm a production designer and art director based in [Your City]. I work across 
              film, television, and commercials — handling everything from initial concept 
              sketches to on-set dressing. I've built period interiors from scratch, painted 
              30-foot backdrops, and hand-weathered more props than I can count.
            </p>
            <p>
              My approach leans practical and resourceful. I like working closely with directors 
              and DPs to make sure the design serves the story, not the other way around. I'm 
              equally comfortable managing a department or getting my hands dirty in the workshop.
            </p>
            <p>
              When I'm not on set, you can probably find me at a flea market, in a hardware store, 
              or flipping through old architecture books.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="grid md:grid-cols-3 gap-12 mb-24">
          <div className="md:col-span-1">
            <h2 className="font-heading text-2xl text-foreground">Skills</h2>
          </div>
          <div className="md:col-span-2">
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
              {skills.map((skill) => (
                <li key={skill} className="font-mono text-xs text-muted-foreground py-1 border-b border-border">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CV */}
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-1">
            <h2 className="font-heading text-2xl text-foreground">CV</h2>
            <p className="font-mono text-xs text-muted-foreground mt-1">Selected credits</p>
          </div>
          <div className="md:col-span-2">
            <div className="border-t border-border">
              {cvEntries.map((entry, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[60px_1fr_auto] sm:grid-cols-[60px_1fr_1fr_auto] gap-4 py-3 border-b border-border items-baseline"
                >
                  <span className="font-mono text-xs text-muted-foreground">{entry.year}</span>
                  <span className="font-body text-sm text-foreground font-medium">{entry.title}</span>
                  <span className="hidden sm:block font-mono text-xs text-muted-foreground">{entry.role}</span>
                  <span className="font-mono text-xs text-muted-foreground text-right">{entry.type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-24 pt-12 border-t border-border text-center">
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2">Get in touch</p>
          <a
            href="mailto:your@email.com"
            className="font-heading text-2xl text-foreground hover:text-accent transition-colors"
          >
            your@email.com
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
