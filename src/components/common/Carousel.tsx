"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";

interface Slide {
  title: string;
  spot: string;
  earn: number;
  target: number;
  date: string;
}

interface CarouselProps {
  slides: Slide[];
}

const Carousel = ({ slides }: CarouselProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Завантаження...</div>;
  }

  return (
    <div className="w-full h-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        spaceBetween={8}
        slidesPerView={1.14}
        autoplay={{ delay: 3000 }}
        loop={true}
        effect="fade"
        breakpoints={{
          
          1440: { slidesPerView: 4.2 },
        }}
      >
        {slides.length > 0 ? (
          slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative  flex flex-col   text-white h-[208px] w-[300px] bg-[url(/img/deals.png)] bg-cover p-[16px] rounded-[4px] mb-[40px]"                >
              <Image
                        src="/img/deals-logo.png" 
                        alt="logo"
                        width={162}
                        height={160}
                        className="absolute w-[162px] h-[160px] -top-[4px] -right-[20px]"
                      />
                <h3 className="text-[20px] leading-[28px] tracking-[-0.04em] uppercase font-medium mb-[2px]">{slide.title}</h3>
                <p className="text-[14px] leading-[18px] tracking-[-0.02em] opacity-40 font-medium mb-[48px]" >SPOT · <span className="font-normal">{slide.spot}</span></p>
                <p className="text-[14px] leading-[18px] tracking-[-0.02em] font-medium uppercase opacity-70 mb-[2px]">Прибыль</p>
                <div className="flex items-center mb-[9px]">
                <p className="text-[28px] leading-[36px] font-medium uppercase text-[#35ff9e] mr-[6px]">{slide.earn}% </p>
                <Image
                        src="/img/deals-arrow.svg" 
                        alt="arrow"
                        width={9}
                        height={20}
                        className=""
                      /></div>
                      <div className="flex justify-between">
                <p className="text-[14px] leading-[18px] tracking-[-0.02em] opacity-70 font-medium">Цель: {slide.target}</p>
                <p className="text-[14px] leading-[18px] tracking-[-0.02em] opacity-40 text-right">Дата входа: {slide.date}</p>
                </div></div>
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <div className="flexCenter h-full">
              <p>Слайди недоступні.</p>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default Carousel;