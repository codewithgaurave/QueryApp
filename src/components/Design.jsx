import React, { useEffect, useState } from "react";

/**
 * Uses uploaded logo as soft watermark.
 * Developer note: this local path will be transformed to a usable URL by your build / tool pipeline.
 */
const logoUrl = "/mnt/data/Logo SVG.svg";

const cards = [
  {
<<<<<<< HEAD
    title: "Beautiful Gradient Theme",
    desc: "Blue-purple gradient enhances visual appeal and gives premium look throughout the app - Dashboard, Profile, History, and Survey Cards.",
    icon: "🎨",
  },
  {
    title: "Simple & Clean Layout",
    desc: "Minimalist design without clutter. Easy navigation with important actions like Start Survey, Punch-In, Support prominently visible.",
    icon: "📱",
  },
  {
    title: "Smooth Card-Based UI",
    desc: "Attractive card-based design for Survey Cards, History Cards, Profile Card, Consent Card, and Support Cards for easy reading and interaction.",
    icon: "💳",
  },
  {
    title: "Icon-Based Navigation",
    desc: "Simple icons (Home, History, Profile) in bottom navigation bar for instant user understanding and easy navigation.",
    icon: "🧭",
  },
  {
    title: "Easy-to-Read Typography",
    desc: "Comfortable font style for mobile screens during long usage. Rounded, friendly typography for smooth user experience.",
    icon: "🔤",
  },
  {
    title: "Color Indicators",
    desc: "Intuitive color coding: Green for Completed, Yellow for Active, Red for Punch-in Required, Blue for Default System Color.",
    icon: "🎯",
  },
  {
    title: "Visual Clarity",
    desc: "Consistent visual structure on every screen: Bold Title, Light Subtitle, Highlighted Action Button, Rounded Containers.",
    icon: "👁️",
  },
  {
    title: "Human-Friendly Interaction",
    desc: "Human-first design with large buttons, soft shadows, rounded corners, and gesture-friendly spacing for easy tapping.",
    icon: "🤝",
  },
  {
    title: "Field-Optimized Design",
    desc: "Thumb-friendly buttons, high contrast sections, outdoor-readable text, and clear offline indicators for field surveyors.",
    icon: "🌐",
  },
=======
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
>>>>>>> 4d3244c808fda784329f90ffca0a8abee16d00fc
];

