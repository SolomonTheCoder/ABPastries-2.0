import React, { useState } from 'react'
import search from "../assets/icons/weui--search-outlined.svg"
import profile from "../assets/icons/ix--user-profile-filled.svg"
import add from "../assets/icons/solar--add-circle-broken.svg"
import image1 from "../assets/images/Rectangle1.png"
import play from "../assets/icons/solar--play-bold.svg"

const AdminPage = () => {
  const [file, setFile] = useState()

  const getFile = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]))
  }

  return (
    <div className='h-full flex flex-col px-30 py-10 space-y-10'>
      <div className='flex justify-between'>
        <div className='flex items-center'>
          <input className='relative bg-[#D9D9D9] shadow-inner shadow-[#00000017] rounded-2xl w-[311px] h-[39px] px-4 text-2xl' type="text" name="Search" id="search" placeholder='search' />
          <img className='absolute left-100' src={search} alt="" />
        </div>
        <div className='w-15'>
          <img src={profile} alt="" />
        </div>
      </div>

      <div className='text-5xl'><h1>Home</h1></div>
      <div className='bg-[#FCFCFCC4] shadow-inner shadow-[#00000040] p-10 space-y-5'>
        <h2 className='text-[40px]'>Carousel</h2>
        <div className='flex flex-row justify-between items-center gap-10'>
          <section className='flex flex-col justify-center gap-4'>
            <div className='bg-[#C4C4C41A] shadow-lg shadow-black/25 h-[423px] flex flex-col justify-center items-center rounded-2xl'>
              <img src={file} alt="" />
              <label className='flex flex-col items-center gap-3 text-[20px]' htmlFor='add-image'>
                <img className='w-19' src={add} alt="" />
                Add Image...
              </label>
              <br />
              <br />
              <input className='hidden' type="file" accept='image/*' name="" id="add-image" onChange={getFile} />
            </div>
            <input className='bg-[#F2E8E8] py-3 px-3 text-center text-black font-bold shadow-inner shadow-[#00000040] rounded-2xl' type="text" name="" id="" placeholder='Add text' />
          </section>
          <section className='flex gap-5'>
            <div className='flex flex-col justify-center items-center gap-5'>
              <div className=' shadow-lg shadow-black/25 h-[423px]'>
                <img className='w-full h-[423px]' src={image1} alt="" />
              </div>
              <input className='bg-[#F2E8E8] py-3 px-3 text-center text-black font-bold shadow-inner shadow-[#00000040] rounded-2xl' type="text" name="" id="" placeholder='Add text' />
            </div>
            <div className='flex flex-col justify-center  items-center gap-5'>
              <div className=' shadow-lg shadow-black/25 h-[423px]'>
                <img className='w-full h-[423px]' src={image1} alt="" />
              </div>
              <input className='bg-[#F2E8E8] py-3 px-3 text-center  text-black font-bold shadow-inner shadow-[#00000040] rounded-2xl' type="text" name="" id="" placeholder='Add text' />
            </div>
          </section>
        </div>
      </div>
      <div className='flex justify-end'>
        <button className='flex gap-3 bg-[#910F3F] px-5 py-3 rounded-2xl text-white '><img className='w-6' src={play} alt="" />Preview Changes</button>
      </div>
    </div>
  )
}

export default AdminPage