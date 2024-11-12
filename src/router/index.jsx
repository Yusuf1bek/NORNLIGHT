import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Company from '../pages/About/Company'
import Shipping from '../pages/Shiping/Shipping'
import Return from '../pages/Return/Return'
import Garant from '../pages/Garant/Garant'
import Contacts from '../pages/Contacts/Contacts'
import Mainblog from '../pages/Blog/Mainblog'
import Notfound from '../pages/Not-Found/Notfound'
import Detail from '../pages/Detail/Detail'

const Router = () => {
  return (
    <>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/О компании' element={<Company/>} />
            <Route path='/Доставка и оплата' element={<Shipping/>} />
            <Route path='/Возврат' element={<Return/>} />
            <Route path='/Гарантии' element={<Garant/>} />
            <Route path='/Контакты' element={<Contacts/>} />
            <Route path='/Блог' element={<Mainblog/>} />
            <Route path='*' element={<Notfound/>} />
            <Route path='/product/:id' element={<Detail/>} />
        </Routes>
        <Footer/>
    </>
)
}

export default Router