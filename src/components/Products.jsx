import React, { useState } from 'react';
import AllowRight from "../assets/images/allow-right.svg";
import { useFetch } from '../hooks/useFetch';
import cartWhite from "../assets/images/cart-white.svg";
import likeIng from "../assets/images/like.svg";
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';
import numberBrm from 'number-brm';
import { IoIosClose } from "react-icons/io";

const Products = () => {
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const { data } = useFetch("/products");

  const handleImageClick = (item) => {
    setSelectedItem(item);
    setShow(true);
  };

  const ProductItem = data?.map((item) => (
    <li key={item.id} className='w-[326px] p-[18px] relative'>
      <img
        onClick={() => handleImageClick(item)}
        className='ml-[50px] mb-[32px] cursor-pointer'
        src={item.url}
        alt={item.title}
        width={173}
        height={216}
      />
      <img className='absolute top-0 right-[55px]' src={likeIng} alt="Like" />
      <Link to={`/product/${item.id}`}>
        <h2 className='font-[500] text-[20px] leading-[22px] mb-[24px]'>{item.title}</h2>
      </Link>
      <div className='flex items-center gap-[116px]'>
        <div className='flex flex-col'>
          {item.oldPrice && (
            <span className='font-[500] text-[12px] leading-[13px] text-[#454545] line-through'>
              {(item.oldPrice.brm())} ₽
            </span>
          )}
          <strong className='font-[500] text-[20px] leading-[22px]'>
            {(item.newPrice.brm())} ₽
          </strong>
        </div>
        <button className='w-[55px] py-[5px] px-[20px] bg-[#454545] rounded-2xl'>
          <img src={cartWhite} alt="Cart" />
        </button>
      </div>
    </li>
  ));

  return (
    <div className='w-[1310px] py-[100px] m-auto'>
      <div className='flex items-center justify-between mb-[53px]'>
        <h1 className='font-[700] text-[40px] leading-[54px] catalog-title'>Популярные товары</h1>
        <button className='blog-btn flex items-center gap-[10px] border-[1px] border-[#454545] text-[#454545] rounded-[20px] w-[200px] py-[10px] pl-[45px]'>
          Все товары
          <img src={AllowRight} alt="Allow-right" />
        </button>
      </div>
      <ul className='flex flex-wrap items-center '>
        {ProductItem}
      </ul>
      {show && selectedItem && (
        <Modal onClose={() => setShow(false)}>
            <button onClick={() => setShow(false)}>
            <IoIosClose className='text-[50px]'/>
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
