/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const slideWidth = 195;
const slidesToShow = 7;

export default function CarouselSections({ title, slides, keyPrefix = "" }) {
  const [startIndex, setStartIndex] = useState(0);

  const canGoPrev = startIndex > 0;
  const canGoNext = startIndex + slidesToShow < slides.length;
  const offset = -startIndex * slideWidth;

  const handlePrev = () => {
    if (canGoPrev) setStartIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (canGoNext) setStartIndex((prev) => prev + 1);
  };

  return (
    <section className="flex flex-col min-w-full z-20">
      {/* Cabeçalho */}
      <div className="grid mb-2 min-h-12">
        <div className="flex justify-between items-end gap-3">
          <div className="flex flex-col gap-0.5 justify-end items-end-safe h-full">
            <h2 className="text-[23px] font-bold leading-7 tracking-tight cursor-pointer hover:underline">
              {title}
            </h2>
          </div>
          <div className="flex flex-col gap-0.5 justify-end items-end-safe h-full">
            <a
              href="#"
              className="flex flex-end me-2 mr-2 mt-0.5 hover:underline"
            >
              <span className="text-[#B3B3B3] text-sm font-bold leading-5">
                Mostrar tudo
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Carrossel */}
      <div className="group/carousel relative w-full max-w-max">
        {/* Botões */}
        <button
          onClick={handlePrev}
          disabled={!canGoPrev}
          className="invisible absolute z-10 -translate-y-1/2 top-1/2 left-2 flex items-center p-2 rounded-full bg-[#2A2A2A] filter transition duration-200 cursor-pointer disabled:opacity-0 group-hover/carousel:visible hover:brightness-125"
        >
          <ChevronLeft className="text-zinc-300 hover:text-white" />
        </button>
        <button
          onClick={handleNext}
          disabled={!canGoNext}
          className="invisible absolute z-10 -translate-y-1/2 top-1/2 right-2 items-center p-2 rounded-full bg-[#2A2A2A] filter transition duration-200 cursor-pointer disabled:opacity-0 group-hover/carousel:visible hover:brightness-125"
        >
          <ChevronRight className="text-zinc-300 hover:text-white" />
        </button>

        {/* Slides */}
        <div className="overflow-hidden relative">
          <div
            className="grid grid-flow-col transition-transform duration-500 ease-in-out overflow-x z-10"
            style={{ transform: `translateX(${offset}px)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={`${keyPrefix}-${index}`}
                className="flex flex-col items-center text-center w-[195px] shrink-0 overflow-hidden"
              >
                {/* Aqui é o novo group */}
                <div className="group inline-flex flex-col gap-2 p-3 rounded-md hover:bg-[#1F1F1F] relative cursor-pointer">
                  <div className="relative w-[171px] h-[171px] rounded-xl shadow">
                    <img
                      src={slide.src}
                      alt={slide.title}
                      className={`absolute w-full h-full left-0 right-0 ${
                        slide.src.includes("/artists/")
                          ? "rounded-full"
                          : "rounded-md"
                      }`}
                    />
                    <button className="opacity-0 pointer-events-none absolute z-20 top-35 left-35 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-[#35D865] cursor-pointer rounded-full transition-opacity duration-300 filter hover:scale-[1.05] hover:brightness-105 group-hover:opacity-100 group-hover:pointer-events-auto">
                      <Play className="fill-black text-black" />
                    </button>
                  </div>

                  <div className="flex flex-col items-start">
                    <h3 className="text-base font-semibold">{slide.title}</h3>
                    <p className="text-sm text-[#B3B3B3] text-start line-clamp-2">
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
  );
}
