import React, { useEffect } from 'react';
import Products from './Products';
import { useStateValue } from '../context';
import { useNavigate } from 'react-router-dom';

const Wishlist = () => {
    useEffect(()=>{
        window.scrollTo(0, 0)
      }, [])
  const [state] = useStateValue();
  const navigate = useNavigate();
  return (
    <div className='w-[1310px] py-[100px] m-auto'>
      {state.wishlist.length === 0 ? (
        <div className='flex flex-col justify-center items-center'>
          <h2 className='font-[500] text-[54px] leading-[70px]'>Ксожелению избранных товаров нет</h2>
          <img src="https://rortvest.com/assets/frontend/view/theme/OTOPC01/stylesheet/OnTheme/images/request-not-found.jpg" alt="" width={800} height={500}/>
          <button className='w-[250px] py-[10px] bg-[#454545] text-[20px] text-white rounded-lg mr-[50px]' onClick={()=> navigate("/")}>Популярные товары</button>
        </div>
      ) : (
        <>
            <div>
                <h2 className='font-[700] text-[64px] leading-[70px]'>Избранные товары</h2>
            </div>
            <Products data={state.wishlist} />
        </>
      )}
    </div>
  );
};

export default Wishlist;