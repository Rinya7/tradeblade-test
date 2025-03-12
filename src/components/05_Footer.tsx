"use client";

import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a1a] text-white px-4 py-6 2xl:px-32">
      {/* Верхняя фиолетовая линия */}
      <div className="h-2 bg-[#4c2eda]"></div>

      {/* Контент футера */}
      <div className="flex flex-col 2xl:flex-row justify-between items-center 2xl:items-start py-6 gap-6 2xl:gap-0">
        {/* Навигация */}
        <div className="text-center 2xl:text-left">
          <div className="text-gray-400 text-sm mb-2">БЫСТРАЯ НАВИГАЦИЯ</div>
          <ul className="space-y-2 2xl:space-y-0 2xl:flex 2xl:gap-6">
            <li>
              <a href="#numbers" className="text-white hover:text-blue-400 transition">
                ЦИФРЫ
              </a>
            </li>
            <li>
              <a href="#deals" className="text-white hover:text-blue-400 transition">
                СДЕЛКИ ОНЛАЙН
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-blue-400 transition">
                О КОМПАНИИ
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-blue-400 transition">
                TRADEBLADE ЭТО
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-blue-400 transition">
                КАК НАЧАТЬ
              </a>
            </li>
            <li>
              <a href="#prices" className="text-white hover:text-blue-400 transition">
                ТАРИФЫ
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-blue-400 transition">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Логотип */}
       {/* Логотип */}
               <div className="flex items-start gap-x-2">
                 <Image src="/logo-left.svg" alt="Логотип" width={64} height={64} className="py-[2px] -mr-[13px]" />
                 <Image src="/logo-right.svg" alt="Логотип" width={80} height={34} className="pt-[13px] pb-[20px] -ml-[15px]" />
               </div>
      </div>

      {/* Разделительная линия */}
      <div className="border-t border-gray-700 mt-4"></div>

      {/* Копирайт */}
      <div className="text-center text-gray-400 text-sm py-4">
        © 2022 TradeBlade. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
