import { getReviewSchema } from "../utils/seo.js";

export default function Testimonials() {
  const reviews = [
    {
      author: "Marcus T.",
      text: "Best fade I've ever had. Clean shop, skilled hands, fair price. Been coming here for two years now and never disappointed.",
      date: "2023-01-15"
    },
    {
      author: "James K.",
      text: "These guys know what they're doing. No small talk unless you want it. Just quality work and attention to detail every time.",
      date: "2023-03-20"
    },
    {
      author: "David R.",
      text: "Finally found a barber who gets it right every time. Worth every dollar. The atmosphere is relaxed and professional.",
      date: "2024-06-10"
    }
  ];

  const reviewSchema = getReviewSchema(reviews);

  return (
    <>
      {/* Review Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(reviewSchema)
      }} />
    
      <section
      id="testimonials"
      className="bg-[#1B1B1B] text-white py-12 sm:py-20 lg:py-24"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold">What Our Clients Say</h2>

        <div className="flex justify-center mt-3 sm:mt-4">
          <div className="w-16 sm:w-20 h-[2px] bg-[#E6B31E]" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-12 lg:mt-14">
          {/* Card 1 */}
          <div className="bg-[#2A2A2A] p-6 sm:p-8 rounded-xl sm:rounded-2xl text-left">
            <p className="italic leading-relaxed text-xs sm:text-sm">
              "Best fade I've ever had. Clean shop, skilled hands, fair price.
              Been coming here for two years now and never disappointed."
            </p>

            <div className="flex items-center gap-3 sm:gap-4 mt-5 sm:mt-6">
              <img
                src="https://i.pravatar.cc/60?img=13"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                alt="Marcus T."
              />
              <div>
                <h4 className="font-bold text-xs sm:text-sm">Marcus T.</h4>
                <p className="text-[#E6B31E] text-[10px] sm:text-xs">
                  Regular client since 2023
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#2A2A2A] p-6 sm:p-8 rounded-xl sm:rounded-2xl text-left">
            <p className="italic leading-relaxed text-xs sm:text-sm">
              "These guys know what they're doing. No small talk unless you want
              it. Just quality work and attention to detail every time."
            </p>

            <div className="flex items-center gap-3 sm:gap-4 mt-5 sm:mt-6">
              <img
                src="https://i.pravatar.cc/60?img=32"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                alt="James K."
              />
              <div>
                <h4 className="font-bold text-xs sm:text-sm">James K.</h4>
                <p className="text-[#E6B31E] text-[10px] sm:text-xs">
                  Monthly appointments
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#2A2A2A] p-6 sm:p-8 rounded-xl sm:rounded-2xl text-left">
            <p className="italic leading-relaxed text-xs sm:text-sm">
              "Finally found a barber who gets it right every time. Worth every
              dollar. The atmosphere is relaxed and professional."
            </p>

            <div className="flex items-center gap-3 sm:gap-4 mt-5 sm:mt-6">
              <img
                src="https://i.pravatar.cc/60?img=56"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                alt="David R."
              />
              <div>
                <h4 className="font-bold text-xs sm:text-sm">David R.</h4>
                <p className="text-[#E6B31E] text-[10px] sm:text-xs">
                  Client for 18 months
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 lg:gap-16 text-gray-300 mt-10 sm:mt-12 lg:mt-14 text-[10px] sm:text-xs lg:text-sm">
          <span>⭐ 4.9/5 Rating</span>
          <span>🏆 500+ Happy Clients</span>
          <span>💈 10+ Years Experience</span>
        </div>
      </div>
    </section>
    </>
  );
}
