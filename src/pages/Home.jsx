import React from 'react'
import Navbar from '../conponents/Navbar'
import CategoryMenu from '../conponents/CategoryMenu'
import FoodItem from '../conponents/FoodItem'
import Cart from '../conponents/Cart'

const Home = () => {
  return (
    <>
      <Navbar />
      <CategoryMenu />
      <FoodItem />
      <Cart />
    </>
  )
}

export default Home
