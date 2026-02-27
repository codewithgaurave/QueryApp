import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../public/Logo.svg";

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
    "text-sm px-3 py-2 rounded transition-colors duration-200 " +
    (isActive
      ? "bg-indigo-50 text-indigo-700 font-medium"
      : "text-gray-700 hover:text-indigo-700 hover:bg-gray-50");

  return (
    <header className="sticky top-0 z-40 bg-transparent">
      {/* Minimal header bar (mobile + desktop) */}
      <div className="bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* Left: logo */}
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-contain"
              />
              {/* desktop brand (hidden on mobile) */}
              <div className="hidden sm:block">
                <NavLink to="/" className="text-lg font-semibold text-gray-900">
                  o3consulting
                </NavLink>
                <div className="text-xs text-gray-500">
                  Create · Share · Analyze
                </div>
              </div>
            </div>

            {/* CENTERED company name for mobile */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:static sm:transform-none sm:left-auto sm:top-auto sm:translate-x-0 sm:translate-y-0">
              <NavLink
                to="/"
                className="text-lg font-semibold text-gray-800 block sm:hidden text-center"
              >
                o3consulting
              </NavLink>
            </div>

            {/* Desktop nav (visible on md+) */}
            <nav className="hidden md:flex items-center gap-1">
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
              <NavLink
                to="/download"
                className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-md shadow hover:shadow-md transition-shadow duration-200 ml-2"
              >
                Download App
              </NavLink>
            </nav>

            {/* Tablet nav (visible on sm to md) */}
            <nav className="hidden sm:flex md:hidden items-center gap-1">
              <NavLink to="/" className={linkClass} end>
                Home
              </NavLink>
              <NavLink to="/about" className={linkClass}>
                About
              </NavLink>
              <NavLink
                to="/download"
                className="px-3 py-2 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white rounded-md shadow hover:shadow-md transition-shadow duration-200 ml-2 text-sm"
              >
                Download
              </NavLink>
            </nav>

            {/* Mobile hamburger (visible on small screens only) */}
            <div className="sm:hidden flex items-center justify-center h-16">
              <button
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-colors duration-200"
              >
                <div className="w-6 h-6 relative">
                  <span
                    className={`block absolute left-0 right-0 h-0.5 bg-gray-800 transform transition duration-300 ${
                      open ? "rotate-45 translate-y-2" : "-translate-y-2"
                    }`}
                  ></span>
                  <span
                    className={`block absolute left-0 right-0 h-0.5 bg-gray-800 transform transition duration-300 ${
                      open ? "opacity-0" : "translate-y-0"
                    }`}
                  ></span>
                  <span
                    className={`block absolute left-0 right-0 h-0.5 bg-gray-800 transform transition duration-300 ${
                      open
                        ? "-rotate-45 -translate-y-0.1 top-2"
                        : "translate-y-2"
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
        className={`sm:hidden fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {/* semi-transparent backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        />

        {/* centered nav panel */}
        <nav
          className={`relative z-10 w-full max-w-sm mx-4 bg-white rounded-2xl p-6 shadow-2xl transform transition-all duration-300 ${
            open
              ? "scale-100 translate-y-0 opacity-100"
              : "scale-95 translate-y-6 opacity-0"
          }`}
          aria-label="Mobile menu"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Logo"
                className="w-10 h-10 rounded object-contain"
              />
              <div>
                <div className="font-semibold text-gray-900">o3consulting</div>
                <div className="text-xs text-gray-500">
                  Create · Share · Analyze
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-600 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <ul className="flex flex-col items-center gap-3">
            <li className="w-full">
              <NavLink
                to="/"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block w-full text-center py-3 rounded-lg text-base transition-colors duration-200 ${
                    isActive
                      ? "bg-indigo-50 text-indigo-700 font-medium"
                      : "text-gray-800 hover:bg-gray-50"
                  }`
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
                  `block w-full text-center py-3 rounded-lg text-base transition-colors duration-200 ${
                    isActive
                      ? "bg-indigo-50 text-indigo-700 font-medium"
                      : "text-gray-800 hover:bg-gray-50"
                  }`
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
                  `block w-full text-center py-3 rounded-lg text-base transition-colors duration-200 ${
                    isActive
                      ? "bg-indigo-50 text-indigo-700 font-medium"
                      : "text-gray-800 hover:bg-gray-50"
                  }`
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
                  `block w-full text-center py-3 rounded-lg text-base transition-colors duration-200 ${
                    isActive
                      ? "bg-indigo-50 text-indigo-700 font-medium"
                      : "text-gray-800 hover:bg-gray-50"
                  }`
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
                  `block w-full text-center py-3 rounded-lg text-base transition-colors duration-200 ${
                    isActive
                      ? "bg-indigo-50 text-indigo-700 font-medium"
                      : "text-gray-800 hover:bg-gray-50"
                  }`
                }
              >
                Terms
              </NavLink>
            </li>

            <li className="w-full mt-2">
              <NavLink
                to="/download"
                onClick={() => setOpen(false)}
                className="block w-full text-center py-3 rounded-lg text-base bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-md hover:shadow-lg transition-all duration-200 font-medium"
              >
                Download App
              </NavLink>
            </li>
          </ul>

          <div className="mt-6 text-center text-sm text-gray-500 pt-4 border-t border-gray-100">
            Follow us —{" "}
            <a className="text-indigo-600 hover:text-indigo-700 transition-colors duration-200">
              Twitter
            </a>{" "}
            ·{" "}
            <a className="text-indigo-600 hover:text-indigo-700 transition-colors duration-200">
              LinkedIn
            </a>{" "}
            ·{" "}
            <a className="text-indigo-600 hover:text-indigo-700 transition-colors duration-200">
              Github
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
