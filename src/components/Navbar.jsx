import { useEffect, useState } from "react";

// Navbar Component
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full transition-all duration-1000 z-[999]
          ${scrolled ? "bg-stone-100 shadow-lg" : "bg-transparent"}
        `}
    >
      <div className="flex justify-between items-center px-4 sm:px-8 lg:px-16 py-4 sm:py-6">
        <h2
          className={`text-lg sm:text-xl lg:text-2xl font-bold tracking-wide transition-colors duration-300
              ${scrolled ? "text-black" : "text-white"}
            `}
        >
          BARBER STUDIO
        </h2>

        {/* Desktop Menu */}
        <div
          className={`hidden md:flex gap-6 lg:gap-10 text-base lg:text-lg transition-colors duration-300
              ${scrolled ? "text-black" : "text-white"}
            `}
        >
          <span
            className="cursor-pointer hover:opacity-70"
            onClick={() => {
              const section = document.getElementById("services");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Services
          </span>
          <span
            className="cursor-pointer hover:opacity-70"
            onClick={() => {
              const section = document.getElementById("gallery");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Gallery
          </span>
          <span
            className="cursor-pointer hover:opacity-70"
            onClick={() => {
              const section = document.getElementById("testimonials");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Reviews
          </span>
          <span
            className="cursor-pointer hover:opacity-70"
            onClick={() => {
              const section = document.getElementById("booking");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact
          </span>
        </div>

        <button className="hidden md:block bg-[#E6B31E] text-black px-4 lg:px-6 py-2 lg:py-3 rounded-full font-semibold text-sm lg:text-base hover:opacity-90 transition-opacity">
          Book Now
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden transition-colors duration-300 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          {menuOpen ? (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-stone-100 border-t border-gray-200">
          <div className="flex flex-col items-center gap-4 py-6 text-black">
            <span className="cursor-pointer hover:opacity-70 text-lg">
              Services
            </span>
            <span className="cursor-pointer hover:opacity-70 text-lg">
              Gallery
            </span>
            <span className="cursor-pointer hover:opacity-70 text-lg">
              Reviews
            </span>
            <span className="cursor-pointer hover:opacity-70 text-lg">
              Contact
            </span>
            <button className="bg-[#E6B31E] text-black px-6 py-3 rounded-full font-semibold mt-2">
              Book Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
