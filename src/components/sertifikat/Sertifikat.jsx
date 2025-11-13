import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import style from "./sertifikat.module.css";
import sertifikat from "../../data/sertifikat.json";
import { getImageUrl } from "../../utils";

export const Sertifikat = () => {
  return (
    <section id="sertifikat" className={style.sertifikatSection}>
      <h1>Sertifikat</h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={style.mySwiper}
      >
        {sertifikat.certificates.map((cert, index) => (
          <SwiperSlide key={index}>
            <div className={style.slideContent}>
              <h3>{cert.title}</h3>
              <img
                src={getImageUrl(cert.imageUrl)}
                alt={`Sertifikat ${cert.title}`}
                className={style.certImage}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
