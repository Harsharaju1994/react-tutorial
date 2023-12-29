import React, { useEffect, useState } from 'react'
import ProductCard from "./ProductCard"
import './AppiCalling.css'

const AppiCalling = () => {
    const [products,setProducts] = useState([])

    async function getProducts(){
        let res = await fetch('https://fakestoreapi.com/products')

        let productList = await res.json();
        setProducts(productList)
        //console.log(productList)
    }
    useEffect(
        ()=>{
            getProducts()
        },[]
    )
    if (products.length==0) {
        return (<h1>Fetching Data...</h1>)
    }
  return (
    <>
        <div className="product-list">
              {
                products.map((p)=>
                <ProductCard {...p} key={p.id} />
                )
              }  
              
        </div>
    </>
  )
}

export default AppiCalling