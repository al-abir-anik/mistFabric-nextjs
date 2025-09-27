import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import PopularCategory from "@/components/home/PopularCategory";

export default function Home() {
  return (
    <div className="space-y-18">
      <HeroSection />
      {/* <FeaturedProducts /> */}
      <PopularCategory />
    </div>
  );
}
