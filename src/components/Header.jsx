import React from 'react'
import {headerItems} from "../static/"
import { NavLink, Link } from 'react-router-dom'
import logoIcon from "../assets/images/icon-logo.svg"
import loupeIng from "../assets/images/loupe.svg"
import cartIng from "../assets/images/cart.svg"
import likeIng from "../assets/images/like.svg"
import compareIng from "../assets/images/compare.svg"
import "../components/Header/Header.css"

const Header = () => {
    const itemsHeader = headerItems?.map((item, inx)=> (
        <li key={inx}>
            <NavLink>{item}</NavLink>
        </li>
    ))
  return (
    <div className='max-w-[1310px] py-[12px] m-auto mb-[80px] '>
        <div className='flex items-center justify-between mb-[31px] header-1'>
            <ul className='flex items-center gap-[25px]'>
                {itemsHeader}
            </ul>
                <div className='flex items-center gap-[24px]'>
                    <strong>8 (800) 890-46-56</strong>
                    <Link>Заказать звонок</Link>
                </div>
        </div>
        <div className='flex items-center gap-[30px] header-2'>
            <Link>
                <img src={logoIcon} alt="Icon-Logo" width={207} height={35}/>
            </Link>
            <button className='w-[120px] py-[8px] border-none bg-[#454545] text-[#FFFFFF] rounded-[44px] ml-[20px] header-btn'>
                Каталог
            </button>
            <form className='relative'>
                <input type="text" placeholder='Поиск по товарам' className='outline-none py-[8px] pl-[16px] pr-[410px] border-[1px] rounded-[44px] border-[#454545] header-inp'/>
                <img className='absolute left-[580px] bottom-[12px] header-img' src={loupeIng} alt="Loupe-Img" width={16} height={16}/>
            </form>
            <div className='flex items-center gap-[30px]'>
                <div className='flex flex-col items-center header-btn-1'>
                    <img src={likeIng} alt="liek-img" width={24} height={24}/>
                    <span>Избранное</span>
                </div>
                <div className='flex flex-col items-center header-btn-2'>
                    <img src={compareIng} alt="compare-img" width={24} height={24}/>
                    <span>Сравнение</span>
                </div>
                <div className='flex flex-col items-center header-btn-3'>
                    <img src={cartIng} alt="cart-img" width={24} height={24}/>
                    <span>Корзина</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header