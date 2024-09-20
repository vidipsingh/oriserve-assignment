import React from 'react'
import npm_logo from "../../images/npm_logo_2.png";
import github from "../../images/github_logo.png";

const Footer = () => {
  return (
    <>
    <div className='flex justify-around w-full px-6 py-14 border-t-2 mb-8'>
      <div>
        <img src={npm_logo} alt="" className='w-16 h-w-16' />
        <img src={github} alt=""  className='w-16 h-w-16'/>
      </div>

      <div className='w-64 text-lg'>
        <h1 className='font-bold mb-4'>Support</h1>
        <h1 className='mb-4'>Help</h1>
        <h1 className='mb-4'>Advisories</h1>
        <h1 className='mb-4'>Status</h1>
        <h1 className='mb-4'>Contact npm</h1>
      </div>

      <div className='w-64 text-lg'>
        <h1 className='font-bold mb-4'>Company</h1>
        <h1 className='mb-4'>About</h1>
        <h1 className='mb-4'>Blog</h1>
        <h1 className='mb-4'>Press</h1>
      </div>

      <div className=' w-64 text-lg'>
        <h1 className='font-bold mb-4'>Terms & Policies</h1>
        <h1 className='mb-4'>Policies</h1>
        <h1 className='mb-4'>Terms of Use</h1>
        <h1 className='mb-4'>Code of Conduct</h1>
        <h1 className='mb-4'>Privacy</h1>
      </div>
    </div>

    <div class="w-full h-2 bg-gradient-to-r from-orange-500 via-red-600 to-pink-500 flex items-center justify-center">
        </div>
    </>
  )
}

export default Footer
