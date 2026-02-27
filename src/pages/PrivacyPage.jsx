import React, { useEffect, useState } from "react";

<<<<<<< HEAD
=======
/**
 * Uploaded assets (tooling will map these to usable URLs):
 * - logo: /mnt/data/Logo SVG.svg
 * - pdf (downloadable full policy placeholder): /mnt/data/Logo PDF.pdf
 */
>>>>>>> 4d3244c808fda784329f90ffca0a8abee16d00fc
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
<<<<<<< HEAD
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
=======
        style={{ width: 360, opacity: 0.04, filter: "blur(3px)", transform: "rotate(-12deg)" }}
      />

      <div className={`mb-8 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <h1 className="text-3xl md:text-4xl font-extrabold">Privacy Policy</h1>
        <p className="mt-3 text-gray-600 max-w-2xl">
          This Privacy Policy explains how SurveyPro ("we", "us", "our") collects, uses, shares and protects information when you use our website and services.
        </p>
      </div>

      {/* top actions */}
      <div className={`flex items-center justify-between gap-4 mb-8 ${mounted ? "opacity-100" : "opacity-0"}`}>
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow">
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 3h8v4H8z" strokeLinecap="round" strokeLinejoin="round" />
>>>>>>> 4d3244c808fda784329f90ffca0a8abee16d00fc
            </svg>
          </div>
          <div>
            <div className="text-sm text-gray-500">Last updated</div>
            <div className="font-medium">{new Date().toLocaleDateString()}</div>
          </div>
        </div>

        <div className="flex gap-3">
<<<<<<< HEAD
          {/* <a
            href={PDF_URL}
            download
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow hover:scale-105 transition"
=======
          <a
            href={PDF_URL}
            download
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-lg shadow hover:scale-105 transition"
>>>>>>> 4d3244c808fda784329f90ffca0a8abee16d00fc
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 3v12" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 11l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M21 21H3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
<<<<<<< HEAD
            Download PDF Version
          </a> */}

          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
          >
            Contact Support
=======
            Download full policy (PDF)
          </a>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50 transition"
          >
            Contact support
>>>>>>> 4d3244c808fda784329f90ffca0a8abee16d00fc
          </a>
        </div>
      </div>

<<<<<<< HEAD
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
            {/* <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm">📧</div>
              <span className="text-gray-700">Email: <a href="mailto:privacy@querysurvey.com" className="text-blue-600 hover:underline">privacy@querysurvey.com</a></span>
            </div> */}
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm">
                🌐
              </div>
              <span className="text-gray-700">
                Website:{" "}
                <a
                  href="o3consulting.in"
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
=======
      {/* content sections */}
      <div className={`space-y-8 prose max-w-none ${mounted ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}>
        <section>
          <h2 className="text-xl font-semibold">Overview</h2>
          <p>
            SurveyPro ("we", "us" or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you use our website and services (the "Services"). By using the Services
            you agree to the collection and use of information in accordance with this policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Information We Collect</h2>
          <p>
            We collect information to provide and improve the Services. Types of data we collect include:
          </p>
          <ul>
            <li><strong>Account information:</strong> name, email, company, role, billing details.</li>
            <li><strong>Survey data:</strong> questions, responses, files uploaded by respondents.</li>
            <li><strong>Usage data:</strong> IP address, device, browser, pages visited, actions and timestamps.</li>
            <li><strong>Integrations data:</strong> data pushed/pulled to third-party services with your consent.</li>
            <li><strong>Analytics & cookies:</strong> product analytics, performance and preferences.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">How We Use Your Data</h2>
          <p>We use collected data to:</p>
          <ul>
            <li>Provide, operate and maintain the Services.</li>
            <li>Create, store, analyze and export survey results and reports.</li>
            <li>Improve and personalize the Services and product features.</li>
            <li>Communicate with you (notifications, support, billing).</li>
            <li>Prevent fraud, spam and abuse and ensure security and compliance.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Sharing & Disclosure</h2>
          <p>
            We do not sell your personal data. We may share data in limited circumstances:
          </p>
          <ul>
            <li>With service providers (hosting, payment processors, analytics) under strict contracts.</li>
            <li>With your consent (e.g., integrations or data export you enable).</li>
            <li>For legal reasons: to comply with laws, respond to legal processes, or protect rights and safety.</li>
            <li>On corporate changes (merger, acquisition) — with notice and contractual protections.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Data Retention & Deletion</h2>
          <p>
            Survey data and account data are retained so you can access historic results. Retention periods:
          </p>
          <ul>
            <li>By default, data is retained while your account is active.</li>
            <li>You can request deletion of account & survey data — we will delete within a reasonable period (typically 30 days), subject to legal obligations.</li>
            <li>Backups and logs may remain for a limited time for recovery and security.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Security</h2>
          <p>
            We protect data using industry best practices:
          </p>
          <ul>
            <li>Encryption in transit (TLS) and at rest.</li>
            <li>Role-based access, strong password policies and two-factor options where available.</li>
            <li>Regular security audits, monitoring, and vulnerability management.</li>
            <li>If a breach affecting personal data occurs we will notify affected parties as required by law.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Cookies & Tracking</h2>
          <p>
            We use cookies and similar technologies for functionality, analytics and preferences:
          </p>
          <ul>
            <li><strong>Essential cookies:</strong> required for the site to operate.</li>
            <li><strong>Analytics cookies:</strong> used to measure and improve product performance.</li>
          </ul>
          <p>You can manage cookie preferences in your browser; opting out may affect some features.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Children's Privacy</h2>
          <p>
            Our Services are not intended for children under 16. We do not knowingly collect personal data from children under 16.
            If you believe we have such data, contact us to remove it.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Your Rights & Choices</h2>
          <p>
            Depending on your jurisdiction, you may have the right to:
          </p>
          <ul>
            <li>Access, correct, or delete your personal data.</li>
            <li>Restrict or object to processing.</li>
            <li>Obtain a copy or portability of your data.</li>
          </ul>
          <p>To exercise these rights, contact us at the address below. We will verify requests to protect privacy.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Third-Party Services & Integrations</h2>
          <p>
            We integrate with third-party services (e.g., Google Sheets, Zapier). Those services have their own privacy policies — please review them
            before enabling integrations. You control which integrations you enable.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Contact & Changes</h2>
          <p>
            If you have questions about this policy or want to exercise your rights contact us:
          </p>
          <p className="mt-2">
            <strong>Email:</strong> <a href="mailto:privacy@surveypro.example" className="text-indigo-600">privacy@surveypro.example</a><br />
            <strong>Address:</strong> 123 Survey Lane, City, Country
          </p>
          <p className="mt-3">
            We may update this policy; we will post the updated version with the effective date and, where required, notify you.
          </p>
        </section>
      </div>

      {/* CTA */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600">
          Questions or requests about your data? Email <a href="mailto:privacy@surveypro.example" className="text-indigo-600">privacy@surveypro.example</a>.
        </div>

        <div className="flex gap-3">
          <a href="/download" className="inline-block px-5 py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-lg shadow hover:scale-105 transition-transform">Try SurveyPro</a>
          <a href="/contact" className="inline-block px-5 py-3 border rounded-lg text-gray-700 hover:bg-gray-50 transition">Contact sales</a>
>>>>>>> 4d3244c808fda784329f90ffca0a8abee16d00fc
        </div>
      </div>
    </section>
  );
}
