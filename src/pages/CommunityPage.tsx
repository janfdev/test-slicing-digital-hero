import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HeroNews from "@/components/HeroNews";
import NewsSection from "@/components/NewsSection";

// import Testimonials from "../components/Testimonials";
// import HeroCommunity from "../components/HeroCommunity";
// import ReflectionText from "../components/Reflection";

const CommunityPage = () => {
  return (
    <div>
      <Navbar />
      <HeroNews />
      <Banner />
      <NewsSection />
      {/* Community */}
      {/* <HeroCommunity />
      <Testimonials />
      <ReflectionText /> */}
      <Footer />
    </div>
  );
};

export default CommunityPage;
