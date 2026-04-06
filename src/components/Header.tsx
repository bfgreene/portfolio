import { Link, useLocation } from "react-router-dom";
import { useState, useCallback } from "react";

const BOLD_COLORS = [
  "#FF0000", "#FF4500", "#FF6347", "#DC143C",
  "#FF1493", "#FF00FF", "#8B008B", "#9400D3",
  "#7B68EE", "#4169E1", "#00BFFF", "#00CED1",
  "#008080", "#00FA9A", "#32CD32", "#228B22",
  "#FFD700", "#FFA500", "#FF8C00", "#E91E63",
  "#9C27B0", "#673AB7", "#3F51B5", "#009688",
  "#795548", "#F44336", "#CDDC39", "#00BCD4",
];

const Header = () => {
  const location = useLocation();
  const [nameColor, setNameColor] = useState<string | null>(null);

  const handleMouseEnter = useCallback(() => {
    const randomColor = BOLD_COLORS[Math.floor(Math.random() * BOLD_COLORS.length)];
    setNameColor(randomColor);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setNameColor(null);
  }, []);

  const links = [
    { to: "/", label: "Select Work" },
    { to: "/about", label: "About" },
  ];

  return (
    <header className="py-6 mb-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-1 sm:gap-4 mb-4">
          <div>
            <Link
              to="/"
              className="no-underline text-2xl md:text-3xl font-semibold transition-colors duration-150"
              style={{ color: nameColor || "hsl(240, 100%, 50%)", fontFamily: "'Archivo', sans-serif" }}
              style={{ color: nameColor || "hsl(240, 100%, 50%)" }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Benjamin Greene
            </Link>
            <p className="text-xs text-muted-foreground mt-0.5 italic">
              Production Designer &amp; Art Director
            </p>
            <p className="text-xs text-muted-foreground italic">
              Los Angeles, CA
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
