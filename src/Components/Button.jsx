import React from 'react'
import { HiOutlineArrowTurnDownRight } from "react-icons/hi2";



function Button() {
  return (
    <div className='max-w-40 text-black rounded-full bg-white px-4 py-2 flex items-center justify-between'>
      <span className='font-medium'>Get Started </span>
      <HiOutlineArrowTurnDownRight />
    </div>
  )
}

export default Button
