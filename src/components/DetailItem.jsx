import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import likeIng from "../assets/images/like.svg"

const DetailItem = () => {
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])
    const {id} = useParams()
    const {data} = useFetch(`/products/${id}`)
    const [count, setCount] = useState(0)

    const inc = ()=>{
        setCount(count + 1)
    }
    const deInc = ()=>{
      setCount(count - 1)
  }
  return (
    <div className='w-[1300px] py-[100px] m-auto'>
      <div className='flex items-center justify-between mb-[180px]'>
        <img src={data?.url} alt={data?.title} width={650} height={600} />
        <div className='w-[600px]'>
          <h2 className='font-[500] text-[40px] leading-[44px] mb-[40px]'>{data?.title}</h2>
          <div className='flex gap-[16px] items-center mb-[40px]'>
            <strong className='font-[500] text-[40px] leading-[64px]'>{data?.newPrice.brm()} ₽</strong>
            <strong className='font-[500] text-[18px] leading-[28px] text-[#B3B3B3] line-through'>{data?.oldPrice.brm()} ₽</strong>
          </div>
          <p className='font-[400] text-[16px] leading-[25px] mb-[48px]'>{data?.description}</p>
          <div className='flex items-center gap-[16px]'>
            <div className='flex items-center gap-[32px] w-[132px] border-[1px] border-[#E5E5E5] rounded-lg py-[10px] pl-[20px] pr-[10px] font-[500] text-[16px] leading-[19px]'>
              <button onClick={deInc}>-</button>
              <span>{count}</span>
              <button onClick={inc}>+</button>
            </div>
            <button className='w-[180px] py-[10px] bg-[#454545] text-white rounded-lg'>В корзину</button>
            <img src={likeIng} alt="" />
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