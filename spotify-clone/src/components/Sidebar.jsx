import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

  const navigate = useNavigate()

  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
      <div className='bg-darkgray h-[15%] rounded flex flex-col justify-around'>
        <div onClick={()=>navigate('/')} className='flex items-center gap-3 pl-8 cursor-pointer'>
            <img src={assets.home_icon} alt=""  className='w-6'/>
            <p className='font-bold'>Home</p>
        </div>
        <div className='flex items-center gap-3 pl-8 cursor-pointer'>
            <img src={assets.search_icon} alt=""  className='w-6'/>
            <p className='font-bold'>Search</p>
        </div>
      </div>
      <div className='bg-darkgray h-[85%] rounded '>
        <div className='p-4 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
                <img src={assets.stack_icon} alt="" className='w-8' />
                <p className='font-semibold'>Your Library</p>
            </div>
            <div className='flex items-center gap-3'>
                <img src={assets.arrow_icon} alt="" className='w-5' />
                <img src={assets.plus_icon} alt="" className='w-5' />
            </div>
        </div>
        <div className='p-4 bg-charcoalgray m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 '>
            <h1>Create Your First Playlist</h1>
            <p className='font-light text-sm'>it's easy we will help you</p>
            <button className='px-4 py-1.5 mt-2 text-sm bg-white text-black rounded-full'>Create Playlist</button>
        </div>
        <div className='p-4 bg-charcoalgray m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 '>
            <h1>Let's findsome podcast to follow</h1>
            <p className='font-light text-sm'>well keep you update on new episodes</p>
            <button className='px-4 py-1.5 mt-2 text-sm bg-white text-black rounded-full'>Browse podcast</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
