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
        <div className="grid grid-cols-2 gap-[16px]  w-full  mt-[114px]     text-button-mobile uppercase">
          <Link
            href="/signup"
            className="w-full button-mobile-menu   text-center   px-[24px] py-[16px] rounded-[3px] hover:text-[#030718]  hover:bg-background-btn-hover transition"
            onClick={toggleMenu}
          >
            регистрация
          </Link>
          <Link
            href="/login"
            className="w-full button-mobile-menu   text-center   px-[24px] py-[16px] rounded-[3px] hover:text-[#030718]  hover:bg-background-btn-hover   transition"
            onClick={toggleMenu}
          >
            войти
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
