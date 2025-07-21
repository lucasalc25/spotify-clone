"use client"; // necessário para habilitar interatividade no App Router

import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div className="grid grid-rows-[64px_1fr_82px] h-screen px-2 overflow-hidden ">
      <Header />

      <div className="row-start-2 row-end-3 grid grid-cols-[1.13fr_4fr] h-full gap-2 overflow-hidden">
        <Sidebar />

        <Main />
      </div>

      <Footer />
    </div>
  );
}
