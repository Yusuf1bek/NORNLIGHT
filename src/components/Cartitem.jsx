import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/index";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { toast } from "react-toastify";


const BOT_TOKEN = "8010490513:AAEGp6pMcWzYtnA3u-meFaUwNaXImGoFXLc"
const USER_ID = 926345978
const CHAT_ID = -1002432196153


// https://api.telegram.org/bot7663577935:AAGTpIbzyp2O0QKecBcNH94rYmxBWULFRSc/getUpdates

const Baskets = () => {
  const [state, dispatch] = useStateValue();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    comments: "",
  });
  const [purchaseData, setPurchaseData] = useState(null);
  console.log(purchaseData);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePurchase = () => {
    if (!formData.fullName || !formData.phone || !formData.address) {
      toast.info("Пожалуйста, заполните обязательные поля!");
      return;
    }
    setPurchaseData(formData);
    let text = ""
    text += `<strong>Заказ:</strong> %0A`
    text += `ФИО: ${formData.fullName} %0A`
    text += `Телефон: ${formData.phone} %0A`
    text += `Электронная Почта: ${formData.email} %0A`
    text += `Адрес доставки: ${formData.address} %0A`
    state.cart?.forEach(element => {
      text += `Название продукта: ${element.title} %0A`
      text += `Количество продукта: ${element.amount} %0A`
      text += `Цена продукта: ${element.newPrice} ₽ %0A%0A`
    });
    text += `<strong>Общая стоимость: ${(state.cart?.reduce((total, item)=> total + (item.newPrice  * item.amount), 0) + state.cart?.reduce((a,b)=> a+ b.amount, 0) * 290).brm()} ₽</strong> `
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`
    const api = new XMLHttpRequest
    api.open("GET", url, true)
    api.send()
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      address: "",
      comments: "",
    });
    toast.success("Ваш товар успешно принят")
    dispatch({type: "CLEAR_CART"})
  };
  console.log(formData);
  const items = state.cart?.map((product) => (
    <div key={product.id}>
      <div className="flex gap-4 p-4 items-center w-full max-[990px]:hidden">
        <div className="w-[10%]">
          <img
            src={product.url}
            alt={product.title}
            className="rounded-lg border w-[80px] h-[80px] mx-auto bg-white"
          />
        </div>
        <div className="w-[20%]">
          <h3 className="font-medium text-gray-900">{product.title}</h3>
          <p className="mt-1 text-sm text-gray-500">
            {(product.newPrice * product.amount).brm()}₽
          </p>
        </div>
        <div className="text-sm text-gray-500 w-[30%]">{product.description}</div>
        <div className="text-sm text-gray-500 text-center w-[20%]">
          {product.size}
        </div>
        <div className="flex items-center justify-between gap-5 w-[20%]">
          <div className="flex items-center gap-4">
            <button
              className="p-1 hover:bg-gray-100 rounded"
              onClick={() => dispatch({ type: "DEC_CART", payload: product })}
              disabled={product.amount <= 1}
            >
              <FiMinus className="w-4 h-4" />
              <span className="sr-only">Decrease quantity</span>
            </button>
            <span className="w-8 h-8 border-[1px] border-[#4545456b] rounded-[8px] flex justify-center items-center">
              {product.amount}
            </span>
            <button
              className="p-1 hover:bg-gray-100 rounded"
              onClick={() => dispatch({ type: "ADD__CART", payload: product })}
            >
              <FiPlus className="w-4 h-4" />
              <span className="sr-only">Increase quantity</span>
            </button>
          </div>
          <button
            className="p-1 hover:bg-gray-100 rounded ml-2"
            onClick={() => dispatch({ type: "DELETE_CART", payload: product })}
          >
            <FiTrash2 className="text-[23px]" />
            <span className="sr-only">Remove item</span>
          </button>
        </div>
      </div>
      <div className="hidden max-[990px]:block w-full">
          <div className="w-full bg-[#F2F2F2] rounded-lg  overflow-hidden mb-3">
            <div className="p-5 max-[450px]:p-3">
              <div className="flex items-start gap-3 flex-wrap">
                <div className="w-20 h-20">
                  <img src={product.url} alt="" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium">{product.title}</h3>
                  <div className="mt-1 text-2xl font-bold">{(product.discountprice * product.amount).brm()}</div>
                  <div className="mt-2 text-sm text-gray-600">
                    <p>{product.description}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-3 max-[350px]:gap-0">
                  <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 max-[350px]:"
                  onClick={() => dispatch({ type: "DEC_CART", payload: product })}
                  disabled={product.amount <= 1}>
                    <FiMinus />
                  </button>
                  <span className="w-12 text-center">{product.amount}</span>
                  <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-300 bg-white text-gray-600 hover:bg-gray-100"
                  onClick={() => dispatch({ type: "ADD__CART", payload: product })}>
                    <FiPlus />
                  </button>
                </div>
                <button className="text-gray-700 hover:text-gray-900"
                onClick={() => dispatch({ type: "REMOVE__CART", payload: product })}>
                  <FiTrash2 className="text-2xl"/>
                </button>
              </div>
            </div>
          </div>
      </div>
    </div>
  ));
  return (
    <section className="my-20">
      <div className="container__person">
        <div className="mb-5 flex gap-3">
          <Link to={"/"} className="flex items-center text-[#A2A2A2]">
            Главная
          </Link>
          <Link className="flex items-center text-[#A2A2A2] gap-4">
            <FaAngleRight /> Каталог
          </Link>
          <span className="flex items-center gap-3 text-[#000] font-semibold cursor-pointer">
            <FaAngleRight />
            Корзина
          </span>
        </div>
        <div>
          <h2 className="text-[40px] font-bold max-[800px]:text-[36px] max-[600px]:text-[28px] mb-8">
            Корзина
          </h2>
          <div className="w-full mx-auto">
            <div className="bg-[#F2F2F2] rounded-[20px] shadow px-11 py-7 max-[990px]:bg-transparent max-[990px]:shadow-none max-[990px]:py-0 max-[990px]:px-0">
              <div className="flex gap-4 p-4 text-sm text-gray-500 border-b max-[990px]:hidden">
                <div className="text-center w-[10%]">Фото</div>
                <div className="text-center w-[20%]">Товары</div>
                <div className="text-center w-[30%]">Описание</div>
                <div className="text-center w-[20%]">Артикул</div>
                <div className="text-center w-[20%]">Количество</div>
              </div>
              <div className="divide-y max-[990px]:divide-y-none">{items}</div>
            </div>
          </div>
          <div className="w-full mx-auto bg-[#F2F2F2] rounded-[20px] shadow-sm p-6 mt-5">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Оформление
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="ФИО"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-full border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#003566] focus:border-transparent bg-transparent placeholder:text-gray-700"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-full border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#003566] focus:border-transparent bg-transparent placeholder:text-gray-700"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Электронная Почта"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-full border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#003566] focus:border-transparent bg-transparent placeholder:text-gray-700"
                  />
                </div>
              </div>

              <div className="space-y-4 max-w-[767px]">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Доставка
                </h2>
                <input
                  type="text"
                  name="address"
                  placeholder="Адрес доставки"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-full border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#003566] focus:border-transparent bg-transparent placeholder:text-gray-700"
                />
              </div>
            </form>
          </div>
          <div className="w-[500px] text-center mx-auto bg-[#F2F2F2] p-6 mt-5 rounded-[20px]">
            <h2 className="text-[32px] font-bold text-gray-900 mb-6">Оплата</h2>
            <div className="text-2xl font-bold text-gray-900 mb-6">
              <p>
                {(state.cart?.reduce((total, item)=> total + (item.newPrice  * item.amount), 0) + state.cart?.reduce((a,b)=> a+ b.amount, 0) * 290).brm() }
                ₽
              </p>
            </div>

            <form className="flex items-center gap-6 max-[600px]:flex-wrap">
              <button
                type="submit"
                onClick={handlePurchase}
                className="w-full mx-auto bg-[#454545] text-white py-3 px-4 rounded-md hover:bg-[#252525] disabled:opacity-50 disabled:cursor-not-allowed transition-colors max-w-[400px] max-[600px]:mx-auto"
              >
                Купить
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Baskets);
