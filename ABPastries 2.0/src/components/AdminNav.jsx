import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import list from "../assets/icons/Layer 2.png";


const AdminNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex absolute z-10">
            <div onClick={() => setIsOpen(!isOpen)} className={`bg-[#910F3F] space-y-20 text-white h-screen rounded-br-3xl rounded-tr-3xl transition-all duration-300 ${!isOpen ? "w-[50px]" : "w-[350px]"}`}>
                <div className={`flex justify-center items-center gap-3 pt-9 transition-opacity ${!isOpen ? "opacity-0 hidden" : "opacity-100"}`}>
                    <img src={list} alt="Icon" />
                    <h1 className="text-5xl">Welcome</h1>
                </div>

                <ul className={`text-4xl pl-10 space-y-6 transition-opacity ${!isOpen ? "opacity-0 hidden" : "opacity-100"}`}>
                    <li><Link to="/adminpage">Home</Link></li>
                    <li><Link to="/adminstore">Store</Link></li>
                    <li><Link to="/adminsetting">Settings</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default AdminNav;
