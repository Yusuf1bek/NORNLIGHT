import React from 'react'
import AllowRight from "../assets/images/allow-right.svg"
import Catalog1 from "../assets/images/catalog-1.png"
import Catalog2 from "../assets/images/catalog-2.png"
import Catalog3 from "../assets/images/catalog-3.png"
import Catalog4 from "../assets/images/catalog-4.png"
import Catalog5 from "../assets/images/catalog-5.png"
import Catalog6 from "../assets/images/catalog-6.png"

const Catalog = () => {
  return (
        <div className='w-[1300px] py-[100px] m-auto'>
            <div className='flex items-center justify-between mb-[53px]'>
                <h2 className='font-[700] text-[40px] leading-[54px]'>Каталог</h2>
                <button className='blog-btn flex items-center gap-[10px] border-[1px] border-[#454545] text-[#454545] rounded-[20px] w-[200px] py-[10px] pl-[45px]'>
                    Весь каталог
                    <img src={AllowRight} alt="Allow-right" />
                </button>
            </div>
            <ul className='flex flex-wrap gap-[20px]'>
                <li className='w-[420px] py-[32px] px-[32px] flex items-center justify-between bg-[#F2F2F2] rounde-[12px]'>
                    <div className='flex flex-col gap-[120px]'>
                        <h3 className='font-[500] text-[20px] leading-[22px]'>Люстры</h3>
                        <strong className='flex items-center gap-[10px] font-[500] text-[14px] leading-[15px]'>
                            От 540₽
                            <img src={AllowRight} alt="Allow-right" />
                        </strong>
                    </div>
                    <img src={Catalog1} alt="" />
                </li>
                <li className='w-[420px] py-[32px] px-[32px] flex items-center justify-between bg-[#F2F2F2] rounde-[12px]'>
                    <div className='flex flex-col gap-[120px]'>
                        <h3 className='font-[500] text-[20px] leading-[22px]'>Светильники</h3>
                        <strong className='flex items-center gap-[10px] font-[500] text-[14px] leading-[15px]'>
                            От 540₽
                            <img src={AllowRight} alt="Allow-right" />
                        </strong>
                    </div>
                    <img src={Catalog2} alt="" />
                </li>
                <li className='w-[420px] py-[32px] px-[32px] flex items-center justify-between bg-[#F2F2F2] rounde-[12px]'>
                    <div className='flex flex-col gap-[120px]'>
                        <h3 className='font-[500] text-[20px] leading-[22px]'>Бра</h3>
                        <strong className='flex items-center gap-[10px] font-[500] text-[14px] leading-[15px]'>
                            От 540₽
                            <img src={AllowRight} alt="Allow-right" />
                        </strong>
                    </div>
                    <img src={Catalog3} alt="" />
                </li>
                <li className='w-[420px] py-[32px] px-[32px] flex items-center justify-between bg-[#F2F2F2] rounde-[12px]'>
                    <div className='flex flex-col gap-[120px]'>
                        <h3 className='font-[500] text-[20px] leading-[22px]'>Торшеры</h3>
                        <strong className='flex items-center gap-[10px] font-[500] text-[14px] leading-[15px]'>
                            От 540₽
                            <img src={AllowRight} alt="Allow-right" />
                        </strong>
                    </div>
                    <img src={Catalog4} alt="" />
                </li>
                <li className='w-[420px] py-[32px] px-[32px] flex items-center justify-between bg-[#F2F2F2] rounde-[12px]'>
                    <div className='flex flex-col gap-[120px]'>
                        <h3 className='font-[500] text-[20px] leading-[22px]'>Настольные лампы</h3>
                        <strong className='flex items-center gap-[10px] font-[500] text-[14px] leading-[15px]'>
                            От 540₽
                            <img src={AllowRight} alt="Allow-right" />
                        </strong>
                    </div>
                    <img src={Catalog5} alt="" />
                </li>
                <li className='w-[420px] py-[32px] px-[32px] flex items-center justify-between bg-[#F2F2F2] rounde-[12px]'>
                    <div className='flex flex-col gap-[120px]'>
                        <h3 className='font-[500] text-[20px] leading-[22px]'>Споты</h3>
                        <strong className='flex items-center gap-[10px] font-[500] text-[14px] leading-[15px]'>
                            От 540₽
                            <img src={AllowRight} alt="Allow-right" />
                        </strong>
                    </div>
                    <img src={Catalog6} alt="" />
                </li>
            </ul>
        </div>
  )
}

export default React.memo(Catalog)