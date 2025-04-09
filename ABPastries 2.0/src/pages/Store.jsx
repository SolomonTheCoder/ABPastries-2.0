import React from 'react'
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import CakeImg from "../assets/images/cakev 1.png"
import cart from "../assets/icons/Cart.svg"
import Pie1 from "../assets/images/Rectangle 12.png"
import Pie2 from "../assets/images/Rectangle 13.png"
import Pie3 from "../assets/images/Rectangle 14.png"
import Pie4 from "../assets/images/Rectangle 15.png"
import Cake1 from "../assets/images/Rectangle 16.png"
import Cake2 from "../assets/images/Rectangle 17.png"
import Cake3 from "../assets/images/Rectangle 18.png"
import Cake4 from "../assets/images/Rectangle 19.png"
import Chip1 from "../assets/images/Rectangle 20.png"
import Chip2 from "../assets/images/Rectangle 21.png"
import Roll1 from "../assets/images/Rectangle 22.png"
import Roll2 from "../assets/images/Rectangle 23.png"
import leftArrow from "../assets/icons/cuida--arrow-left-outline.svg"
import rightArrow from "../assets/icons/cuida--arrow-right-outline.svg"
import StoreHero from '../components/StoreHero'
import "../Styles/Store.css"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import StoreProductCard from '../components/StoreProductCard';

