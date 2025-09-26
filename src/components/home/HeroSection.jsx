"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { HiArrowLongRight } from "react-icons/hi2";

export default function HeroSection() {
  const heroSlider = [
    {
      id: 1,
      title: "Step Into Style – Your Perfect Outfit Awaits!",
      offer: "Limited Time Offer 30% Off",
      // imgSrc: assets.header_dress_image,
    },
    {
      id: 2,
      title: "Level Up Your Wardrobe – Discover the Latest Trends Today!",
      offer: "Hurry up, only a few left!",
      // imgSrc: assets.header_jacket_image,
    },
    {
      id: 3,
      title: "Where Comfort Meets Elegance – Premium Fashion for You!",
      offer: "Exclusive Deal 40% Off",
      // imgSrc: assets.header_shoes_image,
    },
  ];

  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        spaceBetween={30}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="mySwiper"
      >
        {heroSlider.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="w-full h-[60vh] mt-10 mb-14 px-20 flex flex-col md:flex-row items-center justify-between bg-[#E6E9F2] rounded-2xl">
              <div className="w-2/5 space-y-6">
                <p className="text-primary">{slide.offer}</p>
                <h1 className="pb-4 md:text-[40px] text-2xl font-semibold">
                  {slide.title}
                </h1>
                <div className="flex items-center">
                  <button className="md:px-10 px-7 md:py-3 py-2 bg-primary rounded-full text-white text-sm font-medium cursor-pointer">
                    Shop Now
                  </button>
                  <button className="group flex items-center gap-2 px-6 py-3 font-medium cursor-pointer">
                    Explore Deals
                    <HiArrowLongRight className="group-hover:translate-x-1 transition" />
                  </button>
                </div>
              </div>

              <div className="w-2/5 flex items-center justify-center">
                <Image
                  className="md:w-96 w-48"
                  src="/images/product_10.png"
                  alt={`Slide ${slide.id}`}
                  width={400} 
                  height={400}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
