import React, { useEffect, useState } from "react";

<<<<<<< HEAD
=======
/**
 * Uploaded assets (tooling will map these to usable URLs):
 * - watermark logo: /mnt/data/Logo SVG.svg
 * - PDF (downloadable full terms placeholder): /mnt/data/Logo PDF.pdf
 */
>>>>>>> 4d3244c808fda784329f90ffca0a8abee16d00fc
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
<<<<<<< HEAD
          <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-bl from-blue-600 to-purple-600 text-white shadow-lg">
=======
          <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-bl from-indigo-600 to-cyan-500 text-white shadow-lg">
>>>>>>> 4d3244c808fda784329f90ffca0a8abee16d00fc
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7" strokeLinecap="round" strokeLinejoin="round"></path>
              <path d="M8 3h8v4H8z" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </div>

          <div>
<<<<<<< HEAD
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Terms of Use</h1>
            <p className="text-gray-600 mt-1">By using Query Survey App, you agree to the following terms and conditions.</p>
=======
            <h1 className="text-3xl md:text-4xl font-extrabold">Terms & Conditions</h1>
            <p className="text-gray-600 mt-1">Clear, user-friendly terms for using o3consulting — created for survey teams.</p>
>>>>>>> 4d3244c808fda784329f90ffca0a8abee16d00fc
          </div>
        </div>
      </div>

      {/* top actions */}
      <div className={`flex items-center justify-between gap-4 mb-8 ${mounted ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}>
        <div className="flex items-center gap-3">
<<<<<<< HEAD
          <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow">
=======
          <div className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow">
>>>>>>> 4d3244c808fda784329f90ffca0a8abee16d00fc
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
            Download full Terms (PDF)
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

      {/* summary badges */}
      <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 ${mounted ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}>
<<<<<<< HEAD
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
=======
        <div className="bg-white p-4 rounded-2xl shadow flex items-start gap-3 border-l-4 border-indigo-500">
          <div className="text-indigo-600 text-2xl">⚖️</div>
          <div>
            <div className="text-sm text-gray-500">Agreement</div>
            <div className="font-medium">Binding terms for all users</div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow flex items-start gap-3 border-l-4 border-cyan-500">
          <div className="text-cyan-600 text-2xl">🔒</div>
          <div>
            <div className="text-sm text-gray-500">Security</div>
            <div className="font-medium">We protect customer data</div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl shadow flex items-start gap-3 border-l-4 border-emerald-400">
          <div className="text-emerald-500 text-2xl">💡</div>
          <div>
            <div className="text-sm text-gray-500">Transparency</div>
            <div className="font-medium">Clear rights & limitations</div>
>>>>>>> 4d3244c808fda784329f90ffca0a8abee16d00fc
          </div>
        </div>
      </div>

<<<<<<< HEAD
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
=======
      {/* static terms content */}
      <div className={`prose max-w-none space-y-8 ${mounted ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}>
        <section>
          <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
          <p>
            By accessing or using o3consulting services ("Service"), you agree to these Terms & Conditions.
            If you do not agree, do not use the Service. These Terms form a legal agreement between you and o3consulting.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">2. Eligibility</h2>
          <p>
            You must be at least 16 years old (or older if required by local law) to use the Service.
            Organizations may sign up on behalf of users and are responsible for their users’ compliance.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">3. Account, Security & Credentials</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account credentials.
            Notify us immediately of any unauthorized use. We are not liable for losses resulting from compromised credentials.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">4. Survey Content & Ownership</h2>
          <p>
            You retain ownership of surveys, responses, and uploaded files you create. You grant o3consulting a limited license
            to host, store and transmit your content as necessary to provide the Service.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">5. Acceptable Use</h2>
          <p>
            You must not use the Service to collect or transmit unlawful, harassing, abusive, or harmful content.
            Do not attempt to interfere with security, reverse-engineer, or otherwise misuse the Service.
            Violation may result in suspension or termination.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">6. Payments, Billing & Subscriptions</h2>
          <p>
            Paid features require payment of fees as described on our pricing page. All fees are non-refundable unless explicitly stated.
            You authorize us to charge your chosen payment method for recurring fees until you cancel your subscription.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">7. Privacy & Data</h2>
          <p>
            We handle personal data in accordance with our Privacy Policy. You remain responsible for how you collect data via surveys and must
            comply with applicable data protection laws.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">8. Third-Party Services & Integrations</h2>
          <p>
            The Service may integrate with third-party services (e.g., payment providers, analytics, Zapier).
            Those services are governed by their own terms and privacy policies — please review them before enabling integrations.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">9. Termination</h2>
          <p>
            You may close your account at any time. We may suspend or terminate accounts for violations or abusive behavior.
            On termination, your access ends; we may retain backups for a limited time as required by law or for security reasons.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">10. Disclaimer of Warranties</h2>
          <p>
            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND. O3CONSULTING DISCLAIMS ALL WARRANTIES,
            EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">11. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, O3CONSULTING (AND ITS AFFILIATES) WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
            CONSEQUENTIAL, SPECIAL OR EXEMPLARY DAMAGES ARISING OUT OF YOUR USE OF THE SERVICE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            OUR AGGREGATE LIABILITY IS LIMITED TO THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">12. Indemnification</h2>
          <p>
            You agree to indemnify and hold o3consulting harmless from claims arising from your use of the Service, violation of these Terms,
            or infringement of others' rights.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">13. Governing Law & Dispute Resolution</h2>
          <p>
            These Terms are governed by the laws where o3consulting is established (or as otherwise agreed). Disputes will be resolved
            in the competent courts of the governing jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">14. Changes to Terms</h2>
          <p>
            We may modify these Terms. For material changes we will notify you (via email or in-app). Continued use after the effective date
            constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">15. Contact</h2>
          <p>
            For questions about these Terms, email: <a href="mailto:legal@o3consulting.example" className="text-indigo-600">legal@o3consulting.example</a>
            <br />
            Address: 123 Survey Lane, City, Country
          </p>
        </section>
      </div>

      {/* CTA */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600">
          Need help interpreting these Terms? Email <a href="mailto:legal@o3consulting.example" className="text-indigo-600">legal@o3consulting.example</a>.
        </div>

        <div className="flex gap-3">
          <a href="/download" className="inline-block px-5 py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-lg shadow hover:scale-105 transition-transform">Get the app</a>
          <a href="/contact" className="inline-block px-5 py-3 border rounded-lg text-gray-700 hover:bg-gray-50 transition">Contact sales</a>
        </div>
      </div>

      {/* tiny legal footer */}
      <div className="mt-8 text-xs text-gray-400">Last updated: {new Date().toLocaleDateString()}. This page is a summary and does not replace legal advice.</div>
    </section>
  );
}
>>>>>>> 4d3244c808fda784329f90ffca0a8abee16d00fc
