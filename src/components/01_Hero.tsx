import Image from 'next/image'
import React from 'react'

function Hero() { 
  return (
    <section className="container  ">
        <div className='pt-[40px] pb-[61px] 2xl:pt-[160px] 2xl:pb-[194px]  '>
      {/* Текстовый блок */}
      <div className='flex flex-col-reverse 2xl:flex-row  2xl:justify-between'>
      <div className=" 2xl:text-left 2xl:w-[630px]">
        <h1 className="text-[35px] leading-[44px] 2xl:text-[60px] 2xl:leading-[72px]  font-bold tracking-[-0.04em] uppercase mb-[12px]">
          Моментально копируй сделки профи трейдеров
        </h1>
        <p className="2xl:w-[565px] text-[16px] leading-[20px] font-normal text-[#e7f7f8] mb-[24px] opacity-[0.8]">
          Начни копировать сделки с успешной командой профессиональных трейдеров в автоматическом режиме.
        </p>
        <div className="relative mb-[12px] 2xl:w-[500px] ">
          <input
            type="email"
            placeholder="Ваш E-MAIL"
            className="  w-full p-[15px] 2xl:px-[16px] 2xl:py-[20px] rounded-[4px] bg-[#201a4f] text-[14px] leading-[20px] 2xl:text-[16px]  tracking-[-0.01em] text-white font-medium  focus:outline-none "
          />
          <button className="absolute top-[4px] right-[4px] button-hero uppercase text-[#030718] text-[14px] 2xl:text-[16px] leading-[20px] font-medium px-[24px] py-[11px]  2xl:py-[16px]">
            Начать
          </button>
        </div>
        <p className="text-[14px] leading-[20px] opacity-[0.3]">5 дней бесплатного пользования</p>
      </div>
      
      {/* Блок с картинкой */}
      
        <Image
          src="/img/hero.png" 
          alt="Trading visualization"
          width={300}
          height={134}
          className="w-[300px] 2xl:w-[470px] 2xl:h-[210px] mb-[32px] 2xl:mb-0"
        />
      
      </div>
      </div>
    </section>
  )
}

export default Hero