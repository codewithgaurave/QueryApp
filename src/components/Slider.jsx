<<<<<<< HEAD
// src/components/Slider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    title: "Efficient, Fast & Smart Surveying",
    subtitle: "Specially designed for field executives with simple UI and smooth workflow",
    cta: "Get Started",
    image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?auto=format&fit=crop&w=800&q=80",
    theme: "blue"
  },
  {
    title: "Survey Anytime, Anywhere",
    subtitle: "Offline mode works everywhere with auto-sync on reconnect",
    cta: "Learn More",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    theme: "green"
  },
  {
    title: "Real-Time Punch-In Tracking",
    subtitle: "Authentic field verification with selfie + GPS location",
    cta: "View Features",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=800&q=80",
    theme: "purple"
  },
  {
    title: "Beautiful & Clean UI",
    subtitle: "Modern gradient theme designed for field users",
    cta: "Explore Design",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
    theme: "violet"
  }
];

const themeColors = {
  blue: "from-blue-600 to-cyan-500",
  green: "from-green-600 to-emerald-500", 
  purple: "from-purple-600 to-pink-500",
  violet: "from-violet-600 to-purple-500"
};

export default function Slider() {
  return (
    <section className="w-full relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        loop={true}
        autoplay={{ 
          delay: 5000, 
          disableOnInteraction: false,
          pauseOnMouseEnter: true 
        }}
        speed={800}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        pagination={{ 
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-white/50 !w-2 !h-2",
          bulletActiveClass: "swiper-pagination-bullet-active !bg-white !w-6"
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="h-[400px] md:h-[450px] rounded-xl overflow-hidden shadow-2xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            {/* Optimized Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                loading="lazy"
                className="w-full h-full object-cover"
                width={800}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="max-w-4xl mx-auto px-6 w-full">
                <div className="text-white space-y-4">
                  {/* Title */}
                  <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-2xl">
                    {slide.title}
                  </h1>
                  
                  {/* Subtitle */}
                  <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl">
                    {slide.subtitle}
                  </p>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <a
                      href="/download"
                      className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${themeColors[slide.theme]} text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200`}
                    >
                      {slide.cta}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-next !w-10 !h-10 !rounded-full !bg-white/10 !backdrop-blur-sm !border !border-white/20 hover:!bg-white/20 transition-all duration-300">
          <svg className="!w-4 !h-4 !text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m9 5 7 7-7 7" />
          </svg>
        </div>
        
        <div className="swiper-button-prev !w-10 !h-10 !rounded-full !bg-white/10 !backdrop-blur-sm !border !border-white/20 hover:!bg-white/20 transition-all duration-300">
          <svg className="!w-4 !h-4 !text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m15 19-7-7 7-7" />
          </svg>
        </div>

        {/* Custom Styles */}
        <style jsx global>{`
          .swiper-button-next,
          .swiper-button-prev {
            color: white !important;
            margin-top: 0 !important;
            transform: translateY(-50%) !important;
          }
          
          .swiper-button-next {
            right: 15px !important;
          }
          
          .swiper-button-prev {
            left: 15px !important;
          }
          
          .swiper-button-next:after,
          .swiper-button-prev:after {
            display: none !important;
          }
          
          .swiper-pagination {
            bottom: 15px !important;
          }
          
          .swiper-pagination-bullet {
            transition: all 0.3s ease !important;
            border-radius: 4px !important;
          }
        `}</style>
      </Swiper>
    </section>
  );
}
=======
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
>>>>>>> 4d3244c808fda784329f90ffca0a8abee16d00fc
