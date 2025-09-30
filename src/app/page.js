import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import PopularCategory from "@/components/home/PopularCategory";
import ChooseUs from "@/components/home/ChooseUs";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <div className="space-y-18">
      <HeroSection />
      <PopularCategory />
      <FeaturedProducts />
      <ChooseUs />
      <Newsletter />
    </div>
  );
}
