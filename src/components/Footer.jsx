import React from 'react'
import logoIcon from "../assets/images/icon-logo.svg"
import cardIcon from "../assets/images/cards.svg"
import "../components/Footer/Footer.css"

const Footer = () => {
  return (
    <div className='w-full bg-[#F2F2F2] m-auto mt-[100px] footer-2'>
    <div className='w-[1300px] py-[100px] m-auto '>
        <ul className='flex items-start gap-[220px] footer-1'>
            <li className='flex flex-col items-start  gap-[10px]'>
                <img src={logoIcon} alt="" />
                <span>8 (800) 890-46-56</span>
                <img src={cardIcon} alt="" />
                <a href="">Политика и конфидециальности</a>
                <a href="">Пользовательское</a>
            </li>
            <li className='flex flex-col items-start gap-[10px]'>
                <strong>Покупателям</strong>
                <a href="">О компании</a>
                <a href="">Доставка и оплата</a>
                <a href="">Возврат</a>
                <a href="">Гарантии</a>
                <a href="">Контакты</a>
                <a href="">Блог</a>
            </li>
            <li className='flex flex-col items-start '>
                <strong className='mb-[10px]'>Товары</strong>
                <div className='flex items-start gap-[40px] footer-3'>
                    <div className='flex items-start flex-col gap-[10px]'>
                        <a href="">Люстры</a>
                        <a href="">Светильники</a>
                        <a href="">Бра</a>
                        <a href="">Торшеры</a>
                        <a href="">Комплектуюшие</a>
                        <a href="">Настольные лампы</a>
                    </div>
                    <div className='flex items-start flex-col gap-[10px]'>
                        <a href="">Споты</a>
                        <a href="">Трековые светильники</a>
                        <a href="">Уличные светильники</a>
                        <a href="">Технические светильники</a>
                        <a href="">Светодиодные ленты</a>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    </div>
  )
}

export default React.memo(Footer)