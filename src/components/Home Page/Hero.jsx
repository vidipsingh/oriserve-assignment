import React from 'react'
import hero_img from "../../images/hero_img.jpg"

const Hero = () => {
  return (
    <div className="relative h-[850px] bg-cover bg-center"style={{backgroundImage: `url(${hero_img})`,}}>
      <div className="absolute z-50 flex flex-col items-center text-center  mt-28  w-full h-full">
            <h1 className="text-8xl font-bold text-white w-2/3 text-center">Build amazing things</h1>
            <h1 className='mt-12 w-1/2 text-lg text-white'>We're GitHub, the company behind the npm Registry and npm CLI. We offer those to the community for free, but our day job is building and selling useful tools for developers like you.</h1>
            <h1 className='mt-12 w-1/3 text-4xl font-bold text-white'>Take your JavaScript development up a notch</h1>
            <h1 className='mt-12 w-[550px]  text-white'>Get started today for free, or step up to npm Pro to enjoy a premium JavaScript development experience, with features like private packages.</h1>

            <div className='mt-10 flex flex-row gap-6'>
                <button className='bg-yellow-400 px-12 font-bold text-lg py-3 rounded-full shadow-lg drop-shadow-sm shadow-black/50'>Sign Up for free</button>
                <button className='text-white rounded-full px-12 font-semibold text-lg py-3  border-white border-2 '>Learn about Pro</button>
            </div>
    </div>

    <div>
        
    </div>
    </div>
  )
}

export default Hero
