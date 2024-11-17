import React, { useEffect } from 'react';
import { useStateValue } from '../context';
import { useNavigate } from 'react-router-dom';
import Cartitem from './Cartitem';


const Cartlist = () => {
    useEffect(()=>{
        window.scrollTo(0, 0)
      }, [])
  const [state] = useStateValue();
  const navigate = useNavigate();
  return (
    <div className='w-[1310px] py-[12px] m-auto'>
        {
        state.cart.length === 0 ? (
        <div className='flex flex-col justify-center items-center'>
          <h2 className='font-[500] text-[54px] leading-[70px]'>Ксожелению в корзине товаров нет</h2>
          <img src="https://rortvest.com/assets/frontend/view/theme/OTOPC01/stylesheet/OnTheme/images/request-not-found.jpg" alt="" width={800} height={500}/>
          <button className='w-[250px] py-[10px] bg-[#454545] text-[20px] text-white rounded-lg mr-[50px]' onClick={()=> navigate("/")}>Популярные товары</button>
        </div>
      ) : (
            <div>
                <h2 className='font-[700] text-[64px] leading-[70px] mb-[40px]'>Корзина</h2>
                <ul className='w-[1300px] p-[46px] m-auto bg-[#F2F2F2] rounded-[20px]'>
                    <li className='flex items-center gap-[150px] font-[500] text-[16px] leading-[21px] text-[#454545] mb-[28px]'>
                        <p className='mr-[-10px]'>Фото</p>
                        <p className='mr-[50px]'>Товары</p>
                        <p className='mr-[100px]'>Описание</p>
                        <p className='mr-[100px]'>Артикул</p>
                        <p>Количество</p>
                    </li>
                <hr className='mb-[33px]' />
                <Cartitem/>
                </ul>
            </div>
      )}
    </div>
  )
}

export default Cartlist