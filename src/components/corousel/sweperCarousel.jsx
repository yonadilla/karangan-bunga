import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Zoom, Navigation, Pagination } from "swiper/modules";
import { useParams } from "react-router-dom";

export default function Carousel({ products }) {
  const { id } = useParams();

  const product = products.find((p) => p.id === id);
  if (!product) {
    return <div>Produk tidak ditemukan.</div>;
  }

  const img = product.img;

  console.log(img[1]);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#000000",
          "--swiper-pagination-color": "#000000",
        }}
        zoom={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          689: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
        modules={[Zoom, Navigation, Pagination]}
        className="mySwiper"
      >
        {img.map((_, i) => {
          return (
            <SwiperSlide>
              <div className="swiper-zoom-container">
                <img src={`${img[i]}`} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
