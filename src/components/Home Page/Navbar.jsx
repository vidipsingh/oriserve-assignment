import React, { useEffect, useRef, useState } from 'react'
import { FaHeart } from "react-icons/fa";
import npm from "../../images/npm_logo.png";
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleInputClick = () => {
    setShowDropdown(true);  // Show dropdown when input is clicked
  };

  const handleDropdownClick = () => {
    setShowDropdown(false); // Hide dropdown when clicking on the link
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false); // Hide dropdown
    }
  };

  useEffect(() => {
    // Add a mouse event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  return (
    // Navbar component
    <div>
      <div class="w-full h-2 z-20 bg-gradient-to-r from-orange-500 via-red-600 to-pink-500 flex items-center justify-center">
        </div>
        <div className='flex w-full gap-6 px-8 items-center py-4 font-medium border border-b-gray-300'>
            <FaHeart className='w-4 h-4 hover:text-gray-500' />
            <h1 className='hover:text-gray-400 cursor-pointer'>Pro</h1>
            <h1 className='hover:text-gray-400 cursor-pointer'>Teams</h1>
            <h1 className='hover:text-gray-400 cursor-pointer'>Pricing</h1>
            <h1 className='hover:text-gray-400 cursor-pointer'>Documentation</h1>
        </div>

        <div className='flex items-center justify-center gap-10 px-4 py-4'>
            <Link to="/" > <img src={npm} alt="" className='w-16 h-10' /></Link>

            <div className='flex items-center focus-within:border-yellow-400 h-12 w-8/12 bg-gray-100 font-mono'>
                <IoIosSearch className=' pl-4 w-10 h-10 bg-gray-100 opacity-60' />
                <input type="text" className='bg-gray-100 focus:outline-none text-black w-full pl-5 pr-4' placeholder='Search packages'  onClick={() => setShowDropdown(true)}  />
                    <button className='bg-black text-white py-3 px-6 font-bold'>Search</button>
            </div>

            <div className='flex gap-4'>
                <button className='border border-black px-8'>Sign Up</button>
                <button className='p-4'>Sign In</button>
            </div>
        </div>

        {showDropdown && (
        <Link to="/package" onClick={() => setShowDropdown(false)}>
          <div className='h-16 absolute z-50 w-7/12 top-[132px] bg-white flex ml-40 shadow-md items-center hover:bg-gray-100 cursor-pointer'  ref={dropdownRef}>
            <div className='h-16 w-full bg-white hover:bg-gray-100 cursor-pointer'>
              <h1 className='font-semibold text-lg px-2'>yargs</h1>
              <div className='flex justify-between'>
                <h1 className='px-2'>yargs the modern, pirate-themed, successor to optimist.</h1>
                <h1 className='px-2'>17.7.2</h1>
              </div>
            </div>
          </div>
        </Link>
      )}
    </div>
  )
}

export default Navbar
