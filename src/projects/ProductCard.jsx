import React from 'react'

const ProductCard = ({id,title,price,image,rating}) => {
  
  return (
    <>
      <div className='card'>
        <img src={image}/>
        <p>{title}</p>
        <p>${price}</p>
        <p>{rating}</p>
      </div>
    </>
  )
}

export default ProductCard