"use client";

import Image from "next/image";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, toggleMenu }) => {
  return (
    <div className="absolute top-0 right-0 p-[16px] max-w-[375px] w-full h-[700px] pt-[84px] pb-[16px] px-[16px] bg-[#5E47FF] z-50 shadow-lg transform transition-transform duration-300 ease-in-out"
      style={{ transform: isOpen ? "translateX(0)" : "translateX(100%)" }}
    >
      {/* Кнопка закриття */}
      <button onClick={toggleMenu} className="absolute top-[22px] right-[14px]">
        <Image src="/icons/close.svg" alt="Закрити меню" width={24} height={24} />
      </button>

      <nav className="flex flex-col   justify-center h-full space-y-6 text-mobile uppercase">
        <Link href="#numbers" className="    " onClick={toggleMenu}>
          ЦИФРЫ
        </Link>
        <Link href="#deals" className="    " onClick={toggleMenu}>
          СДЕЛКИ ОНЛАЙН
        </Link>
        <Link href="#company" className="    " onClick={toggleMenu}>
          О КОМПАНИИ
        </Link>
        <Link href="#how-to-start" className="    " onClick={toggleMenu}>
          КАК НАЧАТЬ
        </Link>
        <Link href="#pricing" className="     " onClick={toggleMenu}>
          ТАРИФЫ
        </Link>
        <Link href="#reviews" className="     " onClick={toggleMenu}>
          ОТЗЫВЫ
        </Link>
        <Link href="#faq" className="   " onClick={toggleMenu}>
          FAQ
        </Link>

        {/* Кнопки "Регистрация" і "Войти" */}
        <div className="grid grid-cols-2 gap-[16px]  w-full  mt-[114px] text-botton">
          <Link
            href="/signup"
            className="w-full bg-white text-[#5E47FF] text-center font-bold px-6 py-3 rounded-md hover:bg-gray-200 transition"
            onClick={toggleMenu}
          >
            РЕГИСТРАЦИЯ
          </Link>
          <Link
            href="/login"
            className="w-full border border-white text-white text-center font-bold px-6 py-3 rounded-md hover:bg-white hover:text-[#5E47FF] transition"
            onClick={toggleMenu}
          >
            ВОЙТИ
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
