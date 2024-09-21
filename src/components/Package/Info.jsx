import React from 'react'
import { IoIosPaper } from "react-icons/io";
import { FaFileZipper } from "react-icons/fa6";
import { LuBox } from "react-icons/lu";
import { LuBoxes } from "react-icons/lu";
import { FaTags } from "react-icons/fa";
import yarns from "../../images/yargs-logo.png";
import { FaCopy } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { MdFileDownload } from "react-icons/md";
import collaborator from "../../images/collaborator.png";
import { FaFlag } from "react-icons/fa";


const Info = () => {
  return (
    <div>
      <div className='flex mt-4 gap-4 mx-20 items-center'>
        <h1 className='text-2xl font-semibold'>yargs</h1>
        <div className='border border-blue-500'>
            <h1 className='text-blue-600 font-semibold'>DT</h1>
        </div>
      </div>

      <div className='flex gap-4 mx-20 my-0.5 items-center'>
        <h1>17.7.2</h1>
        <h1 className='pb-6 text-4xl'>.</h1>
        <h1 className='text-green-600'>Public</h1>
        <h1 className='pb-6 text-4xl'>.</h1>
        <h1>Published a year ago</h1>
      </div>


      <div className='flex  items-center mx-20'>
        <div className='flex items-center gap-2 bg-yellow-100 w-1/5 text-center justify-center px-4 py-3 border-b-2  border-b-yellow-400 cursor-pointer'>
            <IoIosPaper className='text-amber-700 text-xl' />
            <h1 className='text-amber-700  font-semibold'>Readme</h1>
        </div>
        <div className='flex items-center gap-2 hover:bg-red-100 w-1/5 text-center justify-center px-4 py-[9.25px] border-b-2  border-b-red-500 cursor-pointer'>
            <FaFileZipper className='text-red-600' />
            <h1 className='text-red-600 font-semibold'>Code</h1>
            <button className='border rounded-full border-green-400 py-0.5 px-3 text-green-400'>Beta</button>
        </div>
        <div className='flex items-center gap-2 hover:bg-pink-200 w-1/5 text-center justify-center px-4 py-[12px] border-b-2  border-b-pink-400 cursor-pointer'>   
            <LuBox  className='text-pink-600 font-semibold'/>
            <h1 className='text-pink-600 font-semibold'>7 Dependencies</h1>
        </div>
        <div className='flex items-center gap-2 hover:bg-purple-100 w-1/5 text-center justify-center px-4 py-[12px] border-b-2  border-b-purple-400 cursor-pointer'>
            <LuBoxes  className='text-purple-800 font-semibold'/>
            <h1 className='text-purple-800 font-semibold'>38,637 Dependents</h1>
        </div>
        <div className='flex items-center gap-2 hover:bg-cyan-100 w-1/5 text-center justify-center px-4 py-[12px] border-b-2  border-b-cyan-400 cursor-pointer'>
            <FaTags className='font-semibold text-cyan-600' />
            <h1 className='font-semibold text-cyan-600'>250 Versions</h1>
        </div>
      </div>


      <div className='flex mx-20 h-full py-4 mb-20'>
        <div className='w-2/3 px-10 '>
            <div className='flex flex-col items-center justify-center border-b-2 pb-4'>
                <img src={yarns} alt="" className='w-80 h-80' />
                <h1 className='text-4xl font-semibold'>Yargs</h1>
            </div>
            <div>
                <h1 className='text-center font-semibold text-xl p-2'>Yargs be a node.js library fer hearties tryin' ter parse optstrings</h1>
            </div>

            <div className='py-2 border-b-2'>
                <h1 className='text-3xl font-semibold'>Description</h1>
            </div>

            <div className='py-2 text-lg'>
                <h1>Yargs helps you build interactive command line tools, by parsing arguments and generating an elegant user interface.</h1>
                <br />
                <h1> It gives you:</h1>
                <br />
                <h1><span className='font-bold text-xl'>.</span> commands and (grouped) options (my-program.js serve --port=5000).</h1>
                <h1><span className='font-bold  text-xl'>.</span> a dynamically generated help menu based on your arguments:</h1>
            </div>

            <div class="space-y-4 p-4 bg-gray-100 rounded-lg">
                <h2 class="">mocha [spec..]</h2>
                <p class="text-gray-700">Run tests with Mocha</p>
                
                <h3 class="">Commands</h3>
                <div class="space-y-2">
                    <p class="flex gap-10 p-2 rounded"><code>mocha inspect [spec..]</code> Run tests with Mocha <span class="italic ml-40 text-gray-600">[default]</span></p>
                    <p class="flex gap-10 p-2 rounded"><code>mocha init &lt;path&gt;</code> create a client-side Mocha setup at <code>&lt;path&gt;</code></p>
                </div>
                
                <h3 class="">Rules & Behavior</h3>
                <ul class="pl-2 space-y-2">
                    <li><code>--allow-uncaught</code> Allow uncaught errors to propagate <span class="text-gray-600">[boolean]</span></li>
                    <li><code>--async-only, -A</code> Require all tests to use a callback (async) or return a Promise <span class="text-gray-600">[boolean]</span></li>
                </ul>
            </div>

            <div className='list-disc p-2'>
                <li>bash-completion shortcuts for commands and options.</li>
                <li>and tons more.</li>
            </div>
        </div>


        <div className='w-1/3'>
            <div>
                <h1 className='text-gray-400 font-semibold'>Install</h1>
                <div className='p-3 flex justify-between mt-2 mb-4 border border-gray-300 rounded-md items-center'>
                    <h1>&#8594; npm i yargs</h1>
                    <FaCopy className='cursor-pointer' />
                </div>

                <div className='border-b-2 py-4'>
                    <h1 className='text-gray-400 font-semibold'>Repository</h1>
                    <div className='flex items-center align-middle gap-1 text-lg '>
                        <FaGitAlt />
                        <a href="https://github.com/yargs/yargs" className='font-semibold items-center'>github.com/yargs/yargs</a>
                    </div>
                </div>

                <div className='border-b-2 py-4'>
                    <h1 className='text-gray-400 font-semibold'>Homepage</h1>
                    <div className='flex items-center align-middle gap-1 text-lg '>
                        <FaLink />
                        <a href="https://yargs.js.org/" className='font-semibold items-center'>yargs.js.org/</a>
                    </div>
                </div>

                <div className='border-b-2 py-4 items-center gap-2'>
                    <div className='flex items-center'>
                        <MdFileDownload className='text-gray-400 font-semibold'/>
                        <h1 className='text-gray-400 font-semibold'>Weekly Downloads</h1>
                    </div>
                    <h1 className='mt-4 font-semibold'>91,136,028</h1>
                </div>

                <div className='flex py-2 border-b-[1px] border-black'>
                    <div className='w-1/2'>
                        <h1 className='text-lg text-gray-400 font-semibold'>Version</h1>
                        <h1 className='text-lg font-semibold'>17.7.2</h1>    
                    </div>
                    <div className='w-1/2'>
                        <h1 className='text-lg text-gray-400 font-semibold'>License</h1>
                        <h1 className='text-lg font-semibold'>MIT</h1>
                    </div>
                </div>


                <div className='flex py-2 border-b-[1px] border-black'>
                    <div className='w-1/2'>
                        <h1 className='text-lg text-gray-400 font-semibold'>Unpacked Size</h1>
                        <h1 className='text-lg font-semibold'>292 kB</h1>    
                    </div>
                    <div className='w-1/2'>
                        <h1 className='text-lg text-gray-400 font-semibold'>Total Files</h1>
                        <h1 className='text-lg font-semibold'>62</h1>
                    </div>
                </div>


                <div className='flex py-2 border-b-[1px] border-black'>
                    <div className='w-1/2'>
                        <h1 className='text-lg text-gray-400 font-semibold'>Issues</h1>
                        <h1 className='text-lg font-semibold'>294</h1>    
                    </div>
                    <div className='w-1/2'>
                        <h1 className='text-lg text-gray-400 font-semibold'>Pull Requests</h1>
                        <h1 className='text-lg font-semibold'>25</h1>
                    </div>
                </div>

                <div className='flex py-2 border-b-[1px] border-black'>
                    <div className='w-1/2'>
                        <h1 className='text-lg text-gray-400 font-semibold'>Last Publish</h1>
                        <h1 className='text-lg font-semibold'>a year ago</h1>    
                    </div>
                </div>


                <div className='flex py-2 border-black'>
                    <div className='w-1/2'>
                        <h1 className='text-lg text-gray-400 font-semibold'>Collaborators</h1>
                        <div className='flex gap-2 py-2'>
                            <img src={collaborator} alt="" className='w-14 h-14' />
                            <img src={yarns} alt="" className='w-14 h-14' />
                        </div>
                    </div>
                </div>

                <div>
                    <button className='w-full bg-green-100 hover:bg-green-200 py-2 rounded-md font-semibold mb-2'>Try on RunKit</button>
                    <button className='w-full bg-red-100 hover:bg-red-200 py-2 rounded-md font-semibold'>
                        <div className='flex justify-center items-center gap-1'>
                            <FaFlag className='text-red-500'/>
                            <h1>Report malware</h1>
                        </div>
                    </button>
                </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Info
