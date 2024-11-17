import React from 'react';
import { useStateValue } from '../context';
import { FaRegTrashCan } from "react-icons/fa6";
const Cartitem = () => {
  const [state, dispatch] = useStateValue();

  return (
    <div>
      {state?.cart?.map((item) => (
        <div key={item.id}>
            <li className='flex items-start gap-[150px] w-[1208px] pb-[45px]'>
              <img className='rounded-xl mr-[-70px]' src={item.url} alt={item.title} width={80} height={80} />
              <div className='flex flex-col gap-[22px] items-center'>
                <h2 className='font-[600] text-[16px] leading-[21px] text-[#454545]'>{item.title}</h2>
                <strong className='font-[700] text-[20px] leading-[21px] inline-block mr-[15px]'>{item.newPrice.brm()} ₽</strong>
              </div>
              <p className='font-[400] text-[16px] leading-[20px]'>Светильник RADUGA COMBO XS Промышленное освещение; 50Вт; 230В; S4; XS;</p>
              <p>RAD-COMBO-50/XXX/230/XXX/XXX/S4/XS</p>
              <div className='flex gap-[20px]'>
                <button
                  disabled={item.amount <= 1}
                  onClick={() => dispatch({ type: "DEC_CART", payload: item })}
                >
                  -
                </button>
                <span className='rounded-xl border-[#454545] border-[1px] px-[15px] py-[10px]'>{item.amount}</span>
                <button
                    disabled={item.amount <= 1}
                    onClick={()=> dispatch({type:"ADD_CART", payload: item})}
                >+</button>
                <button
                  onClick={() => dispatch({ type: "DELETE_CART", payload: item })}
                >
                  <FaRegTrashCan className='text-[25px]'/>
                </button>
              </div>
            </li>
            <hr className='mb-[33px]' />
        </div>
      ))}
    </div>
  );
};

export default Cartitem;
