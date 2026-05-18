import { FaGlobe, FaEuroSign, FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const sections = [
  {
    title: "Support",
    links: ["Help", "Help Center", "Report a problem"],
  },
  {
    title: "Become a host",
    links: ["Offer a place", "Offer an experience", "Host resources"],
  },
  {
    title: "About",
    links: ["How it works", "Careers", "Press"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-6 pb-2 mt-8 text-xs">
      <div className="w-full sm:w-full md:max-w-6xl md:mx-auto flex flex-col gap-6 px-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          {sections.map((section) => (
            <div key={section.title}>
              <div className="font-semibold mb-2">{section.title}</div>
              <ul className="space-y-1">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:underline text-gray-600">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <hr className="my-2 border-gray-200" />
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-2">
            <button className="flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-100">
              <FaGlobe className="inline" />
              English
            </button>
            <button className="flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-100">
              <FaEuroSign className="inline" />
              EUR
            </button>
          </div>
          <div className="flex gap-3 text-gray-500 text-lg">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Twitter"><FaXTwitter /></a>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-gray-400 text-[11px]">
          <span>© 2026 Alexbnb</span>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <span>Legal information</span>
        </div>
      </div>
    </footer>
  );
}
