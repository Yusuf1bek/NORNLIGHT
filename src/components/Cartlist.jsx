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
            <>
                <Cartitem/>
            </>
      )}
    </div>
  )
}

export default Cartlist