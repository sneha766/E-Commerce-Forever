import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    
      <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700' >
        <div className=''>
            <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
            <h1 className='text-black font-semibold'>Easy Exchange Policy</h1>
            <p className='text-gray-400'>We offer hassle free exchange policy</p>
        </div>
        <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
            <h1 className='text-black font-semibold'>7 Days Return Policy</h1>
            <p className='text-gray-400'>We provide 7 day free return policy</p>
        </div>
        <div>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
            <h1 className='text-black font-semibold' >Best Customer Support</h1>
            <p className='text-gray-400'>We offer 24/7 customer support</p>
        </div>
      </div>
    
  )
}

export default OurPolicy
