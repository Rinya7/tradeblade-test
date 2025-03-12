import Image from 'next/image'
import React from 'react'

function Numbers() {
  return (
    
    
       <section className="relative container bg-white">
        <div className='   text-black pt-[24px] pb-[48px] 2xl:py-[65px] text-left 2xl:text-center'>
       <Image
          src="/img/hero_button.png" 
          alt="Trading visualization"
          width={272}
          height={82}
          className="absolute -top-[24px] 2xl:w-[640px] 2xl:h-[60px] 2xl:-top-[60px] left-0"
        />
       <div className="grid grid-cols-2 2xl:grid-cols-4 2xl:justify-items-start">
            <div className="col-span-2 2xl:col-span-1  mb-[40px] 2xl:mb-0 ">  
                <h2 className="text-[28px] leading-[36px] 2xl:text-[44px] 2xl:leading-[56px] tracking-[-0.04em] uppercase font-bold  ">Цифры</h2>
                <p className="2xl:flex text-[14px] leading-[20px] tracking-[-0.04em] opacity-50 ">Сентябрь 2022</p>
            </div>  
            
                <div className='2xl:text-start'>
                <p className=" text-[14px] leading-[20px]  uppercase opacity-80 w-[107px] 2xl:w-auto mb-[4px]">ТОРГОВОЙ ПРИБЫЛИ</p>
                <p className=" text-[35px] leading-[38px]  2xl:text-[60px] 2xl:leading-[66px] tracking-[-0.02em] uppercase font-medium text-text-numbers">2756%</p>
                </div>
                <div className='2xl:text-start'>
                <p className="text-[14px] leading-[20px]  uppercase opacity-80  mb-[4px]">ФЬЮЧЕРСНЫХ И СПОТОВЫХ СДЕЛОК</p>
                <p className="text-[35px] leading-[38px] 2xl:text-[60px] 2xl:leading-[66px] tracking-[-0.02em] uppercase font-medium text-text-numbers">67</p>
                </div>
             
            <div className="mt-[32px]  2xl:mt-0 2xl:text-start">
              <p className="w-[147px] 2xl:w-auto text-[14px] leading-[20px]  uppercase opacity-80  mb-[4px]">ПРИБЫЛЬ ПОДПИСЧИКОВ</p>
              <p className="text-[35px] leading-[38px] 2xl:text-[60px] 2xl:leading-[66px] tracking-[-0.02em] uppercase font-medium text-text-numbers">375000</p>
            </div>
          </div>
        </div>
         
      </section>
    
  )
}

export default Numbers