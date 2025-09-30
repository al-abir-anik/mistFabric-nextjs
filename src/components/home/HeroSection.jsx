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
            <div className="w-full h-[60vh] mt-10 mb-14 px-20 flex flex-col md:flex-row items-center justify-between bg-[#F2EDE7] rounded-2xl">
              <div className="w-2/5 space-y-6">
                <p className="text-primary">{slide.offer}</p>
                <h1 className="pb-4 md:text-[40px] text-2xl font-semibold">
                  {slide.title}
                </h1>

                <Link
                  href={`/collection/${slide.id}`}
                  className="w-fit md:px-10 px-7 md:py-4 py-2 group flex items-center gap-2 bg-primary rounded-full text-white text-sm font-medium cursor-pointer"
                >
                  Shop Now
                  <HiArrowLongRight className="text-xl group-hover:translate-x-1 transition" />
                </Link>
              </div>

              <div className="w-2/5 flex items-center justify-center">
                <Image
                  className="lg:w-100 w-48 drop-shadow-2xl"
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
