import React, { useEffect, useState } from 'react'
import Hero from '../../components/Hero'
import Catalog from '../../components/Catalog'
import Aboutcomp from '../../components/Aboutcomp'
import Products from '../../components/Products'
import Blog from '../../components/Brends'
import Brends from '../../components/Blog'
import Production from '../../components/Production'
import axios from 'axios'
import { useFetch } from '../../hooks/useFetch'
const Home = () => {
  const {data} = useFetch("products")
  return (
    <div>
      <Hero/>
      <Catalog/>
      <Aboutcomp/>
      <Products data={data}/>
      <Blog/>
      <Brends/>
      <Production/>
    </div>
  )
}

export default Home