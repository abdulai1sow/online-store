import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newletter from '../components/Newletter'

const Home = () => {
  return (
    <div className='container'>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newletter />
    </div>
  )
}

export default Home