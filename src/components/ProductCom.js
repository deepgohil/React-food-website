import React from 'react'
import ProductSingle from './ProductSingle'
import {useState,useEffect} from 'react'

const ProductCom = () => {

  const [products,setproducts]=useState([]);
  useEffect(()=>
  {

  },[])
  return (
    <div className="container  pb-24">
    <h1 className="text-lg font-bold my-8">Products</h1>
    <div className="grid grid-cols-5 my-8 gap-24">
<ProductSingle/>
<ProductSingle/>
<ProductSingle/>
<ProductSingle/>

    </div>
</div>
  )
}

export default ProductCom