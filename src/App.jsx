import { useState } from 'react'
import Navbar from './Components/Navbar'
import Work from './Components/Work'
import Stripes from './Components/Stipres'
import "./index.css";
import Products from './Components/Products';

function App() {
  return (
    
    <div className='w-full  min-h-screen overflow-x-hidden  py-6 bg-zinc-900 font-["satoshi "] text-white'>
      <Navbar />
      <Work />
      <Stripes className="" />
      <Products></Products>
    </div>
    
  )
}

export default App