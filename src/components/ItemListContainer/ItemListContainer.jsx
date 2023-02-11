import React, {useState , useEffect} from 'react'
import './ItemListContainer.css'
import ItemList from './ItemList'
import getItems, { getItemsCategory } from '../../services/mockService'
import { useParams } from 'react-router-dom'


export default function ItemListContainer() {

  const [items,setItems] = useState([]);
  const category = useParams().category;
  useEffect(()=>{
    if(category===undefined){
      getItems().then((respuesta)=> setItems(respuesta)).
      catch((error)=>console.error(error)).
      finally(()=>console.log("siempre me ejecutó"))
    }else{
      getItemsCategory(category).then((respuestaFiltrada)=> setItems(respuestaFiltrada)).
      catch((errorMsg)=>console.error(errorMsg)).
      finally(()=>console.log("siempre se ejecutó"))
    }

  },[category])
  return (
    <div className='totalCards'>
      
          { items.map(item=>{
            return <ItemList
            key={item.id}
            id={item.id} 
            titleProduct= {item.titleProduct} 
            imgProduct={item.imgProduct}  
            priceProduct={item.priceProduct}
          />
          }) }
    </div>
  )
}