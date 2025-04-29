import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y, EffectFade } from 'swiper/modules';
import left from "../assets/icons/arrow-left-2-duotone.svg"
import right from "../assets/icons/arrow-right-2-duotone.svg"

import "../Styles/Hero.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Hero = () => {
    return (
        <>
            <div className="relative h-screen -mt-[56px]">
                <Swiper
                    modules={[Navigation, Pagination, A11y, EffectFade]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={{
                        nextEl: ".swiper-button-next-custom",
                        prevEl: ".swiper-button-prev-custom"
                    }}
                    loop={true}
                    pagination={{ clickable: true, el: ".pagination-custom" }}
                    scrollbar={{ draggable: true }}
                    effect="fade"
                >
                    <SwiperSlide>
                        <section className=' flex flex-col justify-center items-start h-screen bg-no-repeat bg-cover bg-center Slider1'>
                            <button className="swiper-button-prev-custom absolute left-0 top-1/2 w-20 -translate-y-1/2 text-white p-2  z-20">
                                <img className='w-full' src={left} alt="" />
                            </button>
                            <div className="text-white text-6xl pl-30  md:text-black md:text-8xl">
                                <p>YOUR</p>
                                <p>BAKED</p>
                                <p className='text-amber-400 sm:text-[#984040]'>GOODIES</p>
                                <p>ARE HERE</p>
                            </div>
                            <div className='pl-30 SliderBtn'>
                                <button className='bg-[#910F3F] px-10 py-2 text-white rounded-4xl text-2xl'>ORDER NOW</button>
                            </div>
                        </section>
                    </SwiperSlide>

                    <SwiperSlide>
                        <section className='flex flex-col justify-center items-start h-screen bg-no-repeat bg-cover bg-center Slider2'>
                            <button className="swiper-button-next-custom absolute right-0 top-1/2 w-20 -translate-y-1/2  text-white p-2  z-20 ">
                                <img className='w-full' src={right} alt="" />
                            </button>
                            <div className='text-white text-6xl pl-30 md:text-black md:text-8xl  '>
                                <p>YOUR</p>
                                <p className='text-[#108506]'>LOCAL</p>
                                <p>ORDERS</p>
                            </div>
                            <div className='pl-30 SliderBtn'>
                                <button type="button" className='bg-[#910F3F] px-10 py-2 text-white rounded-4xl text-2xl'>ORDER NOW</button>
                            </div>
                        </section>
                    </SwiperSlide>
                </Swiper>
                <div className='pagination-custom absolute bottom-0 left-0 right-0 z-20 flex justify-center  px-4 py-2 rounded-full'></div>
            </div>
        </>
    )
}

export default Hero