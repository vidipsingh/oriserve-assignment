import React from 'react'
import { FaHeart } from "react-icons/fa";
import npm from "../../images/npm_logo.png";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
  return (
    // Navbar component
    <div>
      <div class="w-full h-2 bg-gradient-to-r from-orange-500 via-red-600 to-pink-500 flex items-center justify-center">
        </div>
        <div className='flex w-full gap-6 px-8 items-center py-4 font-medium border border-b-gray-300'>
            <FaHeart className='w-4 h-4 hover:text-gray-500' />
            <h1 className='hover:text-gray-400 cursor-pointer'>Pro</h1>
            <h1 className='hover:text-gray-400 cursor-pointer'>Teams</h1>
            <h1 className='hover:text-gray-400 cursor-pointer'>Pricing</h1>
            <h1 className='hover:text-gray-400 cursor-pointer'>Documentation</h1>
        </div>

        <div className='flex items-center justify-center gap-10 px-4 py-4'>
            <img src={npm} alt="" className='w-16 h-10' />

            <div className='flex items-center focus-within:border-yellow-400 h-12 w-8/12 bg-gray-100 font-mono'>
                <IoIosSearch className=' pl-4 w-10 h-10 bg-gray-100 opacity-60' />
                <input type="text" className='bg-gray-100 focus:outline-none text-black w-full pl-5 pr-4' placeholder='Search packages' />
                    <button className='bg-black text-white py-3 px-6 font-bold'>Search</button>
            </div>

            <div className='flex gap-4'>
                <button className='border border-black px-8'>Sign Up</button>
                <button className='p-4'>Sign In</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
