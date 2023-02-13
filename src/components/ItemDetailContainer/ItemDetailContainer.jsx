import React, {useState , useEffect, useContext} from 'react'
import '../ItemListContainer/ItemListContainer.css'
import { cartContext } from '../../context/cartContext'
/*import ItemDetail from './ItemDetail';*/
import ItemCount from '../ItemCount/ItemCount'
import { useParams } from 'react-router-dom'
import {getSingleItem} from '../../services/mockService'

export default function ItemDetailContainer() {
  const {addItem} = useContext (cartContext);
  const [item,setItem] = useState([]);
  const [contador, setContador] = useState(1);
  const stock = 500;

  let id = useParams().id;
  useEffect(()=>{
    getSingleItem(id).then((respuesta)=> setItem(respuesta))

  })
  return (
    <div className='totalCards'>
      <div className='cardUnidad'>
      <p className='titleProduct'>{item.titulo}</p>
      <img className='imgProduct' src={item.imagen} alt={item.titulo}/>
      <p className='descriptionProduct'>{item.descripcion}</p>
      <p className='stockProduct'>Stock Disponible: {item.stock}</p>
      <p className='priceProduct'>{item.precio}</p>
      <ItemCount>
        contador={contador}
        actualizaValor={setContador}
        stock={stock}
        </ItemCount>
      </div>
      <button onClick={() => addItem(item, contador)}>Agregar a Carrito</button>
    </div>
  );
}
