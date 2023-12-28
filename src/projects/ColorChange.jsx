import React from 'react'
import './ColorChange.css'

const ColorChange = () => {
  return (
    <>
        <div className='Wrapper'>
        <h1>Background color changer</h1>
        <input type='color' onChange={
            (e)=>{
                document.body.style.background=e.target.value;
            }
        } />
        </div>
    </>
  )
}

export default ColorChange