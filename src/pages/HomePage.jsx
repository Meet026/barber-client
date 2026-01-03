import Navbar from "../components/Navbar.jsx";
import MainHero from "../components/MainHero.jsx";
import ChatButton from "../components/ChatButton.jsx";
import WhyDifferent from "../components/WhyDifferent.jsx";
import ServicesSection from "../components/ServicesSection.jsx";
import GallerySection from "../components/GallerySection.jsx";
import Testimonials from "../components/Testimonials.jsx";
import BookingSection from "../components/BookingSection.jsx";
import OurStory from "../components/OurStory.jsx";
import VisitUs from "../components/VisitUs.jsx";
import Footer from "../components/Footer.jsx";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { PAGE_SEO, generateMetaTags, getLocalBusinessSchema } from "../utils/seo.js";

export default function HomePage() {
  const [selectedService, setSelectedService] = useState("");
  const seoData = generateMetaTags(PAGE_SEO.home);
  const businessSchema = getLocalBusinessSchema();

  const handleBookService = (serviceName) => {
    setSelectedService(serviceName);

    document.getElementById("booking")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  
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
        <meta property="og:site_name" content="Elite Barber Studio" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta property="twitter:card" content={seoData.twitterCard} />
        <meta property="twitter:url" content={seoData.ogUrl} />
        <meta property="twitter:title" content={seoData.twitterTitle} />
        <meta property="twitter:description" content={seoData.twitterDescription} />
        <meta property="twitter:image" content={seoData.twitterImage} />

        {/* Structured Data - LocalBusiness Schema */}
        <script type="application/ld+json">
          {JSON.stringify(businessSchema)}
        </script>
      </Helmet>

      <Navbar />
      <MainHero />
      <WhyDifferent />
      <ServicesSection onBook={handleBookService} />
      <GallerySection />
      <Testimonials />
      <BookingSection selectedService={selectedService} />
      <OurStory />
      <VisitUs />
      <Footer />
      <ChatButton />
    </>
  );
}
