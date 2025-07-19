import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import MainSections from "./MainSections";

export default function Carousel() {
  return (
    <div className="overflow-y-auto bg-[#121212] text-white rounded-lg ">
      <div>
        <main>
          <div className="h-[256px] w-full absolute bg-noise-gradient] "></div>

          <section className="mt-1 bg-transparent overflow-hidden ">
            <div className="flex flex-wrap px-10 gap-x-8 w-full max-w-[1955px]">
              <MainSections />
            </div>
          </section>
          <footer></footer>
        </main>
      </div>
    </div>
  );
}
