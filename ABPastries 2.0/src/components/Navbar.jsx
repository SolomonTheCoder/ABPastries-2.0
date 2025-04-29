import { Link, useLocation } from "react-router-dom"
import logo from "../assets/images/Logo.png"
import menu from "../assets/icons/material-symbols--menu-rounded.svg"
import { useState } from "react"
import bg from "../assets/images/Rectangle 60.png"

const Navbar = () => {
    const location = useLocation()
    let textColor = location.pathname === "/store" ? "text-white" : "text-[#776565]"
    let hoverColor = location.pathname === "/store" ? "text-[#690101]" : "text-black"

    const [openMenu, setOpenMenu] = useState(false)

    const handleOpen = () => {
        setOpenMenu(false)
    }


    return (
        <nav className="flex flex-row justify-between items-center sticky top-0  left-0 right-0 z-10 py-3 px-5">
                <section className="Nav-logo">
                    <img className="w-25" src={logo} alt="" />
                </section>
                <section className="Nav-links hidden md:flex">
                    <ul className={`flex flex-row space-x-5 ${textColor}`}>
                        <li onClick={handleOpen} className="hover:text-black">
                            <Link to="/">Home</Link>
                        </li>
                        <li onClick={handleOpen} className={`hover:${hoverColor}`}>
                            <Link to="/store">Store</Link>
                        </li>
                        <li onClick={handleOpen} className="hover:text-black">
                            <Link to="/cart">Cart</Link>
                        </li>
                        <li onClick={handleOpen} className="hover:text-black">
                            <Link to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </section>
                <section onClick={() => { setOpenMenu(!openMenu) }} className="md:hidden">
                    <img src={menu} alt="" />
                </section>
                {openMenu && (
                    <section className="absolute top-0 right-0 px-10 py-4 h-[735px] md:hidden z-20" style={{backgroundImage:`url(${bg})`}}>
                        <ul className={`flex flex-col space-y-4 ${textColor}`}>
                            <li onClick={handleOpen} className="hover:text-black">
                                <Link to="/">Home</Link>
                            </li>
                            <li onClick={handleOpen} className="hover:text-black">
                                <Link to="/store">Store</Link>
                            </li>
                            <li onClick={handleOpen} className="hover:text-black">
                                <Link to="/cart">Cart</Link>
                            </li>
                            <li onClick={handleOpen} className="hover:text-black">
                                <Link to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </section>
                )}
        </nav>
    )
}

export default Navbar