import React from 'react'
import image from "../assets/icons/bi--image.svg"

const AddProduct = () => {
  return (
    <div className='space-y-5 relative'>
      <h1 className='text-4xl my-5'>Product</h1>
      <div className='absolute -right-2 top-10'>
        <button className='bg-red-600 w-[61px] h-[61px] text-4xl text-white rounded-full'>X</button>
      </div>
      <section className='bg-[#F6F6F6] shadow-lg shadow-[#00000040] h-[915px] rounded-2xl p-5 space-y-10'>
        <div className='flex justify-between'>
          <div className='space-y-5'>
            <div className='bg-[#FFFFFF] shadow-lg shadow-[#00000040] px-30 h-[380px] flex flex-col justify-center items-center'>
              <label htmlFor="addImage"><img className='w-20' src={image} alt="" />Add Image</label>
              <input className='hidden' type="file" name="" id="addImage" />
            </div>
            <div className='flex flex-col justify-center gap-5'>
              <div>
                <input className='bg-white shadow-inner shadow-[#00000040] pl-3 pr-20 py-2 rounded-2xl' type="text" name="" id="" placeholder='Name' />
              </div>
              <div>
                <input className='bg-white shadow-inner shadow-[#00000040] px-4 py-2 rounded-2xl' type="text" name="" id="" placeholder='Category' />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <h2 className='text-2xl'>Option Details</h2>
            <input className='bg-white shadow-inner shadow-[#00000040] w-[206px] p-3 rounded-2xl' type="text" name="" id="" placeholder='Name' />
            <input className='bg-white shadow-inner shadow-[#00000040] w-[356px] px-4 pt-3 pb-20 rounded-2xl' type="text" name="" id="" placeholder='Blurb' />
            <input className='bg-white shadow-inner shadow-[#00000040] w-[111px] p-3 rounded-2xl text-center' type="text" name="" id="" placeholder='Price' />
            <div>
              <button className='text-white bg-[#910F3F] px-10 py-2 rounded-2xl'>Update</button>
              </div>
          </div>
        </div>
        <div className='bg-[#D9D9D9] h-[253px] p-5'>
          <div className='bg-white flex justify-between p-2 rounded-2xl'>
            <p>Detail Name</p>
            <p>Blurb</p>
            <p>Price Per Unit</p>
          </div>
        </div>
      </section>
      <div className='flex justify-end'>
        <button className='text-white bg-[#910F3F] px-10 py-2 rounded-2xl'>Add To Product Page</button>
      </div>
    </div>
  )
}

export default AddProduct