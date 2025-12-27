import photo1 from "../assets/Photo-1.jpg";
import photo2 from "../assets/Photo-2.jpg";
import photo3 from "../assets/Photo-3.jpg";
import photo4 from "../assets/Photo-4.jpg";
import photo5 from "../assets/Photo-5.jpg";
import Navbar from "../components/Navbar";

export default function GalleryPage() {
  const images = [photo1, photo2, photo3, photo4, photo5];

  return (
    <>
      <section className="bg-black min-h-screen py-16 sm:py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white text-center mb-10 sm:mb-16 lg:mb-20">
            Gallery
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl sm:rounded-2xl"
              >
                <img
                  src={images[i % images.length]}
                  className="w-full h-[280px] sm:h-[360px] lg:h-[420px] object-cover hover:scale-110 transition duration-700"
                  alt={`Gallery image ${i + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
