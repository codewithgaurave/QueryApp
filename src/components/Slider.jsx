import React, { useState, useEffect } from "react";

const slides = [
  {
    title: "Create beautiful surveys — in seconds",
    subtitle: "Forms, quizzes, polls with logic & real-time analytics.",
    cta: "Get Started",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1600&q=60"
  },
  {
    title: "Capture responses anywhere",
    subtitle: "Mobile-first surveys, offline mode & 20+ languages.",
    cta: "See Features",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=60"
  },
  {
    title: "Analyze & export with ease",
    subtitle: "Charts, filtering, CSV/PDF exports and integrations.",
    cta: "View Analytics",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee9810?auto=format&fit=crop&w=1600&q=60"
  }
];

export default function Slider() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIdx((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setIdx((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIdx((i) => (i + 1) % slides.length);

  return (
    <section className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          key={idx}
          src={slides[idx].image}
          className="w-full h-full object-cover transition-opacity duration-700 opacity-100"
          alt="slider"
        />

        {/* Black gradient overlay */}
        <div className="absolute inset-0 bg-black/50 bg-linear-to-b from-black/40 to-black/60"></div>
      </div>

      {/* TEXT ON IMAGE */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
        <h1 className="text-white text-3xl md:text-5xl font-extrabold drop-shadow-lg">
          {slides[idx].title}
        </h1>
        <p className="text-gray-200 mt-4 text-lg md:text-xl max-w-2xl drop-shadow">
          {slides[idx].subtitle}
        </p>

        <a
          href="/download"
          className="mt-6 px-6 py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-md shadow hover:opacity-95"
        >
          {slides[idx].cta}
        </a>
      </div>

      {/* LEFT arrow */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl font-bold opacity-70 hover:opacity-100"
      >
        ‹
      </button>

      {/* RIGHT arrow */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl font-bold opacity-70 hover:opacity-100"
      >
        ›
      </button>

      {/* DOT INDICATORS */}
      <div className="absolute bottom-6 w-full flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`w-3 h-3 rounded-full ${
              i === idx ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
