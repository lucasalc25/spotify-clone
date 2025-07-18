/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const images = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
  "/images/7.jpg",
  "/images/8.jpg",
];

export default function Main() {
  return (
    <div className="overflow-y-auto bg-[#121212] text-white rounded-lg">
      <div>
        <main className="">
          <div className="h-[256px] w-full absolute bg-noise-gradient]"></div>
          <section className="mt-1 bg-transparent">
            <div className="flex flex-wrap px-10 gap-x-8 w-full max-w-[1955px]">
              <section className="flex flex-col min-w-full">
                <div className="grid">
                  <div className="flex justify-between items-center gap-3 mb-2 min-h-12 ">
                    <div className="flex flex-end items-end h-full">
                      <h2 className="text-2xl font-[700]">Músicas em alta</h2>
                    </div>
                    <div className="flex flex-end items-end h-full">
                      <a href="#" className="me-2">
                        <span className="text-zinc-400 text-sm font-[700]">
                          Mostrar tudo
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-full max-w-6xl mx-auto p-3">
                  <Swiper
                    modules={[Navigation]}
                    slidesPerView={6}
                    spaceBetween={24}
                    navigation
                    loop={false}
                    className="mySwiper"
                  >
                    {images.map((src, i) => (
                      <SwiperSlide key={i}>
                        <Image
                          src={src}
                          alt={`Slide ${i}`}
                          width={171}
                          height={171}
                          className="rounded-lg shadow object-cover"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </section>
              <section className="bg-blue-500"></section>
              <section className="bg-yellow-500"></section>
              <section className="bg-green-500"></section>
              <section className="bg-purple-700"></section>
            </div>
          </section>
          <footer></footer>
        </main>
      </div>
    </div>
  );
}
