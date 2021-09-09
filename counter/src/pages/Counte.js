import React, {useState} from 'react'
import './Counter.css'

const Counter =  () => {
  const [contador,setContador] = useState(0)
  
  const handleClick = (count) => {
    const somar = count === '+'? setContador(contador + 1): setContador(contador - 1)
  }
  
  return(
    <>
      <div className ="counter">
        <span>{contador}</span>
        <button onClick={()=>handleClick('-')}>-</button>
        <button onClick={()=>handleClick('+')}>+</button>
      </div>
    </>
  )

}

export default Counter