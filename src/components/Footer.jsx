export default function Footer() {
  return (
    <footer className="w-full bg-[#0C0C0C] text-white pt-20 pb-12 mt-0">
      {/* Center Content */}
      <div className="max-w-[1200px] mx-auto text-center px-6">
        {/* Brand */}
        <h2 className="text-2xl font-bold">Elite Barber Studio</h2>

        <p className="text-gray-400 mt-2 text-sm">
          Premium grooming for the modern man
        </p>

        {/* ICON CIRCLES */}
        <div className="flex justify-center gap-6 mt-8">
          <CircleIcon />
          <CircleIcon />
          <CircleIcon />
        </div>

        {/* LINKS */}
        <div className="flex justify-center gap-6 mt-8 text-sm">
          <a href="#" className="text-gray-400 hover:text-[#E6B31E] transition">
            Privacy Policy
          </a>

          <span className="text-gray-600">|</span>

          <a href="#" className="text-gray-400 hover:text-[#E6B31E] transition">
            Terms of Service
          </a>

          <span className="text-gray-600">|</span>

          <a href="#" className="text-gray-400 hover:text-[#E6B31E] transition">
            Website Builder
          </a>
        </div>

        {/* COPYRIGHT */}
        <p className="text-gray-500 text-sm mt-6">
          © 2025 Elite Barber Studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ----------------------------- */
/* Circle Icon Component */
/* ----------------------------- */
function CircleIcon() {
  return (
    <div
      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#E6B31E] 
      flex items-center justify-center cursor-pointer hover:bg-[#E6B31E]/10 transition"
    >
      {/* Optional icon inside later */}
    </div>
  );
}
