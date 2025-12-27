import { Award, ShieldCheck, Scissors, Sparkles } from "lucide-react";

export default function WhyDifferent() {
  return (
    <section className="bg-[#1B1B1B] text-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto text-center px-4 sm:px-6">
        <p className="text-[#E6B31E] tracking-[2px] sm:tracking-[3px] mb-12 sm:mb-14 lg:mb-16 text-xs sm:text-sm">
          WHY WE'RE DIFFERENT
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Card 1 */}
          <div className="px-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full border-2 border-[#E6B31E] mb-4 sm:mb-6 flex items-center justify-center">
              <Award
                className="w-6 h-6 sm:w-7 sm:h-7 text-[#E6B31E]"
                strokeWidth={1.5}
              />
            </div>
            <h3 className="font-bold text-sm sm:text-base">Master Barbers</h3>
            <p className="text-gray-400 mt-2 text-xs sm:text-sm">
              10+ years of experience crafting the perfect cut for every client
            </p>
          </div>

          {/* Card 2 */}
          <div className="px-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full border-2 border-[#E6B31E] mb-4 sm:mb-6 flex items-center justify-center">
              <ShieldCheck
                className="w-6 h-6 sm:w-7 sm:h-7 text-[#E6B31E]"
                strokeWidth={1.5}
              />
            </div>
            <h3 className="font-bold text-sm sm:text-base">
              Premium Standards
            </h3>
            <p className="text-gray-400 mt-2 text-xs sm:text-sm">
              Sterilized tools, spotless environment, top hygiene protocols
            </p>
          </div>

          {/* Card 3 */}
          <div className="px-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full border-2 border-[#E6B31E] mb-4 sm:mb-6 flex items-center justify-center">
              <Scissors
                className="w-6 h-6 sm:w-7 sm:h-7 text-[#E6B31E]"
                strokeWidth={1.5}
              />
            </div>
            <h3 className="font-bold text-sm sm:text-base">
              Precision Craftsmanship
            </h3>
            <p className="text-gray-400 mt-2 text-xs sm:text-sm">
              Sharp fades, clean lines, and attention to detail
            </p>
          </div>

          {/* Card 4 */}
          <div className="px-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full border-2 border-[#E6B31E] mb-4 sm:mb-6 flex items-center justify-center">
              <Sparkles
                className="w-6 h-6 sm:w-7 sm:h-7 text-[#E6B31E]"
                strokeWidth={1.5}
              />
            </div>
            <h3 className="font-bold text-sm sm:text-base">
              Relaxed Atmosphere
            </h3>
            <p className="text-gray-400 mt-2 text-xs sm:text-sm">
              No rush, quality time, exceptional service
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
