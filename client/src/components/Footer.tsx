/**
 * Footer — Tranquil Sands Scalp Spa
 * Design: Minimal, warm espresso background, editorial spacing
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "oklch(0.28 0.03 55)",
        color: "oklch(0.82 0.04 70)",
        padding: "5rem 0 3rem",
      }}
    >
      <div className="container">
        {/* Brand arc motif — thin travertine gesture */}
        <div style={{ marginBottom: "4rem", display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <img
            src="/manus-storage/tranquil_sands_logo_v2_1dc305bb.png"
            alt="Tranquil Sands"
            style={{ width: "2.5rem", height: "2.5rem", objectFit: "contain", opacity: 0.7 }}
          />
          <div style={{ height: "1px", flex: 1, background: "oklch(0.82 0.04 70 / 0.2)" }} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 pb-12"
          style={{ borderBottom: "1px solid oklch(0.82 0.04 70 / 0.2)" }}
        >
          {/* Brand */}
          <div>
            <div
              className="font-display mb-3"
              style={{
                fontSize: "1.5rem",
                letterSpacing: "0.06em",
                color: "oklch(0.955 0.018 80)",
                fontWeight: 300,
              }}
            >
              Tranquil Sands
            </div>
            <div
              className="label-caps mb-5"
              style={{ color: "oklch(0.65 0.04 65)", fontSize: "0.6rem" }}
            >
              Scalp Spa · Palm Desert, California
            </div>
            <p
              style={{
                fontSize: "0.85rem",
                lineHeight: 1.8,
                color: "oklch(0.65 0.04 65)",
                maxWidth: "22ch",
                fontWeight: 300,
              }}
            >
              Where the desert teaches you to be still.
            </p>
            <a
              href="https://www.instagram.com/tranquilsands.scalpspa"
              target="_blank"
              rel="noopener noreferrer"
              className="label-caps"
              style={{
                display: "inline-block",
                marginTop: "1.5rem",
                fontSize: "0.6rem",
                color: "oklch(0.65 0.04 65)",
                textDecoration: "none",
                letterSpacing: "0.12em",
                transition: "opacity 200ms ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              @tranquilsands.scalpspa
            </a>
          </div>

          {/* Navigation */}
          <div>
            <div
              className="label-caps mb-6"
              style={{ color: "oklch(0.55 0.035 65)", fontSize: "0.6rem" }}
            >
              Explore
            </div>
            <ul className="list-none m-0 p-0 flex flex-col gap-3">
              {["Rituals", "The Experience", "Our Story", "Reserve"].map((item) => (
                <li key={item}>
                  <button
                    className="bg-transparent border-none p-0 transition-opacity duration-200 hover:opacity-60"
                    style={{
                      fontSize: "0.85rem",
                      color: "oklch(0.75 0.03 70)",
                      fontWeight: 300,
                      letterSpacing: "0.02em",
                    }}
                    onClick={() => {
                      const id = item.toLowerCase().replace(/\s+/g, "-").replace("reserve", "booking").replace("the-experience", "experience").replace("our-story", "story");
                      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div
              className="label-caps mb-6"
              style={{ color: "oklch(0.55 0.035 65)", fontSize: "0.6rem" }}
            >
              Visit
            </div>
            <div className="flex flex-col gap-3">
              <p style={{ fontSize: "0.85rem", color: "oklch(0.75 0.03 70)", fontWeight: 300, lineHeight: 1.7, margin: 0 }}>
                73640 El Paseo, Suite 5<br />
                Palm Desert, CA 92260
              </p>
              <a
                href="tel:+17608488217"
                style={{ fontSize: "0.85rem", color: "oklch(0.75 0.03 70)", fontWeight: 300, textDecoration: "none" }}
                className="hover:opacity-60 transition-opacity duration-200"
              >
                (760) 848-8217
              </a>
              <a
                href="mailto:tranquilsandsscalpspa@gmail.com"
                style={{ fontSize: "0.85rem", color: "oklch(0.75 0.03 70)", fontWeight: 300, textDecoration: "none" }}
                className="hover:opacity-60 transition-opacity duration-200"
              >
                tranquilsandsscalpspa@gmail.com
              </a>
              <a
                href="https://maps.app.goo.gl/21K9CmwcuYi2NAmS7"
                target="_blank"
                rel="noopener noreferrer"
                className="label-caps hover:opacity-60 transition-opacity duration-200"
                style={{ fontSize: "0.6rem", color: "oklch(0.55 0.035 65)", textDecoration: "none", letterSpacing: "0.1em" }}
              >
                Get Directions →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p
            style={{
              fontSize: "0.7rem",
              color: "oklch(0.45 0.025 65)",
              margin: 0,
              letterSpacing: "0.04em",
            }}
          >
            © {year} Tranquil Sands Scalp Spa. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms"].map((item) => (
              <button
                key={item}
                className="bg-transparent border-none p-0 transition-opacity duration-200 hover:opacity-60"
                style={{
                  fontSize: "0.7rem",
                  color: "oklch(0.45 0.025 65)",
                  letterSpacing: "0.04em",
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
