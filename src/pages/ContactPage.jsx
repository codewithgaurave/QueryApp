import React, { useEffect, useState } from "react";

  import logo from "../../public/Logo.svg";

const logoUrl = "/mnt/data/Logo SVG.svg"; // uploaded logo path (will be transformed by your build)

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);

  // form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  // simple email validation
  const validEmail = (e) => /\S+@\S+\.\S+/.test(e);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setError("");
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill all fields.");
      return;
    }
    if (!validEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }

    // simulate send with small animation (replace with real API call)
    setSending(true);
    setError("");
    try {
      await new Promise((res) => setTimeout(res, 1400)); // simulate network
      setSent(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (e) {
      setError("Something went wrong. Try again.");
    } finally {
      setSending(false);
      // auto-hide success toast after 3s
      setTimeout(() => setSent(false), 3000);
    }
  };

  return (
    <section className="relative max-w-6xl mx-auto px-4 py-24">
      {/* decorative gradients */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(700px 300px at 10% 20%, rgba(99,102,241,0.06), transparent 12%), radial-gradient(800px 400px at 90% 80%, rgba(6,182,212,0.04), transparent 14%)"
        }}
      />

      {/* watermark */}
      <img src={logoUrl} alt="" aria-hidden className="hidden lg:block pointer-events-none absolute -right-12 -top-8 w-72 opacity-6" style={{ opacity: 0.04 }} />

      {/* hero */}
      <header className={`mb-10 text-center ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"} transition-all duration-700`}>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Let’s build something great together</h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Questions about our survey platform or need an enterprise demo? Drop a message — we reply fast.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* left - info cards */}
        <aside className={`space-y-6 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"} transition-all duration-700`}>
          <div className="bg-gradient-to-br from-white/60 to-white/40 border border-gray-100 rounded-3xl p-6 shadow-xl backdrop-blur-md">
            <div className="flex items-center gap-4">
              {/* <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-indigo-600 to-cyan-500 text-white shadow-md text-2xl">o3</div> */}
              <img src={logo} alt="" className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br  text-white text-2xl" />
              <div>
                <div className="text-sm text-gray-500">Company</div>
                <div className="font-semibold">o3consulting</div>
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              <div className="flex items-start gap-3">
                <div className="text-indigo-600 text-xl">📧</div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="font-medium">support@o3consulting.com</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-indigo-600 text-xl">📞</div>
                <div>
                  <div className="text-sm text-gray-500">Phone</div>
                  <div className="font-medium">+91 98765 43210</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-indigo-600 text-xl">📍</div>
                <div>
                  <div className="text-sm text-gray-500">Office</div>
                  <div className="font-medium">Mumbai, India</div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-indigo-600 text-white shadow hover:opacity-95" href="/download">
                Download App
              </a>
              <a className="inline-flex items-center gap-2 px-3 py-2 rounded-md border hover:bg-gray-50" href="/about">Learn more</a>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow">
            <h4 className="text-lg font-semibold mb-2">Need quick help?</h4>
            <p className="text-sm text-gray-600 mb-3">Check our help center or schedule a demo — we’ll guide you through integrations and analytics.</p>
            <div className="flex gap-3">
              <a className="text-sm inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200" href="#">Help Center</a>
              <a className="text-sm inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200" href="#">Schedule demo</a>
            </div>
          </div>
        </aside>

        {/* right - form */}
        <div className={`relative ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"} transition-all duration-700`}>
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
            <div className="grid gap-4 sm:grid-cols-2">
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="peer w-full bg-transparent border border-gray-200 rounded-lg px-4 pt-5 pb-3 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                />
                <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-focus:top-1 peer-focus:text-xs peer-focus:text-indigo-600">
                  Your name
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="peer w-full bg-transparent border border-gray-200 rounded-lg px-4 pt-5 pb-3 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                />
                <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-focus:top-1 peer-focus:text-xs peer-focus:text-indigo-600">
                  Email address
                </label>
              </div>
            </div>

            {/* Message */}
            <div className="relative mt-4">
              <textarea
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="peer w-full bg-transparent border border-gray-200 rounded-lg px-4 pt-5 pb-3 focus:outline-none focus:ring-2 focus:ring-indigo-300 resize-none"
              />
              <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-focus:top-1 peer-focus:text-xs peer-focus:text-indigo-600">
                Message
              </label>
            </div>

            {error && <div className="mt-3 text-sm text-red-600">{error}</div>}

            <div className="mt-6 flex items-center gap-4">
              <button
                type="submit"
                disabled={sending}
                className={`inline-flex items-center gap-3 px-6 py-3 rounded-lg text-white font-medium shadow-md transform transition
                  ${sending ? "bg-indigo-500 cursor-wait" : "bg-gradient-to-r from-indigo-600 to-cyan-500 hover:scale-105"}`}
              >
                {/* animated spinner */}
                <span className="relative flex items-center">
                  {sending ? (
                    <svg className="animate-spin h-5 w-5 text-white mr-1" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                  ) : null}
                  <span>{sending ? "Sending..." : "Send message"}</span>
                </span>
              </button>

              <div className="text-sm text-gray-500">Or email us at <a className="text-indigo-600" href="mailto:support@o3consulting.com">support@o3consulting.com</a></div>
            </div>

            {/* subtle footer note */}
            <div className="mt-5 text-xs text-gray-400">
              We reply within 24–48 hours. By sending a message you agree to our <a className="underline text-indigo-600" href="/privacy">Privacy Policy</a>.
            </div>
          </form>

          {/* success toast */}
          <div
            aria-live="polite"
            className={`fixed right-6 bottom-6 z-50 transition-transform duration-300 ${sent ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0 pointer-events-none"}`}
          >
            <div className="bg-white border border-green-200 shadow-lg rounded-lg px-5 py-3 flex items-center gap-3">
              <div className="text-green-600 text-2xl">✅</div>
              <div>
                <div className="font-medium">Message sent</div>
                <div className="text-sm text-gray-500">We will contact you soon — thank you!</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* floating help bubble */}
      <a
        href="/contact"
        className="fixed left-6 bottom-6 md:left-auto md:right-6 z-40 inline-flex items-center gap-3 bg-indigo-600 text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
        aria-label="Chat with us"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
        Help
      </a>
    </section>
  );
}
