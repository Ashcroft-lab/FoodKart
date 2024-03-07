import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { FaShoppingCart } from 'react-icons/fa'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false)
  const items = useSelector((state) => state.cart.cart)
  const totalItems = items.reduce((totalQty, item) => totalQty + item.qty, 0)
  const totalPrice = items.reduce(
    (price, item) => price + item.price * item.qty,
    0
  )

  const navigate = useNavigate()
  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[20vw] p-5 h-full bg-white ${
          activeCart ? 'translate-x-0' : 'translate-x-full'
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-800">My Orders</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="border-2 border-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer"
          />
        </div>
        {items.length > 0 ? (
          items.map((food) => {
            return (
              <CartItem
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            )
          })
        ) : (
          <h2 className="text-center text-xl font-bold text-gray-400">
            Your cart is Empty
          </h2>
        )}

        <div className="absolute bottom-0">
          <h3>Items : {totalItems} </h3>
          <h3>Total Amnt : {totalPrice} </h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2" />
          <button
            onClick={() => navigate('/success')}
            className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5"
          >
            checkout
          </button>
        </div>
      </div>
      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={`rounded-full bg-white shadow-md text-5xl p-2 fixed bottom-4 right-4 ${
          totalItems > 0 && 'animate-bounce delay-500 transition-all'
        }`}
      />
    </>
  )
}

export default Cart
