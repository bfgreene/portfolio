import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-heading text-xl tracking-tight text-foreground hover:text-accent transition-colors">
          Your Name
        </Link>
        <nav className="flex gap-6 font-mono text-xs uppercase tracking-widest">
          <Link
            to="/"
            className={`transition-colors hover:text-accent ${
              location.pathname === "/" ? "text-accent" : "text-muted-foreground"
            }`}
          >
            Work
          </Link>
          <Link
            to="/about"
            className={`transition-colors hover:text-accent ${
              location.pathname === "/about" ? "text-accent" : "text-muted-foreground"
            }`}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
