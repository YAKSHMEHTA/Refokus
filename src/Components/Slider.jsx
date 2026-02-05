import React from 'react'

function Slider({url}) {
  return (
    <div className='flex w-full py-8 gap-20 whitespace-nowrap '>
      {url.map((img,index)=><img src={img} className='w-[7vw] flex-shrink-0' /> )}
      {url.map((img,index)=><img src={img} className='w-[7vw] flex-shrink-0'/> )}
    </div>
  )
}

export default Slider
