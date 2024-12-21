import Faq from "./Faq";
import HeroSection from "./HeroSection";
import HotDeals from "./HotDeals";
import NewArrivals from "./NewArrivals";
import Support from "./Support";
import TopBrands from "./TopBrands";

const HomePage = () => {
  return (
    <div>
      <HeroSection />

      <NewArrivals />
      <TopBrands />
      <HotDeals />
      <Faq />
      <Support />
    </div>
  );
};

export default HomePage;
