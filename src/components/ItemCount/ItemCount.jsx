import React from 'react'
import './ItemCount.css'

const ItemCount = ({
  contador,
  actualizarValor,
  stock,
  getNumeroCualquiera,
}) => {
  const numeroCualquiera = 10;
  const onAdd = () =>{
    if (stock === contador){
      return
    }
    actualizarValor(contador + 1)
      getNumeroCualquiera(numeroCualquiera)
  }
  const restar = () =>{
    if(contador === 0){
      return
    }
    actualizarValor(contador - 1)
  }

return(
  <div className='agregarCarrito'>
      <div className='contador'>
      <button onClick={restar}  className='button'>-</button>
      <p className='spanContador'>{contador}</p>
      <button onClick={onAdd} className='button'>+</button>
      </div>
      </div>
)
}

export default ItemCount








    /*
    export default function ItemCount(props) {
        const [count, setCount] = React.useState(1);
        function handleSuma(){
          if(count<item.props.stock){
            setCount(count+1)
          }
          else{
            console.log("la cantidad no puede superar el stock disponible")
          }
        }
        function handleResta(){
          setCount(count-1)
        }
        
        return (
          <div className='agregarCarrito'>
          <div className='contador'>
          <button disabled={count===1} onClick={handleResta} className='button'>-</button>
          <h3>{count}</h3>
          <button onClick={handleSuma} className='button'>+</button>
          </div>
          </div>
          )
        }
        */










