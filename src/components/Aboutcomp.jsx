import React from 'react'
import About1 from "../assets/images/about-1.svg"
import About2 from "../assets/images/about-2.svg"
import About3 from "../assets/images/about-3.svg"
import About4 from "../assets/images/about-4.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Brand1 from "../assets/images/brand-1.png"
import Brand2 from "../assets/images/brand-2.png"
import Brand3 from "../assets/images/brand-3.png"
import Brand4 from "../assets/images/brand-4.png"
import Brand5 from "../assets/images/brand-5.png"
import AllowRight from "../assets/images/allow-right.svg"
import AllowLeft from "../assets/images/alllow-left.svg"
import Blog from './Blog'

const Aboutcomp = () => {
  return (
    <div className='w-[1300px] py-[100px] m-auto'>
        <div className='flex items-center justify-between mb-[53px]'>
                <h2 className='font-[700] text-[40px] leading-[54px]'>Почему NORNLIGHT?</h2>
                <button className='blog-btn flex items-center gap-[10px] border-[1px] border-[#454545] text-[#454545] rounded-[20px] w-[200px] py-[10px] pl-[45px]'>
                    О компании
                    <img src={AllowRight} alt="Allow-right" />
                </button>
            </div>
        <ul className='flex items-center justify-between'>
            <li className='w-[310px] h-[360px] px-[45px] py-[40px] border-[1px] border-[#D9D9D9] rounded-xl'>
                <img src={About1} alt="" />
                <h3 className='font-[700] text-[20px] leading-[26px] mb-[20px] mt-[80px]'>Только проверенные бренды</h3>
                <p className='font-[400] text-[16px] leading-[20px]'>Бренды, проверенные временем и качеством</p>
            </li>
            <li className='w-[310px] h-[360px] px-[45px] py-[40px] border-[1px] border-[#D9D9D9] rounded-xl'>
                <img className='bg-[#454545] p-3 rounded-lg' src={About2} alt="" />
                <h3 className='font-[700] text-[20px] leading-[26px] mb-[20px] mt-[80px]'>Самые низкие цены</h3>
                <p className='font-[400] text-[16px] leading-[20px]'>Ниже не будет нигде</p>
            </li>
            <li className='w-[310px] h-[360px] px-[45px] py-[40px] border-[1px] border-[#D9D9D9] rounded-xl'>
                <img className='bg-[#454545] p-3 rounded-lg' src={About3} alt="" />
                <h3 className='font-[700] text-[20px] leading-[26px] mb-[20px] mt-[80px]'>Быстрая доствка</h3>
                <p className='font-[400] text-[16px] leading-[20px]'>Доставляем по всей РФза 1-10 дней</p>
            </li>
            <li className='w-[310px] h-[360px] px-[45px] py-[40px] border-[1px] border-[#D9D9D9] rounded-xl'>
                <img className='bg-[#454545] p-3 rounded-lg' src={About4} alt="" />
                <h3 className='font-[700] text-[20px] leading-[26px] mb-[20px] mt-[80px]'>Большой ассортимент</h3>
                <p className='font-[400] text-[16px] leading-[20px]'>Более 1000 товаров</p>
            </li>
        </ul>
        <div className='flex  items-center justify-between mb-[72px] mt-[70px]'>
            <h2 className='foont-[600] text-[40px] leading-[54px] brand-title'>Только проверенные бренды</h2>
            <div className='flex gap-[10px] items-center brand-1'>
                <button className='border-[1px] border-[#000000] rounded-[8px] w-[40px] py-[8px] px-[10px]'>
                    <img src={AllowLeft} alt="Allow-Img" />
                </button>
                <button className='border-[1px] border-[#000000] rounded-[8px] w-[40px] py-[8px] px-[10px]'>
                    <img src={AllowRight} alt="Allow-Img" />
                </button>   
            </div>
        </div>
        <ul className='flex gap-[20px] items-start'>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                <li className='border-[1px] border-[#D9D9D9] p-[20px]'>
                    <img src={Brand1} alt="Brand-Img" width={300} height={70} />
                </li>
                </SwiperSlide>
                <SwiperSlide>
                <li className='border-[1px] border-[#D9D9D9] p-[20px]'>
                    <img src={Brand2} alt="Brand-Img" width={300} height={70} />
                </li>
                </SwiperSlide>
                <SwiperSlide>
                <li className='border-[1px] border-[#D9D9D9] p-[20px]'>
                    <img src={Brand3} alt="Brand-Img" width={300} height={70} />
                </li>
                </SwiperSlide>
                <SwiperSlide>
                <li className='border-[1px] border-[#D9D9D9] p-[20px]'>
                    <img src={Brand4} alt="Brand-Img" width={300} height={70} />
                </li>
                </SwiperSlide>
                <SwiperSlide>
                <li className='border-[1px] border-[#D9D9D9] p-[20px]'>
                    <img src={Brand5} alt="Brand-Img" width={300} height={70} />
                </li>
                </SwiperSlide>
            </Swiper>
        </ul>
        <Blog/>
    </div>
  )
}

export default React.memo(Aboutcomp)