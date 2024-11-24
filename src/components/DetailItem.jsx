import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import okeIcon from "../assets/images/oke-icon.svg"
import wkIcon from "../assets/images/wk-icon.svg"
import telegramIcon from "../assets/images/telegram-icon.svg"
import watsUpIcon from "../assets/images/watsup-icon.svg"
import messengerIcon from "../assets/images/messenger-icon.svg"
import { useStateValue } from '../context'
import { FaHeart, FaRegHeart } from "react-icons/fa";

const DetailItem = () => {
  
  const [state, dispatch] = useStateValue();
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])
  const {id} = useParams()
  const {data} = useFetch(`/products/${id}`)
  const [count, setCount] = useState(0)
  let amount = state?.cart?.find(item => item.id === id)?.amount
  const decrement = (data) => {
    if(amount >= 1){
      dispatch({type:"DEC_CART", payload: data })
    }else{
      dispatch({type:"DELETE_CART", payload: data })
    }
}

  return (
    <div className='w-[1300px] py-[100px] m-auto'>
      <div className='flex items-center justify-between mb-[180px]'>
        <img src={data?.url} alt={data?.title} width={650} height={600} />
        <div className='w-[600px]'>
          <h2 className='font-[500] text-[40px] leading-[44px] mb-[40px]'>{data?.title}</h2>
          <div className='flex items-center justify-between mb-[40px]'>
        <div className='flex flex-col gap-[12px] font-[400] text-[14px] leading-[22px] text-[#B3B3B3]'>
          <strong>Scott</strong>
          <strong>Артикул : 7655-188</strong>
          <strong className='text-[#4D932C]'>В наличии</strong>
        </div>
        <div className='flex items-center gap-[8px]'>
          <img src={okeIcon} alt="social-icon" />
          <img src={wkIcon} alt="social-icon" />
          <img src={telegramIcon} alt="social-icon" />
          <img src={watsUpIcon} alt="social-icon" />
          <img src={messengerIcon} alt="social-icon" />
        </div>
      </div>
          <div className='flex gap-[16px] items-center mb-[40px]'>
            <strong className='font-[500] text-[40px] leading-[64px]'>{data?.newPrice} ₽</strong>
            <strong className='font-[500] text-[18px] leading-[28px] text-[#B3B3B3] line-through'>{data?.oldPrice} ₽</strong>
          </div>
          <p className='font-[400] text-[16px] leading-[25px] mb-[48px]'>{data?.description}</p>
          <div className='flex items-center gap-[16px]'>
              {
                state?.cart?.some(item => item.id === id) 
                ?
              <div className='flex items-center gap-[32px] w-[132px] border-[1px] border-[#E5E5E5] rounded-lg py-[10px] pl-[20px] pr-[10px] font-[500] text-[16px] leading-[19px]'>
                <button onClick={()=> decrement(data)}>-</button>
                <span>
                  {
                    amount
                  }
                  </span>
                <button onClick={()=> dispatch({type:"ADD__CART", payload: data })}>+</button>
              </div>
                :
                <button 
                onClick={()=> dispatch({type:"ADD__CART", payload: data })}
                className='w-[180px] py-[10px] bg-[#454545] text-white rounded-lg'>В корзину</button>
              }
              <button onClick={()=> dispatch({type: "ADD_WISHLIST", payload: data })}>
                {
                  state?.wishlist?.some(item => item.id === id) ?
                  <FaHeart className='text-[22px] text-red-500'/>
                  :
                  <FaRegHeart className='text-[22px]'/>
                }
              </button>
            </div>
        </div>
      </div>
      <div>
        <h2 className='font-[500] text-[40px] leading-[64px] mb-[23px]'>Характеристика</h2>
          <ul className='w-[1300px]'>
            <li className='flex items-center justify-between px-[24px] py-[24px]'>
              <p className='text-[#101010] font-[500] text-[16px] leading-[19px]'>Цвет</p> 
              <p className='text-[#4C4C4C] font-[300] text-[18px] leading-[28px]'>{data?.color}</p>
            </li>
            <li className='flex items-center justify-between px-[24px] py-[24px] bg-[#F8F8F8]'>
              <p className='text-[#101010] font-[500] text-[16px] leading-[19px]'>Год</p> 
              <p className='text-[#4C4C4C] font-[300] text-[18px] leading-[28px]'>{data?.year}</p>
            </li>
            <li className='flex items-center justify-between px-[24px] py-[24px]'>
              <p className='text-[#101010] font-[500] text-[16px] leading-[19px]'>Диаметр</p> 
              <p className='text-[#4C4C4C] font-[300] text-[18px] leading-[28px]'>{data?.diametr}</p>
            </li>
            <li className='flex items-center justify-between px-[24px] py-[24px] bg-[#F8F8F8]'>
              <p className='text-[#101010] font-[500] text-[16px] leading-[19px]'>Материал рамы</p> 
              <p className='text-[#4C4C4C] font-[300] text-[18px] leading-[28px]'>{data?.material}</p>
            </li>
            <li className='flex items-center justify-between px-[24px] py-[24px]'>
              <p className='text-[#101010] font-[500] text-[16px] leading-[19px]'>Размер</p> 
              <p className='text-[#4C4C4C] font-[300] text-[18px] leading-[28px]'>{data?.size}</p>
            </li>
            <li className='flex items-center justify-between px-[24px] py-[24px] bg-[#F8F8F8]'>
              <p className='text-[#101010] font-[500] text-[16px] leading-[19px]'>Страна</p> 
              <p className='text-[#4C4C4C] font-[300] text-[18px] leading-[28px]'>{data?.country}</p>
            </li>
          </ul>
      </div>   
    </div>
  )
}

export default DetailItem