import React, { useEffect, useState } from "react";
import About from "../../public/About.png";

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Query Survey App
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Advanced survey solution specifically developed for field executives,
          news survey teams, and data collectors
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Left Side - Problem Statement */}
        <div
          className={`space-y-6 transform transition-all duration-800
          ${
            mounted ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"
          }`}
        >
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              The Data Collection Challenge
            </h3>
            <p className="text-gray-700">
              In today's world, data is crucial — but traditional methods face
              major challenges:
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Slow and inefficient processes</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Complete dependency on internet connectivity</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Inaccurate reporting and data integrity issues</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Our Solution
            </h3>
            <p className="text-gray-700 font-semibold">
              We solve all these problems with our comprehensive field data
              collection platform.
            </p>
          </div>
        </div>

        {/* Right Side - Feature Image */}
        <div
          className={`transform transition-all duration-800 flex justify-center
  ${mounted ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"}`}
        >
          <img
            src={About}
            alt="Field executive using survey app"
            className="w-96 rounded-2xl shadow-2xl"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {/* Feature 1 - Offline First */}
        <div
          className={`bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500 transform transition-all duration-700
          ${mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
        >
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <span className="text-blue-600 font-bold text-xl">⚡</span>
          </div>
          <h3 className="font-bold text-lg mb-3">Offline First Approach</h3>
          <p className="text-gray-600 text-sm">
            Our app stays operational even in areas with very poor or no network
            connectivity
          </p>
        </div>

        {/* Feature 2 - Accurate Tracking */}
        <div
          className={`bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500 transform transition-all duration-700 delay-200
          ${mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
        >
          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
            <span className="text-green-600 font-bold text-xl">📍</span>
          </div>
          <h3 className="font-bold text-lg mb-3">Accurate Data Tracking</h3>
          <ul className="text-gray-600 text-sm space-y-1">
            <li>• Punch-in time</li>
            <li>• Location mapping</li>
            <li>• Selfie validation</li>
            <li>• Real-time sync</li>
          </ul>
        </div>

        {/* Feature 3 - Data Security */}
        <div
          className={`bg-white p-6 rounded-xl shadow-lg border-t-4 border-purple-500 transform transition-all duration-700 delay-300
          ${mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
        >
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <span className="text-purple-600 font-bold text-xl">🔒</span>
          </div>
          <h3 className="font-bold text-lg mb-3">Secure Data Encryption</h3>
          <p className="text-gray-600 text-sm">
            Every response is stored in encrypted format for maximum security
            and privacy
          </p>
        </div>

        {/* Feature 4 - Custom Surveys */}
        <div
          className={`bg-white p-6 rounded-xl shadow-lg border-t-4 border-orange-500 transform transition-all duration-700 delay-400
          ${mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
        >
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
            <span className="text-orange-600 font-bold text-xl">📝</span>
          </div>
          <h3 className="font-bold text-lg mb-3">Custom Surveys</h3>
          <p className="text-gray-600 text-sm">
            Admins can create surveys as needed with custom flows and multiple
            question types
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div
        className={`text-center bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white transform transition-all duration-800
        ${mounted ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Transform Your Field Data Collection?
        </h2>
        <p className="mb-6 opacity-90">
          Join thousands of field executives who trust Query Survey App for
          accurate, reliable data collection
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Free Trial
          </button>
          <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  );
}
