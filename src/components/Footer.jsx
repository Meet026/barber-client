export default function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-16 pb-10 mt-0">
      {/* Center Content */}
      <div className="max-w-[1200px] mx-auto text-center px-6">
        {/* Brand */}
        <h2 className="text-lg sm:text-xl font-serif font-bold">Elite Barber Studio</h2>

        <p className="text-gray-400 mt-2 text-[10px] sm:text-xs">
          Premium grooming for the modern man
        </p>

        {/* ICON CIRCLES */}
        <div className="flex justify-center gap-5 mt-6">
          <CircleIcon />
          <CircleIcon />
          <CircleIcon />
        </div>

        {/* LINKS */}
        <div className="flex justify-center gap-5 mt-6 text-[10px] sm:text-xs">
          <a href="#" className="text-gray-400 hover:text-gold transition">
            Privacy Policy
          </a>

          <span className="text-gray-600">|</span>

          <a href="#" className="text-gray-400 hover:text-gold transition">
            Terms of Service
          </a>

          <span className="text-gray-600">|</span>

          <a href="#" className="text-gray-400 hover:text-gold transition">
            Website Builder
          </a>
        </div>

        {/* COPYRIGHT */}
        <p className="text-gray-500 text-[10px] sm:text-[10px] mt-6">
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
      className="w-10 h-10 rounded-full border border-gold 
      flex items-center justify-center cursor-pointer hover:bg-gold/10 transition"
    >
      {/* Optional icon inside later */}
    </div>
  );
}
