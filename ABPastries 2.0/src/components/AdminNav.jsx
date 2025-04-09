import React from 'react';
import { Link } from 'react-router-dom';
import list from "../assets/icons/Layer 2.png";


const AdminNav = () => {
    // const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className='bg-[#910F3F] space-y-50 h-[1165px] text-white rounded-br-3xl rounded-tr-3xl p-10' >
                <div className='flex justify-center items-center gap-3 pt-9'>
                    <img src={list} alt="Icon" />
                    <h1 className="text-5xl">Welcome</h1>
                </div>

                <ul className="flex flex-col text-4xl pl-10 space-y-15 ">
                    <li><Link to="/adminpage">Home</Link></li>
                    <li><Link to="/adminstore">Store</Link></li>
                    <li><Link to="/adminsetting">Settings</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default AdminNav;
