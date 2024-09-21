import React from 'react'
import yarns from "../../images/yargs-logo.png";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div>
        <div className='w-full px-10 py-4 border-b-2'>
            <h1 className='text-xl font-semibold'>19 packages found</h1>
        </div>

        <h1 className='font-semibold mx-10 py-1'>Sort Packages</h1>

        <div className='ml-10 flex'>
            <div className='w-1/6 list-disc mx-3'>
                <li className='pb-2 border-b-[1.5px] text-gray-600 font-semibold hover:text-gray-950 cursor-pointer border-gray-200 p-2'>Optimal</li>
                <li className='pb-2 border-b-[1.5px] text-gray-600 font-semibold hover:text-gray-950 cursor-pointer border-cyan-200 p-2'>Popularity</li>
                <li className='pb-2 border-b-[1.5px] text-gray-600 font-semibold hover:text-gray-950 cursor-pointer border-purple-200 p-2'>Quality</li>
                <li className='pb-2 border-b-[1.5px] text-gray-600 font-semibold hover:text-gray-950 cursor-pointer border-red-200 p-2'>Maintenance</li>
            </div>
            <div className='w-5/6 mr-10 mb-24 '>
                <div  className='border-b-[1.5px] mb-3'>
                 <Link to="/package/yargs"><h1 className='font-semibold text-xl hover:underline cursor-pointer'>yargs</h1></Link>
                    <h1 className='my-2 text-gray-600'>Yargs the modern, pirate-themed, successor to optimist.</h1>

                    <div className='flex gap-2 my-3'>
                        <div className='bg-gray-100 text-black px-3 py-1 rounded-md cursor-pointer hover:bg-gray-200'>argument</div>
                        <div className='bg-gray-100 text-black px-3 py-1 rounded-md cursor-pointer hover:bg-gray-200'>args</div>
                        <div className='bg-gray-100 text-black px-3 py-1 rounded-md cursor-pointer hover:bg-gray-200'>option</div>
                        <div className='bg-gray-100 text-black px-3 py-1 rounded-md cursor-pointer hover:bg-gray-200'>parser</div>
                        <div className='bg-gray-100 text-black px-3 py-1 rounded-md cursor-pointer hover:bg-gray-200'>parsing</div>
                        <div className='bg-gray-100 text-black px-3 py-1 rounded-md cursor-pointer hover:bg-gray-200'>cli</div>
                        <div className='bg-gray-100 text-black px-3 py-1 rounded-md cursor-pointer hover:bg-gray-200'>command</div>
                    </div>

                    <div className='my-2.5 flex'>
                        <img src={yarns} alt="" className='w-6 h-6' />
                        <h1 className='text-gray-600'><span className='font-semibold mx-1 hover:text-red-600 cursor-pointer text-black'>oss-bot</span>published 17.7.2 • a year ago</h1>
                    </div>
                </div>


                <div className='border-b-[1.5px] mb-3'>
                <Link to="/package/yargs"><h1 className='font-semibold text-xl hover:underline cursor-pointer'>yargs</h1></Link>
                    <h1 className='my-2 text-gray-600'>Yargs the modern, pirate-themed, successor to optimist.</h1>

                    <div className='flex gap-2 my-3'>
                        <div className='bg-gray-100 text-black px-3 py-1 rounded-md cursor-pointer hover:bg-gray-200'>argument</div>
                        <div className='bg-gray-100 text-black px-3 py-1 rounded-md cursor-pointer hover:bg-gray-200'>args</div>
                        <div className='bg-gray-100 text-black px-3 py-1 rounded-md cursor-pointer hover:bg-gray-200'>option</div>
                        <div className='bg-gray-100 text-black px-3 py-1 rounded-md cursor-pointer hover:bg-gray-200'>parser</div>
                        <div className='bg-gray-100 text-black px-3 py-1 rounded-md cursor-pointer hover:bg-gray-200'>parsing</div>
                        <div className='bg-gray-100 text-black px-3 py-1 rounded-md cursor-pointer hover:bg-gray-200'>cli</div>
                        <div className='bg-gray-100 text-black px-3 py-1 rounded-md cursor-pointer hover:bg-gray-200'>command</div>
                    </div>

                    <div className='my-2.5 flex'>
                        <img src={yarns} alt="" className='w-6 h-6' />
                        <h1 className='text-gray-600'><span className='font-semibold hover:text-red-600 cursor-pointer mx-1 text-black'>oss-bot</span>published 17.7.2 • a year ago</h1>
                    </div>
                </div>


                <div  className='border-b-[1.5px] mb-3'>
                <Link to="/package/yargs"><h1 className='font-semibold text-xl hover:underline cursor-pointer'>yargs</h1></Link>
                    <h1 className='my-2 text-gray-600'>Yargs the modern, pirate-themed, successor to optimist.</h1>

                    <div className='flex gap-2 my-3'>
                        <div className='bg-gray-100 text-black px-3 py-1 rounded-md cursor-pointer hover:bg-gray-200'>argument</div>
                        <div className='bg-gray-100 text-black px-3 py-1 rounded-md cursor-pointer hover:bg-gray-200'>args</div>
                        <div className='bg-gray-100 text-black px-3 py-1 rounded-md cursor-pointer hover:bg-gray-200'>option</div>
                        <div className='bg-gray-100 text-black px-3 py-1 rounded-md cursor-pointer hover:bg-gray-200'>parser</div>
                        <div className='bg-gray-100 text-black px-3 py-1 rounded-md cursor-pointer hover:bg-gray-200'>parsing</div>
                        <div className='bg-gray-100 text-black px-3 py-1 rounded-md cursor-pointer hover:bg-gray-200'>cli</div>
                        <div className='bg-gray-100 text-black px-3 py-1 rounded-md cursor-pointer hover:bg-gray-200'>command</div>
                    </div>

                    <div className='my-2.5 flex'>
                        <img src={yarns} alt="" className='w-6 h-6' />
                        <h1 className='text-gray-600'><span className='font-semibold mx-1 hover:text-red-600 cursor-pointer text-black'>oss-bot</span>published 17.7.2 • a year ago</h1>
                    </div>
                </div>


                <div  className='border-b-[1.5px] mb-3'>
                <Link to="/package/yargs"><h1 className='font-semibold text-xl hover:underline cursor-pointer'>yargs</h1></Link>
                    <h1 className='my-2 text-gray-600'>Yargs the modern, pirate-themed, successor to optimist.</h1>

                    <div className='flex gap-2 my-3'>
                        <div className='bg-gray-100 text-black px-3 py-1 rounded-md cursor-pointer hover:bg-gray-200'>argument</div>
                        <div className='bg-gray-100 text-black px-3 py-1 rounded-md cursor-pointer hover:bg-gray-200'>args</div>
                        <div className='bg-gray-100 text-black px-3 py-1 rounded-md cursor-pointer hover:bg-gray-200'>option</div>
                        <div className='bg-gray-100 text-black px-3 py-1 rounded-md cursor-pointer hover:bg-gray-200'>parser</div>
                        <div className='bg-gray-100 text-black px-3 py-1 rounded-md cursor-pointer hover:bg-gray-200'>parsing</div>
                        <div className='bg-gray-100 text-black px-3 py-1 rounded-md cursor-pointer hover:bg-gray-200'>cli</div>
                        <div className='bg-gray-100 text-black px-3 py-1 rounded-md cursor-pointer hover:bg-gray-200'>command</div>
                    </div>

                    <div className='my-2.5 flex'>
                        <img src={yarns} alt="" className='w-6 h-6' />
                        <h1 className='text-gray-600'><span className='font-semibold mx-1 hover:text-red-600 cursor-pointer text-black'>oss-bot</span>published 17.7.2 • a year ago</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
