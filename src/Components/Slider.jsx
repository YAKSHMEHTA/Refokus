import {motion} from 'framer-motion'
import React from 'react'

function Slider({url}) {
  return (
    <div className=" flex w-full overflow-hidden">
      <motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:'linear',duration:'15'}} className='flex w-full shrink-0 py-10 gap-40 whitespace-nowrap '>
        {url.map((img,index)=><img src={img} className='w-[7vw] flex-shrink-0'/> )}
      </motion.div>
      <motion.div initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:'linear',duration:'15'}} className='flex w-full shrink-0 py-10 gap-40 whitespace-nowrap '>
        {url.map((img,index)=><img src={img} className='w-[7vw] flex-shrink-0'/> )}
      </motion.div>
    </div>
  )
}

export default Slider
