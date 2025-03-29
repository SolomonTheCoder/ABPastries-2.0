import React, { useContext } from 'react'
import "../Styles/ProductDetail.css"
import { useLocation } from 'react-router-dom'
import { ShopContext } from '../context/ShopContextProvider'



const ProductDetail = () => {
    const location = useLocation()
    const product = location.state?.product
    const { addToCart, cartItems, removeFromCart } = useContext(ShopContext)

    const cartAmount = cartItems.find(item => item.id === product.id)?.quantity || 0;

    if (!product) {
        return <h1 className="text-center text-red-500 text-2xl">Product not found</h1>;
    }

    return (
        <div className='Product-detail h-full p-20 bg-center bg-no-repeat bg-cover -mt-[56px] flex gap-25'>
            <div className='space-y-3'>
                <div className='w-[455px] h-[440px]'>
                    <img className='w-full h-[440px]' src={product.image} alt="" />
                </div>
                <div className='text-center'>
                    <button className='bg-[#910F3F] text-white py-2 px-15 rounded-3xl' onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            </div>

            <div className='flex flex-col justify-between'>
                <div className='bg-[#910F3F] py-2 px-5 text-white text-4xl rounded-3xl'>
                    <p>{product.name}</p>
                </div>
                <div>
                    <div className='flex justify-between items-center mb-5'>
                        <div>
                            <div><p className='text-[40px]'>Quantity</p></div>
                            <div><p className='text-[46px]'>${product.price.toFixed(2)}</p></div>
                        </div>

                        <div className='flex flex-col gap-3'>
                            <button className='bg-[#910F3F]  text-white py-3 px-10 text-[15px] rounded-3xl'>Small</button>
                            <button className='bg-[#910F3F]  text-white py-3 px-10 text-[15px] rounded-3xl'>Catering</button>
                        </div>
                    </div>
                    <div className='flex flex-row gap-5 '>
                        <button onClick={() => removeFromCart(product.id)} className='bg-[#910F3F] w-8 h-8 text-white text-3xl'>-</button>
                        <div className='text-3xl'>{cartAmount}</div>
                        <button onClick={() => addToCart(product)} className='bg-[#910F3F] w-8 h-8 text-white text-3xl'>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail