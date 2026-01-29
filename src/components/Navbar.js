import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <header className="fixed top-0 z-[999] w-full">
      <div
        className={`transition-all duration-300
    ${scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"}`}
      >
        <div className="mx-auto flex h-[90px] max-w-[1400px] items-center justify-between px-4 md:px-8">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-20 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-10">
            {[
              ["HOME", "/"],
              ["ABOUT", "/about"],
              ["SERVICES", "/services"],
              ["TOUR PACKAGES", "/tour-packages"],
              ["CONTACT", "/contact"],
            ].map(([label, path]) => (
              <NavLink
                key={label}
                to={path}
                className={({ isActive }) =>
                  `relative px-2 py-1 font-semibold tracking-wide transition
        ${isActive ? "text-[#facc15]" : "text-white hover:text-[#facc15]"}`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    {isActive && (
                      <span className="absolute left-0 -bottom-2 h-[2px] w-full bg-[#facc15]" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Social Icons – Desktop */}
          <div className="hidden lg:flex items-center gap-4 text-[#facc15]">
            <a href="#" className="hover:scale-110 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:scale-110 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:scale-110 transition">
              <FaYoutube />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white lg:hidden"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-md">
          <ul className="flex flex-col text-white">
            {[
              ["HOME", "/"],
              ["ABOUT", "/about"],
              ["SERVICES", "/services"],
              ["TOUR PACKAGES", "/tour-packages"],
              ["CONTACT", "/contact"],
            ].map(([label, path]) => (
              <li key={label}>
                <Link
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-white/10 px-6 py-4 text-sm font-semibold hover:text-[#facc15]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Socials */}
          <div className="flex justify-center gap-6 py-4 text-[#facc15]">
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
      )}
    </header>
  );
}
