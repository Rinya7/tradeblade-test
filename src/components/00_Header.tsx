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
    <header className="container relative ">
      <div className="    mx-auto flex justify-between items-center ">
        
        {/* Логотип */}
        <div className="flex items-start gap-x-2">
          <Image src="/logo-left.svg" alt="Логотип" width={64} height={64} className="py-[2px] -mr-[13px]" />
          <Image src="/logo-right.svg" alt="Логотип" width={80} height={34} className="pt-[13px] pb-[20px] -ml-[15px]" />
        </div>

        {/* Десктопна навігація */}
        <nav className="hidden 2xl:flex space-x-6">
          <Link href="#features" className="text-gray-700 hover:text-blue-600">
            Переваги
          </Link>
          <Link href="#pricing" className="text-gray-700 hover:text-blue-600">
            Тарифи
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-blue-600">
            Контакти
          </Link>
        </nav>

        {/* Десктопна кнопка */}
        <Link href="/signup" className="hidden 2xl:flex bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
          Реєстрація
        </Link>

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
