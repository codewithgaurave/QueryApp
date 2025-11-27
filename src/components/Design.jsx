import React, { useEffect, useState } from "react";

/**
 * Uses uploaded logo as soft watermark.
 * Developer note: this local path will be transformed to a usable URL by your build / tool pipeline.
 */
const logoUrl = "/mnt/data/Logo SVG.svg";

const cards = [
  {
    title: "Design System",
    desc: "Prebuilt components & themes to match your brand. Typography, color tokens, spacing system.",
    icon: "🎨"
  },
  {
    title: "Mobile-first Experience",
    desc: "Optimized flows for respondents on mobile — fast loads and intuitive interactions.",
    icon: "📱"
  },
  {
    title: "Data-first Analytics",
    desc: "Interactive charts, cohort analysis and exportable dashboards for stakeholders.",
    icon: "📊"
  },
  {
    title: "Security",
    desc: "Encrypted data at rest & transit, role-based access and audit logs.",
    icon: "🔒"
  },
  {
    title: "Accessibility",
    desc: "WCAG-aware forms, keyboard navigation and screen-reader friendly components.",
    icon: "♿"
  },
  {
    title: "Performance",
    desc: "Lazy loading, small bundles, edge caching for a snappy UI.",
    icon: "⚡"
  }
];

export default function Design() {
  // track which cards have animated in (stagger)
  const [visible, setVisible] = useState(() => cards.map(() => false));

  useEffect(() => {
    // staggered reveal
    const timers = cards.map((_, i) =>
      setTimeout(() => {
        setVisible(v => {
          const copy = [...v];
          copy[i] = true;
          return copy;
        });
      }, 120 * i + 160)
    );
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <section className="relative max-w-7xl mx-auto px-4 py-20">
      {/* WATERMARK / decorative logo */}
      <img
        src={logoUrl}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute right-0 top-4 hidden lg:block"
        style={{
          width: 340,
          opacity: 0.04,
          filter: "blur(6px)",
          transform: "rotate(-8deg)"
        }}
      />

      <div className="mb-8 text-center">
        <h2 className="text-4xl font-extrabold">Design & Engineering Principles</h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Built for clarity, speed and trust — SurveyPro's UI and architecture prioritize fast data collection,
          beautiful outputs, and accessibility for everyone.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => {
          const isVisible = visible[i];

          return (
            <article
              key={c.title}
              className={`
                relative bg-white rounded-2xl p-6 shadow-lg transform transition-all duration-700
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                hover:shadow-2xl hover:-translate-y-2 focus-within:shadow-2xl
                `}
              style={{ willChange: "transform, opacity" }}
              tabIndex={0} // make card focusable for keyboard users
              aria-labelledby={`card-title-${i}`}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex-none w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                  style={{
                    background: "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(6,182,212,0.06))",
                    backdropFilter: "blur(4px)"
                  }}
                >
                  <span className="transform transition-transform duration-500" style={{ display: "inline-block" }}>
                    {c.icon}
                  </span>
                </div>

                <div className="flex-1">
                  <h3 id={`card-title-${i}`} className="text-lg font-semibold">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{c.desc}</p>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 focus:outline-none"
                      onClick={e => e.preventDefault()}
                      style={{ position: "relative" }}
                    >
                      <span className="underline-animate">Learn more</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>

                    <div className="text-xs text-gray-400">Best practice</div>
                  </div>
                </div>
              </div>

              {/* subtle animated accent - appears after card visible */}
              <div
                className="absolute -top-4 right-4 w-12 h-12 rounded-full opacity-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(6,182,212,0.12))",
                  transform: isVisible ? "scale(1)" : "scale(0.6)",
                  transition: "transform .6s cubic-bezier(.2,.9,.2,1), opacity .6s"
                }}
              />
            </article>
          );
        })}
      </div>

      {/* small CTA row under cards */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-700">
          Want a custom design system or theme for your team? We can help build it.
        </div>

        <div className="flex gap-3">
          <a
            href="/contact"
            className="inline-block px-5 py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-lg shadow hover:scale-105 transition-transform"
          >
            Contact sales
          </a>

          <a
            href="/download"
            className="inline-block px-5 py-3 border rounded-lg text-gray-700 hover:bg-gray-50 transition"
          >
            Try SurveyPro — Free
          </a>
        </div>
      </div>
    </section>
  );
}
