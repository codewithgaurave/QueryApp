import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <div className="text-2xl font-semibold">o3consulting</div>
          <p className="text-gray-400 mt-2 text-sm">Build surveys. Get insights. Improve decisions.</p>
          <div className="flex gap-3 mt-4">
            <a className="text-gray-400 hover:text-white">Twitter</a>
            <a className="text-gray-400 hover:text-white">LinkedIn</a>
            <a className="text-gray-400 hover:text-white">Github</a>
          </div>
        </div>

        <div>
          <h5 className="font-semibold mb-3">Product</h5>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Templates</li>
            <li>Integrations</li>
            <li>Pricing</li>
            <li>Roadmap</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-3">Company</h5>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>About</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-3">Stay updated</h5>
          <p className="text-sm text-gray-400 mb-3">Subscribe for product updates & tips.</p>
          <form className="flex gap-2">
            <input className="flex-1 p-2 rounded-l-md text-sm" placeholder="Your email" />
            <button className="px-4 bg-indigo-600 rounded-r-md text-white text-sm">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <div>© {new Date().getFullYear()} o3consulting — Design by digicoders Team.</div>
          <div className="flex gap-4 mt-3 md:mt-0">
            <a className="hover:text-white">Privacy</a>
            <a className="hover:text-white">Terms</a>
            <a className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
