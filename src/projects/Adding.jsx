import React, { useState } from 'react'
import './Adding.css'

const Adding = () => {
    let [counter,setCounter] = useState(0);
    let stock = 10;
  return (
    <>
        <div className="drum">
            <button className='min' disabled ={counter===0} 
                onClick={()=>{
                    if(counter>0){
                        setCounter(counter-1)
                    }
                }}
            >-</button>
            <p>{counter}</p>
            <button className='max' disabled ={counter===stock} 
                onClick={()=>{
                    if(counter<stock){
                        setCounter(counter+1)
                    }
                }}>+</button>
        </div>
    </>
  )
}

export default Adding