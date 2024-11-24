import React, { useState } from 'react'
import {headerItems} from "../static/"
import { NavLink, Link } from 'react-router-dom'
import logoIcon from "../assets/images/icon-logo.svg"
import loupeIng from "../assets/images/loupe.svg"
import "../components/Header/Header.css"
import { FaRegHeart } from 'react-icons/fa'
import { LiaShoppingCartSolid } from 'react-icons/lia'
import { TbAntennaBars5 } from 'react-icons/tb'
import { useStateValue } from '../context/index';
import { FaArrowCircleUp } from "react-icons/fa";
const Header = () => {
    const [state, dispatch] = useStateValue()
    const [shadow, setShadow] = useState(false)
    window.addEventListener("scroll", ()=>{
      if(document.documentElement.scrollTop >= 200){
        setShadow(true)
      }else{
        setShadow(false)
      }
    })
    const itemsHeader = headerItems?.map((item, inx)=> (
        <li key={inx}>
            <NavLink to={item}>{item}</NavLink>
        </li>
    ))
  return (
    <div className='w-[1310px] py-[12px] m-auto mb-[0px] header-wrapper sticky top-0 left-0 z-[80] pb-3 bg-white'>
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
            <Link to={"/"}>
                <img className='header-logo' src={logoIcon} alt="Icon-Logo" width={207} height={35}/>
            </Link>
            <button className='w-[120px] py-[8px] border-none bg-[#454545] text-[#FFFFFF] rounded-[44px] ml-[20px] header-btn'>
                Каталог
            </button>
            <form className='relative'>
                <input type="text" placeholder='Поиск по товарам' className='outline-none py-[8px] pl-[16px] pr-[410px] border-[1px] rounded-[44px] border-[#454545] header-inp'/>
                <img className='absolute left-[580px] bottom-[12px] header-img' src={loupeIng} alt="Loupe-Img" width={16} height={16}/>
            </form>
            <div className='flex gap-[31px] items-center max-[600px]:gap-3 max-[600px]:items-center max-[600px]:mt-1 mr-4'>
                    <NavLink to={"/wishlist"} href="#" className='flex flex-col items-center gap-2 text-[14px] font-semibold max-[600px]:text-[0px] relative'>
                        <FaRegHeart className='text-[23px] max-[600px]:text-[26px]'/> Избранное <p className='absolute right-1 top-[-10px] w-4 h-4 flex justify-center items-center rounded-[50%] bg-red-500 text-white text-[10px] max-[600px]:right-[-6px]'>
                        {state.wishlist.length > 9 ? "9+" : state.wishlist.length}
                        </p>
                    </NavLink>
                    <NavLink href="#" className='flex flex-col items-center gap-2 text-[14px] font-semibold max-[990px]:hidden'><TbAntennaBars5 className='text-[24px]'/> Сравнение</NavLink>
                    <NavLink to={"/cartlist"} href="#" className='flex flex-col items-center gap-2 text-[14px] font-semibold max-[600px]:text-[0px] relative'>
                        <LiaShoppingCartSolid className='text-[24px] max-[600px]:text-[30px]'/>
                        Корзина
                        <p className='absolute right-1 top-[-8px] w-4 h-4 flex justify-center items-center rounded-[50%] bg-red-500 text-white text-[10px] max-[600px]:right-[-6px]'>
                        {state.cart.length > 9 ? "9+" : state.cart.length}
                        </p>
                    </NavLink>
                </div>
        </div>
        {
            shadow &&
            <a href="#" className='block fixed bottom-8 right-32 text-5xl'>
                <FaArrowCircleUp/>
            </a>
        }
    </div>
  )
}

export default React.memo(Header)