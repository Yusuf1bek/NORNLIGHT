import React from 'react'
import About1 from "../assets/images/about-1.svg"
import About2 from "../assets/images/about-2.svg"
import About3 from "../assets/images/about-3.svg"
import About4 from "../assets/images/about-4.svg"
import AllowRight from "../assets/images/allow-right.svg"
import "../components/Whycomp/style.css"
import Products from './Products'
import { data } from 'autoprefixer'

const Aboutcomp = () => {
  return (
    <>
    <div className='w-[1300px] py-[100px] m-auto about-wrapper'>
        <div className='flex items-center justify-between mb-[53px]'>
                <h2 className='font-[700] text-[40px] leading-[54px] about-title'>Почему NORNLIGHT?</h2>
                <button className='blog-btn flex items-center gap-[10px] border-[1px] border-[#454545] text-[#454545] rounded-[20px] w-[200px] py-[10px] pl-[45px]'>
                    О компании
                    <img src={AllowRight} alt="Allow-right" />
                </button>
            </div>
        <ul className='flex items-center justify-between about-list'>
            <li className='about-item w-[310px] h-[360px] px-[45px] py-[40px] border-[1px] border-[#D9D9D9] rounded-xl'>
                <img src={About1} alt="" />
                <h3 className='font-[700] text-[20px] leading-[26px] mb-[20px] mt-[80px]'>Только проверенные бренды</h3>
                <p className='font-[400] text-[16px] leading-[20px]'>Бренды, проверенные временем и качеством</p>
            </li>
            <li className='about-item w-[310px] h-[360px] px-[45px] py-[40px] border-[1px] border-[#D9D9D9] rounded-xl'>
                <img className='bg-[#454545] p-3 rounded-lg' src={About2} alt="" />
                <h3 className='font-[700] text-[20px] leading-[26px] mb-[20px] mt-[80px]'>Самые низкие цены</h3>
                <p className='font-[400] text-[16px] leading-[20px]'>Ниже не будет нигде</p>
            </li>
            <li className='about-item w-[310px] h-[360px] px-[45px] py-[40px] border-[1px] border-[#D9D9D9] rounded-xl'>
                <img className='bg-[#454545] p-3 rounded-lg' src={About3} alt="" />
                <h3 className='font-[700] text-[20px] leading-[26px] mb-[20px] mt-[80px]'>Быстрая доствка</h3>
                <p className='font-[400] text-[16px] leading-[20px]'>Доставляем по всей РФза 1-10 дней</p>
            </li>
            <li className='about-item w-[310px] h-[360px] px-[45px] py-[40px] border-[1px] border-[#D9D9D9] rounded-xl'>
                <img className='bg-[#454545] p-3 rounded-lg' src={About4} alt="" />
                <h3 className='font-[700] text-[20px] leading-[26px] mb-[20px] mt-[80px]'>Большой ассортимент</h3>
                <p className='font-[400] text-[16px] leading-[20px]'>Более 1000 товаров</p>
            </li>
        </ul>
      <div className='flex items-center justify-between mt-[100px]'>
        <h1 className='font-[700] text-[40px] leading-[54px] catalog-title'>Популярные товары</h1>
        <button className='blog-btn flex items-center gap-[10px] border-[1px] border-[#454545] text-[#454545] rounded-[20px] w-[200px] py-[10px] pl-[45px]'>
          Все товары
          <img src={AllowRight} alt="Allow-right" />
        </button>
      </div>
    </div>
    </>
    
  )
}

export default React.memo(Aboutcomp)