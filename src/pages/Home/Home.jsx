import React, { useEffect, useState } from 'react'
import Hero from '../../components/Hero'
import Catalog from '../../components/Catalog'
import Aboutcomp from '../../components/Aboutcomp'
import Products from '../../components/Products'
import Blog from '../../components/Brends'
import Brends from '../../components/Blog'
import Production from '../../components/Production'
import axios from 'axios'
const Home = () => {
  const [data, setData] = useState(null)
  useEffect(()=>{
    axios
    .get("https://672fb37a66e42ceaf15e7a34.mockapi.io/products")
    .then(res => setData(res.data))
  }, [])
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