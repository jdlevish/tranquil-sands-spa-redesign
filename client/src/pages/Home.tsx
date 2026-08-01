/**
 * Home — Tranquil Sands Scalp Spa
 * Design: Desert Sanctuary × Japandi Mineral
 * Sections: Hero → Philosophy → Rituals → Experience → Method → FAQ → Sound Bath → Booking → Contact
 * All content sourced from tranquilsandsscalpspa.com
 */
import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// ─── Fade-in hook ────────────────────────────────────────────────────────────
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    el.querySelectorAll(".fade-up").forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);
  return ref;
}

// ─── Section wrapper ─────────────────────────────────────────────────────────
function Section({
  id,
  children,
  style,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}) {
  const ref = useFadeIn();
  return (
    <section id={id} ref={ref} className={className} style={style}>
      {children}
    </section>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const rituals = [
  {
    number: "01",
    name: "Euphoria",
    numeral: "I",
    duration: "90 min",
    price: "$220",
    tagline: "The ultimate surrender.",
    description:
      "Your most complete scalp experience. Beginning with a 50× microscopic scalp analysis, followed by organic tonics, a hand-blended scalp mask, steam therapy, and an extended therapeutic scalp and arm massage. Includes Halo Hydrotherapy, high frequency, red light therapy, and the Hydro-Dhara treatment — delivering extraordinary anti-aging benefits for the scalp and hair.",
    bookUrl:
      "https://book.squareup.com/appointments/1lmkg6ixcxhzlj/location/L0YY05XW846JH/services/JXL5ZCVG6XHAX7J6POKPMMTD",
    featured: true,
  },
  {
    number: "02",
    name: "Opulence",
    numeral: "II",
    duration: "60 min",
    price: "$165",
    tagline: "Restore. Reverse. Renew.",
    description:
      "A 50× scalp analysis followed by organic tonics, a hand-blended scalp mask, steam treatment, and a therapeutic scalp and arm massage. Includes Halo Hydrotherapy and red light therapy. Designed for guests seeking to reverse signs of scalp aging and experience the full benefits of extended massage.",
    bookUrl:
      "https://book.squareup.com/appointments/1lmkg6ixcxhzlj/location/L0YY05XW846JH/services/ZRWS7JKVQZKDC2KULFS3DG5P",
    featured: false,
  },
  {
    number: "03",
    name: "Tranquility",
    numeral: "III",
    duration: "45 min",
    price: "$120",
    tagline: "Balance, restored.",
    description:
      "A 50× scalp analysis, customized organic tonics, a hand-crafted scalp mask, steam treatment, detoxifying shampoo, deep conditioning, and a nourishing scalp tonic. The essential Tranquil Sands ritual.",
    bookUrl:
      "https://book.squareup.com/appointments/1lmkg6ixcxhzlj/location/L0YY05XW846JH/services/GKZVTVQSDMDLYXQJAKTPCC2B",
    featured: false,
  },
  {
    number: "04",
    name: "Summer Scalp Reset",
    numeral: "IV",
    duration: "40 min",
    price: "$99",
    tagline: "A seasonal offering.",
    description:
      "A focused seasonal ritual: 50× microscopic scalp analysis, deep cleansing, steam therapy, a relaxing scalp massage, and personalized recommendations. Available for a limited time.",
    bookUrl:
      "https://book.squareup.com/appointments/1lmkg6ixcxhzlj/location/L0YY05XW846JH/services/7YKHXFUT25DK7KJGIMIHDT3K",
    featured: false,
    limited: true,
  },
];

const faqItems = [
  {
    q: "What is a scalp facial?",
    a: "A scalp facial is a treatment focused on the health and cleanliness of the scalp — cleansing, exfoliating, and nourishing to remove dead skin cells, product buildup, and excess sebum. Each session promotes healthier hair growth, alleviates dryness, reduces dandruff, and creates a more balanced scalp environment.",
  },
  {
    q: "What should I expect during my first visit?",
    a: "Your visit begins with a digital microscope consultation to assess your scalp. You'll change into a robe, then receive your treatment: application and exfoliation, scalp and arm massage with micro-mist, rinse and shampoo, conditioning mask, and a personalized scalp tonic. A post-treatment consultation reviews your results and outlines a care plan.",
  },
  {
    q: "How often should I receive a scalp treatment?",
    a: "For most guests, a monthly scalp facial is ideal — aligned with the natural 28-day skin cell turnover cycle. Frequency may vary based on your scalp condition and goals.",
  },
  {
    q: "Is a scalp facial suitable for all hair types?",
    a: "Yes. A scalp facial benefits anyone with a scalp. Treatments are customized to your individual condition and hair type.",
  },
  {
    q: "Are there any contraindications?",
    a: "We are unable to perform services on clients with extensions or expecting mothers due to the stimulating nature of the essential oils. Clients should wait a minimum of one week after hair coloring before receiving a treatment. Please consult with us if you have active scalp infections, open wounds, or severe scalp conditions.",
  },
  {
    q: "Can I book a group appointment?",
    a: "We love hosting small groups of 2–6 guests. To arrange a group experience, please call or text (760) 848-8217 or email tranquilsandsscalpspa@gmail.com.",
  },
];

const soundBathEvents = [
  { date: "July 11, 2026", time: "6:30 pm", url: "https://square.link/u/rZMA3bbv" },
  { date: "July 24, 2026", time: "6:30 pm", url: "https://square.link/u/fJK6I0IV" },
];

// ─── FAQ Accordion ────────────────────────────────────────────────────────────
function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="fade-up"
      style={{
        borderBottom: "1px solid oklch(0.82 0.04 70 / 0.5)",
        transitionDelay: `${index * 60}ms`,
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left bg-transparent border-none py-6 gap-6"
        style={{ color: "oklch(0.28 0.03 55)" }}
      >
        <span
          className="font-display"
          style={{ fontSize: "1.15rem", fontWeight: 400, letterSpacing: "0.01em" }}
        >
          {q}
        </span>
        <span
          style={{
            fontSize: "1.2rem",
            color: "oklch(0.55 0.04 65)",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 300ms cubic-bezier(0.23, 1, 0.32, 1)",
            flexShrink: 0,
            lineHeight: 1,
          }}
        >
          +
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? "400px" : "0",
          overflow: "hidden",
          transition: "max-height 500ms cubic-bezier(0.23, 1, 0.32, 1)",
        }}
      >
        <p
          style={{
            fontSize: "0.9rem",
            lineHeight: 1.85,
            color: "oklch(0.45 0.03 65)",
            fontWeight: 300,
            paddingBottom: "1.5rem",
            margin: 0,
            maxWidth: "65ch",
          }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "oklch(0.975 0.012 85)" }}>
      <Navigation />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          height: "100svh",
          minHeight: "600px",
          overflow: "hidden",
        }}
      >
        <img
          src="/manus-storage/hero_e01c93f8.jpg"
          alt="Tranquil Sands lounge — Palm Desert"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 40%",
          }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, oklch(0.18 0.01 55 / 0.25) 0%, oklch(0.18 0.01 55 / 0.1) 40%, oklch(0.18 0.01 55 / 0.55) 100%)",
          }}
        />
        {/* Hero text */}
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            left: 0,
            right: 0,
            padding: "0 2rem",
          }}
        >
          <div className="container" style={{ maxWidth: "1440px" }}>
            <div
              className="label-caps fade-up visible"
              style={{
                color: "oklch(0.955 0.018 80 / 0.75)",
                marginBottom: "1.25rem",
                fontSize: "0.62rem",
              }}
            >
              Palm Desert, California
            </div>
            <h1
              className="font-display fade-up visible"
              style={{
                fontSize: "clamp(3rem, 8vw, 7rem)",
                color: "oklch(0.975 0.012 85)",
                fontWeight: 300,
                letterSpacing: "0.02em",
                lineHeight: 1.0,
                maxWidth: "14ch",
                marginBottom: "2rem",
                transitionDelay: "100ms",
              }}
            >
              Where the desert teaches you to be still.
            </h1>
            <div
              className="fade-up visible"
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap", transitionDelay: "200ms" }}
            >
              <a
                href="https://squareup.com/appointments/book/1lmkg6ixcxhzlj/L0YY05XW846JH/start"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury btn-luxury-filled"
                style={{ fontSize: "0.62rem" }}
              >
                Reserve Your Ritual
              </a>
              <button
                onClick={() => document.getElementById("rituals")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-luxury"
                style={{
                  borderColor: "oklch(0.975 0.012 85 / 0.55)",
                  color: "oklch(0.975 0.012 85)",
                  fontSize: "0.62rem",
                }}
              >
                Discover the Rituals
              </button>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "2.5rem",
            right: "2.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <div
            style={{
              width: "1px",
              height: "3rem",
              background: "oklch(0.975 0.012 85 / 0.4)",
              animation: "scrollPulse 2s ease-in-out infinite",
            }}
          />
        </div>
      </section>

      {/* ── PHILOSOPHY STRIP ─────────────────────────────────────────────── */}
      <Section
        style={{
          background: "oklch(0.955 0.018 80)",
          padding: "5rem 0",
          borderBottom: "1px solid oklch(0.88 0.025 75)",
        }}
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {[
              {
                label: "The Practice",
                text: "More than a scalp treatment, each ritual is an invitation to slow down. Our signature multi-sensory experiences gently guide the body from a state of stress into one of deep restoration. Through rhythmic massage, flowing warm water, botanical therapies, calming aromas, sound, and therapeutic touch, we create a sanctuary where the nervous system can settle, the scalp can flourish, and the mind can finally exhale.",
              },
              {
                label: "The Ingredients",
                text: "Every treatment is composed with organic tonics, hand-blended botanical masks, and curated serums — chosen for their efficacy and their gentleness on the scalp's delicate ecosystem.",
              },
              {
                label: "The Experience",
                text: "This is not a hair appointment. It is a ritual. Each session is a deliberate, unhurried journey designed to restore balance to both scalp and spirit.",
              },
            ].map((item, i) => (
              <div
                key={item.label}
                className="fade-up"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div
                  className="label-caps"
                  style={{ marginBottom: "1.25rem", color: "oklch(0.55 0.04 65)" }}
                >
                  {item.label}
                </div>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.9,
                    color: "oklch(0.38 0.03 60)",
                    fontWeight: 300,
                    margin: 0,
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── EDITORIAL IMAGE BREAK ─────────────────────────────────────────── */}
      <section style={{ position: "relative", height: "60vh", overflow: "hidden" }}>
        <img
          src="/manus-storage/lounge_sofa_df3d29e9.jpg"
          alt="Tranquil Sands scalp analysis treatment room"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "oklch(0.18 0.01 55 / 0.15)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "2.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
          }}
        >
          <p
            className="font-display"
            style={{
              fontSize: "clamp(1.2rem, 3vw, 2rem)",
              color: "oklch(0.975 0.012 85)",
              fontWeight: 300,
              letterSpacing: "0.04em",
              margin: 0,
              textShadow: "0 1px 20px oklch(0.18 0.01 55 / 0.4)",
            }}
          >
            Nestled in the heart of El Paseo, Palm Desert
          </p>
        </div>
      </section>

      {/* ── RITUALS ──────────────────────────────────────────────────────── */}
      <Section
        id="rituals"
        style={{ padding: "8rem 0", background: "oklch(0.975 0.012 85)" }}
      >
        <div className="container">
          {/* Section header */}
          <div className="fade-up" style={{ marginBottom: "5rem" }}>
            <div className="label-caps" style={{ marginBottom: "1.5rem", color: "oklch(0.55 0.04 65)" }}>
              Our Offerings
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                fontWeight: 300,
                letterSpacing: "0.02em",
                maxWidth: "18ch",
                lineHeight: 1.05,
                color: "oklch(0.28 0.03 55)",
              }}
            >
              Rituals curated for every depth of restoration.
            </h2>
          </div>

          {/* Ritual cards */}
          <div className="flex flex-col gap-0">
            {rituals.map((ritual, i) => (
              <div
                key={ritual.name}
                className="fade-up"
                style={{
                  borderTop: "1px solid oklch(0.82 0.04 70 / 0.5)",
                  padding: "3.5rem 0",
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
                  {/* Number */}
                  <div className="md:col-span-1">
                    <span
                      className="font-display"
                      style={{
                        fontSize: "clamp(2.5rem, 4vw, 4.5rem)",
                        color: "oklch(0.82 0.04 70)",
                        letterSpacing: "-0.02em",
                        fontWeight: 300,
                        lineHeight: 1,
                        fontStyle: "italic",
                        userSelect: "none",
                      }}
                    >
                      {ritual.numeral}
                    </span>
                  </div>

                  {/* Name + tagline */}
                  <div className="md:col-span-3">
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                      <h3
                        className="font-display"
                        style={{
                          fontSize: "1.75rem",
                          fontWeight: 400,
                          letterSpacing: "0.02em",
                          color: "oklch(0.28 0.03 55)",
                          margin: 0,
                        }}
                      >
                        {ritual.name}
                      </h3>
                      {ritual.limited && (
                        <span
                          className="label-caps"
                          style={{
                            fontSize: "0.52rem",
                            background: "oklch(0.55 0.06 55 / 0.12)",
                            color: "oklch(0.45 0.05 55)",
                            padding: "0.25rem 0.6rem",
                            borderRadius: "9999px",
                            border: "1px solid oklch(0.55 0.06 55 / 0.25)",
                          }}
                        >
                          Limited
                        </span>
                      )}
                    </div>
                    <p
                      style={{
                        fontSize: "0.8rem",
                        color: "oklch(0.6 0.04 65)",
                        fontStyle: "italic",
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        margin: 0,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {ritual.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-5">
                    <p
                      style={{
                        fontSize: "0.875rem",
                        lineHeight: 1.85,
                        color: "oklch(0.42 0.03 62)",
                        fontWeight: 300,
                        margin: 0,
                      }}
                    >
                      {ritual.description}
                    </p>
                  </div>

                  {/* Price + CTA */}
                  <div className="md:col-span-3 flex flex-col items-start md:items-end gap-4">
                    <div>
                      <div
                        className="font-display"
                        style={{
                          fontSize: "2rem",
                          fontWeight: 300,
                          color: "oklch(0.28 0.03 55)",
                          lineHeight: 1,
                        }}
                      >
                        {ritual.price}
                      </div>
                      <div
                        className="label-caps"
                        style={{ fontSize: "0.58rem", color: "oklch(0.6 0.035 65)", marginTop: "0.25rem" }}
                      >
                        {ritual.duration}
                      </div>
                    </div>
                    <a
                      href={ritual.bookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-luxury"
                      style={{ fontSize: "0.6rem", padding: "0.65rem 1.5rem" }}
                    >
                      Reserve This Ritual
                    </a>
                  </div>
                </div>
              </div>
            ))}
            {/* Last border */}
            <div style={{ borderTop: "1px solid oklch(0.82 0.04 70 / 0.5)" }} />
          </div>

          {/* Add-on note */}
          <div
            className="fade-up"
            style={{
              marginTop: "3rem",
              padding: "2rem 2.5rem",
              background: "oklch(0.955 0.018 80)",
              borderRadius: "0.5rem",
              border: "1px solid oklch(0.88 0.025 75)",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="label-caps" style={{ marginBottom: "0.75rem", color: "oklch(0.55 0.04 65)" }}>
                  Enhancements
                </div>
                <p style={{ fontSize: "0.85rem", color: "oklch(0.45 0.03 62)", fontWeight: 300, margin: 0, lineHeight: 1.8 }}>
                  <strong style={{ fontWeight: 400 }}>Radiance Ritual Facial</strong> — A 15-minute botanical facial enhancement available as an add-on to any scalp service. Select the option when booking.<br />
                  <strong style={{ fontWeight: 400 }}>Blow-dry &amp; Styling</strong> — Additional $40. All services include a partial rough dry.
                </p>
              </div>
              <div>
                <div className="label-caps" style={{ marginBottom: "0.75rem", color: "oklch(0.55 0.04 65)" }}>
                  Please Note
                </div>
                <p style={{ fontSize: "0.85rem", color: "oklch(0.45 0.03 62)", fontWeight: 300, margin: 0, lineHeight: 1.8 }}>
                  We are unable to perform services on clients with extensions or expecting mothers. Please wait a minimum of one week after hair coloring before your visit. Additional $20 for guests requiring extra product.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── EXPERIENCE — split image + text ──────────────────────────────── */}
      <Section
        id="experience"
        style={{ background: "oklch(0.955 0.018 80)", padding: "0" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: "70vh" }}>
          {/* Image */}
          <div style={{ position: "relative", minHeight: "50vh" }}>
            <img
              src="/manus-storage/arm_treatment_740780ff.jpg"
              alt="Tranquil Sands lounge in afternoon light"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
            />
          </div>
          {/* Text */}
          <div
            className="flex flex-col justify-center"
            style={{ padding: "5rem 4rem 5rem 5rem" }}
          >
            <div ref={useFadeIn()}>
              <div className="label-caps fade-up" style={{ marginBottom: "2rem", color: "oklch(0.55 0.04 65)" }}>
                The Experience
              </div>
              <h2
                className="font-display fade-up"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  fontWeight: 300,
                  letterSpacing: "0.02em",
                  lineHeight: 1.1,
                  color: "oklch(0.28 0.03 55)",
                  marginBottom: "2rem",
                  transitionDelay: "80ms",
                }}
              >
                An exquisite retreat for scalp wellness.
              </h2>
              <p
                className="fade-up"
                style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.9,
                  color: "oklch(0.42 0.03 62)",
                  fontWeight: 300,
                  marginBottom: "1.5rem",
                  transitionDelay: "160ms",
                }}
              >
                Nestled in the sun-drenched landscape of Palm Desert, Tranquil Sands harmoniously blends modern luxury with a serene ambiance. The décor is inspired by the natural beauty of the Coachella Valley — earthy tones, soft textures, and elements that evoke calm and balance.
              </p>
              <p
                className="fade-up"
                style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.9,
                  color: "oklch(0.42 0.03 62)",
                  fontWeight: 300,
                  marginBottom: "2.5rem",
                  transitionDelay: "240ms",
                }}
              >
                Every aspect of your experience is thoughtfully curated — from the soothing sound of gentle music to the subtle fragrance of essential oils — transporting you to a world of peace and restoration.
              </p>
              <div className="fade-up" style={{ transitionDelay: "320ms" }}>
                <a
                  href="https://squareup.com/appointments/book/1lmkg6ixcxhzlj/L0YY05XW846JH/start"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury"
                >
                  Begin Your Ritual
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── OUR METHOD ───────────────────────────────────────────────────── */}
      <Section
        id="story"
        style={{
          background: "oklch(0.975 0.012 85)",
          padding: "8rem 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background image, very subtle */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "40%",
            opacity: 0.12,
            pointerEvents: "none",
          }}
        >
          <img
            src="/manus-storage/oway_ingredients_49925cf7.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="container" style={{ position: "relative" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="fade-up">
                <div className="label-caps" style={{ marginBottom: "1.5rem", color: "oklch(0.55 0.04 65)" }}>
                  Our Method
                </div>
                <h2
                  className="font-display"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3.5rem)",
                    fontWeight: 300,
                    letterSpacing: "0.02em",
                    lineHeight: 1.1,
                    color: "oklch(0.28 0.03 55)",
                    marginBottom: "2rem",
                  }}
                >
                  5,000 years of wisdom, refined for the modern scalp.
                </h2>
              </div>
              <div className="fade-up" style={{ transitionDelay: "100ms" }}>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.9,
                    color: "oklch(0.42 0.03 62)",
                    fontWeight: 300,
                    marginBottom: "1.5rem",
                  }}
                >
                  Scalp massage is an ancient Ayurvedic practice with over 5,000 years of history. According to Ayurveda, there are 108 vital Marma points in the body — 31 of which are located in the head region. These pressure points, where arteries, veins, and cranial nerves intersect, aid in draining, cooling, and relieving pressure in the head.
                </p>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.9,
                    color: "oklch(0.42 0.03 62)",
                    fontWeight: 300,
                    marginBottom: "2rem",
                  }}
                >
                 Massaging these points boosts blood circulation and promotes healthy, stronger hair growth. Oil treatments nourish the hair, rejuvenate dry or damaged strands, and increase luster — while protecting against environmental stressors and premature greying.
               </p>
             </div>
             <div className="fade-up" style={{ transitionDelay: "200ms" }}>
              </div>
              <div className="fade-up" style={{ transitionDelay: "160ms" }}>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.9,
                    color: "oklch(0.42 0.03 62)",
                    fontWeight: 300,
                    marginBottom: "2rem",
                  }}
                >
                  Every mask is hand-blended in-house using <em>Oway</em> organic ingredients — loose herbs, botanical powders, and cold-pressed oils chosen for your scalp's specific needs. Nothing pre-mixed. Nothing shelf-stable. Just pure, living botanicals prepared fresh for your ritual.
                </p>
              </div>
              <div className="fade-up" style={{ transitionDelay: "200ms" }}>
               <div className="grid grid-cols-2 gap-6">
                  {[
                    { stat: "31", label: "Marma points in the head" },
                    { stat: "5,000+", label: "Years of Ayurvedic practice" },
                    { stat: "50×", label: "Microscopic scalp analysis" },
                    { stat: "4", label: "Specialized treatment types" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div
                        className="font-display"
                        style={{
                          fontSize: "2.25rem",
                          fontWeight: 300,
                          color: "oklch(0.55 0.06 55)",
                          lineHeight: 1,
                          marginBottom: "0.4rem",
                        }}
                      >
                        {item.stat}
                      </div>
                      <div
                        style={{
                          fontSize: "0.75rem",
                          color: "oklch(0.55 0.035 65)",
                          fontWeight: 300,
                          lineHeight: 1.4,
                        }}
                      >
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Right: image */}
            <div className="fade-up" style={{ transitionDelay: "150ms" }}>
              <img
               src="/manus-storage/lounge_full_683b3e67.jpg"
                alt="Kristina performing a therapeutic arm massage"
                style={{
                  width: "100%",
                  aspectRatio: "3/4",
                  objectFit: "cover",
                  objectPosition: "center 15%",
                  borderRadius: "0.25rem",
                }}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ── SCALP TREATMENT TYPES ─────────────────────────────────────────── */}
      <Section
        style={{
          background: "oklch(0.975 0.012 85)",
          padding: "7rem 0",
          borderTop: "1px solid oklch(0.82 0.04 70 / 0.4)",
        }}
      >
        <div className="container">
          <div className="fade-up" style={{ marginBottom: "4rem" }}>
            <div
              className="label-caps"
              style={{ marginBottom: "1.5rem", color: "oklch(0.55 0.04 65)" }}
            >
              Specialized Care
            </div>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 300,
                letterSpacing: "0.02em",
                lineHeight: 1.1,
                color: "oklch(0.28 0.03 55)",
                maxWidth: "22ch",
              }}
            >
              Every scalp has its own story. We listen.
            </h2>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0"
            style={{ borderTop: "1px solid oklch(0.82 0.04 70 / 0.5)" }}
          >
            {[
              {
                name: "Purifying",
                desc: "Designed for scalps with dry or oily dandruff. Deep cleansing to restore clarity and balance.",
              },
              {
                name: "Rebalancing",
                desc: "Eliminates yellow spots, excess shine, and hair follicle-clogging oil buildup.",
              },
              {
                name: "Soothing",
                desc: "For clients with irritation, eczema, psoriasis, sensitivity, redness, and itching.",
              },
              {
                name: "Restorative",
                desc: "Addresses hair loss, subcutaneous trophism, and scalp conditions contributing to thinning.",
              },
            ].map((type, i) => (
              <div
                key={type.name}
                className="fade-up"
                style={{
                  padding: "3rem 2.5rem 3rem 0",
                  borderRight: i < 3 ? "1px solid oklch(0.82 0.04 70 / 0.4)" : "none",
                  paddingLeft: i > 0 ? "2.5rem" : "0",
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <div
                  className="font-display"
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 300,
                    color: "oklch(0.28 0.03 55)",
                    marginBottom: "1rem",
                    letterSpacing: "0.02em",
                  }}
                >
                  {type.name}
                </div>
                <p
                  style={{
                    fontSize: "0.85rem",
                    lineHeight: 1.8,
                    color: "oklch(0.45 0.03 62)",
                    fontWeight: 300,
                    margin: 0,
                  }}
                >
                  {type.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── DESERT LANDSCAPE BREAK ───────────────────────────────────────── */}
      <section style={{ position: "relative", height: "50vh", overflow: "hidden" }}>
        <img
          src="/manus-storage/desert_landscape_b7dfb3b7.jpg"
          alt="Palm Desert landscape"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 60%" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "oklch(0.18 0.01 55 / 0.3)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "2rem",
          }}
        >
          <blockquote
            className="font-display"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 3rem)",
              color: "oklch(0.975 0.012 85)",
              fontWeight: 300,
              fontStyle: "italic",
              letterSpacing: "0.03em",
              lineHeight: 1.3,
              maxWidth: "28ch",
              margin: 0,
              textShadow: "0 2px 30px oklch(0.18 0.01 55 / 0.5)",
            }}
          >
            "Scalp health is the foundation of hair wellness — and of a quieter mind."
          </blockquote>
        </div>
      </section>

      {/* ── SOUND BATH ───────────────────────────────────────────────────── */}
      <Section
        style={{
          background: "oklch(0.955 0.018 80)",
          padding: "7rem 0",
          borderTop: "1px solid oklch(0.88 0.025 75)",
        }}
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <div className="fade-up">
                <div className="label-caps" style={{ marginBottom: "1.5rem", color: "oklch(0.55 0.04 65)" }}>
                  Special Events
                </div>
                <h2
                  className="font-display"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3.5rem)",
                    fontWeight: 300,
                    letterSpacing: "0.02em",
                    lineHeight: 1.1,
                    color: "oklch(0.28 0.03 55)",
                    marginBottom: "1.5rem",
                  }}
                >
                  Sound Baths at the Spa
                </h2>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.9,
                    color: "oklch(0.42 0.03 62)",
                    fontWeight: 300,
                    marginBottom: "2.5rem",
                  }}
                >
                  An immersive evening of sound healing within the sanctuary of Tranquil Sands. Allow the resonance of sound to dissolve tension, quiet the mind, and restore equilibrium. Tickets are limited.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {soundBathEvents.map((event, i) => (
                  <div
                    key={event.date}
                    className="fade-up"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "1.75rem 0",
                      borderBottom: "1px solid oklch(0.82 0.04 70 / 0.5)",
                      transitionDelay: `${i * 80}ms`,
                    }}
                  >
                    <div>
                      <div
                        className="font-display"
                        style={{ fontSize: "1.1rem", color: "oklch(0.28 0.03 55)", fontWeight: 400 }}
                      >
                        {event.date}
                      </div>
                      <div className="label-caps" style={{ fontSize: "0.58rem", color: "oklch(0.6 0.035 65)", marginTop: "0.25rem" }}>
                        {event.time}
                      </div>
                    </div>
                    <a
                      href={event.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-luxury"
                      style={{ fontSize: "0.6rem", padding: "0.6rem 1.25rem" }}
                    >
                      Reserve Your Spot
                    </a>
                  </div>
                ))}
              </div>
            </div>
            {/* Image */}
            <div className="fade-up" style={{ transitionDelay: "100ms" }}>
              <img
               src="/manus-storage/oway_herbs_bowl_76935212.jpg"
                alt="Hand-blended Oway botanical herbs for scalp mask"
                style={{
                  width: "100%",
                  aspectRatio: "4/3",
                  objectFit: "cover",
                  objectPosition: "center 70%",
                  borderRadius: "0.25rem",
                }}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <Section
        id="faq"
        style={{ background: "oklch(0.975 0.012 85)", padding: "8rem 0" }}
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <div className="fade-up">
                <div className="label-caps" style={{ marginBottom: "1.5rem", color: "oklch(0.55 0.04 65)" }}>
                  Questions
                </div>
                <h2
                  className="font-display"
                  style={{
                    fontSize: "clamp(2rem, 3.5vw, 3rem)",
                    fontWeight: 300,
                    letterSpacing: "0.02em",
                    lineHeight: 1.1,
                    color: "oklch(0.28 0.03 55)",
                    marginBottom: "1.5rem",
                  }}
                >
                  Everything you need to know before your first visit.
                </h2>
                <a
                  href="mailto:tranquilsandsscalpspa@gmail.com"
                  className="btn-luxury"
                  style={{ fontSize: "0.6rem" }}
                >
                  Ask Us Directly
                </a>
              </div>
            </div>
            <div className="md:col-span-8">
              {faqItems.map((item, i) => (
                <FAQItem key={item.q} q={item.q} a={item.a} index={i} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── BOOKING CTA ──────────────────────────────────────────────────── */}
      <Section
        id="booking"
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "0",
        }}
      >
        <div style={{ position: "relative", minHeight: "60vh" }}>
          <img
             src="/manus-storage/lounge_sunlight_a496149d.jpg"
              alt="Tranquil Sands lounge at golden hour"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 30%",
              }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "oklch(0.18 0.01 55 / 0.6)",
            }}
          />
          <div
            className="flex flex-col items-center justify-center text-center"
            style={{
              position: "relative",
              minHeight: "60vh",
              padding: "6rem 2rem",
            }}
          >
            <div ref={useFadeIn()}>
              <div
                className="label-caps fade-up"
                style={{ color: "oklch(0.82 0.04 70 / 0.7)", marginBottom: "1.5rem", fontSize: "0.62rem" }}
              >
                Reserve Your Ritual
              </div>
              <h2
                className="font-display fade-up"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  fontWeight: 300,
                  letterSpacing: "0.02em",
                  lineHeight: 1.05,
                  color: "oklch(0.975 0.012 85)",
                  maxWidth: "18ch",
                  marginBottom: "2rem",
                  transitionDelay: "80ms",
                }}
              >
                Your scalp deserves this.
              </h2>
              <p
                className="fade-up"
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                  color: "oklch(0.82 0.04 70)",
                  fontWeight: 300,
                  maxWidth: "40ch",
                  marginBottom: "2.5rem",
                  transitionDelay: "160ms",
                }}
              >
                Gift cards available. Group bookings welcome for parties of 2–6.
              </p>
              <div
                className="fade-up flex flex-wrap gap-4 justify-center"
                style={{ transitionDelay: "240ms" }}
              >
                <a
                  href="https://squareup.com/appointments/book/1lmkg6ixcxhzlj/L0YY05XW846JH/start"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury btn-luxury-filled"
                  style={{ fontSize: "0.65rem" }}
                >
                  Reserve Your Ritual
                </a>
                <a
                  href="https://squareup.com/gift/ML1Y0ADC3CPJ5/order"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury"
                  style={{
                    borderColor: "oklch(0.975 0.012 85 / 0.5)",
                    color: "oklch(0.975 0.012 85)",
                    fontSize: "0.65rem",
                  }}
                >
                  Send a Gift
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <Section
        id="contact"
        style={{
          background: "oklch(0.955 0.018 80)",
          padding: "7rem 0",
          borderTop: "1px solid oklch(0.88 0.025 75)",
        }}
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            <div className="fade-up">
              <div className="label-caps" style={{ marginBottom: "1.5rem", color: "oklch(0.55 0.04 65)" }}>
                Find Us
              </div>
              <a
                href="https://maps.app.goo.gl/21K9CmwcuYi2NAmS7"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: "0.9rem",
                  color: "oklch(0.38 0.03 60)",
                  fontWeight: 300,
                  lineHeight: 1.8,
                  textDecoration: "none",
                  display: "block",
                }}
                className="hover:opacity-60 transition-opacity duration-200"
              >
                73640 El Paseo, Suite 5<br />
                Palm Desert, CA 92260
              </a>
            </div>
            <div className="fade-up" style={{ transitionDelay: "80ms" }}>
              <div className="label-caps" style={{ marginBottom: "1.5rem", color: "oklch(0.55 0.04 65)" }}>
                Reach Us
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href="tel:7608488217"
                  style={{ fontSize: "0.9rem", color: "oklch(0.38 0.03 60)", fontWeight: 300, textDecoration: "none" }}
                  className="hover:opacity-60 transition-opacity duration-200"
                >
                  (760) 848-8217
                </a>
                <a
                  href="mailto:tranquilsandsscalpspa@gmail.com"
                  style={{ fontSize: "0.9rem", color: "oklch(0.38 0.03 60)", fontWeight: 300, textDecoration: "none" }}
                  className="hover:opacity-60 transition-opacity duration-200"
                >
                  tranquilsandsscalpspa@gmail.com
                </a>
              </div>
            </div>
            <div className="fade-up" style={{ transitionDelay: "160ms" }}>
              <div className="label-caps" style={{ marginBottom: "1.5rem", color: "oklch(0.55 0.04 65)" }}>
                Follow
              </div>
              <a
                href="https://www.instagram.com/tranquilsands.scalpspa/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "0.9rem", color: "oklch(0.38 0.03 60)", fontWeight: 300, textDecoration: "none" }}
                className="hover:opacity-60 transition-opacity duration-200"
              >
                @tranquilsands.scalpspa
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Footer />

      {/* Scroll pulse animation */}
      <style>{`
      `}</style>
    </div>
  );
}
