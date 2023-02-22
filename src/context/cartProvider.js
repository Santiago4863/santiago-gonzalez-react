import { cartContext } from "./cartContext";
import { useState } from "react";

const CartProvider = ( {children}) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity ) => {
        const newProduct = {
            titulo: item.titulo,
            precio: item.precio,
            quantity: quantity,
            categoria: item.categoria,
        }
        setCart([...cart, newProduct])
    }

  return (
    <cartContext.Provider value = {{cart, addItem}}>
        {children}
        </cartContext.Provider>
  )
}

export default CartProvider
