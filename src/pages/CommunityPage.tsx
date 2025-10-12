import Footer from "../components/Footer";
import HeroCommunity from "../components/HeroCommunity";
import Navbar from "../components/Navbar";
import ReflectionText from "../components/Reflection";
import Testimonials from "../components/Testimonials";
import BannerGrid from "@/components/BannerGrid";
import OurCommunity from "@/components/OurCommunity";

const CommunityPage = () => {
  return (
    <div>
      <Navbar />
      <HeroCommunity />
      <OurCommunity />
      <BannerGrid />
      <Testimonials />
      <ReflectionText />
      <Footer />
    </div>
  );
};

export default CommunityPage;
