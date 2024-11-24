import React, { useEffect, useState } from 'react';
import AllowRight from "../assets/images/allow-right.svg";
import { useFetch } from '../hooks/useFetch';
import cartWhite from "../assets/images/cart-white.svg";
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';
import { IoIosClose } from "react-icons/io";
import { FaHeart, FaRegHeart, FaRegTrashAlt, FaRegEdit   } from "react-icons/fa";
import { useStateValue } from '../context';
import numberBrm from 'number-brm';
import axios from 'axios';

const Products = ({data, admin}) => {
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [])
  const [state, dispatch] = useStateValue();
  const [shadow, setShadow] = useState(false)
  window.addEventListener("scroll", ()=>{
    if(document.documentElement.scrollTop >= 200){
      setShadow(true)
    }else{
      setShadow(false)
    }
  } )
  const deleteProduct = (id)=>{
    axios
        .delete(`/products/${id}`)
        .then(res => {
          dispatch({type: "RELOAD"})
          console.log(res);
        })
  }
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const handleImageClick = (item) => {
    setSelectedItem(item);
    setShow(true);
  };

  const ProductItem = data?.map((item) => (
    <li key={item.id} className='w-[326px] p-[18px] relative mb-[30px]'>
      <img
        onClick={() => handleImageClick(item)}
        className='ml-[50px] mb-[32px] cursor-pointer'
        src={item.url}
        alt={item.title}
        width={173}
        height={216}
      />
      <button onClick={() => dispatch({ type: "ADD_WISHLIST", payload: item })}>
        {state.wishlist?.some(i => i.id === item.id) ? (
          <FaHeart className='absolute top-0 right-[55px]  text-red-500' />
        ) : (
          <FaRegHeart className='absolute top-0 right-[55px]' />
        )}
      </button>
      <Link to={`/product/${item.id}`}>
        <h2 className='font-[500] text-[20px] leading-[22px] mb-[40px]'>{item.title}</h2>
      </Link>
      <div className='flex items-center gap-[116px]'>
        <div className='flex flex-col'>
          {item.oldPrice && (
            <span className='font-[500] text-[12px] leading-[13px] text-[#454545] line-through'>
              {(item.oldPrice)} ₽
            </span>
          )}
          <strong className='font-[500] text-[20px] leading-[22px]'>
            {(item.newPrice)} ₽
          </strong>
        </div>
        {
          admin ?
          <div className='flex items-center gap-[8px]'>
            <button className='bg-white border-[1px] border-[#454545] w-[35px] rounded-2xl px-[5px] py-[5px]'>
              <FaRegEdit className='text-[18px] text-[#454545] ml-[4px]'/>
            </button>
            <button onClick={deleteProduct} className='bg-[#454545] w-[35px] rounded-2xl px-[5px] py-[5px]'>
              <FaRegTrashAlt className='text-[18px] text-white ml-[4px]'/>
            </button>
          </div>
          :
        <button 
          onClick={()=> dispatch({type: "ADD__CART", payload: item})}
          className='w-[55px] py-[5px] px-[20px] bg-[#454545] rounded-2xl'>
          <img src={cartWhite} alt="Cart" />
        </button>
        }
      </div>
    </li>
  ));

  return (
    <div className='w-[1310px] py-[100px] m-auto'>
      <ul className='flex flex-wrap items-start justify-center '
      onClose={()=> set}>
        {
          loading &&
            <div class="flex-col gap-4 w-full flex items-center justify-center">
              <div
                class="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full"
              >
                <div
                  class="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"
                ></div>
              </div>
            </div>
        }
        {ProductItem}
      </ul>
      {show && selectedItem && (
        <Modal onClose={() => setShow(false)}>
          <button onClick={() => setShow(false)}>
            <IoIosClose className='text-[50px]' />
          </button>
          <Swiper
            effect="flip"
            grabCursor={true}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[EffectFlip, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img className='mb-[30px]' src={selectedItem.url} alt={selectedItem.title} width={550} height={500} />
            </SwiperSlide>
          </Swiper>
          <button className='w-[250px] py-[10px] bg-[#454545] text-[30px] text-white rounded-lg ml-[140px] mb-[30px]' onClick={() => navigate(`/product/${selectedItem.id}`)}>Узнать больше</button>
        </Modal>
      )}
    </div>
  );
};

export default Products;