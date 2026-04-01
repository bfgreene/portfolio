const Footer = () => (
  <footer className="border-t border-border py-8 px-6">
    <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} Your Name
      </p>
      <p className="font-mono text-xs text-muted-foreground">
        Production Designer / Art Director
      </p>
    </div>
  </footer>
);

export default Footer;
