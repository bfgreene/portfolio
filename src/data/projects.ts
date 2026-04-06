export interface ProjectData {
  slug: string;
  title: string;
  role: string;
  year: string;
  color: string;
  image?: string;
  shortDescription: string;
  longDescription: string[];
  galleryColors: string[];
}

export const projects: ProjectData[] = [
  {
    slug: "toe",
    title: "TOE",
    role: "Art Director",
    year: "2024",
    color: "hsl(35, 40%, 70%)",
    image: "/assets/toe-main.png",
    shortDescription:
      "Body Horror-Comedy Short Film.",
    longDescription: [
      "Build functioning retro-style cam-chatting website for in-camera effects. Other phone graphics",
      "Food styling for dinner scene and charcuterie",
      "Strong intentional palette.",
    ],
    galleryColors: [
      "hsl(35, 45%, 65%)",
      "hsl(0, 35%, 40%)",
      "hsl(40, 30%, 75%)",
      "hsl(25, 50%, 55%)",
    ],
  },
  {
    slug: "song-of-the-wind",
    title: "Song of the Wind",
    role: "Art Director",
    year: "2024",
    color: "hsl(340, 50%, 55%)",
    image: "/assets/sotw-main.png",
    shortDescription:
      "Early 20th century period piece. Constuction, aging, fabrication of mythical machine",
    longDescription: [
      "Carefully made hut. Created hearth, internal stone fortress, and mythical machine",
      "We built the sets from the ground up: every surface needed to feel lived-in and authentic. The DP and I collaborated closely on integrating practical lighting into the set design.",
      "Scenic painting was critical here. Every surface needed to look like it had decades of wear. I developed a layered aging technique using glazes and dry-brushing.",
    ],
    galleryColors: [
      "hsl(340, 55%, 50%)",
      "hsl(200, 60%, 45%)",
      "hsl(50, 70%, 65%)",
      "hsl(340, 40%, 65%)",
    ],
  },
  {
    slug: "winloot",
    title: "Winloot",
    role: "Production Designer",
    year: "2024",
    color: "hsl(150, 25%, 60%)",
    image: "/assets/wl-main.png",
    shortDescription:
      "Commercial campaign with multiple sets",
    longDescription: [
      "Winloot .",
      "Each set was constructed to be modular and re-dressable, allowing us to create distinct looks within the same stage footprint.",
      "The art direction balanced bold, graphic compositions with practical construction. Every element was designed to pop on screen while maintaining a handmade quality.",
    ],
    galleryColors: [
      "hsl(150, 20%, 55%)",
      "hsl(30, 35%, 65%)",
      "hsl(200, 15%, 70%)",
      "hsl(150, 30%, 50%)",
    ],
  },
  {
    slug: "mitski",
    title: "Mitski",
    role: "Prop Master / Set Dresser",
    year: "2025",
    color: "hsl(260, 30%, 60%)",
    image: "/assets/Mitski-main.png",
    shortDescription:
      "Music Video and Album Rollout Media for I'll Change for You video and <i>Nothing's About to Happen to Me</i>",
    longDescription: [
      "Complex, layered visuals, with grey garden inspiration,
      "Created esoteric drawings and helped dress the sets",
      "Managed props on set",
    ],
    galleryColors: [
      "hsl(260, 35%, 55%)",
      "hsl(30, 40%, 70%)",
      "hsl(260, 20%, 75%)",
      "hsl(200, 25%, 60%)",
    ],
  },
  {
    slug: "cognaitive",
    title: "CognAItive",
    role: "Set Dresser / Graphics",
    year: "2024",
    color: "hsl(20, 50%, 55%)",
    image: "/assets/cog-main.png",
    shortDescription:
      "Independent feature film",
    longDescription: [
      "CognAItive was an ambitious indie feature that explored themes of technology and identity. Each location needed to feel distinct but connected — a single emotional throughline across diverse settings.",
      "Handled tech-wrangling and populated character screens with code and related work",
      "Set Dressed, made in-camera graphics and moving code sequences - taking over the network",
    ],
    galleryColors: [
      "hsl(20, 55%, 50%)",
      "hsl(45, 60%, 65%)",
      "hsl(120, 15%, 55%)",
      "hsl(20, 40%, 65%)",
    ],
  },
];
