"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { buscadosImgLink } from "@/constants/buscadosImgLink";
import { breakpoints } from "@/config/buscadosSwiperBreakpoints";
import "swiper/css";

export default function Buscados() {
  return (
    <section className="buscadosSection">
      <h2 className="buscadosSection__text">Buscados</h2>
      <Swiper
        loop={true}
        navigation={false}
        breakpoints={breakpoints}
        className="buscadosSection__buscadosSwiper"
        grabCursor
      >
        {buscadosImgLink.map((item: any) => (
          <SwiperSlide className="buscadosSwiper__buscadosSlide">
            <div className="buscadosSlide__buscadosItemDiv">
              <img src={item.src} />
              <p className="buscadosItemDiv__text">{item.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
