import misc1 from "@/assets/misc-1.jpg";
import misc2 from "@/assets/misc-2.jpg";
import misc3 from "@/assets/misc-3.jpg";

const items = [
  { src: misc1, alt: "Set design blueprint sketch", caption: "Floor plan sketches for a short film set build." },
  { src: misc2, alt: "Color swatches for set design", caption: "Developing the palette for an upcoming period piece." },
  { src: misc3, alt: "Props on workbench", caption: "Sourcing and aging props for a commercial shoot." },
];

const MiscGallery = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl mb-2 text-foreground">Bits & Pieces</h2>
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-12">
          Process, details, and other work
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="group">
              <div className="overflow-hidden mb-3">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="w-full h-auto object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <p className="text-xs text-muted-foreground font-body leading-relaxed">{item.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MiscGallery;
