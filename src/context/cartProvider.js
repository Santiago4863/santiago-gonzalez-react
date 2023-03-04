import { cartContext } from "./cartContext";
import { useState } from "react";

const CartProvider = ( {children}) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity ) => {
      let newCart
      let product = cart.find((prod) => prod.id === item.id)
      if(product) {
        product.quantity += quantity
        if(product.quantity > product.stock){
          alert('no hay stock disponible')
          return
        }
        newCart = [...cart]
      } else{
        product = {
          id: item.id,
          titulo: item.titulo,
          precio: item.precio,
          quantity: quantity,
          descripcion: item.descripcion,
          categoria: item.categoria,
          imagen: item.imagen,
          stock: item.stock,
        }
        newCart = [...cart, product]
      }
      setCart(newCart)
    }   

    const removeItem = (productId) => {
      setCart(cart.filter((product) => product.id !== productId))
    }

    const clear = () => {
      setCart([])
    }

      
    return (
      <cartContext.Provider value = {{cart, addItem, removeItem, clear}}>
        {children}
        </cartContext.Provider>
  )
}
  
export default CartProvider