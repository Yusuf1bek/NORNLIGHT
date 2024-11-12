import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import heroImg from "../assets/images/hero-img.png"
import "../components/Hero/Hero.css"

const Hero = () => {
  return (
    <div className='w-[1414px]  m-auto bg-[#F2F2F2] rounded-[22px] hero-wrapper'>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwipers h-[500px]"
      >
        <SwiperSlide className='px-[130px] hero-4'>
            <div className='flex items-center gap-[290px] relative hero-2'>
                <div className='w-[395px] hero-3'>
                    <h2 className='font-[700] text-[60px] hero-title leading-[70px] mt-[40px] text-[#454545]'>
                        Скидка 15% на все подвесные светильники  
                        <span className='bg-[#454545] text-[#FFFFFF] rounded-[24px]'>  до 5 февраля</span>
                    </h2>
                </div>
                    <img className=' hero-img' src={heroImg} alt="Hero-Img" width={450} height={450} />
            </div>
        </SwiperSlide>
        <SwiperSlide className='px-[130px] hero-4'>
            <div className='flex items-center gap-[290px] relative hero-2'>
                <div className='w-[395px] hero-3'>
                    <h2 className='font-[700] text-[60px] hero-title leading-[70px] mt-[40px] text-[#454545]'>
                        Скидка 15% на все подвесные светильники  
                        <span className='bg-[#454545] text-[#FFFFFF] rounded-[24px]'>  до 5 февраля</span>
                    </h2>
                </div>
                    <img className=' hero-img' src={heroImg} alt="Hero-Img" width={450} height={450} />
            </div>
        </SwiperSlide>
        <SwiperSlide className='px-[130px] hero-4'>
            <div className='flex items-center gap-[290px] relative hero-2'>
                <div className='w-[395px] hero-3'>
                    <h2 className='font-[700] text-[60px] hero-title leading-[70px] mt-[40px] text-[#454545]'>
                        Скидка 15% на все подвесные светильники  
                        <span className='bg-[#454545] text-[#FFFFFF] rounded-[24px]'>  до 5 февраля</span>
                    </h2>
                </div>
                    <img className=' hero-img' src={heroImg} alt="Hero-Img" width={450} height={450} />
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default React.memo(Hero)