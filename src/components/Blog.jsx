import React from 'react'
import AllowRight from "../assets/images/allow-right.svg"
import AllowTop from "../assets/images/allow-top.svg"
import Blog1 from "../assets/images/blog-1.png"
import Blog2 from "../assets/images/blog-2.png"
import Blog3 from "../assets/images/blog-3.png"
import "../components/Blog/Blog.css"

const Blog = () => {
  return (
    <div className='w-[1300px] py-[100px] m-auto blog-1'>
        <div className='flex items-center justify-between mb-[53px]'>
            <h2 className='font-[700] text-[40px] leading-[54px] blog-title'>Блог</h2>
            <button className='blog-btn flex items-center gap-[10px] border-[1px] border-[#454545] text-[#454545] rounded-[20px] w-[200px] py-[10px] px-[15px]'>
                Перейти в блог
                <img src={AllowRight} alt="Allow-right" />
            </button>
        </div>
        <ul className='flex items-center gap-[20px] blog-3'>
            <li className='w-[420px] border-b-[1px] border-b-[#aeadad] blog-item'>
                <img src={Blog1} className='img-blog' alt="Blog-1" width={420} height={304}/>
                <div className='w-[420px] flex items-center gap-[70px] px-[10px] mb-[24px] blog-content'>
                    <h3 className='font-[600] text-[20px] leading-[26px] mt-[29px] blog-text'>Как правильно освещать дом снаружи?</h3>
                    <img src={AllowTop} alt="Allow-Top" width={16} height={16} />
                </div>
                <p className='font-[500] text-[14px] leading-[15px] text-[#454545] px-[10px] mb-[20px] blog-text'>01.01.2024</p>
            </li>
            <li className='w-[420px] border-b-[1px] border-b-[#aeadad] blog-item'>
                <img src={Blog2} className='img-blog' alt="Blog-1" width={420} height={304}/>
                <div className='w-[420px] flex items-center gap-[70px] px-[10px] mb-[24px] blog-content'>
                    <h3 className='font-[600] text-[20px] leading-[26px] mt-[29px] blog-text'>Как правильно освещать дом снаружи?</h3>
                    <img src={AllowTop} alt="Allow-Top" width={16} height={16} />
                </div>
                <p className='font-[500] text-[14px] leading-[15px] text-[#454545] px-[10px] mb-[20px] blog-text'>01.01.2024</p>
            </li>
            <li className='w-[420px] border-b-[1px] border-b-[#aeadad] blog-item'>
                <img src={Blog3} className='img-blog' alt="Blog-1" width={420} height={304}/>
                <div className='w-[420px] flex items-center gap-[70px] px-[10px] mb-[24px] blog-content'>
                    <h3 className='font-[600] text-[20px] leading-[26px] mt-[29px] blog-text'>Как правильно освещать дом снаружи?</h3>
                    <img src={AllowTop} alt="Allow-Top" width={16} height={16} />
                </div>
                <p className='font-[500] text-[14px] leading-[15px] text-[#454545] px-[10px] mb-[20px] blog-text'>01.01.2024</p>
            </li>
        </ul>
    </div>
  )
}

export default React.memo(Blog)