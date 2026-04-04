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
          <h1 className="text-3xl md:text-4xl mb-6">
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
          <h2 className="text-xl mb-4">Contact &amp; Links</h2>
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
          <h2 className="text-xl mb-4">C.V.</h2>
          <div className="border border-foreground/20">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-foreground/20 bg-secondary">
                  <th className="text-left py-2 px-3 font-bold">Year</th>
                  <th className="text-left py-2 px-3 font-bold">Project</th>
                  <th className="text-left py-2 px-3 font-bold hidden sm:table-cell">Role</th>
                  <th className="text-right py-2 px-3 font-bold">Type</th>
                </tr>
              </thead>
              <tbody>
                {cvEntries.map((entry, i) => (
                  <tr key={i} className={i < cvEntries.length - 1 ? "border-b border-foreground/20" : ""}>
                    <td className="py-2 px-3 text-muted-foreground">{entry.year}</td>
                    <td className="py-2 px-3 font-bold">{entry.title}</td>
                    <td className="py-2 px-3 text-muted-foreground hidden sm:table-cell">{entry.role}</td>
                    <td className="py-2 px-3 text-muted-foreground text-right">{entry.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
