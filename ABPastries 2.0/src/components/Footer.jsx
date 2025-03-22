import React from 'react'
import logo2 from "../assets/images/Logo 2.png"
import instagram from "../assets/icons/Layer 1.svg"
import facebook from "../assets/icons/Layer 2.svg"
import twitter from "../assets/icons/Layer 3.svg"
import map from "../assets/icons/map 1.svg"
import "../Styles/Footer.css"

const Footer = () => {
  return (
    <>
      <footer className='bg-[#910F3F] p-15 flex space-x-10 md:justify-between'>
        <section className=''>
          <img src={logo2} alt="" />
          <div className='text-white flex space-x-10'>
            <div className='space-y-2'>
              <h2 className='text-[14px] md:text-2xl mb-6'>Product</h2>
              <ul className='space-y-5 text-[11px] md:text-[20px]'>
                <li>Cakes</li>
                <li>Cookies</li>
                <li>Store</li>
              </ul>
            </div>
            <div className='space-y-2'>
              <h2 className='text-[14px] md:text-2xl mb-6'>Company</h2>
              <ul className='text-[11px] md:text-[20px]  space-y-5'>
                <li>About</li>
                <li>Privacy policy</li>
              </ul>
            </div>
          </div>
        </section>
        <section className='text-white'>
          <div>
            <h2 className='text-right my-3'>Connect with Us</h2>
            <ul className='flex justify-end space-x-5'>
              <li><img src={instagram} alt="" /></li>
              <li><img src={facebook} alt="" /></li>
              <li><img src={twitter} alt="" /></li>
            </ul>
          </div>
          <div>
            <h2 className='text-right my-3'>Find us</h2>
            <img src={map} alt="" />
          </div>
        </section>
      </footer>
    </>
  )
}

export default Footer