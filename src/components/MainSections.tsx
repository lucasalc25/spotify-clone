/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "/images/1.jpg",
    title: "Título 1",
    description: "Descrição da imagem 1",
  },
  {
    src: "/images/2.jpg",
    title: "Título 2",
    description: "Descrição da imagem 2",
  },
  {
    src: "/images/3.jpg",
    title: "Título 3",
    description: "Descrição da imagem 3",
  },
  {
    src: "/images/4.jpg",
    title: "Título 4",
    description: "Descrição da imagem 4",
  },
  {
    src: "/images/5.jpg",
    title: "Título 5",
    description: "Descrição da imagem 5",
  },
  {
    src: "/images/6.jpg",
    title: "Título 6",
    description: "Descrição da imagem 6",
  },
  {
    src: "/images/7.jpg",
    title: "Título 7",
    description: "Descrição da imagem 7",
  },
  {
    src: "/images/8.jpg",
    title: "Título 8",
    description: "Descrição da imagem 8",
  },
  {
    src: "/images/9.jpg",
    title: "Título 9",
    description: "Descrição da imagem 9",
  },
  {
    src: "/images/10.jpg",
    title: "Título 10",
    description: "Descrição da imagem 10",
  },
];

const slidesToShow = 7;

export default function MainSections() {
  const [startIndex, setStartIndex] = useState(0);

  const canGoPrev = startIndex > 0;
  const canGoNext = startIndex + slidesToShow < slides.length;

  const handlePrev = () => {
    if (canGoPrev) setStartIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (canGoNext) setStartIndex((prev) => prev + 1);
  };

  const slideWidth = 195; // Largura fixa + gap
  const offset = -startIndex * slideWidth;
  return (
    <div>
      <section className="relative flex flex-col min-w-full">
        <div className="grid">
          <div className="flex justify-between items-center gap-3 min-h-12">
            <div className="flex items-end h-full">
              <h2 className="text-[22px] font-bold">Músicas em alta</h2>
            </div>
            <div className="flex items-end h-full">
              <a href="#" className="me-2">
                <span className="text-zinc-400 text-sm font-bold">
                  Mostrar tudo
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* CARROSSEL */}
        <div className="group relative w-full">
          {/* Botão anterior (acima do primeiro slide) */}
          <button
            onClick={handlePrev}
            disabled={!canGoPrev}
            className="invisible absolute z-10 -translate-y-1/2 top-1/2 left-2 p-2 rounded-full bg-[#2A2A2A] text-white transition-colors duration-200 ease-in-out cursor-pointer disabled:opacity-30 group-hover:visible"
          >
            <ChevronLeft />
          </button>

          {/* Botão próximo (acima do último slide) */}
          <button
            onClick={handleNext}
            disabled={!canGoNext}
            className="invisible absolute z-10 -translate-y-1/2 top-1/2 right-2 p-2 rounded-full bg-[#2A2A2A] text-white transition-opacity duration-200 ease-in-out cursor-pointer disabled:opacity-30 group-hover:visible"
          >
            <ChevronRight />
          </button>

          {/* Container do carrossel */}
          <div className="overflow-hidden relative">
            <div
              className="grid grid-flow-col transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${offset}px)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center w-[195px] h-[294px] shrink-0 overflow-hidden text-balance"
                >
                  <div className="inline-flex flex-col gap-2 p-3 rounded-md hover:bg-[#1F1F1F]">
                    <div className="relative w-[171px] h-[171px] rounded-xl shadow">
                      <img
                        src={slide.src}
                        alt={`Slide ${index}`}
                        className="absolute w-full h-full left-0 right-0 rounded-md"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">{slide.title}</h3>
                      <p className="text-xs text-gray-600">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex flex-col min-w-full">
        <div className="grid">
          <div className="flex justify-between items-center gap-3 mb-2 min-h-12">
            <div className="flex items-end h-full">
              <h2 className="text-[22px] font-bold">Artistas populares</h2>
            </div>
            <div className="flex items-end h-full">
              <a href="#" className="me-2">
                <span className="text-zinc-400 text-sm font-bold">
                  Mostrar tudo
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* CARROSSEL */}
        <div className="group relative w-full">
          {/* Botão anterior (acima do primeiro slide) */}
          <button
            onClick={handlePrev}
            disabled={!canGoPrev}
            className="invisible absolute z-10 -translate-y-1/2 top-1/2 left-2 p-2 rounded-full bg-[#2A2A2A] text-white transition-colors duration-200 ease-in-out cursor-pointer disabled:opacity-30 group-hover:visible"
          >
            <ChevronLeft />
          </button>

          {/* Botão próximo (acima do último slide) */}
          <button
            onClick={handleNext}
            disabled={!canGoNext}
            className="invisible absolute z-10 -translate-y-1/2 top-1/2 right-2 p-2 rounded-full bg-[#2A2A2A] text-white transition-opacity duration-200 ease-in-out cursor-pointer disabled:opacity-30 group-hover:visible"
          >
            <ChevronRight />
          </button>

          {/* Container do carrossel */}
          <div className="overflow-hidden relative">
            <div
              className="grid grid-flow-col transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${offset}px)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center w-[195px] h-[294px] shrink-0 overflow-hidden text-balance"
                >
                  <div className="inline-flex flex-col gap-2 p-3 rounded-md hover:bg-[#1F1F1F]">
                    <div className="relative w-[171px] h-[171px] rounded-xl shadow">
                      <img
                        src={slide.src}
                        alt={`Slide ${index}`}
                        className="absolute w-full h-full left-0 right-0 rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">{slide.title}</h3>
                      <p className="text-xs text-gray-600">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex flex-col min-w-full">
        <div className="grid">
          <div className="flex justify-between items-center gap-3 mb-2 min-h-12">
            <div className="flex items-end h-full">
              <h2 className="text-[22px] font-bold">
                Singles e álbuns que todo mundo gosta
              </h2>
            </div>
            <div className="flex items-end h-full">
              <a href="#" className="me-2">
                <span className="text-zinc-400 text-sm font-bold">
                  Mostrar tudo
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* CARROSSEL */}
        <div className="group relative w-full">
          {/* Botão anterior (acima do primeiro slide) */}
          <button
            onClick={handlePrev}
            disabled={!canGoPrev}
            className="invisible absolute z-10 -translate-y-1/2 top-1/2 left-2 p-2 rounded-full bg-[#2A2A2A] text-white transition-colors duration-200 ease-in-out cursor-pointer disabled:opacity-30 group-hover:visible"
          >
            <ChevronLeft />
          </button>

          {/* Botão próximo (acima do último slide) */}
          <button
            onClick={handleNext}
            disabled={!canGoNext}
            className="invisible absolute z-10 -translate-y-1/2 top-1/2 right-2 p-2 rounded-full bg-[#2A2A2A] text-white transition-opacity duration-200 ease-in-out cursor-pointer disabled:opacity-30 group-hover:visible"
          >
            <ChevronRight />
          </button>

          {/* Container do carrossel */}
          <div className="overflow-hidden relative">
            <div
              className="grid grid-flow-col transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${offset}px)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center w-[195px] h-[294px] shrink-0 overflow-hidden text-balance"
                >
                  <div className="inline-flex flex-col gap-2 p-3 rounded-md hover:bg-[#1F1F1F]">
                    <div className="relative w-[171px] h-[171px] rounded-xl shadow">
                      <img
                        src={slide.src}
                        alt={`Slide ${index}`}
                        className="absolute w-full h-full left-0 right-0 rounded-md"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">{slide.title}</h3>
                      <p className="text-xs text-gray-600">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex flex-col min-w-full">
        <div className="grid">
          <div className="flex justify-between items-center gap-3 mb-2 min-h-12">
            <div className="flex items-end h-full">
              <h2 className="text-2xl font-bold">Músicas em alta</h2>
            </div>
            <div className="flex items-end h-full">
              <a href="#" className="me-2">
                <span className="text-zinc-400 text-sm font-bold">
                  Mostrar tudo
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* CARROSSEL */}
        <div className="group relative w-full">
          {/* Botão anterior (acima do primeiro slide) */}
          <button
            onClick={handlePrev}
            disabled={!canGoPrev}
            className="invisible absolute z-10 -translate-y-1/2 top-1/2 left-2 p-2 rounded-full bg-[#2A2A2A] text-white transition-colors duration-200 ease-in-out cursor-pointer disabled:opacity-30 group-hover:visible"
          >
            <ChevronLeft />
          </button>

          {/* Botão próximo (acima do último slide) */}
          <button
            onClick={handleNext}
            disabled={!canGoNext}
            className="invisible absolute z-10 -translate-y-1/2 top-1/2 right-2 p-2 rounded-full bg-[#2A2A2A] text-white transition-opacity duration-200 ease-in-out cursor-pointer disabled:opacity-30 group-hover:visible"
          >
            <ChevronRight />
          </button>

          {/* Container do carrossel */}
          <div className="overflow-hidden relative">
            <div
              className="grid grid-flow-col transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${offset}px)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center w-[195px] h-[294px] shrink-0 overflow-hidden text-balance"
                >
                  <div className="inline-flex flex-col gap-2 p-3 rounded-md hover:bg-[#1F1F1F]">
                    <div className="relative w-[171px] h-[171px] rounded-xl shadow">
                      <img
                        src={slide.src}
                        alt={`Slide ${index}`}
                        className="absolute w-full h-full left-0 right-0 rounded-md"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">{slide.title}</h3>
                      <p className="text-xs text-gray-600">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex flex-col min-w-full">
        <div className="grid">
          <div className="flex justify-between items-center gap-3 mb-2 min-h-12">
            <div className="flex items-end h-full">
              <h2 className="text-2xl font-bold">Músicas em alta</h2>
            </div>
            <div className="flex items-end h-full">
              <a href="#" className="me-2">
                <span className="text-zinc-400 text-sm font-bold">
                  Mostrar tudo
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* CARROSSEL */}
        <div className="group relative w-full">
          {/* Botão anterior (acima do primeiro slide) */}
          <button
            onClick={handlePrev}
            disabled={!canGoPrev}
            className="invisible absolute z-10 -translate-y-1/2 top-1/2 left-2 p-2 rounded-full bg-[#2A2A2A] text-white transition-colors duration-200 ease-in-out cursor-pointer disabled:opacity-30 group-hover:visible"
          >
            <ChevronLeft />
          </button>

          {/* Botão próximo (acima do último slide) */}
          <button
            onClick={handleNext}
            disabled={!canGoNext}
            className="invisible absolute z-10 -translate-y-1/2 top-1/2 right-2 p-2 rounded-full bg-[#2A2A2A] text-white transition-opacity duration-200 ease-in-out cursor-pointer disabled:opacity-30 group-hover:visible"
          >
            <ChevronRight />
          </button>

          {/* Container do carrossel */}
          <div className="overflow-hidden relative">
            <div
              className="grid grid-flow-col transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${offset}px)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center w-[195px] h-[294px] shrink-0 overflow-hidden text-balance"
                >
                  <div className="inline-flex flex-col gap-2 p-3 rounded-md hover:bg-[#1F1F1F]">
                    <div className="relative w-[171px] h-[171px] rounded-xl shadow">
                      <img
                        src={slide.src}
                        alt={`Slide ${index}`}
                        className="absolute w-full h-full left-0 right-0 rounded-md"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">{slide.title}</h3>
                      <p className="text-xs text-gray-600">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex flex-col min-w-full">
        <div className="grid">
          <div className="flex justify-between items-center gap-3 mb-2 min-h-12">
            <div className="flex items-end h-full">
              <h2 className="text-2xl font-bold">Músicas em alta</h2>
            </div>
            <div className="flex items-end h-full">
              <a href="#" className="me-2">
                <span className="text-zinc-400 text-sm font-bold">
                  Mostrar tudo
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* CARROSSEL */}
        <div className="group relative w-full">
          {/* Botão anterior (acima do primeiro slide) */}
          <button
            onClick={handlePrev}
            disabled={!canGoPrev}
            className="invisible absolute z-10 -translate-y-1/2 top-1/2 left-2 p-2 rounded-full bg-[#2A2A2A] text-white transition-colors duration-200 ease-in-out cursor-pointer disabled:opacity-30 group-hover:visible"
          >
            <ChevronLeft />
          </button>

          {/* Botão próximo (acima do último slide) */}
          <button
            onClick={handleNext}
            disabled={!canGoNext}
            className="invisible absolute z-10 -translate-y-1/2 top-1/2 right-2 p-2 rounded-full bg-[#2A2A2A] text-white transition-opacity duration-200 ease-in-out cursor-pointer disabled:opacity-30 group-hover:visible"
          >
            <ChevronRight />
          </button>

          {/* Container do carrossel */}
          <div className="overflow-hidden relative">
            <div
              className="grid grid-flow-col transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${offset}px)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center w-[195px] h-[294px] shrink-0 overflow-hidden text-balance"
                >
                  <div className="inline-flex flex-col gap-2 p-3 rounded-md hover:bg-[#1F1F1F]">
                    <div className="relative w-[171px] h-[171px] rounded-xl shadow">
                      <img
                        src={slide.src}
                        alt={`Slide ${index}`}
                        className="absolute w-full h-full left-0 right-0 rounded-md"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">{slide.title}</h3>
                      <p className="text-xs text-gray-600">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
