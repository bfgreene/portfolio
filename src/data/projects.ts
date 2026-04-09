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
      "TOE required building an entire period interior from scratch on a soundstage. The director wanted warmth and intimacy — amber lighting, worn leather, tobacco-stained wallpaper.",
      "I sourced over 200 period-accurate props from estate sales and antique dealers. Every book spine, every ashtray, every light fixture was vetted for accuracy.",
      "The color palette centered on warm ambers, deep burgundies, and aged brass. We developed custom wallpaper prints based on archived patterns.",
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
      "Song of the Wind was a visually driven short about memory and place. The entire film takes place across two carefully constructed environments.",
      "We built the sets from the ground up: every surface needed to feel lived-in and authentic. The DP and I collaborated closely on integrating practical lighting into the set design.",
      "Scenic painting was critical here. Every surface needed to look like it had decades of wear. I developed a layered aging technique using glazes and dry-brushing.",
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
      "Winloot was a multi-spot commercial campaign that required versatile, eye-catching environments built to camera on tight timelines.",
      "Each set was constructed to be modular and re-dressable, allowing us to create distinct looks within the same stage footprint.",
      "The art direction balanced bold, graphic compositions with practical construction. Every element was designed to pop on screen while maintaining a handmade quality.",
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
      "This Mitski music video required blending theatrical and cinematic visual languages. The director wanted painted backdrops instead of digital extensions.",
      "I painted a 30-foot canvas backdrop depicting a surreal dreamscape. The technique combined traditional scenic painting methods with contemporary color theory to read well on camera.",
      "Managing the art department through a tight prep was the other half of the job. Coordinating scenic painters, set dressers, and props buyers across two locations required careful scheduling.",
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
      "CognAItive was an ambitious indie feature that explored themes of technology and identity. Each location needed to feel distinct but connected — a single emotional throughline across diverse settings.",
      "I coordinated a 12-person art department across all locations, managing transport, local sourcing, and location agreements. We dressed over 20 locations in six weeks.",
      "The palette mixed cold, sterile tech environments with warm, lived-in personal spaces — creating visual tension that mirrored the film's themes.",
    ],
  },
];
