import { Link } from "react-router-dom"
import "../Styles/Navbar.css"
import logo from "../assets/images/Logo.png"
import menu from "../assets/icons/material-symbols--menu-rounded.svg"

const Navbar = () => {
    return (
            <nav className="flex flex-row justify-around items-center p-4 sticky top-0 left-0 right-0 z-10 ">
                <section className="Nav-logo">
                    <img className="w-25" src={logo} alt="" />
                </section>
                <section className="Nav-links hidden md:flex">
                    <ul className="flex flex-row space-x-5 text-[#776565]  ">
                        <li className="">
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/store">Store</Link>
                        </li>
                        <li>
                            <Link to="/cart">Cart</Link>
                        </li>
                        <li>
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

export default Navbar