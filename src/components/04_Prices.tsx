"use client"
import React, { useState } from "react";

const Prices = () => {
  const [selectedPlan, setSelectedPlan] = useState("spot");

  return (
    <div className="container">
        <div className="pb-[44px]">
      <h2 className="text-[28px] leading-[36px] tracking-[-0.04em] uppercase font-bold mb-[24px] 2xl:text-center">ТАРИФЫ</h2>

      {/* Переключатель */}
      <div className="relative p-[4px] flex justify-between  w-full 2xl:w-[412px] xl:mx-auto bg-background-purpure rounded-[4px] mb-[24px] ">
   
          <button
            className={`w-1/2 z-20 rounded-[4px] py-[10px] font-bold text-[18px] leading-[24px] tracking-[-0.04em] uppercase   transition  ${
              selectedPlan === "spot"
                ? "bg-[#5ee4ff] text-black"
                : "text-[#5ee4ff]"
            }`}
            onClick={() => setSelectedPlan("spot")}
          >
            СПОТ
          </button>
          <button
            className={`w-1/2  rounded-[4px] py-[10px] transition font-bold text-[18px] leading-[24px] tracking-[-0.04em] uppercase ${
              selectedPlan === "futures"
                ? "bg-[#5ee4ff] text-black"
                : "text-[#5ee4ff]"
            }`}
            onClick={() => setSelectedPlan("futures")}
          >
            ФЬЮЧЕРС
          </button>
       
      </div>

      {/* Тарифы */}
      <div className="flex flex-col 2xl:flex-row gap-6 justify-center">
        <div className="w-full 2xl:grid 2xl:content-between   2xl:w-[412px] 2xl:h-[556px] border border-gray-600 rounded-[8px] p-4 bg-[#12122b]">
          <h3 className="text-[28px] leading-[36px] tracking-[-0.04em] font-semibold mb-6">STANDART</h3>
          <ul className="text-[16px] leading-[20px] space-y-4 mb-8  ">
            <li>✔ Ручной трейдинг</li>
            <li>✔ Автоматическое или полуавтоматическое копирование сделок</li>
            <li>✔ Личный кабинет со статистикой</li>
            <li>✔ Среднесрочные сделки с уровнями набора портфеля</li>
          </ul>
          <div className="flex  justify-between  ">
            <div className="flex">
                <p className="text-[35px] leading-[40px] font-medium tracking-[-0.04em] mr-[4px] ">
                    $234 
                </p>
                <p className="text-[18px] leading-[20px] font-medium tracking-[-0.04em] text-[#35ff9e]  ">-35%</p>
            </div>
            <select className="w-[128px] bg-[#1a1a3b] p-2 rounded-md text-gray-300 text-sm mb-4">
                <option>12 месяцев</option>
            </select>
          </div>
          <button className="w-full rounded-[3px] px-[24px] py-[16px] bg-background-btn-hover">
            <p className="text-[16px] leading-[20px] font-medium text-[#030718]">ПОПРОБОВАТЬ</p>
            <p className="text-[12px] leading-[16px]  text-center text-[#030718] opacity-50">
            5 дней бесплатно
          </p>
          </button>
          
        </div>

        <div className="w-full 2xl:grid 2xl:content-between 2xl:w-[412px] 2xl:h-[556px] border border-gray-600 rounded-[8px] p-4 bg-[#6a4ff1]">
          <h3 className="text-[28px] leading-[36px] tracking-[-0.04em] font-semibold mb-6">VIP</h3>
          <ul className="text-[16px] leading-[20px] space-y-4 mb-8 ">
            <li>✔ Ручной трейдинг</li>
            <li>✔ Автоматическое или полуавтоматическое копирование сделок</li>
            <li>✔ Личный кабинет со статистикой</li>
            <li>✔ Краткосрочные, среднесрочные и инвест сделки</li>
            <li>✔ Доступ в VIP чат с командой</li>
            <li>✔ Наш авторский курс по трейдингу</li>
          </ul>
          <div className="flex  justify-between  ">
          <div className="flex">
                <p className="text-[35px] leading-[40px] font-medium tracking-[-0.04em] mr-[4px] ">
                $585 
                </p>
                <p className="text-[18px] leading-[20px] font-medium tracking-[-0.04em] text-[#35ff9e]  ">-35%</p>
            </div>
            <select className="w-[128px] bg-[#1a1a3b] p-2 rounded-md text-gray-300 text-sm mb-4">
                <option>12 месяцев</option>
            </select>
           
          </div>
          <button className="w-full rounded-[3px] px-[24px] py-[16px] bg-background-btn-hover">
            <p className="text-[16px] leading-[20px] font-medium text-[#030718]">ПОПРОБОВАТЬ</p>
            <p className="text-[12px] leading-[16px]  text-center text-[#030718] opacity-50">
            5 дней бесплатно
          </p>
          </button>
           
        </div>
      </div>
      </div>
    </div>
  );
};

export default Prices;
