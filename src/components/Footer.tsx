import React from "react";

export default function Footer() {
  return (
    <footer className="py-2 h-[82px] z-10 bg-black">
      <aside className="flex min-w-[620px] h-full">
        <div className="flex w-full flex-row items-center cursor-pointer gap-6 justify-between relative z-10 pt-[11px] pr-6 pb-[7px] pl-[15px] bg-linear-to-r from-[#af2896] to-[#509bf5]">
          <div className="mb-1 text-white">
            <p className="font-bold text-sm">Testar o Premium de graça</p>
            <p className="font-normal text-base">
              Inscreva-se para curtir música ilimitada e podcasts só com alguns
              anúncios. Não precisa de cartão de crédito.
            </p>
          </div>
          <button className="flex items-center h-12 px-4 bg-white rounded-full cursor-pointer hover:scale-[1.04] hover:bg-zinc-100">
            <span className="text-base font-bold text-zinc-950 truncate px-4 py-1">
              Inscreva-se grátis
            </span>
          </button>
        </div>
      </aside>
    </footer>
  );
}
