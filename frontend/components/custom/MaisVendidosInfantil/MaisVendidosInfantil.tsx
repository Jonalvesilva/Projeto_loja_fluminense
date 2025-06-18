"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { maisVendidosInfantilImgLink } from "@/constants/maisVendidosInfantilImgLink";
import { breakpoints } from "@/config/maisVendidosSwiperBreakpoints";
import { Autoplay } from "swiper/modules";
import MaisVendidosInfantilCard from "./MaisVendidosInfantilCard";
import "swiper/css";
import "swiper/css/autoplay";

export default function MaisVendidosInfantil() {
  return (
    <section className="maisVendidosInfantilSection">
      <h2 className="maisVendidosInfantilSection__title">
        Mais Vendidos Infantil
      </h2>
      <Swiper
        loop={true}
        navigation={false}
        breakpoints={breakpoints}
        modules={[Autoplay]}
        className="maisVendidosInfantilSection__swiper"
        grabCursor
        autoplay={{
          delay: 4000,
        }}
      >
        {maisVendidosInfantilImgLink.map((item: any) => (
          <SwiperSlide className="maisVendidosInfantilSection__swiperSlide">
            <MaisVendidosInfantilCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
