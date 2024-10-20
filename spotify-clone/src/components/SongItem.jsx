import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const SongItem = ({image,name,desc,id}) => {
  
  const {playwithtId} = useContext(PlayerContext)


  return (
    <div onClick={()=>playwithtId(id)} className='min-w-24 p-2 px-3 rounded cursor-pointer hover:bg-lightgray'>
        <img className='rounded' src={image} alt="" />
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-slate-200 text-sm'>{desc.slice(0,12)+"..."}</p>
    </div>
  )
}

export default SongItem
