import storyPhoto from "../assets/barber-scissor.jpg";

export default function OurStory() {
  return (
    <section className="w-full bg-[#111111] py-16 sm:py-24 lg:py-36">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20 px-4 sm:px-6 items-center">
        {/* LEFT TEXT */}
        <div className="text-white">
          <p className="text-[#E6B31E] tracking-[2px] sm:tracking-[3px] text-xs sm:text-sm mb-3 sm:mb-4">
            OUR STORY
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug mb-6 sm:mb-8">
            Craftsmanship Meets Community
          </h2>

          <p className="text-gray-300 leading-relaxed mb-4 sm:mb-5 text-base sm:text-lg">
            Founded with a passion for the timeless art of barbering, Elite
            Barber Studio represents more than just a place to get a haircut.
            We're a destination where traditional craftsmanship meets modern
            style.
          </p>

          <p className="text-gray-300 leading-relaxed mb-4 sm:mb-5 text-base sm:text-lg">
            Our master barbers bring decades of experience. Every service
            reflects precision, creativity and true dedication to the craft.
          </p>

          <p className="text-gray-300 leading-relaxed mb-5 sm:mb-7 text-base sm:text-lg">
            Every client becomes part of our community. We learn your style,
            your lifestyle, and deliver results that simply feel right.
          </p>

          <div className="flex items-start gap-2 sm:gap-3 mt-3 sm:mt-4">
            <div className="w-[2px] sm:w-[3px] h-7 sm:h-9 bg-[#E6B31E] flex-shrink-0" />
            <p className="italic text-[#E6B31E] text-base sm:text-lg lg:text-xl">
              "Every cut tells a story"
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
          {/* GOLD BORDER IMAGE */}
          <div className="border-[3px] sm:border-[4px] lg:border-[5px] border-[#E6B31E] rounded-lg sm:rounded-xl overflow-hidden w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[480px] aspect-[3/4]">
            <img
              src={storyPhoto}
              className="w-full h-full object-cover grayscale"
              alt="Barber craftsmanship"
            />
          </div>

          {/* STATS CARD */}
          <div className="absolute -bottom-6 sm:-bottom-8 lg:-bottom-10 left-1/2 -translate-x-1/2 lg:left-4 lg:translate-x-0 bg-white shadow-2xl rounded-lg sm:rounded-xl px-6 sm:px-8 py-5 sm:py-7 flex gap-4 sm:gap-6 items-center w-[calc(100%-2rem)] sm:w-auto max-w-[340px]">
            <div className="text-center flex-1 sm:flex-initial">
              <p className="text-xl sm:text-2xl font-bold text-black">10+</p>
              <p className="text-gray-600 text-xs sm:text-sm">
                Years Experience
              </p>
            </div>

            <div className="w-[1px] h-10 bg-gray-200" />

            <div className="text-center flex-1 sm:flex-initial">
              <p className="text-xl sm:text-2xl font-bold text-black">500+</p>
              <p className="text-gray-600 text-xs sm:text-sm">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
