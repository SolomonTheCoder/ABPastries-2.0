import React from 'react'
import { useNavigate } from 'react-router-dom'


const StoreProductCard = ({ image, name, price, icon, product }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        if (product) {
            navigate(`/product/${product.id}`, { state: { product } });
        } else {
            console.error("Product data is missing.");
        }
    }


    return (
        <div className='flex flex-col justify-center items-center relative'>
            <div className='w-[258px] h-[261px] md:w-full md:h-full'>
                <img className=' w-full h-[261px] md:h-full' src={image} alt="" />
            </div>
            <div className='-mt-[100px] flex flex-col justify-center items-center gap-5'>
                <div className='text-[24px] md:text-[15px] font-bold md:bg-[#D9D9D9] bg-none size-[165px] rounded-full grid place-content-center -z-10'>
                    <p className='text-center mt-20'>{name}</p>
                </div>
                <div className=''>
                    <button onClick={handleClick} className='flex flex-row gap-3 bg-[#910F3F] text-[20px] text-white px-5 py-2 rounded-2xl'><img src={icon} alt="" />Starting price at ${price}</button>
                </div>
            </div>
        </div>

    )
}

export default StoreProductCard