import Discover from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsSection from "@/components/NewsSection";

// import Testimonials from "../components/Testimonials";
// import Hero from "../components/HeroSection";
// import ReflectionText from "../components/Reflection";

const CommunityPage = () => {
  return (
    <div>
      <Navbar />
      <Discover />
      <NewsSection />
      {/* Community */}
      {/* <Hero />
      <Testimonials />
      <ReflectionText /> */}
      <Footer />
    </div>
  );
};

export default CommunityPage;
