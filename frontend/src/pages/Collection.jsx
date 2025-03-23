import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {

  const {products,search,showsearch} = useContext(ShopContext)
  const [showfilter , setshowfilter] = useState(false)
  const [filterproducts,setfilterproducts] = useState([])
  const [category,setcategory] = useState([])
  const [type , settype] =  useState([])
  const [sortType,setsortType]  = useState('relevent') 

  const togglecategory = (e)=>{
    if(category.includes(e.target.value)){
      setcategory(prev=>prev.filter(item=> item !== e.target.value))
    }
    else{
      setcategory(prev => [...prev,e.target.value] )
    }
  }

  const toggletype = (e)=>{
    if(type.includes(e.target.value)){
      settype(prev=>prev.filter(item=> item !== e.target.value))
    }
    else{
      settype(prev => [...prev,e.target.value] )
    }
  }
  
  const applyfilter = ()=>{
    let productCopy = products.slice();

    if(showsearch && search){
      productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if(category.length>0){
      productCopy = productCopy.filter(item=> category.includes(item.category))
    }

    if(type.length>0){
      productCopy = productCopy.filter(item=> type.includes(item.subCategory))
    }

    setfilterproducts(productCopy)
  }

  const sortPrice = ()=>{
     let filterCopy = filterproducts.slice();
    switch(sortType){
      case 'low-high' : 
          setfilterproducts(filterCopy.sort((a,b)=>(a.price - b.price)))
          break;
      case 'high-low' : 
        setfilterproducts(filterCopy.sort((a,b)=>(b.price - a.price)));
        break;
      default : 
        applyfilter();
        break;
    }
  }

  

  useEffect(()=>{
    applyfilter();
  },[category,type,search,showsearch])

  useEffect(()=>{
    sortPrice();
  },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      <div className='min-w-60'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS</p>
        <img onClick={()=>setshowfilter(!showfilter)} src={assets.dropdown_icon} className={`h-3 sm:hidden ${showfilter?'rotate-90':''} cursor-pointer`} alt="" />
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showfilter ? '':'hidden'}  sm:block`}>
           <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
           <div className=' flex flex-col gap-2 text-sm font-light text-gray-700'>
             <p className='flex gap-2'>
              <input onChange={togglecategory} type="checkbox" className='w-3' value={"Men"} /> Men
             </p>
             <p className='flex gap-2'>
              <input onChange={togglecategory} type="checkbox" className='w-3' value={"Women"} /> Women
             </p>
             <p className='flex gap-2'>
              <input onChange={togglecategory} type="checkbox" className='w-3' value={"Kids"} /> Kids
             </p>
           </div>
        </div>
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showfilter ? '':'hidden'}  sm:block`}>
           <p className='mb-3 text-sm font-medium'>TYPE</p>
           <div className=' flex flex-col gap-2 text-sm font-light text-gray-700'>
             <p className='flex gap-2'>
              <input  onChange={toggletype} type="checkbox" className='w-3' value={"Topwear"} /> Topwear
             </p>
             <p className='flex gap-2'>
              <input  onChange={toggletype} type="checkbox" className='w-3' value={"Bottomwear"} /> Bottomwear
             </p>
             <p className='flex gap-2'>
              <input  onChange={toggletype} type="checkbox" className='w-3' value={"Winterwear"} /> Winterwear
             </p>
           </div>
        </div>
      </div>
      <div className='flex-1'>
        <div  className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'All'} text2={'COLLECTIONS'} />
          <select onChange={(e)=>setsortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option  value="relevent">Sort by : Relevent</option>
            <option  value="low-high">Sort by : Low-High</option>
            <option  value="high-low">Sort by : High-Low</option>
          </select>

        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
         {
          filterproducts.map((item,index)=>(
            <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
          ))
         }
        </div>
      </div>
    </div>
  )
}

export default Collection
