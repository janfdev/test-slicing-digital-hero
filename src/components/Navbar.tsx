import Arrowright from "../assets/icons/arrow-right.svg";
import Logo from "../assets/images/logo_dg.png";
import { CircleChevronUpIcon, CircleChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";

const navItems = [
  {
    title: "About Us",
    subItems: [
      { label: "About Us", href: "/" },
      { label: "Community", href: "/community" }
    ]
  },
  {
    title: "Portal News",
    subItems: [
      { label: "Upcoming Event", href: "/news/upcoming-event" },
      { label: "AI News", href: "/news/ai" },
      { label: "Community News", href: "/news/community" }
    ]
  },
  {
    title: "Games & Tools",
    subItems: [
      { label: "How Good is Your Prompting?", href: "/tools/prompt" },
      { label: "Speech to Text", href: "/tools/speech-to-text" }
    ]
  },
  {
    title: "Partnership",
    subItems: [
      { label: "Testimonial", href: "#testimonial" },
      { label: "Get in Touch", href: "#getInTouch" }
    ]
  }
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const location = useLocation();

  const handleToggle = (title: string) => {
    setOpenMenu(openMenu === title ? null : title);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm px-8 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <img src={Logo} alt="logo" className="h-10 object-contain" />
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-8 relative">
        {navItems.map((item) => {
          const activeSub = item.subItems.find(
            (sub) => location.pathname === sub.href
          );
          const isParentActive = Boolean(activeSub);
          const surfaceLabel = activeSub?.label ?? item.title;
          const surfaceHref = activeSub?.href;

          return (
            <div key={item.title} className="relative flex flex-col">
              <div className="flex items-center gap-2">
                {surfaceHref ? (
                  <Link
                    to={surfaceHref}
                    className={`font-medium transition-colors ${
                      isParentActive ? "text-blue-800" : "text-gray-800"
                    }`}
                  >
                    {surfaceLabel}
                  </Link>
                ) : (
                  <h2
                    className={`font-medium transition-colors ${
                      isParentActive ? "text-blue-800" : "text-gray-800"
                    }`}
                  >
                    {surfaceLabel}
                  </h2>
                )}

                <button
                  onClick={() => handleToggle(item.title)}
                  className="flex items-center justify-center focus:outline-none"
                  aria-expanded={openMenu === item.title}
                  aria-label={`Toggle ${item.title}`}
                >
                  {openMenu === item.title ? (
                    <CircleChevronUpIcon className="w-4 h-4 text-gray-800" />
                  ) : (
                    <CircleChevronDownIcon className="w-4 h-4 text-gray-800" />
                  )}
                </button>
              </div>

              {/* Dropdown */}
              {openMenu === item.title && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white/90 backdrop-blur-md rounded-lg shadow-md border border-gray-100 py-2 animate-fade-in">
                  {item.subItems.map((sub) => {
                    const isActive = location.pathname === sub.href;
                    return (
                      <Link
                        key={sub.label}
                        to={sub.href}
                        className={`block px-4 py-2 text-sm transition rounded-md ${
                          isActive
                            ? "text-blue-800 bg-blue-50"
                            : "text-gray-700 hover:bg-gray-100 hover:text-blue-800"
                        }`}
                        onClick={() => setOpenMenu(null)} // opsional: tutup setelah klik
                      >
                        {sub.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* Action */}
      <div className="flex items-center gap-2">
        <a href="/signin" className="text-gray-700 hover:text-blue-800">
          Sign in
        </a>
        <button className="flex items-center py-2 px-2 gap-2 text-blue-800 border-2 border-blue-800 rounded-xl">
          <p>Get Started</p>
          <img
            src={Arrowright}
            className="text-blue-800 bg-slate-200 rounded-full p-[2px]"
            alt=""
          />
        </button>
      </div>
    </header>
  );
}
