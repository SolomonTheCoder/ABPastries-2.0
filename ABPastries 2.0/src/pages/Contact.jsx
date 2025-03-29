import React from 'react'
import "../Styles/Contact.css"
import bread from "../assets/images/image 19.png"

const Contact = () => {
  return (
    <div className='Contact px-30 py-20 -mt-[56px] bg-no-repeat bg-cover'>
      <section className='flex justify-between items-center gap-20'>
        <div className='space-y-5'>
          <div className='space-y-5'>
            <h1 className='text-6xl text-white'>Contact <span className='text-[#961B47]'>Us</span></h1>
            <p>We are committed to processing the information in
              order to contact you and talk about your order.</p>
          </div>
          <form className='flex flex-col gap-5' action="">
            <input className='border-[1px] w-[459px] h-[75px] rounded-2xl pl-3' type="text" name="" id="" placeholder='Name' />
            <input className='border-[1px] w-[459px] h-[75px] rounded-2xl pl-3' type="email" name="" id="" placeholder='Email' />
            <input className='border-[1px] w-[459px] h-[75px] rounded-2xl pl-3' type="number" name="" id="" placeholder='Password' />
            <textarea className='border-[1px] w-[459px] h-[206px] rounded-2xl pl-3 pt-3' name="" id="" placeholder='Message'></textarea>
          </form>
          <button>Submit</button>
        </div>
        <div className='w-full'>
          <img src={bread} alt="" />
        </div>
      </section>
    </div>
  )
}

export default Contact