interface ProjectCardProps {
  title: string;
  role: string;
  year: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

const ProjectCard = ({ title, role, year, description, imageSrc, imageAlt, reverse }: ProjectCardProps) => {
  return (
    <article className={`grid md:grid-cols-2 gap-8 md:gap-12 items-start ${reverse ? "md:direction-rtl" : ""}`}>
      <div className={`overflow-hidden ${reverse ? "md:order-2" : ""}`}>
        <img
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
          width={800}
          height={1000}
          className="w-full h-auto object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
        />
      </div>
      <div className={`flex flex-col justify-center space-y-4 ${reverse ? "md:order-1" : ""}`}>
        <div className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
          {role} — {year}
        </div>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground leading-tight">{title}</h2>
        <p className="text-muted-foreground font-body text-sm leading-relaxed max-w-md">
          {description}
        </p>
      </div>
    </article>
  );
};

export default ProjectCard;
