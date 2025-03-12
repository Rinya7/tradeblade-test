"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./common/MobileMenu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.classList.toggle("overflow-hidden", isMobileMenuOpen);
  };

  return (
    <header className="container relative bg-background">
      <div className="    mx-auto flex justify-between items-center ">
        
        {/* Логотип */}
        <div className="flex items-start gap-x-2">
          <Image src="/logo-left.svg" alt="Логотип" width={64} height={64} className="py-[2px] -mr-[13px]" />
          <Image src="/logo-right.svg" alt="Логотип" width={80} height={34} className="pt-[13px] pb-[20px] -ml-[15px]" />
        </div>

        {/* Десктопна навігація */}
        <nav className="hidden 2xl:flex space-x-6 uppercase">
          <Link href="#numbers" className=" ">
            Цыфры
          </Link>
          <Link href="#deals" className=" ">
            Сделки онлайн
          </Link>
          <Link href="#" className=" ">
            О компании
          </Link>
          <Link href="#" className=" ">
            Как начать
          </Link>
          <Link href="#prices" className=" ">
            Тарифы
          </Link>
          <Link href="#" className=" ">
            FAQ
          </Link>
        </nav>

        {/* Десктопна кнопка */}
        
        <div className="hidden 2xl:flex  text-button-header uppercase">
          
          <Link
            href="/login"
            className="w-auto mr-[12px] button-header   text-center   px-[24px] py-[11px] rounded-[3px] hover:text-[#030718]  hover:bg-background-btn-hover   transition"
            
          >
            войти
          </Link>
          <Link
            href="/signup"
            className="w-full button-header   text-center   px-[24px] py-[11px] rounded-[3px] hover:text-[#030718]  hover:bg-background-btn-hover transition"
            
          >
            регистрация
          </Link>
        </div>

        {/* Кнопка мобільного меню */}
        <button onClick={toggleMobileMenu} className="2xl:hidden ml-4">
          <Image
            alt="Відкрити меню"
            src={"/icons/menu.svg"}
            width={24}
            height={24}
            className="transition-transform duration-300"
          />
        </button>

        {/* Мобільне меню */}
        {isMobileMenuOpen && <MobileMenu isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />}
      </div>
    </header>
  );
};

export default Header;
