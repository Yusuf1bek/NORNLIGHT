import React from 'react'
import foundNot from "../assets/images/404.png"
import { useNavigate } from 'react-router-dom'
const Foundnot = () => {
    const navigate = useNavigate()
  return (
    <div className='w-[1300px] py-[80px] m-auto'>
        <div className='flex flex-col items-center justify-center'>
            <img src={foundNot} alt="" />
            <p className='mt-[60px] mb-[50px]'>Похоже, ничего не нашлось :(</p>
            <button onClick={()=> navigate("/")} className='bg-[#454545] w-[200px] pt-[10px] pb-[10px] text-center rounded-[12px] border-none text-white'>На главную</button>
        </div>
    </div>
  )
}

export default Foundnot