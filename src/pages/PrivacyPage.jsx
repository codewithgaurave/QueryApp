import React, { useEffect, useState } from "react";

const logoUrl = "/mnt/data/Logo SVG.svg";
const PDF_URL = "/mnt/data/Logo PDF.pdf";

export default function PrivacyPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative max-w-5xl mx-auto px-4 py-20">
      {/* watermark */}
      <img
        src={logoUrl}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute -right-8 -top-8 hidden md:block"
        style={{
          width: 360,
          opacity: 0.04,
          filter: "blur(3px)",
          transform: "rotate(-12deg)",
        }}
      />

      {/* Header Section */}
      <div
        className={`mb-8 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Privacy Policy
        </h1>
        <p className="mt-3 text-gray-600 max-w-2xl">
          Query Survey App stores all data you provide in a completely secure
          and encrypted manner. We prioritize your privacy and security above
          all else.
        </p>
      </div>

      {/* Quick Actions */}
      <div
        className={`flex items-center justify-between gap-4 mb-8 ${mounted ? "opacity-100" : "opacity-0"}`}
      >
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow">
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 3h8v4H8z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <div className="text-sm text-gray-500">Last updated</div>
            <div className="font-medium">{new Date().toLocaleDateString()}</div>
          </div>
        </div>

        <div className="flex gap-3">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
          >
            Contact Support
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`space-y-8 max-w-none ${mounted ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}
      >
        {/* Data Collection Section */}
        <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
              📊
            </div>
            <h2 className="text-xl font-bold text-gray-900">Data We Collect</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Survey responses</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Location during punch-in</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">Selfie verification</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">
                  Device info (performance only)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">
                  Employee profile information
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Location Data Section */}
        <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 opacity-50"></div>
          <div className="flex items-center gap-3 mb-4 relative z-10">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
              📍
            </div>
            <h2 className="text-xl font-bold text-gray-900">Location Data</h2>
          </div>
          <div className="prose prose-blue max-w-none text-gray-700 space-y-4 relative z-10">
            <p>
              We collect precise and/or approximate location data from your
              device when you use <strong>SurveyPro</strong>.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
              <p className="font-semibold text-blue-900 mb-1 flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                Background Tracking
              </p>
              <p className="text-sm">
                If enabled, we may collect location data even when the app is
                closed or running in the background. This is required to verify
                survey submission locations, prevent fraudulent entries, and
                ensure accurate geo-tagging.
              </p>
            </div>
            <p>
              Location data is securely stored and used only for survey
              validation and reporting purposes.{" "}
              <strong>We do not sell location data to third parties.</strong>
            </p>
            <div className="mt-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                Primary Usage:
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Verify survey submission locations</li>
                <li>Prevent fraudulent or inaccurate responses</li>
                <li>Ensure data integrity for demographic mapping</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Purpose Section */}
        <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
              🎯
            </div>
            <h2 className="text-xl font-bold text-gray-900">
              Why We Collect This Data
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Field survey verification</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Authenticity check</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Data analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Admin reporting</span>
              </div>
            </div>
          </div>
        </section>

        {/* Data Protection Section */}
        <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
              🔒
            </div>
            <h2 className="text-xl font-bold text-gray-900">
              How Your Data Is Protected
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-xs mt-1">
                  ✓
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    End-to-end encryption
                  </div>
                  <div className="text-sm text-gray-600">
                    All data is encrypted during transmission and storage
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-xs mt-1">
                  ✓
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Secure cloud storage
                  </div>
                  <div className="text-sm text-gray-600">
                    Data stored in highly secure cloud infrastructure
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-xs mt-1">
                  ✓
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    No third-party sharing
                  </div>
                  <div className="text-sm text-gray-600">
                    We do not share your data with third parties
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-xs mt-1">
                  ✓
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Authorized access only
                  </div>
                  <div className="text-sm text-gray-600">
                    Access restricted to authorized personnel only
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Rights Section */}
        <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
              ⚖️
            </div>
            <h2 className="text-xl font-bold text-gray-900">Your Rights</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-xs mt-1">
                ✓
              </div>
              <div>
                <div className="font-semibold text-gray-900">Data Deletion</div>
                <div className="text-gray-600">
                  You can request to delete your data at any time
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-xs mt-1">
                ✓
              </div>
              <div>
                <div className="font-semibold text-gray-900">
                  Information Access
                </div>
                <div className="text-gray-600">
                  You can request complete information about data usage
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Children's Privacy Section */}
        <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
              👶
            </div>
            <h2 className="text-xl font-bold text-gray-900">
              Children's Privacy
            </h2>
          </div>
          <p className="text-gray-700">
            We do not collect any personal data from individuals under 16 years
            of age. Our services are designed for professional field survey
            teams and organizations.
          </p>
        </section>

        {/* Policy Updates Section */}
        <section className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
              🔄
            </div>
            <h2 className="text-xl font-bold text-gray-900">Policy Updates</h2>
          </div>
          <p className="text-gray-700">
            Whenever there are changes to our Privacy Policy, we will notify you
            through the App or Website. We are committed to keeping you informed
            about how we protect your data.
          </p>
        </section>

        {/* Contact Information */}
        <section className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about this Privacy Policy or want to
            exercise your rights, please contact us:
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm">
                🌐
              </div>
              <span className="text-gray-700">
                Website:{" "}
                <a
                  href="https://o3consulting.in"
                  className="text-blue-600 hover:underline"
                >
                  o3consulting.in
                </a>
              </span>
            </div>
          </div>
        </section>
      </div>

      {/* Footer CTA */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50 rounded-2xl p-6">
        <div className="text-sm text-gray-700">
          Questions about your data? Contact our privacy team for immediate
          assistance.
        </div>

        <div className="flex gap-3">
          <a
            href="/contact"
            className="inline-block px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow hover:scale-105 transition-transform"
          >
            Contact Privacy Team
          </a>
          <a
            href="/download"
            className="inline-block px-5 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-white transition"
          >
            Download App
          </a>
        </div>
      </div>
    </section>
  );
}
