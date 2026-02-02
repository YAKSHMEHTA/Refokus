import { useState } from 'react'
import Navbar from './Components/Navbar'
import Work from './Components/Work'
import Stripes from './Components/Stipres'



function App() {
  return (
    <div className='w-full min-h-screen  py-6 bg-zinc-900 font-["satoshi "] text-white'>
      <Navbar />
      <Work />
      <Stripes></Stripes>
    </div>
  )
}

export default App