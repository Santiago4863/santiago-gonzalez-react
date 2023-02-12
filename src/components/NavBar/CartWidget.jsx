import React from 'react'
import './NavBar.css'
import { useContext } from 'react'
import { cartContext } from '../../context/cartContext'

export default function CartWidget() {
  const {cart} = useContext(cartContext)
  return (
    <div>{cart.length}
    <img className='imgCarrito' src='https://img2.freepng.es/20180320/ize/kisspng-shopping-cart-computer-icons-white-cart-png-simple-5ab15d03469849.3773414815215731232892.jpg' alt='carrito_compras'/>
    </div>
  )
}