const Store = () => {
  const Pies = [{ id: "pie-1", name: "FISH PIES", image: Pie1, price: 2.00 },
  { id: "pie-2", name: "MEAT PIES", image: Pie2, price: 2.00 },
  { id: "pie-3", name: "VEGETABLE PIES", image: Pie3, price: 2.00 },
  { id: "pie-4", name: "SAUSAGE ROLLS", image: Pie4, price: 1.00 }
  ]

  const Cakes = [{ id: "cake-1", name: "CHOCOLATE CAKE", image: Cake1, price: 15.00 },
  { id: "cake-2", name: "RED VELVET CAKE", image: Cake2, price: 15.00 },
  { id: "cake-3", name: "STRAWBERRY CAKE", image: Cake3, price: 15.00 },
  { id: "cake-4", name: "DONUTS (BAKED OR FRIED)", image: Cake4, price: 25.00 }
  ]

  const Chips = [
    { id: "chip-1", name: "PLAIN CHIPS", image: Chip1, price: 15.00 },
    { id: "chip-2", name: "CHIPS WITH PEANUTS", image: Chip2, price: 15.00 },
    { id: "chip-3", name: "CHIPS WITH PEANUTS", image: Chip2, price: 15.00 },
    { id: "chip-4", name: "CHIPS WITH PEANUTS", image: Chip2, price: 15.00 },
    { id: "chip-5", name: "CHIPS WITH PEANUTS", image: Chip2, price: 15.00 }
  ]

  const Rolls = [
    { id: "roll-1", name: "BEEF SPRINGROLLS", image: Roll1, price: 15.00 },
    { id: "roll-2", name: "VEGETABLE SPRINGROLLS", image: Roll2, price: 15.00 },
  ]

  return (
    <>
      <StoreHero />
      <section>
        <div className='Pies h-full p-10 relative'>
          <button className="pie-button-prev-custom absolute left-5 rounded-2xl top-1/2 w-15 -translate-y-1/2 bg-[#910F3FC2] p-2 z-10">
            <img className='w-full' src={leftArrow} alt="" />
          </button>
          <button className="pie-button-next-custom absolute right-5 rounded-2xl top-1/2  w-15 -translate-y-1/2 bg-[#910F3FC2] p-2 z-10 ">
            <img className='w-full' src={rightArrow} alt="" />
          </button>
          <div className='text-center'>
            <h1 className='text-6xl text-[#B75858]'>PIES</h1>
            <p className='leading-10 tracking-tight'> Choose from a wide and delicious variety of
              pies that put make your tastebuds melt like butter</p>
          </div>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={0}
            slidesPerView={5}
            // loop={true}
            navigation={{
              nextEl: ".pie-button-next-custom",
              prevEl: ".pie-button-prev-custom"
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 0,
              },
            }}
            centeredSlides={true}
            pagination={{ clickable: true, el: ".product-pagination-custom" }}
            scrollbar={{ draggable: true }}
          >
            {Pies.map((pie) => (
              <SwiperSlide key={pie.id}>
                <StoreProductCard image={pie.image} name={pie.name} price={pie.price} icon={cart} product={pie} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='product-pagination-custom absolute bottom-5 left-0 right-0 z-10 flex justify-center  px-4 py-2 rounded-full'></div>
        </div>
        <div className='Cakes h-full p-10 relative'>
          <button className="cake-button-prev-custom absolute left-5 rounded-2xl top-1/2 w-15 -translate-y-1/2 bg-[#910F3FC2] p-2 z-10">
            <img className='w-full' src={leftArrow} alt="" />
          </button>
          <button className="cake-button-next-custom absolute right-5 rounded-2xl top-1/2  w-15 -translate-y-1/2 bg-[#910F3FC2] p-2 z-10 ">
            <img className='w-full' src={rightArrow} alt="" />
          </button>
          <div className='text-center'>
            <h1 className='text-6xl text-[#B75858]  flex justify-center items-center'>C<img src={CakeImg} alt="" />KES AND DONUTS</h1>
            <p className='leading-10 tracking-tight'>Unlock tasty treats that are out of this world so
              much so that they sweep you off your feet. </p>
          </div>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={0}
            slidesPerView={3}
            navigation={{
              nextEl: ".cake-button-next-custom",
              prevEl: ".cake-button-prev-custom"
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
                slidesPerView: 5,
                spaceBetween: 0,
              },
            }}
            centeredSlides={true}
            pagination={{
              clickable: true,
              el: ".cake-pagination-custom"
            }}
            scrollbar={{ draggable: true }}
          >
            {Cakes.map((cake) => (
              <SwiperSlide key={cake.id}>
                <StoreProductCard image={cake.image} name={cake.name} price={cake.price} icon={cart} product={cake} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='cake-pagination-custom absolute bottom-5 left-0 right-0 z-10 flex justify-center  px-4 py-2 rounded-full'></div>
        </div>
        <div className='h-full flex flex-col md:flex-row'>
          <div className='Roll relative w-[100%] md:w-[50%] p-10'>
            <button className="roll-button-prev-custom absolute left-5 rounded-2xl top-1/2 w-15 -translate-y-1/2 bg-[#910F3FC2] p-2 z-10">
              <img className='w-full' src={leftArrow} alt="" />
            </button>
            <button className="roll-button-next-custom absolute right-5 rounded-2xl top-1/2  w-15 -translate-y-1/2 bg-[#910F3FC2] p-2 z-10 ">
              <img className='w-full' src={rightArrow} alt="" />
            </button>
            <div className='text-center'>
              <h1 className='text-6xl text-[#B75858]'>SPRINGROLLS</h1>
              <p className='leading-10 tracking-tight'> The freshness of spring in roll form!</p>
            </div>
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={10}
              slidesPerView={2}
              navigation={{
                nextEl: ".roll-button-next-custom",
                prevEl: ".roll-button-prev-custom"
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
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
              }}
              centeredSlides={true}
              pagination={{
                clickable: true,
                el: ".roll-pagination-custom"
              }}
              scrollbar={{ draggable: true }}
            >
              {Rolls.map((roll) => (
                <SwiperSlide key={roll.id}>
                  <StoreProductCard image={roll.image} name={roll.name} price={roll.price} icon={cart} product={roll} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className='roll-pagination-custom absolute bottom-5 left-0 right-0 z-10 flex justify-center  px-4 py-2 rounded-full'></div>
          </div>
          <div className='Chip relative w-[100%] md:w-[50%] p-10'>
            <button className="chip-button-prev-custom absolute left-5 rounded-2xl top-1/2 w-15 -translate-y-1/2 bg-[#910F3FC2] p-2 z-10">
              <img className='w-full' src={leftArrow} alt="" />
            </button>
            <button className="chip-button-next-custom absolute right-5 rounded-2xl top-1/2  w-15 -translate-y-1/2 bg-[#910F3FC2] p-2 z-10 ">
              <img className='w-full' src={rightArrow} alt="" />
            </button>
            <div className='text-center'>
              <h1 className='text-6xl text-[#B75858]'>CHIPS</h1>
              <p className='leading-10 tracking-tight'>Munch your way into crunchy town!</p>
            </div>
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={10}
              slidesPerView={4}
              loop={true}
              navigation={{
                nextEl: ".chip-button-next-custom",
                prevEl: ".chip-button-prev-custom"
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
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
              }}
              // centeredSlides={true}
              pagination={{
                clickable: true,
                el: ".chip-pagination-custom"
              }}
              scrollbar={{ draggable: true }}
            >
              {Chips.map((chip) => (
                <SwiperSlide key={chip.id}>
                  <StoreProductCard image={chip.image} name={chip.name} price={chip.price} icon={cart} product={chip} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className='chip-pagination-custom absolute bottom-5 left-0 right-0 z-10 flex justify-center  px-4 py-2 rounded-full'></div>
          </div>
        </div>
      </section>
      <section className='StoreBlurb h-full p-20 text-center'>
        <div className='text-5xl md:text-8xl leading-22 md:px-50'>
          <h1>USE CODE <span className='text-[#C32F2F]'>#BELLYFULL</span> FOR A 15% DISCOUNT</h1>
        </div>
      </section>
    </>
  )
}

export default Store