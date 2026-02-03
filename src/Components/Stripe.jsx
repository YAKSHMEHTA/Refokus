import React from 'react'


function Stripe() {
  let data = [
    {url:"https://i.pinimg.com/1200x/bf/32/c5/bf32c59a2162b3a83c78c2e5dac96446.jpg"},
    {url:"https://i.pinimg.com/736x/07/c4/96/07c496cf53714188a1557b1b731206ee.jpg"},
    {url:"https://i.pinimg.com/736x/09/68/2e/09682e868ae6ec104972a56da6e1ab05.jpg"},
    {url:"https://i.pinimg.com/736x/5f/2e/20/5f2e20080873abc0deae8d14ff09aba1.jpg"},
    {url:"https://i.pinimg.com/736x/c2/bb/97/c2bb97d70c33197daafe56c2167d37f6.jpg"},
  ]
  return (
    <div className='w-full flex mt-20 Stripe'>
      {data.map((item, index) => (
        <div className='overflow-hidden h-30  w-[25%] '>
          <img src={item.url} className='h-30 w-100 object-cover' alt="" />
        </div>
      ))}
    </div>
  )
}
export default Stripe;