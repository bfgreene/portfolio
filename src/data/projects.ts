export interface ProjectData {
  slug: string;
  title: string;
  role: string;
  year: string;
  color: string;
  shortDescription: string;
  longDescription: string[];
  galleryColors: string[];
}

export const projects: ProjectData[] = [
  {
    slug: "the-gilded-hour",
    title: "The Gilded Hour",
    role: "Production Designer",
    year: "2025",
    color: "hsl(35, 40%, 70%)",
    shortDescription:
      "Period drama set in 1920s New York. Full set construction of a five-room brownstone interior with over 200 period-accurate props.",
    longDescription: [
      "The Gilded Hour required building an entire 1920s brownstone interior from scratch on a soundstage in Brooklyn. The director wanted warmth and intimacy — amber lighting, worn leather, tobacco-stained wallpaper.",
      "I sourced over 200 period-accurate props from estate sales and antique dealers across the Northeast. Every book spine, every ashtray, every light fixture was vetted for accuracy.",
      "The color palette centered on warm ambers, deep burgundies, and aged brass. We developed custom wallpaper prints based on archived patterns from the New York Historical Society.",
    ],
    galleryColors: [
      "hsl(35, 45%, 65%)",
      "hsl(0, 35%, 40%)",
      "hsl(40, 30%, 75%)",
      "hsl(25, 50%, 55%)",
    ],
  },
  {
    slug: "neon-diner",
    title: "Neon Diner",
    role: "Art Director",
    year: "2024",
    color: "hsl(340, 50%, 55%)",
    shortDescription:
      "Short film requiring a complete retro diner build on a soundstage. Custom signage fabrication and practical lighting integration.",
    longDescription: [
      "Neon Diner was a 15-minute short about a late-night encounter between two strangers. The entire film takes place in a single location — a fictional roadside diner somewhere in the American Southwest.",
      "We built the diner from the ground up: vinyl booths, Formica countertops, a working jukebox, and three custom neon signs. The DP and I collaborated closely on integrating practical neon lighting into the set.",
      "Scenic painting was critical here. Every surface needed to look like it had 40 years of grease and wear. I developed a layered aging technique using glazes and dry-brushing.",
    ],
    galleryColors: [
      "hsl(340, 55%, 50%)",
      "hsl(200, 60%, 45%)",
      "hsl(50, 70%, 65%)",
      "hsl(340, 40%, 65%)",
    ],
  },
  {
    slug: "small-town-usa",
    title: "Small Town, USA",
    role: "Production Designer",
    year: "2024",
    color: "hsl(150, 25%, 60%)",
    shortDescription:
      "1:24 scale miniature of a fictional American main street for a mixed-media documentary. Model-making, weathering, and miniature lighting.",
    longDescription: [
      "This mixed-media documentary used miniatures to represent a vanishing version of small-town America. I designed and built a 1:24 scale model of a fictional main street — eight buildings, streetlights, signage, and landscaping.",
      "Each building was constructed from foam core, balsa wood, and found materials. Weathering was done with acrylic washes, chalks, and careful sanding. The goal was photorealism at macro distances.",
      "Miniature lighting rigs used grain-of-wheat bulbs and fiber optics. The director wanted the models to feel alive, so we wired each building individually and programmed subtle flicker patterns.",
    ],
    galleryColors: [
      "hsl(150, 20%, 55%)",
      "hsl(30, 35%, 65%)",
      "hsl(200, 15%, 70%)",
      "hsl(150, 30%, 50%)",
    ],
  },
  {
    slug: "canvas-and-curtain",
    title: "Canvas & Curtain",
    role: "Scenic Artist / Art Director",
    year: "2023",
    color: "hsl(260, 30%, 60%)",
    shortDescription:
      "Large-format scenic painting for a theatre-to-film adaptation. 30-foot painted backdrop and full art department management.",
    longDescription: [
      "Canvas & Curtain bridged theatre and film — a stage play adapted for the screen while keeping its theatrical roots visible. The director wanted painted backdrops instead of digital extensions.",
      "I painted a 30-foot canvas backdrop depicting a twilight cityscape. The technique combined traditional scenic painting methods with contemporary color theory to read well on camera.",
      "Managing the art department through a tight three-week prep was the other half of the job. Coordinating scenic painters, set dressers, and props buyers across two locations required careful scheduling and clear communication.",
    ],
    galleryColors: [
      "hsl(260, 35%, 55%)",
      "hsl(30, 40%, 70%)",
      "hsl(260, 20%, 75%)",
      "hsl(200, 25%, 60%)",
    ],
  },
  {
    slug: "rust-and-bloom",
    title: "Rust & Bloom",
    role: "Art Department Coordinator",
    year: "2022",
    color: "hsl(20, 50%, 55%)",
    shortDescription:
      "Independent feature film shot across three states. Managed logistics, sourced locations, and coordinated a 12-person art department.",
    longDescription: [
      "Rust & Bloom was a road movie that took us through rural Pennsylvania, West Virginia, and Ohio. Each location needed to feel distinct but connected — a single emotional throughline across diverse geography.",
      "I coordinated a 12-person art department across all three states, managing transport, local sourcing, and location agreements. We dressed over 20 locations in six weeks.",
      "The palette was dictated by the landscape — rust reds, harvest golds, weathered greens. We supplemented natural environments with careful set dressing: a specific curtain color here, a repainted mailbox there.",
    ],
    galleryColors: [
      "hsl(20, 55%, 50%)",
      "hsl(45, 60%, 65%)",
      "hsl(120, 15%, 55%)",
      "hsl(20, 40%, 65%)",
    ],
  },
];
