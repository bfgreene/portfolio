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
  { year: "2024", title: "Greg's Going to Rehab", role: "Leadman", type: "Feature Film" },
  { year: "2024", title: "The Errand", role: "Set Dresser", type: "Short Film" },
  { year: "2024", title: "The Little Man", role: "Set Dresser", type: "Short Film" },
  { year: "2024", title: "Song of the Wind", role: "Art Director", type: "Short Film" },
  { year: "2024", title: "The Red Troth", role: "Set Decorator", type: "Short Film" },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="max-w-4xl mx-auto px-6">
        {/* Bio */}
        
        <section className="mb-12">
          {/*
          <h1 className="text-lg md:text-xl font-semibold text-muted-foreground uppercase tracking-wide mb-6">
            About
          </h1>
          */}
          <div className="max-w-2xl space-y-4 text-sm leading-relaxed">
            <p>
              PD and Art Director for film, music videos, web-series, and commercials. 
              Concept sketches, research, sourcing, budgeting, building, painting, 
              aging, decorating, dressing, props, graphics, and food styling.
            </p>
            <p>
              Background in the tech, culinary, and fine art worlds. I bring a creative 
              and analytical perspective to your project. Particularly interested in period
              pieces and heavy stylization.
            </p>
            <p>
              Will travel.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <h2 className="text-lg md:text-xl font-semibold text-muted-foreground uppercase tracking-wide mb-4">Contact &amp; Links</h2>
          <ul className="space-y-1 text-sm">
            <li>
              {" "}
              <a href="mailto:bfgreene@gmail.com">
                b f g r e e n e @ g m a i l . c o m
              </a>
            </li>
            <li>
              {" "}
              <a href="https://instagram.com/benverd_" target="_blank" rel="noopener noreferrer">
                @benverde_
              </a>
            </li>
            <li>
              {" "}
              <a href="https://imdb.com/name/nm0000000" target="_blank" rel="noopener noreferrer">
                Benjamin Greene (IV)
              </a>
            </li>
          </ul>
        </section>

        {/* CV */}
        <section className="mb-8">
          <h2 className="text-lg md:text-xl font-semibold text-muted-foreground uppercase tracking-wide mb-4">C.V.</h2>
          <ul className="space-y-1.5 text-sm list-none p-0">
            {[...cvEntries]
              .sort((a, b) => parseInt(b.year) - parseInt(a.year))
              .map((entry, i) => (
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
