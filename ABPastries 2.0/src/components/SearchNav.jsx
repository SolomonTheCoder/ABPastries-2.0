import React from 'react'
import search from "../assets/icons/weui--search-outlined.svg"
import profile from "../assets/icons/ix--user-profile-filled.svg"

const SearchNav = () => {
    return (
        <div>
            <section className='flex flex-row justify-between'>
                <div className='relative '>
                    <input className='bg-[#EDEDED] py-3 px-10 shadow-inner shadow-[#0000001A] rounded-2xl' type="search" name="" id="" placeholder='Search' />
                    <div className='absolute top-3 bottom-0 right-4'>
                        <img src={search} alt="" />
                    </div>
                </div>
                <div className='w-10'>
                    <img src={profile} alt="" />
                </div>
            </section>
        </div>
    )
}

export default SearchNav