import React, { useState } from 'react'

const Index = () => {

    const [count, setCount] = useState(0);

    const decrementCount = () => {
        setCount((prevCount)=>{
            return prevCount-1;
        });
    }

    const incrementCount = () => {
        setCount((prevCount)=>{
            return prevCount+1;
        });
    }

  return (
    <>
        <button onClick={decrementCount}>-</button>
        <span>Count : {count}</span>
        <button onClick={incrementCount}>+</button>
    </>
  )
}

export default Index
