import React from 'react'

const Contact = () => {
  return (
    <>
      <div className='w-[1300px] py-[85px] m-auto'>
          <div className='flex items-center justify-between mb-[60px]'>
            <h1 className='font-[600] text-[64px] leading-[70px]'>Контакты</h1>
            <div className='w-[214px]'>
              <strong className='font-[500] text-[24px] leading-[32px]'>8 (800) 890-46-56</strong>
              <p className='font-[400] text-[16px] leading-[21px]'>Пн-Пт: 10:00 до 19:00Сб-Вс: заказ через корзину Телефоны:</p>
            </div>
          </div>
      </div>
      <div className='w-[1800px] py-[20px] m-auto relative'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191885.59854792323!2d69.11455621529518!3d41.28247992754074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2z0KLQsNGI0LrQtdC90YIsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1730969066434!5m2!1sru!2s" width="1800" height="450" className="delivery-3 border:0;" allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <ul className='w-[1300px] pt-[60px] pb-[60px] rounded-[12px] bg-white flex items-center gap-[150px] justify-center absolute top-[280px] left-[300px] right-[300px]'>
          <li className=''>
            <h3 className='font-[600] text-[24px] leading-[32px]'>Адрес магазина</h3>
            <p className='font-[400] text-[16px] leading-[21px]'>г. Москва, Дмитровское шоссе д.100с2</p>
          </li>
          <li>
            <strong className='font-[600] text-[24px] leading-[32px]'>Почта</strong>
            <p className='font-[400] text-[16px] leading-[21px]'>NORNLIGHT@mail.ru</p>
          </li>
          <li>
            <strong className='font-[600] text-[24px] leading-[32px]'>Телефон</strong>
            <p className='font-[400] text-[16px] leading-[21px]'>8 (800) 890-46-56</p>
          </li>
          <button className='bg-[#454545] w-[200px] pt-[10px] pb-[10px] text-center rounded-[12px] border-none text-white'>Оставить заявку</button>
        </ul>
      </div>
    </>
  )
}

export default React.memo(Contact)