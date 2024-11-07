import React from 'react'
import AllowTop from "../assets/images/allow-top.svg"
import Blog1 from "../assets/images/blog-1.png"
import Blog2 from "../assets/images/blog-2.png"
import Blog3 from "../assets/images/blog-3.png"
const Blogs = () => {
  return (
    <div className='w-[1300px] py-[80px] m-auto'>
        <h1 className='font-[700] text-[64px] leading-[70px] mb-[60px]'>Блог</h1>
        <ul className='flex flex-wrap items-center gap-[20px] blog-3'>
            <li className='w-[420px] border-b-[1px] border-b-[#aeadad]'>
                <img src={Blog1} alt="Blog-1" width={420} height={304}/>
                <div className='w-[420px] flex items-center gap-[70px] px-[10px] mb-[24px]'>
                    <h3 className='font-[600] text-[20px] leading-[26px] mt-[29px]'>Как правильно освещать дом снаружи?</h3>
                    <img src={AllowTop} alt="Allow-Top" width={16} height={16} />
                </div>
                <p className='font-[500] text-[14px] leading-[15px] text-[#454545] px-[10px] mb-[20px]'>01.01.2024</p>
            </li>
            <li className='w-[420px] border-b-[1px] border-b-[#aeadad]'>
                <img src={Blog2} alt="Blog-1" width={420} height={304}/>
                <div className='w-[420px] flex items-center gap-[70px] px-[10px] mb-[24px]'>
                    <h3 className='font-[600] text-[20px] leading-[26px] mt-[29px]'>Как правильно освещать дом снаружи?</h3>
                    <img src={AllowTop} alt="Allow-Top" width={16} height={16} />
                </div>
                <p className='font-[500] text-[14px] leading-[15px] text-[#454545] px-[10px] mb-[20px]'>01.01.2024</p>
            </li>
            <li className='w-[420px] border-b-[1px] border-b-[#aeadad]'>
                <img src={Blog3} alt="Blog-1" width={420} height={304}/>
                <div className='w-[420px] flex items-center gap-[70px] px-[10px] mb-[24px]'>
                    <h3 className='font-[600] text-[20px] leading-[26px] mt-[29px]'>Как правильно освещать дом снаружи?</h3>
                    <img src={AllowTop} alt="Allow-Top" width={16} height={16} />
                </div>
                <p className='font-[500] text-[14px] leading-[15px] text-[#454545] px-[10px] mb-[20px]'>01.01.2024</p>
            </li>
            <li className='w-[420px] border-b-[1px] border-b-[#aeadad]'>
                <img src={Blog1} alt="Blog-1" width={420} height={304}/>
                <div className='w-[420px] flex items-center gap-[70px] px-[10px] mb-[24px]'>
                    <h3 className='font-[600] text-[20px] leading-[26px] mt-[29px]'>Как правильно освещать дом снаружи?</h3>
                    <img src={AllowTop} alt="Allow-Top" width={16} height={16} />
                </div>
                <p className='font-[500] text-[14px] leading-[15px] text-[#454545] px-[10px] mb-[20px]'>01.01.2024</p>
            </li>
            <li className='w-[420px] border-b-[1px] border-b-[#aeadad]'>
                <img src={Blog2} alt="Blog-1" width={420} height={304}/>
                <div className='w-[420px] flex items-center gap-[70px] px-[10px] mb-[24px]'>
                    <h3 className='font-[600] text-[20px] leading-[26px] mt-[29px]'>Как правильно освещать дом снаружи?</h3>
                    <img src={AllowTop} alt="Allow-Top" width={16} height={16} />
                </div>
                <p className='font-[500] text-[14px] leading-[15px] text-[#454545] px-[10px] mb-[20px]'>01.01.2024</p>
            </li>
            <li className='w-[420px] border-b-[1px] border-b-[#aeadad]'>
                <img src={Blog3} alt="Blog-1" width={420} height={304}/>
                <div className='w-[420px] flex items-center gap-[70px] px-[10px] mb-[24px]'>
                    <h3 className='font-[600] text-[20px] leading-[26px] mt-[29px]'>Как правильно освещать дом снаружи?</h3>
                    <img src={AllowTop} alt="Allow-Top" width={16} height={16} />
                </div>
                <p className='font-[500] text-[14px] leading-[15px] text-[#454545] px-[10px] mb-[20px]'>01.01.2024</p>
            </li>
        </ul>
    </div>
  )
}

export default React.memo(Blogs)