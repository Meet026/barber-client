
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet-async";
import { PAGE_SEO, generateMetaTags, getBreadcrumbSchema } from "../utils/seo.js";

export default function GalleryPage() {
  const images = ["https://res.cloudinary.com/dz3b7notk/image/upload/v1767287065/Photo-1_i3rspr.jpg", "https://res.cloudinary.com/dz3b7notk/image/upload/v1767287117/Photo-2_mh1hys.jpg", "https://res.cloudinary.com/dz3b7notk/image/upload/v1767287162/Photo-3_paz9ek.jpg", "https://res.cloudinary.com/dz3b7notk/image/upload/v1767287218/Photo-4_nlkimv.jpg", "https://res.cloudinary.com/dz3b7notk/image/upload/v1767287275/Photo-5_va5h2n.jpg"
















    
  ];
  const seoData = generateMetaTags(PAGE_SEO.gallery);
  
  // Descriptive alt texts for images
  const imageAltTexts = [
    "Professional fade haircut at Elite Barber Studio",
    "Precision beard sculpting and grooming",
    "Signature haircut with clean lines",
    "Premium men's hairstyle transformation",
    "Expert barber styling in Ahmedabad"
  ];

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" }
  ]);

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{seoData.title}</title>
        <meta name="title" content={seoData.title} />
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={seoData.canonical} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.ogUrl} />
        <meta property="og:title" content={seoData.ogTitle} />
        <meta property="og:description" content={seoData.ogDescription} />
        <meta property="og:image" content={seoData.ogImage} />

        {/* Twitter */}
        <meta property="twitter:card" content={seoData.twitterCard} />
        <meta property="twitter:url" content={seoData.ogUrl} />
        <meta property="twitter:title" content={seoData.twitterTitle} />
        <meta property="twitter:description" content={seoData.twitterDescription} />
        <meta property="twitter:image" content={seoData.twitterImage} />

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

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
                  alt={imageAltTexts[i % imageAltTexts.length]}
                  loading={i < 3 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
