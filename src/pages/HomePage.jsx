import Navbar from "../components/Navbar.jsx";
import MainHero from "../components/MainHero.jsx";
import ChatButton from "../components/ChatButton.jsx";
import WhyDifferent from "../components/WhyDifferent.jsx";
import ServicesSectionn from "../components/ServicesSection.jsx";
import GallerySection from "../components/GallerySection.jsx";
import Testimonials from "../components/Testimonials.jsx";
import BookingSection from "../components/BookingSection.jsx";
import OurStory from "../components/OurStory.jsx";
import VisitUs from "../components/VisitUs.jsx";
import Footer from "../components/Footer.jsx";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <MainHero />
      <WhyDifferent />
      <ServicesSectionn />
      <GallerySection />
      <Testimonials />
      <BookingSection />
      <OurStory />
      <VisitUs />
      <Footer />
      <ChatButton />
    </>
  );
}
