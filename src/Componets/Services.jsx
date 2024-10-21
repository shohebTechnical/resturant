import React from 'react'
import { FaMobileScreen } from "react-icons/fa6";
import { MdNoFood } from "react-icons/md";
import { MdFoodBank } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";

const Services = () => {
  return (
    <div className=' container py-12 '>
    {/* service section  */}
    <div className=" text-center ">
        <h1 className=" text-4xl font-semibold   mx-auto">Our Service</h1>
      </div>
      {/* icon section  */}
      <div className=' grid  sm:grid-cols-2 md:grid-cols-4 gap-12 sm:gap-3 mt-12'>
        <div className=' flex  flex-wrap items-center justify-center gap-3'>
      <FaMobileScreen className=' text-2xl' />
      <p className=' text-xl font-semibold'>Online Booking</p>
      </div>
      <div className='flex items-center justify-center gap-3'>
      <MdNoFood  className='text-2xl'/>
      <p className='text-xl font-semibold'>Fast Food</p>
      </div>
      <div className='flex items-center justify-center gap-3'>
      <MdFoodBank className='text-2xl' />
      <p className='text-xl font-semibold'>Healthy  Food</p>
      </div>
      <div className='flex items-center justify-center gap-3'>
      <CiDeliveryTruck  className='text-2xl'/>
      <p className='text-xl font-semibold'>Delivery</p>
      </div>


        </div>
      </div>
  )
}

export default Services