import { useContext, useEffect, useState} from "react";
import { collection, addDoc, getFirestore, doc, updateDoc } from "firebase/firestore";
import { cartContext } from "../context/cartContext";

const Cart = () => {
    const { cart, removeItem, clear } = useContext(cartContext)
    const [order, setOrder] = useState({})
    const db = getFirestore()

    

    
    useEffect(() => {
        setOrder({
                buyer: {
                    email: 'test@testing.com',
                    name: 'Franco Lopez',
                    phone: '+5402336923451',
                },
                items: cart.map((product) => {
                    const {titulo, precio, id} = product
                    return {titulo,precio,id}
                }),
                total: cart.reduce((acc, curr) => acc + curr.precio * curr.quantity, 0)
            }

        )
    }, [cart])

    if(cart.length === 0){
        return<h1>No hay productos en el carrito</h1>
    }

    const createOrder = () => {
        const querySnapshot = collection(db, 'orders')

        addDoc(querySnapshot, order)
            .then((response) => {
                console.log(response.id);
                alert("orden creada con exito" + response.id)
                updateStockProducts()
            })
            .catch((error) => console.log(error))
    }

const updateStockProducts = () => {
    cart.forEach((product) => {
        const querySnapshot = doc(db, "items", product.id)

        updateDoc(querySnapshot, {
            stock: product.stock - product.quantity,
        })
        .then(() => {
            console.log("El product actualizo el stock");

        })
        .catch((error) => console.log(error))
    })
}

    return (
        <div style={{ padding: '40px', width: '500px' }}>
          <ul>
            {cart.map( (product) => (
              <li key={product.id}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <img
                    alt={product.id}
                    src={`/img/${product.imagen}`}
                    width="50px"
                  />
                  <h3>{product.titulo}</h3>
                  <h4>{product.categoria}</h4>
                  <h4>{product.quantity}</h4>
                  <h4>{product.precio}</h4>
                  <button
                    onClick={() => removeItem(product.id)}
                    style={{ height: '20px' }}
                  >
                    Eliminar del carrito
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: '150px' }}>
            <button onClick={() => clear()}>Vaciar carrito</button>
          </div>
          <div style={{ marginTop: '20px' }}>
            <button onClick={() => createOrder()}>Crear orden</button>
          </div>
        </div>
      );


}

export default Cart


         