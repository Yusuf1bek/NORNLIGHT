import React from 'react'
import "../components/Restore.css/Restore.css"

const Restrore = () => {
  return (
    <div className='w-[1300px] py-[85px] m-auto return-2'>
        <div className='flex items-start justify-between return-1'>
            <h1 className='font-[700] text-[64px] leading-[70px]'>Возврат</h1>
            <ul className='w-[540px]'>
                <li>
                    <h2 className='font-[600] text-[23px] leading-[33px] mb-[28px]'>Обмен и возврат по желанию покупателя</h2>
                    <p className='mb-[20px] font-[400] text-[20px] leading-[28px]'>
                        Если товар по каким-то причинам не подошел вам, вы имеете право вернуть его или обменять на другой в течение 7 дней* с момента покупки при соблюдении следующих условий:
                    </p>
                    <p className='text-[#2F4DA3] font-[400] text-[20px] leading-[28px]'>
                        Товар имеет первоначальный вид, имеется товарная кондиция;
                        Товар имеет полную комплектацию, включая упаковочные материалы;
                        Товар не имеет следов подключался и не имеет признаков монтажа;
                        Упаковка товара не имеет повреждений, присутствует первоначальный товарный вид;
                        Есть документ, подтверждающий покупку в нашем интернет-магазине.
                        Для возврата товара необходимо привезти его к нам в офис.
                        Товар из других городов можно прислать нам транспортной компанией, при этом услуги транспортной компании оплачиваются клиентом.
                        В течение 14 дней для отдельных брендов. При оформлении заказа уточните у менеджера
                    </p>
                </li>
                <li>
                    <h2 className='font-[600] text-[23px] leading-[33px] mb-[28px] mt-[20px]'>Обмен и возврат по ошибке продавца</h2>
                    <p className='font-[400] text-[20px] leading-[28px]'>
                        Причины обмена или возврата по ошибке продавца:
                        Неполная комплектация товара
                        Брак или дефект товара
                        Если вы выявили дефект, брак или неполную комплектацию товара, необходимо сделать фото дефекта и отправить на почту mail@at-svet.ru, указав краткое описание характера брака/
                        Мы заменим бракованный товар или довезем недостающие части. Доставка будет осуществлена бесплатно
                    </p>
                </li>
                <li>
                    <h2 className='font-[600] text-[23px] leading-[33px] mb-[28px] mt-[20px]'>Возврат денежных средств</h2>
                    <p className='font-[400] text-[20px] leading-[28px]'>Возврат денежных средств осуществляется путем перевода на банковские реквизиты покупателя при наличии заявления от покупателя.</p>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default React.memo(Restrore)