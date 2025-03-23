import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';

const Cart = () => {

  const {products,currency ,cartitems} = useContext(ShopContext)
  const [cartdata,setcartdata] = useState([]);

  useEffect(()=>{
    
    const tempdata = [];
    for(const items in cartitems){
       for(const item in cartitems[items]){
         if(cartitems[items][item]>0){
          tempdata.push({
            _id : items,
            size: item,
            quantity: cartitems[items][item]
          })
         }
       }
    }
    setcartdata(tempdata)
  },[cartitems])

  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
      <Title text1={'YOUR'} text2={'CART'} />
      </div>
      
      <div>
        {
          // cartdata.map((item,index)=>())
        }
      </div>
    </div>
  )
}

export default Cart
