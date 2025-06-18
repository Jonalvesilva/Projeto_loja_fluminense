"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { outletImgLink } from "@/constants/outletImgLink";
import { breakpoints } from "@/config/outletSwiperBreakpoints";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import OutletCard from "./OutletCard";

export default function Outlet() {
  return (
    <section className="outletSection">
      <h2 className="outletSection__title">Outlet</h2>
      <Swiper
        loop={true}
        navigation={false}
        breakpoints={breakpoints}
        modules={[Autoplay]}
        className="outletSection__swiper"
        grabCursor
        autoplay={{
          delay: 3000,
        }}
      >
        {outletImgLink.map((item: any) => (
          <SwiperSlide className="outletSection__swiperSlide">
            <OutletCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
