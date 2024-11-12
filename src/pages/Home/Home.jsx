import React from 'react'
import Hero from '../../components/Hero'
import Catalog from '../../components/Catalog'
import Aboutcomp from '../../components/Aboutcomp'
import Products from '../../components/Products'
import Blog from '../../components/Brends'
import Brends from '../../components/Blog'
import Production from '../../components/Production'
const Home = () => {
  return (
    <div>
      <Hero/>
      <Catalog/>
      <Aboutcomp/>
      <Products/>
      <Blog/>
      <Brends/>
      <Production/>
    </div>
  )
}

export default Home