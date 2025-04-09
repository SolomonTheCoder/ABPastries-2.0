import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import AdminNav from '../components/AdminNav'
import Footer from '../components/Footer'
import bg from "../assets/images/back 2.jpeg"
import SearchNav from '../components/SearchNav'



const ProtectedRoute = () => {
    const location = useLocation()
    const isHome = location.pathname === "/adminpage"

    return (
        <>
            <div className='flex flex-row gap-5' style={{
                backgroundImage: !isHome ? `url(${bg})` : "",
                backgroundSize: 'cover',
            }}>
                <div className='pb-10'>
                    <AdminNav />
                </div>
                <div className='w-full p-5'>
                    <SearchNav />
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProtectedRoute