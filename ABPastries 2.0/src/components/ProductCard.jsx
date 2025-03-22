import React from 'react'

const ProductCard = ({ image, name, price, icon }) => {
    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <div>
                    <img src={image} alt="" />
                </div>
                <div className='text-2xl font-bold'>
                    <p>{name}</p>
                </div>
                <div className=' my-3'>
                    <button className='flex flex-row gap-3 bg-[#910F3F] text-[20px] text-white px-5 py-2 rounded-2xl'><img src={icon} alt="" />Starting price at ${price}</button>
                </div>
            </div>
        </>
    )
}

export default ProductCard