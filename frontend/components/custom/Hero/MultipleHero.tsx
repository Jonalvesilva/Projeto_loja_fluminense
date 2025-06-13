"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type Props = {
  url?: string[];
  backdrop?: { active: boolean; percent: Number; hexcolor: string };
  children?: React.ReactNode;
  maxHeight: number;
};

export default function MultipleHero(props: Props) {
  return (
    <section
      className="relative"
      style={{
        height: "100%",
        width: "100%",
        maxHeight: `${props.maxHeight}px`,
      }}
    >
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        navigation={false}
        className="mySwiper h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[50vh] xl:h-[100vh]"
        style={{
          maxHeight: `${props.maxHeight}px`,
        }}
      >
        {props.url?.map((urlItem) => (
          <SwiperSlide key={`${urlItem}_key`}>
            <img
              src={urlItem}
              style={{
                height: "100%",
                width: "100%",
                maxHeight: `${props.maxHeight}px`,
              }}
            ></img>
          </SwiperSlide>
        ))}
      </Swiper>

      {props.backdrop?.active && (
        <div
          className="absolute left-0 top-0 z-10"
          style={{
            height: "100%",
            width: "100%",
            maxHeight: `${props.maxHeight}px`,
            backgroundColor: hexToRgb(
              String(props.backdrop.hexcolor),
              props.backdrop.percent,
            ),
          }}
        >
          {props.children}
        </div>
      )}
      <div className="absolute left-0 top-0 h-full w-full">
        {props.children}
      </div>
    </section>
  );
}

function hexToRgb(hex: string, opacity?: any) {
  hex = hex.replace("#", "");

  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return opacity
    ? `rgba(${r},${g},${b},${opacity / 100})`
    : `rgb(${r},${g},${b})`;
}