export default function Design() {
  // track which cards have animated in (stagger)
  const [visible, setVisible] = useState(() => cards.map(() => false));

  useEffect(() => {
    // staggered reveal
    const timers = cards.map((_, i) =>
      setTimeout(() => {
<<<<<<< HEAD
        setVisible((v) => {
=======
        setVisible(v => {
>>>>>>> 4d3244c808fda784329f90ffca0a8abee16d00fc
          const copy = [...v];
          copy[i] = true;
          return copy;
        });
      }, 120 * i + 160)
    );
<<<<<<< HEAD
    return () => timers.forEach((t) => clearTimeout(t));
=======
    return () => timers.forEach(t => clearTimeout(t));
>>>>>>> 4d3244c808fda784329f90ffca0a8abee16d00fc
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
<<<<<<< HEAD
          transform: "rotate(-8deg)",
        }}
      />

      <div className="mb-12 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900">
          Modern & Intuitive Design
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto">
          Query Survey App's complete interface is designed in a modern, clean,
          and user-friendly way so that every survey user can easily operate the
          app without any training.
        </p>
      </div>

      {/* Design Philosophy Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Our Design Philosophy</h3>
        <p className="text-xl font-semibold opacity-90">
          Simple. Functional. Beautiful.
        </p>
        <p className="mt-3 opacity-80 max-w-2xl mx-auto">
          We believe design is not just for looking good - design is for
          enhancing usability.
=======
          transform: "rotate(-8deg)"
        }}
      />

      <div className="mb-8 text-center">
        <h2 className="text-4xl font-extrabold">Design & Engineering Principles</h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Built for clarity, speed and trust — SurveyPro's UI and architecture prioritize fast data collection,
          beautiful outputs, and accessibility for everyone.
>>>>>>> 4d3244c808fda784329f90ffca0a8abee16d00fc
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
<<<<<<< HEAD
                ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }
                hover:shadow-2xl hover:-translate-y-2 focus-within:shadow-2xl
                border-l-4 border-blue-500
                `}
              style={{ willChange: "transform, opacity" }}
              tabIndex={0}
=======
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                hover:shadow-2xl hover:-translate-y-2 focus-within:shadow-2xl
                `}
              style={{ willChange: "transform, opacity" }}
              tabIndex={0} // make card focusable for keyboard users
>>>>>>> 4d3244c808fda784329f90ffca0a8abee16d00fc
              aria-labelledby={`card-title-${i}`}
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex-none w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                  style={{
<<<<<<< HEAD
                    background:
                      "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(6,182,212,0.12))",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <span
                    className="transform transition-transform duration-500"
                    style={{ display: "inline-block" }}
                  >
=======
                    background: "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(6,182,212,0.06))",
                    backdropFilter: "blur(4px)"
                  }}
                >
                  <span className="transform transition-transform duration-500" style={{ display: "inline-block" }}>
>>>>>>> 4d3244c808fda784329f90ffca0a8abee16d00fc
                    {c.icon}
                  </span>
                </div>

                <div className="flex-1">
<<<<<<< HEAD
                  <h3
                    id={`card-title-${i}`}
                    className="text-lg font-semibold text-gray-900"
                  >
=======
                  <h3 id={`card-title-${i}`} className="text-lg font-semibold">
>>>>>>> 4d3244c808fda784329f90ffca0a8abee16d00fc
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{c.desc}</p>

                  <div className="mt-4 flex items-center justify-between gap-3">
<<<<<<< HEAD
                    <div className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-full font-medium">
                      Design Feature
                    </div>
=======
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
>>>>>>> 4d3244c808fda784329f90ffca0a8abee16d00fc
                  </div>
                </div>
              </div>

<<<<<<< HEAD
              {/* subtle animated accent */}
=======
              {/* subtle animated accent - appears after card visible */}
>>>>>>> 4d3244c808fda784329f90ffca0a8abee16d00fc
              <div
                className="absolute -top-4 right-4 w-12 h-12 rounded-full opacity-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(6,182,212,0.12))",
                  transform: isVisible ? "scale(1)" : "scale(0.6)",
<<<<<<< HEAD
                  transition:
                    "transform .6s cubic-bezier(.2,.9,.2,1), opacity .6s",
=======
                  transition: "transform .6s cubic-bezier(.2,.9,.2,1), opacity .6s"
>>>>>>> 4d3244c808fda784329f90ffca0a8abee16d00fc
                }}
              />
            </article>
          );
        })}
      </div>

<<<<<<< HEAD
      {/* Field User Focus Section */}
      <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          🎨 Designed for Real Field Users
        </h3>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Field surveyors sometimes need to operate mobile while moving. That's
          why we optimized the UI with thumb-friendly buttons, high contrast
          sections, outdoor-readable text, and clear offline indicators.
        </p>
      </div>

      {/* CTA Section */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-lg">
        <div className="text-sm text-gray-700">
          Want to experience our intuitive design? Try Query Survey App today.
=======
      {/* small CTA row under cards */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-700">
          Want a custom design system or theme for your team? We can help build it.
>>>>>>> 4d3244c808fda784329f90ffca0a8abee16d00fc
        </div>

        <div className="flex gap-3">
          <a
            href="/contact"
<<<<<<< HEAD
            className="inline-block px-5 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow hover:scale-105 transition-transform"
          >
            Get Demo
=======
            className="inline-block px-5 py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-lg shadow hover:scale-105 transition-transform"
          >
            Contact sales
>>>>>>> 4d3244c808fda784329f90ffca0a8abee16d00fc
          </a>

          <a
            href="/download"
<<<<<<< HEAD
            className="inline-block px-5 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
          >
            Start Free Trial
=======
            className="inline-block px-5 py-3 border rounded-lg text-gray-700 hover:bg-gray-50 transition"
          >
            Try SurveyPro — Free
>>>>>>> 4d3244c808fda784329f90ffca0a8abee16d00fc
          </a>
        </div>
      </div>
    </section>
  );
}
