import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
  ];

  return (
    <header className="border-b-2 border-foreground py-4 px-6 mb-8">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <Link
          to="/"
          className="text-foreground no-underline text-xl font-bold"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          Benjamin Greene
        </Link>
        <nav className="flex gap-4 text-sm" style={{ fontFamily: "Arial, sans-serif" }}>
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
    </header>
  );
};

export default Header;
