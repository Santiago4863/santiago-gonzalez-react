import React, {useEffect,} from 'react'
import '../ItemListContainer/ItemListContainer.css'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom'
import { useState } from 'react';

import {getFirestore, getDoc, doc } from 'firebase/firestore'

export default function ItemDetailContainer() {
  
  const [singleProduct, setSingleProduct] = useState({})
  let {id} = useParams();

const getProducts = () => {
  const db = getFirestore()
  const querySnapshot = doc(db, "items", id)


  getDoc(querySnapshot)
  .then((response) => {
    console.log(response.id);
    console.log(response.data());
    setSingleProduct({id: response.id, ...response.data()})
  })
  .catch((error) => {console.log(error);})
}



  
  useEffect(()=>{
   getProducts()

  }, [])
  return (
    <div>

      <ItemDetail props={singleProduct} />
    </div>
    );


    /*
    <div className='totalCards'>
      <div className='cardUnidad'>
      <p className='titleProduct'>{item.titulo}</p>
      <img className='imgProduct' src={`/img/${item.imagen}`} alt={item.titulo}/>
      <p className='descriptionProduct'>{item.descripcion}</p>
      <p className='stockProduct'>Stock Disponible: {item.stock}</p>
      <p className='priceProduct'>{item.precio}</p>
      <ItemCount>
        contador={contador}
        actualizaValor={setContador}
        stock={item.stock}
        </ItemCount>
      </div>
      <button onClick={() => addItem(item, contador)}>Agregar a Carrito</button>
    </div>
    */
}
