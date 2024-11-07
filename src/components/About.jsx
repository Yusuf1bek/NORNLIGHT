import React from 'react'
import "./About/About.css"
const About = () => {
  return (
    <div>
        <div className='w-[1272px] py-[80px] m-auto flex gap-[100px] items-start about-1'>
            <div>
                <h1 className='font-[600] text-[64px] leading-[70px] mb-[36px]'>О компании</h1>
                <ul className='flex flex-col gap-[20px]'>
                    <li className='w-[530px] py-[32px] px-[32px] flex flex-col gap-[83px] bg-[#F2F2F2] rounded-[15px]'>
                        <strong className='font-[600] text-[64px] leading-[70px]'>170+ </strong>
                        <span className='font-[400] text-[24px] leading-[36px]'>Товаров</span>
                    </li>
                    <li className='w-[530px] py-[32px] px-[32px] flex flex-col gap-[83px] bg-[#F2F2F2] rounded-[15px]'>
                        <strong className='font-[600] text-[64px] leading-[70px]'>1000+  </strong>
                        <span className='font-[400] text-[24px] leading-[36px]'>Довольных покупателей</span>
                    </li>
                    <li className='w-[530px] py-[32px] px-[32px] flex flex-col gap-[83px] bg-[#F2F2F2] rounded-[15px]'>
                        <strong className='font-[600] text-[64px] leading-[70px]'>170+ </strong>
                        <span className='font-[400] text-[24px] leading-[36px]'>Товаров</span>
                    </li>
                </ul>
            </div>
            <ul className='flex flex-col w-[640px]'>
                <li className='font-[400] text-[20px] leading-[30px] mb-[20px]'>
                    Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников для освещения вашего дома или офиса. У нас вы найдете разнообразные модели светильников, от современных и стильных до классических и элегантных. Мы предлагаем качественные и надежные светильники от лучших производителей, которые подарят вам комфорт и уют.
                </li>
                <li className='font-[400] text-[20px] leading-[30px] mb-[20px]'>
                    Покупая светильники в нашем интернет-магазине, вы получаете отличное соотношение цены и качества. Мы осуществляем доставку по всей России, чтобы каждый клиент мог насладиться прекрасным светом и удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис тепла и света с NORNLIGHT!
                </li>
                <li className='font-[400] text-[20px] leading-[30px] mb-[20px]'>
                    Интернет-магазин NORNLIGHT предлагает широкий ассортимент светильников для освещения вашего дома или офиса. У нас вы найдете разнообразные модели светильников, от современных и стильных до классических и элегантных. Мы предлагаем качественные и надежные светильники от лучших производителей, которые подарят вам комфорт и уют.
                </li>
                <li className='font-[400] text-[20px] leading-[30px] mb-[20px]'>
                    Покупая светильники в нашем интернет-магазине, вы получаете отличное соотношение цены и качества. Мы осуществляем доставку по всей России, чтобы каждый клиент мог насладиться прекрасным светом и удобством покупки онлайн. Обратитесь к нам сегодня и превратите ваш дом в оазис тепла и света с NORNLIGHT!
                    </li>
            </ul>
        </div>
    </div>
  )
}

export default React.memo(About)