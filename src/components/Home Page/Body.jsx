import React from 'react'
import ball from "../../images/ball.png"

const Body = () => {
  return (
    <div>
        <div className='flex justify-center items-center text-center w-full mt-14 '>
            <img src={ball} alt="" className='w-28 h-28' />
        </div>

        <div className='flex flex-col items-center justify-center w-full mt-4 mb-32'>
            <h1 className='text-center text-black/80 text-4xl font-bold w-[450px] mb-6'>Bring the best of open source to you, your team, and your company</h1>
            <h1 className='text-center w-[500px]'>Relied upon by more than 17 million developers worldwide, npm is committed to making JavaScript development elegant, productive, and safe. The free npm Registry has become the center of JavaScript code sharing, and with more than two million packages, the largest software registry in the world. Our other tools and services take the Registry, and the work you do around it, to the next level.</h1>
        </div>
    </div>
  )
}

export default Body
