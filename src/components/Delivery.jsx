import React from 'react'
import "../components/Delivery/Delivery.css"

const Delivery = () => {
  return (
    <>
      <div className='w-[1300px] py-[85px] m-auto delivery-2'>
          <div className='flex justify-between delivery-1'>
            <div className='w-[300px]'>
              <h1 className='font-[600] text-[64px] leading-[70px]'>Доставка и оплата</h1>
            </div>
            <ul className='flex flex-col w-[640px] gap-[60px] mb-[116px] '>
              <li>
                <h2 className='font-[600] text-[24px] leading-[33px]'>Доставка</h2>
                <p className='font-[400] text-[20px] leading-[28px] mt-[28px]'>Мы осуществляем доставку со склада по Москве и Московской области собственной курьерской службой. Транспортными компаниями нашу продукцию мы доставляем по всей территории РФ, а так же по всем странам СНГ. Сроки доставки: 4—6 недель</p>
              </li>
              <li>
                <h2 className='font-[600] text-[24px] leading-[33px]'>Курьерская доставка</h2>
                <p className='font-[400] text-[20px] leading-[28px] mt-[28px]'>БЕСПЛАТНО доставим в приделах МКАД любой заказ от 5 000 ₽.Заказы свыше 30 000 ₽ имеют бесплатную доставку, включительно 15 км от МКАД</p>
              </li>
              <li>
                <h2 className='font-[600] text-[24px] leading-[33px]'>Самовывоз</h2>
                <p className='font-[400] text-[20px] leading-[28px] mt-[28px]'>Любой заказ можно забрать самостоятельно по адресу: г. Москва, Дмитровское шоссе д.100с2</p>
              </li>
            </ul>
          </div>
      </div>
      <div className='w-[1800px] py-[20px] m-auto'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.59854792323!2d69.11455621529518!3d41.28247992754074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1730969066434!5m2!1sru!2s" width="1800" height="450" className="delivery-3 border:0;" allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  )
}

export default React.memo(Delivery)