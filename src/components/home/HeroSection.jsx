"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { HiArrowLongRight } from "react-icons/hi2";
import Link from "next/link";

export default function HeroSection() {
  const heroSlider = [
    {
      id: "68d832a6350a9120b2785900",
      title: "Step Into Style – Your Perfect Outfit Awaits!",
      offer: "Limited Time Offer 30% Off",
      image: "/images/hero_1.png",
    },
    {
      id: "68d832a6350a9120b278590d",
      title: "Level Up Your Wardrobe – Discover the Latest Trends Today!",
      offer: "Hurry up, only a few left!",
      image: "/images/hero_2.png",
    },
    {
      id: "68d832a6350a9120b2785906",
      title: "Where Comfort Meets Elegance – Premium Fashion for You!",
      offer: "Exclusive Deal 40% Off",
      image: "/images/hero_3.png",
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
            <div className="w-full h-auto mt-10 mb-14 px-6 md:px-20 py-10 flex flex-col md:flex-row items-center justify-between bg-[#F2EDE7] rounded-2xl">
              <div className="w-full md:w-2/5 space-y-2 md:space-y-6 text-center md:text-left">
                <p className="text-primary text-sm md:text-base">
                  {slide.offer}
                </p>
                <h1 className="pb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-[40px] font-semibold">
                  {slide.title}
                </h1>

                <Link
                  href={`/collection/${slide.id}`}
                  className="inline-flex items-center justify-center gap-2 px-6 md:px-10 py-2 md:py-4 bg-primary text-white text-sm md:text-base font-medium rounded-full cursor-pointer group"
                >
                  Shop Now
                  <HiArrowLongRight className="text-xl transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* right image */}
              <div className="w-full md:w-2/5 mt-8 md:mt-0 flex items-center justify-center">
                <Image
                  className="w-48 md:w-80 lg:w-96 drop-shadow-2xl"
                  src={slide.image}
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
