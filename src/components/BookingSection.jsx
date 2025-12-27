export default function BookingSection() {
  return (
    <section id="booking" className="bg-[#F6F1E6] py-12 sm:py-20 lg:py-24">
      <div className="max-w-[850px] mx-auto text-center px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#1B1B1B]">
          Ready for Your Best Look?
        </h2>

        <p className="text-gray-700 mt-2 text-sm sm:text-base">
          Book your appointment in under 60 seconds
        </p>

        {/* Form Card */}
        <div className="bg-white mt-8 sm:mt-10 rounded-xl sm:rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10">
          <form className="space-y-5 sm:space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-600 text-left">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="mt-2 w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2.5 sm:py-3 focus:outline-none focus:ring-2 focus:ring-[#E6B31E] text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-600 text-left">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="(555) 123-4567"
                  className="mt-2 w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2.5 sm:py-3 focus:outline-none focus:ring-2 focus:ring-[#E6B31E] text-sm sm:text-base"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-600 text-left">
                Email Address *
              </label>
              <input
                type="email"
                placeholder="your.email@example.com"
                className="mt-2 w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2.5 sm:py-3 focus:outline-none focus:ring-2 focus:ring-[#E6B31E] text-sm sm:text-base"
              />
            </div>

            {/* Service Selector */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-600 text-left">
                Select Service *
              </label>
              <select className="mt-2 w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2.5 sm:py-3 focus:outline-none focus:ring-2 focus:ring-[#E6B31E] text-sm sm:text-base">
                <option>Choose a service</option>
                <option>Haircut</option>
                <option>Beard Trim</option>
                <option>Deluxe Package</option>
              </select>
            </div>

            {/* Date + Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-600 text-left">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  className="mt-2 w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2.5 sm:py-3 focus:outline-none focus:ring-2 focus:ring-[#E6B31E] text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-600 text-left">
                  Preferred Time *
                </label>
                <select className="mt-2 w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2.5 sm:py-3 focus:outline-none focus:ring-2 focus:ring-[#E6B31E] text-sm sm:text-base">
                  <option>Select time</option>
                  <option>10:00 AM</option>
                  <option>12:00 PM</option>
                  <option>3:00 PM</option>
                </select>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs sm:text-sm font-semibold text-gray-600 text-left">
                Additional Notes (Optional)
              </label>
              <textarea
                rows={4}
                placeholder="Any specific requests or preferences..."
                className="mt-2 w-full border border-gray-300 rounded-md px-3 sm:px-4 py-2.5 sm:py-3 focus:outline-none focus:ring-2 focus:ring-[#E6B31E] text-sm sm:text-base resize-none"
              />

              <p className="text-xs text-gray-500 mt-1 text-left">
                0/500 characters
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              className="w-full bg-[#E6B31E] hover:opacity-90 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg text-black transition-opacity"
            >
              Book Appointment Now
            </button>
          </form>
        </div>

        {/* Contact Options */}
        <p className="mt-8 sm:mt-10 text-gray-700 text-sm sm:text-base">
          Prefer to call?{" "}
          <a
            href="tel:5551234567"
            className="text-[#E6B31E] font-semibold hover:underline"
          >
            (555) 123-4567
          </a>
        </p>

        <a
          href="https://wa.me/7778049568?text=Hi%20I%20want%20to%20book%20an%20appointment"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 font-semibold hover:underline mt-2 sm:mt-3 block text-sm sm:text-base"
        >
          Message us on WhatsApp
        </a>
      </div>
    </section>
  );
}
