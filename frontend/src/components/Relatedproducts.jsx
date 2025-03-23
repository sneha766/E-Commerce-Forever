import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const Relatedproducts = ({category,type}) => {

    const {products} = useContext(ShopContext)
    const[related  , setrelated] = useState([])

    useEffect(()=>{
      if(products.length>0){
        let productcopy = products.slice();

        productcopy = productcopy.filter((item)=> item.category === category)
        productcopy = productcopy.filter((item)=> type === item.subCategory)

        setrelated(productcopy.slice(0,5));
        
      }
    },[products])
  return (
    <div className='my-24 '>
      <div className='text-center text-3xl py-2'>
        <Title text1={'RELATED'} text2={'PRODUCTS'} />
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 gap-y-6'>
        {
            related.map((item,index)=>(
               <ProductItem key={index} name={item.name} price={item.price} image={item.image} id={item._id} />
            ))
        }
      </div>
    </div>
  )
}

export default Relatedproducts
