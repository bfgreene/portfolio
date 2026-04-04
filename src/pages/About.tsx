import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cvEntries = [
  { year: "2025", title: "TOE", role: "Production Designer", type: "Feature Film" },
  { year: "2024", title: "Song of the Wind", role: "Art Director", type: "Short Film" },
  { year: "2024", title: "Winloot", role: "Production Designer", type: "Commercial" },
  { year: "2023", title: "Mitski", role: "Scenic Artist / Art Director", type: "Music Video" },
  { year: "2023", title: "Reverie", role: "Set Decorator", type: "Music Video" },
  { year: "2022", title: "CognAItive", role: "Art Dept. Coordinator", type: "Feature Film" },
  { year: "2022", title: "Glass Houses", role: "Art Director", type: "Short Film" },
  { year: "2021", title: "The Long Way Home", role: "Standby Art Director", type: "TV Series" },
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
          <h2 className="text-xl mb-4" style={{ fontFamily: "Arial, sans-serif" }}>C.V.</h2>
          <div className="border-2 border-foreground">
            <table className="w-full text-sm" style={{ fontFamily: "Arial, sans-serif" }}>
              <thead>
                <tr className="border-b-2 border-foreground bg-secondary">
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
