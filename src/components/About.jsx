// src/components/About.jsx
import React from "react";
// Use the provided phone screenshot image
const phoneUrl = "/mnt/data/de5379a1-b628-4280-a995-47c7e7414b09.png"; // transform path if needed

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center md:justify-start">
          <div className="w-56 h-56 rounded-2xl overflow-hidden shadow-lg bg-white p-4">
            <img src={phoneUrl} alt="app preview" className="w-full h-full object-contain" />
          </div>
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-4">About content</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Yeh app survey banane, share karne aur analysis karne ke liye bana hai. Simple UI, rich analytics and export features.
            Users can create custom questions, conditional logic, and get instant charts.
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Quick question builder</li>
            <li>Real-time responses</li>
            <li>CSV / PDF exports</li>
            <li>Secure and fast</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
