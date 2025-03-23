import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets.js'
import { NavLink ,Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext.jsx'
const Navbar = () => {
  
  const [visible,setvisible] = useState(false)
  const{setshowsearch,getcartcount} = useContext(ShopContext)

  return (
    <div className='flex items-center justify-between py-4 '>
      <NavLink to='/'><img src={assets.logo} className='w-36 h-11'></img></NavLink>
      <ul className='hidden sm:flex items-center justify-between gap-5 text-sm text-gray-700'>
        <NavLink to="/" className='flex flex-col items-center'>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
        </NavLink >
        <NavLink to="/collection" className='flex flex-col items-center'>
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
        </NavLink >
        <NavLink to="/about" className='flex flex-col items-center'>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
        </NavLink >
        <NavLink to="/contact" className='flex flex-col items-center'>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'></hr>
        </NavLink >
      </ul>
      <div className='flex items-center justify-between h-5 gap-5'>
        <img onClick={()=>setshowsearch(true)} src={assets.search_icon} alt="" className='w-5 cursor-pointer'/>
        <div className="relative group">
          <img src={assets.profile_icon} alt="" className='w-5 cursor-pointer '/>
          <div className="group-hover:block hidden  absolute right-0  pt-4" id='dropdown'>
            <div className='flex flex-col w-33 py-3 gap-2 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
            </div>
          </div>
        </div>
        <Link to='/cart' className='relative'>
        <img src={assets.cart_icon} alt="" className='w-5 cursor-pointer min-w-5'/>
        <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getcartcount()}</p>
        </Link>
        <img onClick={()=>setvisible(true)} src={assets.menu_icon} alt="" className='sm:hidden w-5 h-5 cursor-pointer'/>
      </div>

      <div className={`absolute top-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
         <div className='flex flex-col text-gray-600'>
           <div className='flex  items-center gap-4 p-3'>
             <img onClick={()=>setvisible(false)} src={assets.dropdown_icon} alt="" className='h-4 rotate-180 cursor-pointer' />
             <p>Back</p>
           </div>
           <NavLink onClick={()=>setvisible(false)} className="cursor-pointer py-2 pl-6 border" to='/'>HOME</NavLink>
           <NavLink onClick={()=>setvisible(false)} className="cursor-pointer py-2 pl-6 border" to='/collection'>COLLECTION</NavLink>
           <NavLink onClick={()=>setvisible(false)} className="cursor-pointer py-2 pl-6 border" to='/about'>ABOUT</NavLink>
           <NavLink onClick={()=>setvisible(false)} className="cursor-pointer py-2 pl-6 border" to='/contact'>CONTACT</NavLink>
         </div>
      </div>
    </div>
    
  )
}

export default Navbar
