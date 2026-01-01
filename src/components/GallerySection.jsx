import { useNavigate } from "react-router-dom";

export default function GallerySection() {
  const navigate = useNavigate();

  // All gallery items
  const allGalleryItems = [
    <GalleryImg
      key="g1"
      src="https://res.cloudinary.com/dz3b7notk/image/upload/v1767287065/Photo-1_i3rspr.jpg"
    />,
    <GalleryImg
      key="g2"
      src="https://res.cloudinary.com/dz3b7notk/image/upload/v1767287218/Photo-4_nlkimv.jpg"
    />,
    <BeforeAfter
      key="ba1"
      before="https://res.cloudinary.com/dz3b7notk/image/upload/v1767287117/Photo-2_mh1hys.jpg"
      after="https://res.cloudinary.com/dz3b7notk/image/upload/v1767287162/Photo-3_paz9ek.jpg"
    />,
    <GalleryImg
      key="g3"
      src="https://res.cloudinary.com/dz3b7notk/image/upload/v1767287117/Photo-2_mh1hys.jpg"
    />,
    <GalleryImg
      key="g4"
      src="https://res.cloudinary.com/dz3b7notk/image/upload/v1767287275/Photo-5_va5h2n.jpg"
      highlight
    />,
    <GalleryImg
      key="g5"
      src="https://res.cloudinary.com/dz3b7notk/image/upload/v1767287065/Photo-1_i3rspr.jpg"
    />,
    <GalleryImg
      key="g6"
      src="https://res.cloudinary.com/dz3b7notk/image/upload/v1767287162/Photo-3_paz9ek.jpg"
    />,
    <BeforeAfter
      key="ba2"
      before="https://res.cloudinary.com/dz3b7notk/image/upload/v1767287218/Photo-4_nlkimv.jpg"
      after="https://res.cloudinary.com/dz3b7notk/image/upload/v1767287162/Photo-3_paz9ek.jpg"
    />,
    <GalleryImg
      key="g7"
      src="https://res.cloudinary.com/dz3b7notk/image/upload/v1767287065/Photo-1_i3rspr.jpg"
    />,
    <GalleryImg
      key="g8"
      src="https://res.cloudinary.com/dz3b7notk/image/upload/v1767287275/Photo-5_va5h2n.jpg"
      highlight
    />,
  ];

  return (
    <section id="gallery" className="bg-black py-12 sm:py-20 lg:py-32">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white mb-3 sm:mb-4">
            Our Work Speaks
          </h2>
          <p className="text-[#E6B31E] text-xs sm:text-sm">
            Real cuts. Real clients. Real results.
          </p>
        </div>

        {/* Masonry Layout - Mobile shows first 4 items */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-6 lg:gap-8 space-y-4 sm:space-y-6 lg:space-y-8">
          {allGalleryItems.map((item, index) => (
            <div key={index} className={index >= 4 ? "hidden sm:block" : ""}>
              {item}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-20 lg:mt-24">
          <button
            onClick={() => navigate("/gallery")}
            className="px-8 sm:px-10 lg:px-12 py-3 sm:py-3.5 lg:py-4 rounded-full border border-[#E6B31E] text-[#E6B31E] text-xs sm:text-sm hover:bg-[#E6B31E] hover:text-black transition"
          >
            View More Work
          </button>
        </div>
      </div>
    </section>
  );
}

/* ------------------ */
/* Image Card */
/* ------------------ */
function GalleryImg({ src, highlight }) {
  return (
    <div className="overflow-hidden rounded-xl sm:rounded-2xl">
      <img
        src={src}
        className="w-full object-cover hover:scale-105 transition duration-700"
        alt="Gallery"
      />
    </div>
  );
}

/* ------------------ */
/* Before After Card */
/* ------------------ */
function BeforeAfter({ before, after }) {
  return (
    <div className="rounded-xl sm:rounded-2xl overflow-hidden">
      <div className="flex">
        {/* BEFORE */}
        <div className="relative w-1/2">
          <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-black text-white text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full z-10">
            Before
          </span>
          <img
            src={before}
            className="w-full h-full object-cover"
            alt="Before"
          />
        </div>

        {/* AFTER */}
        <div className="relative w-1/2 h-full">
          <span className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-[#E6B31E] text-black text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full z-10">
            After
          </span>
          <img src={after} className="w-full h-full object-cover" alt="After" />
        </div>
      </div>
    </div>
  );
}
