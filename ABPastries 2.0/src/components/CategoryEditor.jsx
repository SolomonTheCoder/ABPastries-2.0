import React from 'react'
import add from "../assets/icons/solar--add-circle-broken.svg"

const CategoryEditor = ({ onClose }) => {
  return (
    <div className='bg-[#D9D9D9] relative shadow-lg shadow-[#00000040] h-[729px] p-5 rounded-2xl flex justify-between gap-5 my-5'>
      <div className='absolute -right-2 -top-3'>
        <button className='bg-red-600 w-[51px] h-[51px] text-4xl text-white rounded-full' onClick={onClose}>X</button>
      </div>

      {[1, 2, 3].map((_, i) => (
        <div key={i} className='flex flex-col justify-center items-center relative'>
          <div className='bg-[#E7D3D3] p-15 h-[436px] flex flex-col justify-center items-center z-10'>
            <div className='w-20'>
              <img src={add} alt="Add" />
            </div>
            <label className='text-center text-[20px]' htmlFor={`addImage-${i}`}>Add Image...</label>
            <input className='hidden' type="file" id={`addImage-${i}`} />
          </div>
          <div className='-mt-[100px] flex flex-col justify-center items-center gap-5'>
            <div className='text-[15px] font-bold bg-[#D9D9D9] size-[165px] shadow-lg shadow-[#00000040] rounded-full grid place-content-center '>
              <p className='text-center mt-20'>Name</p>
            </div>
            <button className='flex flex-row gap-3 bg-[#910F3F] text-[20px] text-white px-5 py-2 rounded-2xl'>
              Starting price at
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CategoryEditor
