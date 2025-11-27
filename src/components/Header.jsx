import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../public/Logo.svg"
// Use uploaded logo path (tooling will map this path to a usable URL)
const logoUrl = "/mnt/data/Logo SVG.svg";

export default function Header() {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef(null);

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // click outside to close
  useEffect(() => {
    const onClick = (e) => {
      if (!open) return;
      if (overlayRef.current && e.target === overlayRef.current) setOpen(false);
    };
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, [open]);

  const linkClass = ({ isActive }) =>
    "text-lg md:text-sm px-3 py-2 rounded " +
    (isActive ? "bg-indigo-50 text-indigo-700" : "text-gray-800 hover:text-indigo-700");

  return (
    <header className="sticky top-0 z-40 bg-transparent">
      {/* Minimal header bar (mobile + desktop) */}
      <div className="bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* Left: logo */}
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Logo"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full object-contain"
              />
              {/* desktop brand (hidden on mobile) */}
              <div className="hidden md:block">
                <NavLink to="/" className="text-lg font-semibold">
                  o3consulting
                </NavLink>
                <div className="text-xs text-gray-500">Create · Share · Analyze</div>
              </div>
            </div>

            {/* CENTERED company name for mobile */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 md:static md:transform-none md:left-auto md:top-auto md:translate-x-0 md:translate-y-0">
              <NavLink to="/" className="text-lg font-semibold text-gray-800 block md:hidden text-center">
                o3consulting
              </NavLink>
            </div>

            {/* Desktop nav (visible on md+) */}
            <nav className="hidden md:flex items-center gap-2">
              <NavLink to="/" className={linkClass} end>
                Home
              </NavLink>
              <NavLink to="/about" className={linkClass}>
                About
              </NavLink>
              <NavLink to="/contact" className={linkClass}>
                Contact
              </NavLink>
              <NavLink to="/privacy" className={linkClass}>
                Privacy
              </NavLink>
              <NavLink to="/terms" className={linkClass}>
                Terms
              </NavLink>
              {/* <a
                href="/mnt/data/YourApp.apk"
                download
                className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-md shadow"
              >
                Download App
              </a> */}
              <NavLink to="/download" className={`${linkClass} px-4 py-2 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-md shadow`}>
                Download App
              </NavLink>
            </nav>

            {/* Mobile hamburger (visible on small screens only) */}
            <div className="md:hidden flex items-center justify-center h-16">
              <button
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
              >
                <div className="w-6 h-6 relative">
                  <span
                    className={`block absolute left-0 right-0 h-0.5 bg-gray-800 transform transition duration-300 ${
                      open ? "rotate-45 translate-y-2.5" : "-translate-y-2"
                    }`}
                  ></span>
                  <span
                    className={`block absolute left-0 right-0 h-0.5 bg-gray-800 transform transition duration-300 ${
                      open ? "opacity-0" : "translate-y-0"
                    }`}
                  ></span>
                  <span
                    className={`block absolute left-0 right-0 h-0.5 bg-gray-800 transform transition duration-300 ${
                      open ? "-rotate-45 -translate-y-2.5" : "translate-y-2"
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile full-screen centered menu */}
      <div
        ref={overlayRef}
        className={`md:hidden fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {/* semi-transparent backdrop */}
        <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`} />

        {/* centered nav panel */}
        <nav
          className={`relative z-10 w-full max-w-md mx-6 bg-white rounded-3xl p-8 shadow-2xl transform transition-transform duration-350 ${
            open ? "scale-100 translate-y-0 opacity-100" : "scale-95 translate-y-6 opacity-0"
          }`}
          aria-label="Mobile menu"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <img src={logoUrl} alt="Logo" className="w-10 h-10 rounded object-contain" />
              <div>
                <div className="font-semibold">o3consulting</div>
                <div className="text-xs text-gray-500">Create · Share · Analyze</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-gray-600 px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-indigo-200">
              Close
            </button>
          </div>

          <ul className="flex flex-col items-center gap-4">
            <li className="w-full">
              <NavLink
                to="/"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block w-full text-center py-3 rounded-lg text-lg ${isActive ? "bg-indigo-50 text-indigo-700" : "text-gray-800 hover:bg-gray-50"}`
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li className="w-full">
              <NavLink
                to="/about"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block w-full text-center py-3 rounded-lg text-lg ${isActive ? "bg-indigo-50 text-indigo-700" : "text-gray-800 hover:bg-gray-50"}`
                }
              >
                About
              </NavLink>
            </li>
            <li className="w-full">
              <NavLink
                to="/contact"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block w-full text-center py-3 rounded-lg text-lg ${isActive ? "bg-indigo-50 text-indigo-700" : "text-gray-800 hover:bg-gray-50"}`
                }
              >
                Contact
              </NavLink>
            </li>
            <li className="w-full">
              <NavLink
                to="/privacy"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block w-full text-center py-3 rounded-lg text-lg ${isActive ? "bg-indigo-50 text-indigo-700" : "text-gray-800 hover:bg-gray-50"}`
                }
              >
                Privacy
              </NavLink>
            </li>
            <li className="w-full">
              <NavLink
                to="/terms"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block w-full text-center py-3 rounded-lg text-lg ${isActive ? "bg-indigo-50 text-indigo-700" : "text-gray-800 hover:bg-gray-50"}`
                }
              >
                Terms
              </NavLink>
            </li>

            <li className="w-full mt-2">
              <NavLink
                to="/download"
                onClick={() => setOpen(false)}
                className="block w-full text-center py-3 rounded-lg text-lg bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-md"
              >
                Download
              </NavLink>
            </li>
          </ul>

          <div className="mt-6 text-center text-sm text-gray-500">
            Follow us — <a className="text-indigo-600">Twitter</a> ·{" "}
            <a className="text-indigo-600">LinkedIn</a> ·{" "}
            <a className="text-indigo-600">Github</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
