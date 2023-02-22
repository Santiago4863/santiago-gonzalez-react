import { useContext, useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { cartContext } from "../context/cartContext";

const Cart = () => {
    const { cart, removeItem, clear } = useContext(cartContext)
    const [order, setOrder] = useState({})

    if (cart.length === 0) {
        return <h1>No hay productos en el carrito</h1>
    }

    const createOrder = () => {
        const db = getFirestore()
        const querySnapshot = collection(db, 'orders')
        setOrder({
            buyer: {
                name: 'Diego Franco',
                phone: '22397577',
                email: 'testtttt@test.com'
            },
            items: cart.map((props) => {
                return {
                    name: props.titulo,
                    price: props.precio,
                    id: props.id,
                }
            }),
            total: cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
        })
        addDoc(querySnapshot, order)
            .then((response) => {
                console.log(response);
                alert("orden creada")
            })
            .catch(error => console.log(error))
    }
    return (
        <div style={{ padding: '40px', width: '500px' }}>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}
                        >
                            <img
                                alt={item.id}
                                src={`/img/${item.imagen}`}
                                width="50px"
                            />
                            <h3>{item.titulo}</h3>
                            <h4>{item.categoria}</h4>
                            <h4>{item.quantity}</h4>
                            <h4>{item.precio}</h4>
                            <button
                                onClick={() => removeItem(item.id)}
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