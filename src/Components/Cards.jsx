import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full'>
      <div className="max-w-screen-xl mx-auto   flex gap-2 py-30">
        <Card width={"basis-2/5"} start={""}/>
        <Card width={"basis-3/5"} start={"start a project"}/>
      </div>
    </div>
  )
}

export default Cards
