

import Carousel from "./common/Carousel";
import { EQUIPMENT } from "@/utils/constants";

function Deals() {
  return (
    <section className="container  ">
        <div className="pt-[48px] 2xl:pt-[86px] pb-[77px] 2xl:pb-[178px]">
      <h2 className="text-[28px] leading-[36px] 2xl:text-[44px] 2xl:leading-[56px] font-bold tracking-[-0.04em] uppercase text-left  mb-[2px] 2xl:mb-[4px]">Прошедшие сделки</h2>
      <div className="flex items-center mb-[24px] 2xl:mb-[72px]">
        <div className="mr-[4px] w-[7px] h-[7px] bg-[#35FF9E] rounded-full "></div>
        <p className="text-[14px] leading-[20px] tracking-[-0.04em] text-[#35ff9e] opacity-90">Онлайн</p>
      </div>
      <Carousel slides={EQUIPMENT} />
      </div>
    </section>
  )
}

export default Deals