"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { maisVendidosFemininoImgLink } from "@/constants/maisVendidosFemininoImgLink";
import { breakpoints } from "@/config/maisVendidosSwiperBreakpoints";
import { Autoplay } from "swiper/modules";
import MaisVendidosFemininoCard from "./MaisVendidosFemininoCard";
import "swiper/css";
import "swiper/css/autoplay";

export default function MaisVendidosFeminino() {
  return (
    <section className="maisVendidosFemininoSection">
      <h2 className="maisVendidosFemininoSection__title">
        Mais Vendidos Feminino
      </h2>
      <Swiper
        loop={true}
        navigation={false}
        breakpoints={breakpoints}
        modules={[Autoplay]}
        className="maisVendidosFemininoSection__swiper"
        grabCursor
        autoplay={{
          delay: 3000,
        }}
      >
        {maisVendidosFemininoImgLink.map((item: any) => (
          <SwiperSlide className="maisVendidosFemininoSection__swiperSlide">
            <MaisVendidosFemininoCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
