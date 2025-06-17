"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { lancamentosImgLink } from "@/constants/lancamentosImgLink";
import { breakpoints } from "@/config/lancamentoSwiperBreakpoints";
import LancamentosCard from "./LancamentosCard";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

export default function Lancamentos() {
  return (
    <section className="lancamentosSection">
      <h2 className="lancamentosSection__title">Lançamentos</h2>
      <Swiper
        loop={true}
        navigation={false}
        breakpoints={breakpoints}
        modules={[Autoplay]}
        className="lancamentosSection__swiper"
        grabCursor
        autoplay={{
          delay: 4000,
        }}
      >
        {lancamentosImgLink.map((item: any) => (
          <SwiperSlide className="lancamentosSection__swiperSlide">
            <LancamentosCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
