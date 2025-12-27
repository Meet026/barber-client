export default function WhyDifferent() {
  return (
    <section className="bg-[#1B1B1B] text-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto text-center px-4 sm:px-6">
        <p className="text-[#E6B31E] tracking-[2px] sm:tracking-[3px] mb-8 sm:mb-10 text-sm sm:text-base">
          WHY WE'RE DIFFERENT
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Card 1 */}
          <div className="px-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full border-2 border-[#E6B31E] mb-4 sm:mb-6"></div>
            <h3 className="font-bold text-base sm:text-lg">Master Barbers</h3>
            <p className="text-gray-400 mt-2 text-sm sm:text-base">
              10+ years of experience crafting the perfect cut for every client
            </p>
          </div>

          {/* Card 2 */}
          <div className="px-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full border-2 border-[#E6B31E] mb-4 sm:mb-6"></div>
            <h3 className="font-bold text-base sm:text-lg">
              Premium Standards
            </h3>
            <p className="text-gray-400 mt-2 text-sm sm:text-base">
              Sterilized tools, spotless environment, top hygiene protocols
            </p>
          </div>

          {/* Card 3 */}
          <div className="px-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full border-2 border-[#E6B31E] mb-4 sm:mb-6"></div>
            <h3 className="font-bold text-base sm:text-lg">
              Precision Craftsmanship
            </h3>
            <p className="text-gray-400 mt-2 text-sm sm:text-base">
              Sharp fades, clean lines, and attention to detail
            </p>
          </div>

          {/* Card 4 */}
          <div className="px-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full border-2 border-[#E6B31E] mb-4 sm:mb-6"></div>
            <h3 className="font-bold text-base sm:text-lg">
              Relaxed Atmosphere
            </h3>
            <p className="text-gray-400 mt-2 text-sm sm:text-base">
              No rush, quality time, exceptional service
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
