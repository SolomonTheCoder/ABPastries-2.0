import React from 'react'
import "../Styles/StoreHero.css"

const StoreHero = () => {
    return (
        <>
            <section className='StoreHero h-svh bg-cover bg-center text-white text-center font-bold flex flex-col justify-center items-center leading-40 -mt-[56px]'>
                <div>
                    <h1 className='text-7xl md:text-[190px]'>WELCOME</h1>
                <div className='flex justify-between tracking-widest text-3xl md:text-8xl font-light '><h1>TO</h1> <h1>THE</h1> <h1>STORE</h1></div>
                </div>
                
            </section>
        </>
    )
}

export default StoreHero