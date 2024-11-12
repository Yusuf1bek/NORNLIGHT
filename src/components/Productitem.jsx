import React from 'react'
import Products1 from "../assets/images/products-1.png"
import cartWhite from "../assets/images/cart-white.svg"
import likeIng from "../assets/images/like.svg"

const Productitem = () => {
  return (
    <li className='w-[326px] p-[18px] relative '>
                    <img className='ml-[50px] mb-[32px]' src={Products1} alt="" width={173} height={216}/>
                    <img className='absolute top-0 right-[55px]' src={likeIng} alt="" />
                    <h2 className='font-[500] text-[20px] leading-[22px] mb-[24px]'>Встраиваемый светильник Novotech</h2>
                    <div className='flex items-center gap-[116px]'>
                        <div className='flex flex-col'>
                            <span className='font-[500] text-[12px] leading-[13px] text-[#454545] line-through'>7 000₽</span>
                            <strong className='font-[500] text-[20px] leading-[22px]'>6 399₽</strong>
                        </div>
                        <button className='w-[55px] py-[5px] px-[20px] bg-[#454545] rounded-2xl'>
                            <img src={cartWhite} alt="" />
                        </button>
                    </div>
                </li>
)
}

export default Productitem