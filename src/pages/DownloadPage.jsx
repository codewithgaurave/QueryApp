import React, { useState } from "react";

const APK_PATH = "/mnt/data/YourApp.apk";
const LOGO_URL = "/mnt/data/Logo SVG.svg";

// Replace with your real links
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.o3consulting.app";
const APP_STORE_URL = "https://apps.apple.com/app/idXXXXXX";

export default function DownloadPage() {
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  const handleApkDownload = () => {
    if (downloading) return;

    setDownloading(true);
    setProgress(0);
    setDone(false);

    let p = 0;
    const interval = setInterval(() => {
      p += Math.floor(Math.random() * 10) + 8;
      if (p >= 98) p = 98;
      setProgress(p);
    }, 170);

    setTimeout(() => {
      clearInterval(interval);
      setProgress(100);

      const a = document.createElement("a");
      a.href = APK_PATH;
      a.setAttribute("download", "");
      document.body.appendChild(a);
      a.click();
      a.remove();

      setTimeout(() => {
        setDownloading(false);
        setDone(true);
        setTimeout(() => setDone(false), 3500);
      }, 700);
    }, 1400 + Math.random() * 1000);
  };

  const openExternal = (url) => window.open(url, "_blank");

  return (
    <section className="relative max-w-6xl mx-auto px-6 py-20">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(600px 200px at 10% 10%, rgba(99,102,241,0.06), transparent), radial-gradient(500px 200px at 90% 85%, rgba(6,182,212,0.05), transparent)",
        }}
      ></div>

      <img
        src={LOGO_URL}
        className="absolute right-0 top-10 w-56 opacity-5 -z-10 hidden lg:block"
        alt=""
      />

      {/* Updated Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          Download Query Survey App
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Make field survey easy, fast and accurate with our dedicated mobile application.
        </p>
        
        {/* Features Grid */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <div className="flex items-center gap-2 justify-center p-3 bg-blue-50 rounded-lg">
            <span className="text-blue-600">⚡</span>
            <span className="text-sm font-medium text-gray-700">Android Version</span>
          </div>
          <div className="flex items-center gap-2 justify-center p-3 bg-green-50 rounded-lg">
            <span className="text-green-600">📱</span>
            <span className="text-sm font-medium text-gray-700">Lightweight & Fast</span>
          </div>
          <div className="flex items-center gap-2 justify-center p-3 bg-purple-50 rounded-lg">
            <span className="text-purple-600">📶</span>
            <span className="text-sm font-medium text-gray-700">Works Offline</span>
          </div>
          <div className="flex items-center gap-2 justify-center p-3 bg-red-50 rounded-lg">
            <span className="text-red-600">🔐</span>
            <span className="text-sm font-medium text-gray-700">100% Secure</span>
          </div>
        </div>
      </header>

      <div className="grid gap-8 md:grid-cols-3">
        {/* APK DOWNLOAD */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:-translate-y-1 transition border border-gray-100">
          <div className="flex items-center gap-3">
            {/* APK ICON */}
            <div className="w-14 h-14 rounded-xl bg-yellow-400 flex items-center justify-center shadow text-white">
              <svg width="28" height="28" fill="white" viewBox="0 0 24 24">
                <path d="M3 6l9-4 9 4v6c0 5-3.5 9.74-9 12-5.5-2.26-9-7-9-12V6zm9 14.3c4.06-1.83 7-5.73 7-9.3V7l-7-3.11L5 7v4c0 3.57 2.94 7.47 7 9.3z"/>
              </svg>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Download APK</h3>
              <p className="text-sm text-gray-500">
                Install via APK (manual installation).
              </p>
            </div>
          </div>

          <button
            onClick={handleApkDownload}
            disabled={downloading}
            className={`w-full mt-6 px-4 py-3 rounded-lg text-white shadow-md flex items-center justify-center gap-3 transition ${
              downloading
                ? "bg-blue-500 cursor-wait"
                : "bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105"
            }`}
          >
            {downloading ? (
              <svg
                className="animate-spin h-5 w-5 text-white"
                viewBox="0 0 24 24"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="white"
                  strokeWidth="3"
                  fill="none"
                  className="opacity-30"
                ></circle>
                <path
                  fill="white"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            ) : (
              <svg
                className="h-5 w-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 3v12" strokeLinecap="round" />
                <path d="M8 11l4 4 4-4" strokeLinecap="round" />
                <path d="M21 21H3" strokeLinecap="round" />
              </svg>
            )}

            {downloading ? `Downloading (${progress}%)` : "Download APK"}
          </button>

          {/* progress bar */}
          <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="text-xs text-gray-500 mt-2">
            {done
              ? "Download started — check your downloads folder."
              : downloading
              ? `${progress}% completed`
              : ""}
          </div>
        </div>

        {/* ANDROID PLAY STORE */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:-translate-y-1 transition border border-gray-100">
          <div className="flex items-center gap-3">
            {/* Android Icon */}
            <div className="w-14 h-14 rounded-xl bg-green-600 flex items-center justify-center shadow">
              <svg
                viewBox="0 0 24 24"
                width="28"
                height="28"
                fill="white"
              >
                <path d="M17.523 9.75H6.477a.477.477 0 00-.477.477v6.215a.477.477 0 00.477.477h11.046a.477.477 0 00.477-.477v-6.215a.477.477 0 00-.477-.477zm-9.06 5.17a.756.756 0 110-1.512.756.756 0 010 1.512zm7.074 0a.756.756 0 110-1.512.756.756 0 010 1.512z"/>
                <path d="M7.843 7.593L6.414 5.164a.477.477 0 11.826-.502l1.44 2.376a7.54 7.54 0 017.64 0l1.44-2.376a.477.477 0 11.826.502l-1.429 2.43A7.95 7.95 0 0112 6.75a7.95 7.95 0 01-4.157.843z"/>
              </svg>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Android App</h3>
              <p className="text-sm text-gray-500">Install via Play Store.</p>
            </div>
          </div>

          <button
            onClick={() => openExternal(PLAY_STORE_URL)}
            className="mt-6 w-full px-4 py-3 rounded-lg bg-white border border-gray-200 hover:shadow flex items-center justify-center gap-3 hover:bg-green-50 transition-colors"
          >
            <span className="text-green-600 font-medium">Open Play Store</span>
          </button>
        </div>

        {/* IOS APP STORE */}
        <div className="bg-white p-6 rounded-2xl shadow-lg hover:-translate-y-1 transition border border-gray-100">
          <div className="flex items-center gap-3">
            {/* Apple Icon */}
            <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center shadow">
              <svg
                width="26"
                height="26"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M16.365 1.43c-.95.09-2.13.65-2.82 1.45-.62.72-1.16 1.87-.96 2.96 1.05.06 2.26-.65 2.88-1.45.64-.83 1.18-1.88.9-2.96z" />
                <path d="M20.2 7.35c-1.05-.02-2.38.7-3.14 1.6-.69.83-1.3 2.04-1.12 3.25.05.38.28.7.6.85.4.2.85.04 1.5-.4.8-.5 1.6-1.4 2.18-2.2.47-.64.86-1.45.0-2.1z" />
                <path d="M12.03 5.53c-2.3 0-3.52 1.57-3.52 1.57s-1.21 1.57-1.21 3.86c0 3.55 2.93 6.7 4.73 6.7 1.54 0 1.98-.93 3.72-.93 1.68 0 2.14.93 3.72.93 1.82 0 4.53-3.08 4.53-6.58 0-3.6-2.3-5.18-3.2-5.74-.9-.56-1.86-.79-2.78-.79-1.58 0-2.48.79-3.65.79-1.24 0-2.06-.79-3.65-.79z" />
              </svg>
            </div>

            <div>
              <h3 className="text-lg font-semibold">iOS App</h3>
              <p className="text-sm text-gray-500">Install on iPhone / iPad.</p>
            </div>
          </div>

          <button
            onClick={() => openExternal(APP_STORE_URL)}
            className="mt-6 w-full px-4 py-3 rounded-lg bg-white border border-gray-200 hover:shadow flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors"
          >
            <span className="text-gray-900 font-medium">Open App Store</span>
          </button>
        </div>
      </div>

      {/* Additional Info Section */}
      {/* <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Query Survey App?</h3>
        <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700">
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Offline Data Collection</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>GPS Location Tracking</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Secure Data Encryption</span>
          </div>
        </div>
      </div> */}

      {done && (
        <div className="mt-8 text-center text-green-600 font-medium">
          APK download started — check your downloads.
        </div>
      )}
    </section>
  );
}