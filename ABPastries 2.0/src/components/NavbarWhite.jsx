import React from 'react'
import { Link } from "react-router-dom"
import logo from "../assets/images/Logo 2.png"
import menu from "../assets/icons/material-symbols--menu-rounded.svg"

const NavbarWhite = () => {
    return (
        <nav className="flex flex-row justify-around items-center p-4 sticky top-0 left-0 right-0 z-10 ">
            <section className="Nav-logo">
                <img className="w-30" src={logo} alt="" />
            </section>
            <section className="Nav-links hidden md:flex">
                <ul className="flex flex-row space-x-5 text-white">
                    <li className="hover:text-[#690101]">
                        <Link to="/">Home</Link>
                    </li>
                    <li className='hover:text-[#690101]'>
                        <Link to="/store">Store</Link>
                    </li>
                    <li className='hover:text-[#690101]'>
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li className='hover:text-[#690101]'>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                </ul>
            </section>
            <section className="md:hidden">
                <img src={menu} alt="" />
            </section>
        </nav>
    )
}

export default NavbarWhite