import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules';
import Bg from "../assets/images/Rectangle 3.png"
import Hero from '../components/Hero'
import left from "../assets/icons/arrow-left-2-duotone.svg"
import right from "../assets/icons/arrow-right-2-duotone.svg"
import icon from "../assets/icons/Vector.svg"
import front from "../assets/images/Polygon 1@2x-1.png"
import back from "../assets/images/Polygon 1@2x.png"
import food1 from "../assets/images/Rectangle 6.png"
import food2 from "../assets/images/Rectangle 7.png"
import food3 from "../assets/images/Rectangle 8.png"
import ProductCard from '../components/ProductCard'

import "../Styles/Home.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Home = () => {
    const foods = [
        { id: 1, name: "CHOCOLATE CAKES", image: food1, price: 15 },
        { id: 2, name: "CHIN CHIN", image: food2, price: 7 },
        { id: 3, name: "FRESHLY BAKED PIES", image: food3, price: 2 }
    ]

 

    return (
        <>
            <Hero />
            <section className="Product h-full space-y-20 relative bg-no-repeat bg-cover bg-center p-10">
                <button className="product-button-prev-custom absolute left-0 top-1/2 w-20 -translate-y-1/2 text-white p-2  z-10">
                    <img className='w-full' src={left} alt="" />
                </button>
                <button className="product-button-next-custom absolute right-0 top-1/2  w-20 -translate-y-1/2  text-white p-2  z-10 ">
                    <img className='w-full' src={right} alt="" />
                </button>
                <h1 className=' text-2xl md:text-6xl text-center py-10 m-0'>Not just a bakery, but <span className='text-[#B10000]'>a family</span></h1>
                <Swiper
                    className='m-0'
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={30}
                    slidesPerView={3}
                    centeredSlides={true}
                    navigation={{
                        nextEl: ".product-button-next-custom",
                        prevEl: ".product-button-prev-custom"
                    }}
                    breakpoints={{
                        350: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    pagination={{
                        clickable: true,
                        el: ".product-pagination-custom"
                    }}
                >
                    {foods.map((food) => (
                        <SwiperSlide key={food.id}>
                            <ProductCard image={food.image} name={food.name} price={food.price} icon={icon} product={food} />
                        </SwiperSlide>
                    ))}

                </Swiper>
                <div className='product-pagination-custom absolute bottom-5 left-0 right-0 z-10 flex justify-center  px-4 py-2 rounded-full'></div>
            </section>
            <section className="About relative h-svh flex flex-row md:justify-between items-center p-5  bg-no-repeat bg-cover ">
                <div className='Aboutimage hidden md:flex justify-center items-center '>
                    <img className='absolute z-10 left-10 top-25 w-[35%]' src={front} alt="" />
                    <img className='absolute top-25 left-40 w-[35%] ' src={back} alt="" />
                </div>
                <div className='Aboutdetail text-white md:text-black md:w-[50%] text-center'>
                    <h2 className='text-3xl md:text-6xl my-5'>About<span className='text-[#FD9D2C] md:text-[#8B4F5E]'> Us</span></h2>
                    <div className=' space-y-5 '>
                        <p className='text-[16px] md:text-2xl font-normal leading-6 tracking-tight'>
                            ABPastries is a family-centred bakery that looks to provide crunchy, tasty and homemade baked goods that make your tastes buds water.
                        </p>
                        <p className='text-[16px] md:text-2xl font-normal leading-6 tracking-tight'>
                            We want to provide a different experience to what it means to be a baker! We want to give you that nostalgic feeling of munching into a homemade cookie -just like Momma made them.
                        </p>

                        <p className='text-[16px] md:text-2xl font-normal leading-6 tracking-tight'>
                            Join the bakery, Join the club, Join the family!
                        </p>
                    </div>
                </div>
            </section >
            <section className='Blurb h- bg-no-repeat flex flex-col justify-center items-center space-y-5 p-10 text-white bg-cover'>
                <div className='blurb-title bg-[#910F3F] hidden md:flex px-15 py-3 rounded-2xl text-5xl'>
                    <h2>Hey There</h2>
                </div>
                <div className='bg-[#910F3F] py-10 px-20 md:text-[20px] text-[14px] text-center leading-5 tracking-wider md:leading-5 md:tracking-tight rounded-2xl'>
                    <div className='blurb-title bg-[#910F3F] md:hidden my-5 text-2xl text-center md:text-5xl'>
                        <h2>Hey There</h2>
                    </div>
                    <p>
                        Welcome to ABPastries, where we rise to the occasion with a sprinkle of sweetness! Our bakery is a dough-lightful destination for all your cravings, serving up the flakiest pastries, the tastiest tarts, and the most enchanting cakes in town. From buttery croissants that'll have you saying "Oh, crumb on!" to custard-filled éclairs that will make you say "Oh, dough-nut even get me started," we've got a delectable treat for every confectionery enthusiast. So whisk your worries away and let us whip up some happiness for you. At ABPastries, we'll always dough the extra mile to make your day a little sweeter!
                    </p>
                </div>
            </section>
        </>
    )
}

export default Home