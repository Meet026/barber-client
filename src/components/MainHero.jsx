import backgroundImage from "../assets/barber.jpg";
export default function MainHero() {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <img
        src={backgroundImage}
        className="absolute inset-0 w-full h-full object-cover"
        alt="Barbershop"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0F0F0F]/70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          Premium Men's <br /> Grooming Experience
        </h1>

        <p className="text-[#EDE6D9] text-xs sm:text-sm lg:text-base mt-4 max-w-2xl">
          Expert cuts. Precision fades. Unmatched attention to detail.
        </p>

        <div className="mt-8 flex gap-3 sm:gap-6">
          <button className="bg-[#E6B31E] text-black px-4 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-xs sm:text-base shadow-lg hover:scale-105 transition">
            Book Appointment
          </button>

          <button className="border-2 border-white text-white px-4 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-xs sm:text-base hover:bg-white hover:text-black transition">
            View Our Work
          </button>
        </div>
      </div>
    </div>
  );
}