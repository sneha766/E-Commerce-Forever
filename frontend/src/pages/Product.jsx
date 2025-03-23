import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Relatedproducts from '../components/Relatedproducts';

const Product = () => {

  const {productId} = useParams();
  const {products,currency ,addtocart} = useContext(ShopContext)
  const [data,setdata] = useState(null)
  const [image,setimage] = useState('')
  const [size,setsize] = useState('')

  useEffect( ()=>{
    const foundProduct =  products.find( (item) => item._id === productId);
    if (foundProduct) {
      setdata(foundProduct);
      setimage(foundProduct.image[0]); 
    }
  },[productId,products])

  return data ?  (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex  gap-12 sm:gap-12 flex-col sm:flex-row'>
        <div className='flex flex-col gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              data.image.map((item,index)=>(
                <img  onClick={()=>setimage(item)} src={item} key={index} alt="" className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} className='w-full h-auto' alt="" />
          </div>

          <div className='flex  flex-col ml-10'>
            <h1 className='font-medium text-2xl mt-2  '>{data.name}</h1>
            <div className='flex items-center gap-1 mt-1'>
              <img src={assets.star_icon} alt="" className='w-3.5'/>
              <img src={assets.star_icon} alt="" className='w-3.5'/>
              <img src={assets.star_icon} alt="" className='w-3.5'/>
              <img src={assets.star_icon} alt="" className='w-3.5'/>
              <img src={assets.star_dull_icon} alt="" className='w-3.5'/>
              <p className='pl-2'>(122)</p>
            </div>
            <p className='mt-4 text-3xl font-medium'>{currency}{data.price}</p>
            <p className='mt-2 text-gray-500 md:w-4/5'>{data.description}</p>
            <div className=' flex flex-col gap-4 my-4'>
              <p>Select Size</p>
              <div className='flex gap-2'>
                {
                  data.sizes.map((item,index)=>(
                    <button onClick={()=> setsize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
                  ))
                }
              </div>
            </div>
            <button onClick={()=>addtocart(data._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 w-[40%]'>ADD TO CART</button>
            <hr className='mt-6 sm:w-4/5'/>
            <div className='text-sm text-gray-500 mt-4 flex flex-col gap-1'>
              <p>100% Original product</p>
              <p>Cash on delivery is available on this product.</p>
              <p>Easy return and exchange policy within</p>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-20'>
          <div className='flex'>
            <b className='border px-5 py-3 text-sm'>Description</b>
            <p className='border px-5 py-3 text-sm'>Reviews(122)</p>
          </div>
          <div className='flex flex-col gap-4 border px-6  py-6 text-sm text-gray-500'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nam labore doloribus natus quaerat laboriosam earum incidunt ducimus laudantium officia, voluptate iste totam at quae enim, temporibus excepturi rem animi.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi dolore voluptatum deleniti incidunt ratione porro quidem ea explicabo. A sed iste, iure iusto libero odio neque vel beatae aspernatur nemo itaque nihil maxime velit sequi veritatis aliquam, delectus nesciunt! Dolor corrupti delectus, nisi vel nemo quam assumenda nam odit mollitia!</p>
          </div>
        </div>

        <Relatedproducts category={data.category} type={data.subCategory} />
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
