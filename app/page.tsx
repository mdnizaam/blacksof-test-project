import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import LandingPage from "@/components/LandingPage";
import Navbar from "@/components/Navbar";
import TabSection from "@/components/TabSection";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <LandingPage />
      <TabSection />
      <ContactForm />
      <Footer />
    </div>
  );
}
