import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


const ProtectedRoute = ({ isPassword }) => {
    return (
        <>
            {
                isPassword ? <Outlet /> : <Navigate to="/login" />
            }
        </>
    )
}

export default ProtectedRoute