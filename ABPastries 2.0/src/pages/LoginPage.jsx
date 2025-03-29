import React from 'react'

const LoginPage = ({userData,setUserData}) => {
    return (
        <>
            <h1>Login Page</h1>
            <input className='bg-amber-300' type="password" name="password" id="" value={userData} onChange={(e)=> setUserData(e.target.value)} />
        </>
    )
}

export default LoginPage