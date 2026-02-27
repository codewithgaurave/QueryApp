import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import About from "../../public/About.png";

export default function AboutPage() {
=======

/*
  Online (hero) image used for large left preview (high-res).
  You asked online images — this is the main shown image.
*/
const heroImgUrl =
  "https://images.unsplash.com/photo-1520975912451-6a7a0b1f3c83?auto=format&fit=crop&w=1600&q=60";

/*
  Your uploaded local asset (kept here as a fallback / for your tooling).
  The developer/tooling message said to include the local path; keeping it here.
  If you want to use the local uploaded image instead, replace heroImgUrl with this path:
    const phoneUrl = "/mnt/data/de5379a1-b628-4280-a995-47c7e7414b09.png";
*/
const localPhoneUrl = "/mnt/data/de5379a1-b628-4280-a995-47c7e7414b09.png";

export default function AboutPage({ isPreview }) {
>>>>>>> 4d3244c808fda784329f90ffca0a8abee16d00fc
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
<<<<<<< HEAD
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
=======
    <section id="about" className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-12 gap-8 items-center">
        {/* LEFT: large visual (spans 7/12 on md+) */}
        <div
          className={`relative col-span-12 md:col-span-7 flex items-center justify-center`}
        >
          {/* decorative rounded background */}
          <div
            className={`
              absolute -inset-x-6 -inset-y-6 md:-inset-x-10 rounded-3xl
              bg-gradient-to-br from-indigo-50/60 via-white to-cyan-50/40
              blur-2xl transform transition-transform duration-1000
              ${mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
            `}
            aria-hidden
          />

          {/* phone / hero image card */}
          <div
            className={`
              relative w-full max-w-2xl md:max-w-none md:w-[85%] rounded-3xl overflow-hidden shadow-2xl
              transform transition-all duration-900
              ${mounted ? "scale-100 opacity-100" : "scale-98 opacity-0"}
            `}
            style={{ willChange: "transform, opacity" }}
          >
            {/* image: online high-res (change to localPhoneUrl if you want local) */}
            <img
              src="https://cdn.dekudeals.com/images/393c52edbdd566d1200a1559e30bafbba6a1cdee/w500.jpg"
              // alt fallback if you want to switch to local file, replace src with localPhoneUrl
              alt="Survey app preview"
              className="w-full h-[520px] md:h-[640px] object-cover"
            />

            {/* subtle gradient overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/15 pointer-events-none" />

            {/* small floating badge on image */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur rounded-full px-4 py-2 flex items-center gap-3 shadow">
              <div className="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">SP</div>
              <div>
                <div className="text-xs text-gray-600">Trusted by</div>
                <div className="text-sm font-semibold">1,200+ teams</div>
              </div>
            </div>

            {/* CTA floating card (bottom-left) */}
            <div className="absolute left-6 bottom-6 bg-white rounded-xl p-4 shadow flex items-center gap-4">
              <div>
                <div className="text-xs text-gray-500">Avg completion</div>
                <div className="text-lg font-semibold">82%</div>
              </div>
              <div className="h-10 w-[1px] bg-gray-200" />
              <div>
                <div className="text-xs text-gray-500">Responses</div>
                <div className="text-lg font-semibold">1.2k+</div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: content (spans 5/12 on md+) */}
        <div className="col-span-12 md:col-span-5">
          <div
            className={`space-y-4 md:space-y-6 transform transition-all duration-800
              ${mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
            `}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              All-in-one <span className="text-indigo-600">Survey Platform</span>
            </h2>

            <p className="text-gray-700">
              <strong>SurveyPro</strong> helps you design surveys, questionnaires and quizzes — fast.
              Built for teams who need reliable, actionable data. Create branching logic, schedule
              campaigns, collect responses offline, and export beautiful reports in a click.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-5 rounded-xl shadow card-hover">
                <h4 className="font-semibold">Question Types</h4>
                <p className="text-sm text-gray-600 mt-2">Multiple choice, rating, matrix, file upload, and conditional inputs.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow card-hover">
                <h4 className="font-semibold">Logic & Branching</h4>
                <p className="text-sm text-gray-600 mt-2">Personalize flow by showing/hiding questions based on answers.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow card-hover">
                <h4 className="font-semibold">Collaboration</h4>
                <p className="text-sm text-gray-600 mt-2">Share projects, set roles, and comment in-line with teammates.</p>
              </div>

              <div className="bg-white p-5 rounded-xl shadow card-hover">
                <h4 className="font-semibold">Integrations</h4>
                <p className="text-sm text-gray-600 mt-2">Zapier, Google Sheets, Slack, webhook & native CSV/PDF exports.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <a
                href="/download"
                className="inline-block px-5 py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-md shadow hover:scale-105 transition-transform"
              >
                Try for free
              </a>
              <a
                href="/contact"
                className="inline-block px-5 py-3 border rounded-md text-gray-700 hover:bg-gray-50 transition"
              >
                Contact sales
              </a>
            </div>

            {!isPreview && (
              <div className="mt-6 text-gray-600">
                <h3 className="font-semibold mb-3">Why teams love SurveyPro</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Advanced reporting with filters, segments and visual charts.</li>
                  <li>GDPR & privacy-ready data handling and export controls.</li>
                  <li>White-labeling & theming options for enterprise customers.</li>
                  <li>Prebuilt templates and a question library to speed up setup.</li>
                </ul>
              </div>
            )}
          </div>
>>>>>>> 4d3244c808fda784329f90ffca0a8abee16d00fc
        </div>
      </div>
    </section>
  );
}
