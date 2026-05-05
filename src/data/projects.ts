export interface ProjectData {
  slug: string;
  title: string;
  role: string;
  year: string;
  color: string;
  image: string;
  photos: string[];
  shortDescription: string;
  longDescription: string[];
  director?: string;
  productionDesigner?: string;
}

export const projects: ProjectData[] = [
  {
    slug: "toe",
    title: "TOE",
    role: "Art Director",
    year: "2024",
    color: "hsl(35, 40%, 70%)",
    image: "/assets/toe/toe1.png",
    photos: [
      "/assets/toe/toe1.png",
      "/assets/toe/toe2.png",
      "/assets/toe/toe3.png",
      "/assets/toe/toe4.png",
      "/assets/toe/toe5.png",
      "/assets/toe/toe6.png",
      "/assets/toe/toe7.png",
    ],
    shortDescription:
      "Period drama requiring full set construction of a five-room interior with over 200 period-accurate props and custom scenic painting.",
    longDescription: [
      "Body-horror comedy",
      "Created functioning custom video chat website for in-camera effects. Phone graphics, drawings, food styling.",
    ],
    director: "Elly Howard",
    productionDesigner: "Brian Spadafora",
  },
  {
    slug: "song-of-the-wind",
    title: "Song of the Wind",
    role: "Art Director",
    year: "2024",
    color: "hsl(340, 50%, 55%)",
    image: "/assets/songofthewind/songofthewind1.png",
    photos: [
      "/assets/songofthewind/songofthewind1.png",
      "/assets/songofthewind/songofthewind2.png",
      "/assets/songofthewind/songofthewind3.png",
      "/assets/songofthewind/songofthewind4.png",
      "/assets/songofthewind/songofthewind5.png",
      "/assets/songofthewind/songofthewind6.png",
      "/assets/songofthewind/songofthewind7.png",
    ],
    shortDescription:
      "Short film requiring a complete retro set build on a soundstage. Custom signage fabrication and practical lighting integration.",
    longDescription: [
      "Period Drama",
      "Heavy Construction aspect, built a old stone fort inside of a country hut. Built hearth from wood frame and stryrofoam hearth. Texturing and aging." ,
      "Conceptualization and construction of a mythical machine that makes music from the wind.",
      "Managed many hands in the Art Department on tight schedule.",
    ],
    director: "Timofei Romanov",
    productionDesigner: "Denis Budanoff",
  },
  {
    slug: "winloot",
    title: "Winloot",
    role: "Production Designer",
    year: "2024",
    color: "hsl(150, 25%, 60%)",
    image: "/assets/winloot/winloot1.png",
    photos: [
      "/assets/winloot/winloot1.png",
      "/assets/winloot/winloot2.png",
      "/assets/winloot/winloot3.png",
      "/assets/winloot/winloot4.png",
      "/assets/winloot/winloot5.png",
      "/assets/winloot/winloot6.png",
      "/assets/winloot/winloot7.png",
    ],
    shortDescription:
      "Commercial campaign with multiple set builds across three shooting days. Model-making, set dressing, and on-set art direction.",
    longDescription: [
      "Commercial",
      "Several Sets for one-day shoot.",
    ],
    director: "TJ Nitti",
  },
  {
    slug: "mitski",
    title: "Mitski",
    role: "Prop Master / Set Dresser",
    year: "2025",
    color: "hsl(260, 30%, 60%)",
    image: "/assets/mitski/mitski1.png",
    photos: [
      "/assets/mitski/mitski1.png",
      "/assets/mitski/mitski2.png",
      "/assets/mitski/mitski3.png",
      "/assets/mitski/mitski4.png",
      "/assets/mitski/mitski5.png",
      "/assets/mitski/mitski6.png",
      "/assets/mitski/mitski7.png",
    ],
    shortDescription:
      "Music video with large-format scenic painting, a 30-foot painted backdrop, and full art department coordination.",
    longDescription: [
      "Music Video and Album Media",
      "I'll Change For You(link)",
      "Created esoteric drawings, food, props.",
      "Helped set dress this mess."
    ],
    director: "Lexie Alley",
    productionDesigner: "Brian Spadafora",
  },
  {
    slug: "cognaitive",
    title: "CognAItive",
    role: "Set Dresser / Graphics",
    year: "2024",
    color: "hsl(20, 50%, 55%)",
    image: "/assets/cognaitive/cognaitive1.png",
    photos: [
      "/assets/cognaitive/cognaitive1.png",
      "/assets/cognaitive/cognaitive2.png",
      "/assets/cognaitive/cognaitive3.png",
      "/assets/cognaitive/cognaitive4.png",
      "/assets/cognaitive/cognaitive5.png",
      "/assets/cognaitive/cognaitive6.png",
      "/assets/cognaitive/cognaitive7.png",
    ],
    shortDescription:
      "Independent feature film shot across multiple locations. Managed logistics, sourced locations, and coordinated a 12-person art department.",
    longDescription: [
      "AI Horror Comedy",
      "Technical Graphics and effects. &quot;AI taking over the network&quot; sequence, coding screens, managed monitors and laptops.",
      "Construction of break-through wall to be easily kicked through. Other set dressing.",
    ],
    director: "Tommy Savas",
    productionDesigner: "Cheyenne Peerson",
  },
];
