import React from 'react'
import add from "../assets/icons/solar--add-circle-broken.svg"
import image1 from "../assets/images/Rectangle1.png"
import play from "../assets/icons/solar--play-bold.svg"

const AdminPage = () => {
  // const [file, setFile] = useState()

  // const getFile = (e) => {
  //   setFile(URL.createObjectURL(e.target.files[0]))
  // }

  return (
    <div className='space-y-10'>
      <h1 className='text-5xl my-5'>Home</h1>
      <section>
        <div className='bg-[#FCFCFCC4] shadow-lg shadow-[#00000040] space-y-10 p-5  '>
          <h2 className='text-5xl'>Carousel</h2>
          <main className='flex gap-5 '>
            <div className='flex flex-col   justify-center items-center gap-5'>
              <div className='bg-[#C4C4C41A] h-[423px] rounded-2xl shadow-lg shadow-[#00000040] p-9 flex flex-col justify-center items-center gap-3'>
                <div className='w-20'>
                  <img src={add} alt="" />
                </div>
                <label className='text-center text-[20px]' htmlFor="addImage">Add Image...</label>
                <input className='hidden' type="file" name="" id="addImage" />
              </div>
              <input className='bg-[#F2E8E8] text-center font-extrabold shadow-inner shadow-[#00000040] px-1 py-3 rounded-2xl' type="text" id='' placeholder='Add text' />
            </div>
        
              <div className='flex flex-col justify-center items-center gap-5'>
                <div className='bg-[#C4C4C41A]  shadow-lg shadow-[#00000040]  flex flex-col justify-center items-center'>
                  <div className='w-full h-[423px]  '>
                    <img className='w-full h-[423px]' src={image1} alt="" />
                  </div>
                </div>
                <input className='bg-[#F2E8E8] text-center font-extrabold shadow-inner shadow-[#00000040] px-5 py-3 rounded-2xl' type="text" id='' placeholder='Add text' />
              </div>
              <div className='flex flex-col justify-center items-center gap-5'>
                <div className='bg-[#C4C4C41A] shadow-lg shadow-[#00000040] flex flex-col justify-center items-center'>
                  <div className='w-full h-[423px] '>
                    <img className=' w-full h-[423px] ' src={image1} alt="" />
                  </div>
                </div>
                <input className='bg-[#F2E8E8] text-center font-extrabold shadow-inner shadow-[#00000040] px-5 py-3 rounded-2xl' type="text" id='' placeholder='Add text' />
              </div>
          </main>
        </div>
        <div className='flex justify-end mt-5'>
          <button className='bg-[#910F3F] text-white text-2xl flex justify-center items-center gap-3 px-5 py-3 rounded-2xl'><img className='w-7' src={play} alt="" />Preview Changes</button>
        </div>
      </section>
    </div>
  )
}

export default AdminPage