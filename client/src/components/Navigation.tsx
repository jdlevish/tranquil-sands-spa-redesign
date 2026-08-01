/**
 * Navigation — Tranquil Sands Scalp Spa
 * Design: Transparent over hero, transitions to warm ivory on scroll
 * Style: Minimal, thin, editorial — luxury hotel nav
 */
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";

const navLinks = [
  { label: "Rituals", href: "#rituals" },
  { label: "The Experience", href: "#experience" },
  { label: "Our Story", href: "#story" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "oklch(0.975 0.012 85 / 0.94)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled
            ? "1px solid oklch(0.82 0.04 70 / 0.4)"
            : "1px solid transparent",
        }}
      >
        <div className="container">
          <nav className="flex items-center justify-between py-5">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-3 no-underline"
            >
              <img
                src="/manus-storage/logo_5725a325.png"
                alt="Tranquil Sands"
                className="w-10 h-10 object-contain"
              />
              <div>
                <div
                  className="font-display leading-none"
                  style={{
                    fontSize: "1.15rem",
                    letterSpacing: "0.06em",
                    color: scrolled
                      ? "oklch(0.28 0.03 55)"
                      : "oklch(0.975 0.012 85)",
                    transition: "color 500ms ease",
                    fontWeight: 400,
                  }}
                >
                  Tranquil Sands
                </div>
                <div
                  className="label-caps"
                  style={{
                    fontSize: "0.55rem",
                    letterSpacing: "0.22em",
                    color: scrolled
                      ? "oklch(0.55 0.035 65)"
                      : "oklch(0.975 0.012 85 / 0.7)",
                    transition: "color 500ms ease",
                    marginTop: "1px",
                  }}
                >
                  Scalp Spa · Palm Desert
                </div>
              </div>
            </a>

            {/* Desktop nav links */}
            <ul className="hidden md:flex items-center gap-10 list-none m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="label-caps border-none bg-transparent p-0 transition-opacity duration-200 hover:opacity-60"
                    style={{
                      color: scrolled
                        ? "oklch(0.45 0.03 65)"
                        : "oklch(0.975 0.012 85 / 0.85)",
                      transition: "color 500ms ease, opacity 200ms ease",
                      fontSize: "0.65rem",
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => handleNavClick("#booking")}
                className="btn-luxury"
                style={{
                  borderColor: scrolled
                    ? "oklch(0.28 0.03 55 / 0.5)"
                    : "oklch(0.975 0.012 85 / 0.6)",
                  color: scrolled
                    ? "oklch(0.28 0.03 55)"
                    : "oklch(0.975 0.012 85)",
                  fontSize: "0.62rem",
                  padding: "0.6rem 1.5rem",
                }}
              >
                Reserve Your Ritual
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="block transition-all duration-300"
                  style={{
                    width: i === 1 ? "1.25rem" : "1.5rem",
                    height: "1px",
                    background: scrolled
                      ? "oklch(0.28 0.03 55)"
                      : "oklch(0.975 0.012 85)",
                    transform:
                      menuOpen && i === 0
                        ? "translateY(8px) rotate(45deg)"
                        : menuOpen && i === 2
                        ? "translateY(-8px) rotate(-45deg)"
                        : menuOpen && i === 1
                        ? "scaleX(0)"
                        : "none",
                  }}
                />
              ))}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className="fixed inset-0 z-40 flex flex-col justify-center items-center transition-all duration-500"
        style={{
          background: "oklch(0.975 0.012 85 / 0.98)",
          backdropFilter: "blur(20px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transform: menuOpen ? "none" : "translateY(-8px)",
        }}
      >
        <ul className="list-none m-0 p-0 flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <li key={link.label}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="font-display border-none bg-transparent p-0 transition-opacity duration-200 hover:opacity-50"
                style={{
                  fontSize: "2.5rem",
                  color: "oklch(0.28 0.03 55)",
                  fontWeight: 300,
                  letterSpacing: "0.04em",
                  transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
                }}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="mt-4">
            <button
              onClick={() => handleNavClick("#booking")}
              className="btn-luxury"
            >
              Reserve Your Ritual
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
