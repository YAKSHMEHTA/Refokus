import React from 'react'
import { HiOutlineArrowTurnDownRight } from "react-icons/hi2";



function Button({info="Get Started"}) {
  return (
    <div className='max-w-40 text-black rounded-full bg-white px-4 py-2 flex items-center justify-between'>
      <span className='font-medium'>{info} </span>
      <HiOutlineArrowTurnDownRight />
    </div>
  )
}

export default Button
