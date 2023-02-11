import React, {useState , useEffect} from 'react'
import '../ItemListContainer/ItemListContainer.css'
/*import ItemDetail from './ItemDetail';*/
import ItemCount from '../ItemCount/ItemCount'
import { useParams } from 'react-router-dom'
import {getSingleItem} from '../../services/mockService'

export default function ItemDetailContainer() {

  const [item,setItem] = useState([]);

  let id = useParams().id;
  useEffect(()=>{
    getSingleItem(id).then((respuesta)=> setItem(respuesta))

  })
  return (
    <div className='totalCards'>
      <div className='cardUnidad'>
      <p className='titleProduct'>{item.titleProduct}</p>
      <img className='imgProduct' src={item.imgProduct} alt={item.titleProduct}/>
      <p className='descriptionProduct'>{item.descriptionProduct}</p>
      <p className='stockProduct'>Stock Disponible: {item.stock}</p>
      <p className='priceProduct'>{item.priceProduct}</p>
      <ItemCount/>
      </div>
      
    </div>
  );
}
