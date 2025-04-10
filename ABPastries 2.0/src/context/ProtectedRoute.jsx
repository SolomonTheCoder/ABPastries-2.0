import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'



const ProtectedRoute = () => {
    const isAdmin = localStorage.getItem("admin") === "true"
    const navigate = useNavigate()

    useEffect(() => {
        if (!isAdmin) {
            navigate("/login")
        }
    }, [isAdmin, navigate])

    return isAdmin ? <Outlet /> : null
}

export default ProtectedRoute