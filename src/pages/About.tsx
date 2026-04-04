import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cvEntries = [
  { year: "2025", title: "The Gilded Hour", role: "Production Designer", type: "Feature Film" },
  { year: "2024", title: "Neon Diner", role: "Art Director", type: "Short Film" },
  { year: "2024", title: "Small Town, USA", role: "Production Designer", type: "Documentary" },
  { year: "2023", title: "Canvas & Curtain", role: "Scenic Artist / Art Director", type: "Feature Film" },
  { year: "2023", title: "Reverie", role: "Set Decorator", type: "Music Video" },
  { year: "2022", title: "Rust & Bloom", role: "Art Dept. Coordinator", type: "Feature Film" },
  { year: "2022", title: "Glass Houses", role: "Art Director", type: "Short Film" },
  { year: "2021", title: "The Long Way Home", role: "Standby Art Director", type: "TV Series" },
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

      <main className="max-w-4xl mx-auto px-6">
        {/* Bio */}
        <section className="mb-12">
          <h1 className="text-3xl md:text-4xl mb-2" style={{ fontFamily: "Arial, sans-serif" }}>
            About
          </h1>
          <hr className="border-t-2 border-foreground mb-6" />
          <div className="max-w-2xl space-y-4 text-sm leading-relaxed">
            <p>
              Benjamin Greene is a production designer and art director working across
              film, television, and commercials. He handles everything from initial concept
              sketches to on-set dressing — building period interiors from scratch, painting
              30-foot backdrops, and hand-weathering more props than he can count.
            </p>
            <p>
              His approach is practical and resourceful. He works closely with directors
              and cinematographers to make sure the design serves the story, not the other
              way around. He's equally comfortable managing a department or getting his
              hands dirty in the workshop.
            </p>
            <p>
              When not on set, he can probably be found at a flea market, in a hardware
              store, or flipping through old architecture books.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <h2 className="text-xl mb-3" style={{ fontFamily: "Arial, sans-serif" }}>Contact & Links</h2>
          <hr className="border-t border-foreground/20 mb-4" />
          <ul className="space-y-1 text-sm" style={{ fontFamily: "Arial, sans-serif" }}>
            <li>
              Email:{" "}
              <a href="mailto:benjamin@example.com">benjamin@example.com</a>
            </li>
            <li>
              Instagram:{" "}
              <a href="https://instagram.com/benjamingreene" target="_blank" rel="noopener noreferrer">
                @benjamingreene
              </a>
            </li>
            <li>
              IMDb:{" "}
              <a href="https://imdb.com/name/nm0000000" target="_blank" rel="noopener noreferrer">
                Benjamin Greene on IMDb
              </a>
            </li>
          </ul>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-xl mb-3" style={{ fontFamily: "Arial, sans-serif" }}>Skills</h2>
          <hr className="border-t border-foreground/20 mb-4" />
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-1 text-sm">
            {skills.map((skill) => (
              <li key={skill} className="py-1 border-b border-foreground/10">
                {skill}
              </li>
            ))}
          </ul>
        </section>

        {/* CV */}
        <section className="mb-8">
          <h2 className="text-xl mb-3" style={{ fontFamily: "Arial, sans-serif" }}>CV — Selected Credits</h2>
          <hr className="border-t border-foreground/20 mb-2" />
          <div>
            {cvEntries.map((entry, i) => (
              <div
                key={i}
                className="grid grid-cols-[50px_1fr_auto] sm:grid-cols-[50px_1fr_1fr_auto] gap-3 py-2 border-b border-foreground/10 text-sm items-baseline"
              >
                <span className="text-muted-foreground" style={{ fontFamily: "Arial, sans-serif" }}>{entry.year}</span>
                <span className="font-bold" style={{ fontFamily: "Arial, sans-serif" }}>{entry.title}</span>
                <span className="hidden sm:block text-muted-foreground">{entry.role}</span>
                <span className="text-muted-foreground text-right" style={{ fontFamily: "Arial, sans-serif" }}>{entry.type}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
