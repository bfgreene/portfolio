import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const links = [
    { to: "/", label: "Selected Work" },
    { to: "/about", label: "About" },
  ];

  return (
    <header className="py-6 px-6 mb-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-1 sm:gap-4 mb-4">
          <div>
            <Link
              to="/"
              className="text-primary no-underline text-3xl md:text-4xl font-bold hover:text-accent"
            >
              Benjamin Greene
            </Link>
            <p className="text-xs text-muted-foreground mt-0.5 italic">
              Production Designer &amp; Art Director
            </p>
          </div>
          <nav className="flex gap-4 text-sm">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`underline hover:text-accent ${
                  location.pathname === link.to
                    ? "text-accent font-bold"
                    : "text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="border-b-2 border-foreground" />
      </div>
    </header>
  );
};

export default Header;
