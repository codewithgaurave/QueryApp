import React, { useEffect, useState } from "react";

const logoUrl = "/mnt/data/Logo SVG.svg";
const PDF_URL = "/mnt/data/Logo PDF.pdf";

export default function TermsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative max-w-6xl mx-auto px-4 py-20">
      {/* decorative gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 300px at 8% 10%, rgba(99,102,241,0.04), transparent), radial-gradient(700px 250px at 92% 85%, rgba(6,182,212,0.03), transparent)"
        }}
      />

      {/* watermark logo */}
      <img
        src={logoUrl}
        alt=""
        aria-hidden
        className="hidden lg:block pointer-events-none select-none absolute -right-8 -top-8"
        style={{ width: 360, opacity: 0.03, filter: "blur(4px)", transform: "rotate(-12deg)" }}
      />

      {/* header */}
      <div className={`mb-8 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}`}>
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-bl from-blue-600 to-purple-600 text-white shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M8 3h8v4H8z" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Terms of Use</h1>
            <p className="text-gray-600 mt-1">By using Query Survey App, you agree to the following terms and conditions.</p>
          </div>
        </div>
      </div>

      {/* top actions */}
      <div className={`flex items-center justify-between gap-4 mb-8 ${mounted ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}>
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 3v12" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 11l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M21 21H3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <div className="text-sm text-gray-500">Effective</div>
            <div className="font-medium">{new Date().toLocaleDateString()}</div>
          </div>
        </div>

        <div className="flex gap-3">
          {/* <a
            href={PDF_URL}
            download
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow hover:scale-105 transition"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 3v12" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 11l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M21 21H3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download PDF Version
          </a> */}

          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
          >
            Contact Support
          </a>
        </div>
      </div>

      {/* summary badges */}
      <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 ${mounted ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}>
        <div className="bg-white p-4 rounded-2xl shadow flex items-start gap-3 border-l-4 border-blue-500">
          <div className="text-blue-600 text-2xl">👤</div>
          <div>
            <div className="text-sm text-gray-500">User Responsibility</div>
            <div className="font-medium">You are responsible for your data</div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow flex items-start gap-3 border-l-4 border-green-500">
          <div className="text-green-600 text-2xl">📍</div>
          <div>
            <div className="text-sm text-gray-500">Punch-In Rules</div>
            <div className="font-medium">Location & selfie verification required</div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow flex items-start gap-3 border-l-4 border-red-500">
          <div className="text-red-600 text-2xl">⚡</div>
          <div>
            <div className="text-sm text-gray-500">Account Safety</div>
            <div className="font-medium">Misuse leads to suspension</div>
          </div>
        </div>
      </div>

      {/* Terms Content */}
      <div className={`max-w-none space-y-8 ${mounted ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}>
        
        {/* User Responsibility Section */}
        <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-xl">
              1
            </div>
            <h2 className="text-xl font-bold text-gray-900">User Responsibility</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xs mt-1">✓</div>
              <div>
                <div className="font-semibold text-gray-900">Data Verification</div>
                <div className="text-gray-600">Data entered by you must be verified by you</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xs mt-1">⚠️</div>
              <div>
                <div className="font-semibold text-gray-900">Risk of False Information</div>
                <div className="text-gray-600">Full risk lies with the user for providing incorrect information</div>
              </div>
            </div>
          </div>
        </section>

        {/* Punch-In Rules Section */}
        <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 text-xl">
              2
            </div>
            <h2 className="text-xl font-bold text-gray-900">Punch-In Rules</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs mt-1">📍</div>
              <div>
                <div className="font-semibold text-gray-900">Location Verification</div>
                <div className="text-gray-600">Providing correct location is mandatory</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs mt-1">📸</div>
              <div>
                <div className="font-semibold text-gray-900">Selfie Verification</div>
                <div className="text-gray-600">Providing correct selfie is mandatory</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs mt-1">🛡️</div>
              <div>
                <div className="font-semibold text-gray-900">Fraud Detection</div>
                <div className="text-gray-600">Fraud detection system automatically prevents misuse</div>
              </div>
            </div>
          </div>
        </section>

        {/* Survey Submission Section */}
        <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-xl">
              3
            </div>
            <h2 className="text-xl font-bold text-gray-900">Survey Submission</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-xs mt-1">📱</div>
              <div>
                <div className="font-semibold text-gray-900">Offline Mode Security</div>
                <div className="text-gray-600">Data will remain secure even in offline mode</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-xs mt-1">🔄</div>
              <div>
                <div className="font-semibold text-gray-900">Data Synchronization</div>
                <div className="text-gray-600">Data sync is mandatory when internet connection is available</div>
              </div>
            </div>
          </div>
        </section>

        {/* App Usage Restrictions Section */}
        <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600 text-xl">
              4
            </div>
            <h2 className="text-xl font-bold text-gray-900">App Usage Restrictions</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-xs mt-1">🚫</div>
              <div>
                <div className="font-semibold text-gray-900">No Illegal Activities</div>
                <div className="text-gray-600">You cannot use the app for any illegal activities</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-xs mt-1">🔒</div>
              <div>
                <div className="font-semibold text-gray-900">Authorized Use Only</div>
                <div className="text-gray-600">App usage is restricted to legitimate survey and data collection purposes only</div>
              </div>
            </div>
          </div>
        </section>

        {/* Account Termination Section */}
        <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 text-xl">
              5
            </div>
            <h2 className="text-xl font-bold text-gray-900">Account Termination</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-xs mt-1">⚠️</div>
              <div>
                <div className="font-semibold text-gray-900">Misuse Detection</div>
                <div className="text-gray-600">Your account can be suspended if misuse is detected</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-xs mt-1">🔍</div>
              <div>
                <div className="font-semibold text-gray-900">Compliance Monitoring</div>
                <div className="text-gray-600">We continuously monitor for compliance with these terms</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h2>
          <p className="text-gray-700 mb-4">
            For any questions regarding these Terms of Use, please contact us:
          </p>
          <div className="space-y-2">
            {/* <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm">📧</div>
              <span className="text-gray-700">Email: <a href="mailto:legal@querysurvey.com" className="text-blue-600 hover:underline">legal@querysurvey.com</a></span>
            </div> */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm">🌐</div>
              <span className="text-gray-700">Website: <a href="o3consulting.in" className="text-blue-600 hover:underline">o3consulting.in</a></span>
            </div>
          </div>
        </section>
      </div>

      {/* Footer CTA */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50 rounded-2xl p-6">
        <div className="text-sm text-gray-700">
          Need clarification on any terms? Contact our legal team for assistance.
        </div>

        <div className="flex gap-3">
          <a href="/contact" className="inline-block px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow hover:scale-105 transition-transform">
            Contact Legal Team
          </a>
          <a href="/download" className="inline-block px-5 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-white transition">
            Download App
          </a>
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-8 text-xs text-gray-400 text-center">
        Last updated: {new Date().toLocaleDateString()}. By using Query Survey App, you agree to these Terms of Use.
      </div>
    </section>
  );
}