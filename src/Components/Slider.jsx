import React from 'react'

function Slider({url}) {
  return (
    <div className='flex w-full py-5'>
      {url.map((img,index)=><img src={img} /> )}
    </div>
  )
}

export default Slider
