export default function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full min-h-screen flex flex-col lg:flex-row"
    >
      {/* LEFT PANEL */}
      <div className="w-full lg:w-1/2 bg-[#F6F2E9] flex items-center py-12 sm:py-16 lg:py-0">
        <div className="px-6 sm:px-12 lg:px-16 xl:px-24 w-full">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1C1C1C] mb-4 sm:mb-6">
            Our Services
          </h2>

          <div className="w-12 sm:w-16 h-[2px] bg-[#E6B31E] mb-6 sm:mb-8"></div>

          <p className="text-[#555] text-base sm:text-lg leading-relaxed max-w-md">
            Tailored grooming for the modern gentleman. Each service is crafted
            with precision and care.
          </p>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-full lg:w-1/2 bg-[#121212] flex items-center justify-center py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 px-6 sm:px-8 lg:px-12">
          {/* CARD 1 */}
          <ServiceCard
            title="Signature Haircut"
            price="$45"
            features={[
              "Consultation & styling advice",
              "Precision cut with hot towel finish",
              "Complimentary beard trim",
            ]}
          />

          {/* CARD 2 */}
          <ServiceCard
            title="Beard Sculpting"
            price="$30"
            features={[
              "Professional beard shaping",
              "Hot towel treatment",
              "Beard oil application",
            ]}
          />

          {/* CARD 3 */}
          <ServiceCard
            title="Premium Fade"
            price="$55"
            features={[
              "Skin fade or taper fade",
              "Detailed line work",
              "Styling with premium products",
            ]}
          />

          {/* CARD 4 */}
          <ServiceCard
            title="Full Grooming Package"
            price="$85"
            features={[
              "Complete haircut & beard service",
              "Hot towel shave",
              "Eyebrow trimming & styling",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, price, features }) {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 w-full max-w-[320px] mx-auto sm:mx-0 shadow-lg">
      <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#111]">
        {title}
      </h3>

      <ul className="text-sm text-[#555] space-y-2 mb-4 sm:mb-6">
        {features.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div className="flex items-center justify-between">
        <span className="text-xl sm:text-2xl font-bold text-[#E6B31E]">
          {price}
        </span>

        <button className="text-sm underline text-[#111] hover:text-[#E6B31E] transition">
          Book This
        </button>
      </div>
    </div>
  );
}
