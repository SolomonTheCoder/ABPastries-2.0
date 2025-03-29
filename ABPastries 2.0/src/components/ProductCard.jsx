import React from 'react'
import { useNavigate } from 'react-router-dom'




const ProductCard = ({ image, name, price, icon, product }) => {
    const navigate = useNavigate()

    const handleClick = () => {
        if (product) {
            navigate(`/product/${product.id}`, { state: { product } });
        } else {
            console.error("Product data is missing.");
        }
    }

    return (
        <div className='flex flex-col justify-center items-center space-y-5 relative'>
            <div className=''>
                <img className='' src={image} alt="" />
            </div>
            <div className=' text-2xl font-bold '>
                <p >{name}</p>
            </div>
            <div className=''>
                <button onClick={handleClick} className='flex flex-row gap-3 bg-[#910F3F] text-[20px] text-white px-5 py-2 rounded-2xl'><img src={icon} alt="" />Starting price at ${price}</button>
            </div>
        </div>
    )
}

export default ProductCard