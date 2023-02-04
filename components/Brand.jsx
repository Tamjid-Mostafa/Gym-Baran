import React from 'react'

const Brand = () => {
  return (
    <div className='max-w-[492px] my-6'>
      <div className='mb-3'>Brand:</div>
      <div className='flex justify-between items-center'>
        <img className='w-fit' src="/nike.png" alt="" />
        <img className='w-fit' src="/adidas.png" alt="" />
        <img className='w-fit' src="/puma.png" alt="" />
        <img className='w-fit' src="/reebok.png" alt="" />
      </div>
    </div>

  )
}

export default Brand