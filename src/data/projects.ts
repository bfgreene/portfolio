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
    image: "/assets/toe/toe1.jpg",
    photos: [
      "/assets/toe/toe1.jpg",
      "/assets/toe/toe2.jpg",
      "/assets/toe/toe3.jpg",
      "/assets/toe/toe4.jpg",
      "/assets/toe/toe5.jpg",
      "/assets/toe/toe6.jpg",
      "/assets/toe/toe7.jpg",
    ],
    shortDescription:
      "Period drama requiring full set construction of a five-room interior with over 200 period-accurate props and custom scenic painting.",
    longDescription: [
      "Body-horror comedy.",
      "Beyond Art-Director duties, created a functioning custom video chat website for in-camera effects. Phone graphics, drawings, food styling as well.",
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
    image: "/assets/songofthewind/songofthewind1.jpg",
    photos: [
      "/assets/songofthewind/songofthewind1.jpg",
      "/assets/songofthewind/songofthewind2.jpg",
      "/assets/songofthewind/songofthewind3.jpg",
      "/assets/songofthewind/songofthewind4.jpg",
      "/assets/songofthewind/songofthewind5.jpg",
      "/assets/songofthewind/songofthewind6.jpg",
      "/assets/songofthewind/songofthewind7.jpg",
    ],
    shortDescription:
      "Short film requiring a complete retro set build on a soundstage. Custom signage fabrication and practical lighting integration.",
    longDescription: [
      "Period Drama.",
      "This project had a heavy construction aspect, we built a old stone fort inside of a country hut. We also made a hearth from a wood frame and stryrofoam. Many texturing and aging techniques utilized." ,
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
    image: "/assets/winloot/winloot1.jpg",
    photos: [
      "/assets/winloot/winloot1.jpg",
      "/assets/winloot/winloot2.jpg",
      "/assets/winloot/winloot3.jpg",
      "/assets/winloot/winloot4.jpg",
      "/assets/winloot/winloot5.jpg",
      "/assets/winloot/winloot6.jpg",
      "/assets/winloot/winloot7.jpg",
    ],
    shortDescription:
      "Commercial campaign with multiple set builds across three shooting days. Model-making, set dressing, and on-set art direction.",
    longDescription: [
      "Commercial",
      "Many sets shot on a tight schedule.",
    ],
    director: "TJ Nitti",
  },
  {
    slug: "mitski",
    title: "Mitski : I'll Change for You",
    role: "Prop Master / Set Dresser",
    year: "2025",
    color: "hsl(260, 30%, 60%)",
    image: "/assets/mitski/mitski1.jpg",
    photos: [
      "/assets/mitski/mitski1.jpg",
      "/assets/mitski/mitski2.jpg",
      "/assets/mitski/mitski3.jpg",
      "/assets/mitski/mitski4.jpg",
      "/assets/mitski/mitski5.jpg",
      "/assets/mitski/mitski6.jpg",
      "/assets/mitski/mitski7.jpg",
    ],
    shortDescription:
      "Music video with large-format scenic painting, a 30-foot painted backdrop, and full art department coordination.",
    longDescription: [
      "Music Video and other Media for Nothing's About to Happen to Me.",
      "I'll Change For You(link)",
      "Created esoteric drawings, food, and props.",
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
    image: "/assets/cognaitive/cognaitive1.jpg",
    photos: [
      "/assets/cognaitive/cognaitive1.jpg",
      "/assets/cognaitive/cognaitive2.jpg",
      "/assets/cognaitive/cognaitive3.jpg",
      "/assets/cognaitive/cognaitive4.jpg",
      "/assets/cognaitive/cognaitive5.jpg",
      "/assets/cognaitive/cognaitive6.jpg",
      "/assets/cognaitive/cognaitive7.jpg",
    ],
    shortDescription:
      "Independent feature film shot across multiple locations. Managed logistics, sourced locations, and coordinated a 12-person art department.",
    longDescription: [
      "AI Horror Comedy.",
      "Created technical Graphics and effects including an AI-taking-over-the-network sequence, character's screen contents, and managed the prop monitors and laptops.",
      "Helped with construction of break-through stunt wall to be easily kicked through. Other set dressing.",
    ],
    director: "Tommy Savas",
    productionDesigner: "Cheyenne Peerson",
  },
];
