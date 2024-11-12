import React from 'react'
import AllowRight from "../assets/images/allow-right.svg"
import AllowLeft from "../assets/images/alllow-left.svg"
import Brand1 from "../assets/images/brand-1.png"
import Brand2 from "../assets/images/brand-2.png"
import Brand3 from "../assets/images/brand-3.png"
import Brand4 from "../assets/images/brand-4.png"
import Brand5 from "../assets/images/brand-5.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "./Brand/Brand.css"

const Brends = () => {
  return (
    <div className='w-[1272px] py-[100px] m-auto brand-2'>
        <div className='flex  items-center justify-between mb-[72px] '>
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
        <ul className='flex gap-[00px] items-center'>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper "
            >
                <SwiperSlide>
                <li className='border-[1px] border-[#D9D9D9] p-[20px] w-[310px] h-[112px]'>
                    <img src={Brand1} alt="Brand-Img" width={300} height={70} />
                </li>
                </SwiperSlide>
                <SwiperSlide>
                <li className='border-[1px] border-[#D9D9D9] p-[20px] w-[310px] h-[112px]'>
                    <img src={Brand2} alt="Brand-Img" width={300} height={70} />
                </li>
                </SwiperSlide>
                <SwiperSlide>
                <li className='border-[1px] border-[#D9D9D9] p-[20px] w-[310px] h-[112px]'>
                    <img src={Brand3} alt="Brand-Img" width={300} height={70} />
                </li>
                </SwiperSlide>
                <SwiperSlide>
                <li className='border-[1px] border-[#D9D9D9] p-[20px] w-[310px] h-[112px]'>
                    <img src={Brand4} alt="Brand-Img" width={300} height={70} />
                </li>
                </SwiperSlide>
                <SwiperSlide>
                <li className='border-[1px] border-[#D9D9D9] p-[20px] w-[310px] h-[112px]'>
                    <img src={Brand5} alt="Brand-Img" width={300} height={70} />
                </li>
                </SwiperSlide>
            </Swiper>
        </ul>
    </div>
  )
}

export default React.memo(Brends)