import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import profile from '../assets/icons/ix--user-profile-filled.svg'
import logo from "../assets/images/Logo 3.png"
import "../Styles/Login.css"



const LoginPage = () => {
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleClick = () => {
        if (password === "admin12345") {
            navigate("/adminpage")
        }
    }


    return (
        <div className='bg-[#910F3F] h-svh flex justify-center items-center '>
            <div className='Login w-[759px] h-[590px] flex flex-col justify-center items-center bg-no-repeat bg-cover gap-10'>
                <div className='flex flex-col items-center'>
                    <div className='w-50'><img src={profile} alt="" /></div>
                    <div className='flex flex-row items-center'> <img src={logo} alt="" /><h1 className='text-4xl'>Admin</h1></div>
                </div>
                <div className='flex flex-col items-center'>
                    <label className='text-2xl'>Password</label>
                    <input className='bg-[#D9D9D9] shadow-inner shadow-[#00000017] rounded-2xl w-[311px] h-[39px] px-4 text-2xl' type="password" name="password" id="" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <button className='bg-[#910F3F] px-10 py-2 text-white rounded-2xl text-2xl' onClick={handleClick}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage