import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import { DataPembicara } from "../data";
import { data } from "react-router-dom";

const Pembicarapage = () => {
  return (
    <div className="pembicara py-40">
      <div className="container mx-auto px-2">
        <h1 className="text-center text-6xl/tight font-semibold mb-4">
          Pembicara Event
        </h1>
        <p className="text-center md:text-base/loose text-sm/loose">
          Berikut ini merupakan pembicara dan penampilan event.
        </p>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper mt-20"
        >
          {DataPembicara.map((data) => (
            <SwiperSlide className="relative" type="email" key={data.id}>
              <img
                src={data.img}
                alt="Pembicara Image"
                className="rounded-t-2xl"
              />
              <div className="absolute w-full h-1/2 bg-gradient-to-t from-black/90 from-40% to-black/0 to-100% bottom-0 left-0"></div>
              <div className="absolute bottom-7 w-full text-center">
                <h1 className="text-white text-3xl font-semibold">
                  {data.nama}
                </h1>
                <p className="text-white/80 text-sm/loose">{data.job}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Pembicarapage;
