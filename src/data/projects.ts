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
      "/assets/toe/toe2.svg",
      "/assets/toe/toe3.svg",
      "/assets/toe/toe4.svg",
      "/assets/toe/toe5.svg",
      "/assets/toe/toe6.svg",
      "/assets/toe/toe7.svg",
    ],
    shortDescription:
      "Period drama requiring full set construction of a five-room interior with over 200 period-accurate props and custom scenic painting.",
    longDescription: [
      "(Light) Body-Horror Comedy. Bright sparkling",
      "Made functioning chat website for in-camera effects.",
      "Made graphics for all phone images",
    ],
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
      "/assets/songofthewind/songofthewind2.svg",
      "/assets/songofthewind/songofthewind3.svg",
      "/assets/songofthewind/songofthewind4.svg",
      "/assets/songofthewind/songofthewind5.svg",
      "/assets/songofthewind/songofthewind6.svg",
      "/assets/songofthewind/songofthewind7.svg",
    ],
    shortDescription:
      "Short film requiring a complete retro set build on a soundstage. Custom signage fabrication and practical lighting integration.",
    longDescription: [
      "Period Drama",
      "Heavy Construction component, buidilng a old stone fort inside of a hut. And hearth. Aging" ,
      "Conceptualization and construction of a mythical machine that reads the wind",
      "Managed many hands in the Art Department on tight schedule",
    ],
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
      "/assets/winloot/winloot2.svg",
      "/assets/winloot/winloot3.svg",
      "/assets/winloot/winloot4.svg",
      "/assets/winloot/winloot5.svg",
      "/assets/winloot/winloot6.svg",
      "/assets/winloot/winloot7.svg",
    ],
    shortDescription:
      "Commercial campaign with multiple set builds across three shooting days. Model-making, set dressing, and on-set art direction.",
    longDescription: [
      "Commercial",
      "Several Sets for one-day shoot",
    ],
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
      "/assets/mitski/mitski2.svg",
      "/assets/mitski/mitski3.svg",
      "/assets/mitski/mitski4.svg",
      "/assets/mitski/mitski5.svg",
      "/assets/mitski/mitski6.svg",
      "/assets/mitski/mitski7.svg",
    ],
    shortDescription:
      "Music video with large-format scenic painting, a 30-foot painted backdrop, and full art department coordination.",
    longDescription: [
      "Music Video and Album Media",
      "I'll Change For You(link)",
      "Grey gardens inspired, american victorian hoarding",
      "Created esoteric drawings, set dressing, food, props",
    ],
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
      "/assets/cognaitive/cognaitive2.svg",
      "/assets/cognaitive/cognaitive3.svg",
      "/assets/cognaitive/cognaitive4.svg",
      "/assets/cognaitive/cognaitive5.svg",
      "/assets/cognaitive/cognaitive6.svg",
      "/assets/cognaitive/cognaitive7.svg",
    ],
    shortDescription:
      "Independent feature film shot across multiple locations. Managed logistics, sourced locations, and coordinated a 12-person art department.",
    longDescription: [
      "AI Horror",
      "Technical Graphics and effects. AI taking over the computer sequence, coding screens, managing monitors and laptops",
      "Construction of break away wall to be easly kicked through",
    ],
  },
];
