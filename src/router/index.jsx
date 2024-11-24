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
import Wishlist from '../components/Wishlist'
import Cartlist from '../components/Cartlist'
import Layout from '../pages/Layout/Layout'
import Admin from '../pages/Admin/Admin'
import CreateProduct from '../pages/Admin/create-product/CreateProduct'
import ManageProduct from '../pages/Admin/manage-product/ManageProduct'
import Auth from '../auth/Auth'
import Login from '../pages/Login/Login'

const Router = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='/' element={<Home/>} />
                <Route path='/О компании' element={<Company/>} />
                <Route path='/Доставка и оплата' element={<Shipping/>} />
                <Route path='/Возврат' element={<Return/>} />
                <Route path='/Гарантии' element={<Garant/>} />
                <Route path='/Контакты' element={<Contacts/>} />
                <Route path='/Блог' element={<Mainblog/>} />
                <Route path='/wishlist' element={<Wishlist/>} />
                <Route path='/cartlist' element={<Cartlist/>} />
                <Route path='*' element={<Notfound/>} />
                <Route path='/product/:id' element={<Detail/>} />
            </Route>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<Auth/>}>
                <Route path='admin' element={<Admin/>}>
                    <Route path='create-product' element={<CreateProduct/>}/>
                    <Route path='manage-product' element={<ManageProduct/>}/>
                </Route>
            </Route>
        </Routes>
    </>
)
}

export default Router