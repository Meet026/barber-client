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

export default function HomePage() {
  const [selectedService, setSelectedService] = useState("");

  const handleBookService = (serviceName) => {
    setSelectedService(serviceName);

    document.getElementById("booking")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
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
