import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cvEntries = [
  { year: "2024", title: "TOE", role: "Art Director", type: "Short Film" },
  { year: "2024", title: "Song of the Wind", role: "Art Director", type: "Short Film" },
  { year: "2024", title: "Winloot", role: "Production Designer", type: "Commercial" },
  { year: "2025", title: "Mitski", role: "Prop Master / Set Dresser", type: "Music Video" },
  { year: "2025", title: "Beneath the Calm", role: "Prop Master", type: "Short Film" },
  { year: "2024", title: "CognAItive", role: "Set Dresser / Graphics", type: "Feature Film" },
  { year: "2026", title: "Liberty Mutual x Pinterest", role: "Art Director", type: "Commercial" },
  { year: "2025", title: "Thank You for Coming", role: "Production Designer", type: "Short Film" },
  { year: "2025", title: "Cocomelon: The Melon Patch", role: "Art Director", type: "Web Series" },
  { year: "2024", title: "Haim", role: "Art Director", type: "Short Film" },
  { year: "2025", title: "Of Lambs and Wolves", role: "Art Director", type: "Short Film" },
  { year: "2024", title: "[Terminate]", role: "Production Designer", type: "Short Film" },
  { year: "2024", title: "Tender", role: "Graphics", type: "Short Film" },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="max-w-4xl mx-auto px-6">
        {/* Bio */}
        <section className="mb-12">
          <h1 className="text-lg md:text-xl font-semibold text-muted-foreground uppercase tracking-wide mb-6">
            About
          </h1>
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
          <h2 className="text-lg md:text-xl font-semibold text-muted-foreground uppercase tracking-wide mb-4">Contact &amp; Links</h2>
          <ul className="space-y-1 text-sm">
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

        {/* CV */}
        <section className="mb-8">
          <h2 className="text-lg md:text-xl font-semibold text-muted-foreground uppercase tracking-wide mb-4">C.V.</h2>
          <ul className="space-y-1.5 text-sm list-none p-0">
            {cvEntries.map((entry, i) => (
              <li key={i}>
                <span className="text-muted-foreground">{entry.year}</span>
                {" — "}
                <span className="font-bold">{entry.title}</span>
                {" · "}
                <span className="italic">{entry.role}</span>
                {" · "}
                <span className="text-muted-foreground">{entry.type}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
