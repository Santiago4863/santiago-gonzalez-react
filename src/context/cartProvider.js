import { cartContext } from "./cartContext";
import { useState } from "react";
import items from "../data/item";

const CartProvider = ( {children}) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity ) => {
        const newProduct = {
            titulo: item.titulo,
            precio: item.precio,
            quantity: quantity,
            categoria: item.categoria,
        }
        setCart([...items, newProduct])
    }

  return (
    <cartContext.Provider value = {{cart, addItem}}>
        {children}
        </cartContext.Provider>
  )
}

export default CartProvider
