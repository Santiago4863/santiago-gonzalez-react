import React, {useState , useEffect, useContext} from 'react'
import '../ItemListContainer/ItemListContainer.css'
import { cartContext } from '../../context/cartContext'
/*import ItemDetail from './ItemDetail';*/
import ItemCount from '../ItemCount/ItemCount'
import { useParams } from 'react-router-dom'
import {getSingleItem} from '../../services/mockService'

export default function ItemDetailContainer() {
  const {addItem} = useContext (cartContext);
  const [items,setItem] = useState([]);
  const [contador, setContador] = useState(1);
  const stock = 500;

  let id = useParams().id;
  useEffect(()=>{
    getSingleItem(id).then((respuesta)=> setItem(respuesta))

  })
  return (
    <div className='totalCards'>
      <div className='cardUnidad'>
      <p className='titleProduct'>{items.titulo}</p>
      <img className='imgProduct' src={items.imagen} alt={items.titulo}/>
      <p className='descriptionProduct'>{items.descripcion}</p>
      <p className='stockProduct'>Stock Disponible: {items.stock}</p>
      <p className='priceProduct'>{items.precio}</p>
      <ItemCount>
        contador={contador}
        actualizaValor={setContador}
        stock={stock}
        </ItemCount>
      </div>
      <button onClick={() => addItem(items, contador)}>Agregar a Carrito</button>
    </div>
  );
}
