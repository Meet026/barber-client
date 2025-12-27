// import React from "react";

// export default function VisitUs() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-amber-50 py-20 px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <h1 className="text-6xl font-serif text-gray-900 text-center mb-20 tracking-tight">
//           Visit Us
//         </h1>

//         {/* Info Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
//           {/* Location */}
//           <div className="text-center group">
//             <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mx-auto mb-8 shadow-xl transform transition-transform group-hover:scale-110 duration-300"></div>
//             <h3 className="text-2xl font-semibold mb-6 text-gray-900">
//               Location
//             </h3>
//             <p className="text-gray-700 leading-relaxed text-lg">
//               123 Main Street
//               <br />
//               Downtown District
//               <br />
//               City, State 12345
//             </p>
//             <p className="text-emerald-600 font-semibold mt-4 text-sm tracking-wide uppercase">
//               Open 7 Days
//             </p>
//           </div>

//           {/* Hours */}
//           <div className="text-center group">
//             <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mx-auto mb-8 shadow-xl transform transition-transform group-hover:scale-110 duration-300"></div>
//             <h3 className="text-2xl font-semibold mb-6 text-gray-900">Hours</h3>
//             <div className="text-gray-700 space-y-3 text-lg">
//               <div className="flex justify-between items-center max-w-xs mx-auto">
//                 <span className="font-medium">Monday - Friday</span>
//                 <span className="text-amber-600 font-semibold">9AM - 8PM</span>
//               </div>
//               <div className="flex justify-between items-center max-w-xs mx-auto">
//                 <span className="font-medium">Saturday - Sunday</span>
//                 <span className="text-amber-600 font-semibold">10AM - 6PM</span>
//               </div>
//             </div>
//           </div>

//           {/* Contact */}
//           <div className="text-center group">
//             <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mx-auto mb-8 shadow-xl transform transition-transform group-hover:scale-110 duration-300"></div>
//             <h3 className="text-2xl font-semibold mb-6 text-gray-900">
//               Contact
//             </h3>
//             <p className="text-gray-700 leading-relaxed text-lg">
//               <a
//                 href="tel:5551234567"
//                 className="hover:text-amber-600 transition-colors"
//               >
//                 (555) 123-4567
//               </a>
//               <br />
//               <a
//                 href="mailto:info@elitebarberstudio.com"
//                 className="hover:text-amber-600 transition-colors"
//               >
//                 info@elitebarberstudio.com
//               </a>
//             </p>
//           </div>
//         </div>

//         {/* Map Section */}
//         <div className="relative rounded-2xl overflow-hidden shadow-2xl">
//           <div className="w-full h-[500px] relative">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12094.57434274679!2d-74.00601524999999!3d40.7143528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316e68e0e3%3A0xf9df7dae5f42d95!2sCity%20Hall%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               className="grayscale-[20%] contrast-110"
//             ></iframe>
//           </div>

//           {/* Gradient Overlay and Button */}
//           <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-12">
//             <button className="bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white font-bold px-12 py-4 rounded-full transition-all duration-300 shadow-2xl hover:shadow-amber-500/50 hover:scale-105 text-lg tracking-wide">
//               Get Directions
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
export default function VisitUs() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* CONTENT */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-24 relative z-10">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-center mb-12 sm:mb-16 lg:mb-20 px-4">
          Visit Us
        </h2>

        {/* INFO ROW */}
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-20 text-center mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-6 lg:px-8">
          <InfoBlock
            title="Location"
            lines={["Nikol, Ahmedabad", "Gujarat, India"]}
            footer="Open 7 Days"
          />

          <InfoBlock
            title="Hours"
            custom={
              <div className="space-y-2 sm:space-y-3">
                <div className="flex flex-col sm:flex-row justify-between sm:w-64 mx-auto gap-1 sm:gap-0">
                  <span className="text-sm sm:text-base">Monday – Friday</span>
                  <span className="text-[#D4AF37] text-sm sm:text-base">
                    9AM – 8PM
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between sm:w-64 mx-auto gap-1 sm:gap-0">
                  <span className="text-sm sm:text-base">
                    Saturday – Sunday
                  </span>
                  <span className="text-[#D4AF37] text-sm sm:text-base">
                    10AM – 6PM
                  </span>
                </div>
              </div>
            }
          />

          <InfoBlock
            title="Contact"
            lines={["(555) 123-4567", "info@elitebarberstudio.com"]}
          />
        </div>

        {/* MAP */}
        {/* MAP */}
        {/* MAP */}
        <div className="flex justify-center relative z-20 px-4 sm:px-6">
          <div
            className="relative 
    w-full sm:w-[85%] md:w-[80%] lg:w-[70%] 
    h-[380px] sm:h-[340px] md:h-[360px] 
    rounded-xl overflow-hidden shadow-xl
    -mb-24 sm:-mb-28 md:-mb-32"
          >
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Nikol,+Ahmedabad,+Gujarat,+India&z=15&output=embed"
              className="w-full h-full grayscale"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* CURVED BLACK SECTION */}
      <div className="relative -mt-8 sm:-mt-10 md:-mt-12">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[150px] sm:h-[100px] md:h-[120px]"
          preserveAspectRatio="none"
        >
          <path d="M0,120 L1440,20 L1440,120 L0,120 Z" fill="#1A1A1A" />
        </svg>
      </div>
    </section>
  );
}

/* ----------------------------- */
/* Info Block */
/* ----------------------------- */
function InfoBlock({ title, lines, footer, custom }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#D4AF37] mb-4 sm:mb-5 transition-all" />

      <h3 className="font-semibold mb-2 sm:mb-3 text-base sm:text-lg">
        {title}
      </h3>

      {custom ? (
        <div className="text-sm sm:text-base text-gray-700">{custom}</div>
      ) : (
        <div className="text-sm sm:text-base text-gray-700 space-y-1">
          {lines?.map((line, i) => (
            <p key={i} className="break-words px-2 sm:px-0">
              {line}
            </p>
          ))}
        </div>
      )}

      {footer && (
        <p className="text-[#D4AF37] text-xs sm:text-sm mt-2 sm:mt-3">
          {footer}
        </p>
      )}
    </div>
  );
}
