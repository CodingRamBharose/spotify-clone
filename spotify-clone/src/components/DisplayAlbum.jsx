import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'
import { useState } from 'react'
import { useEffect } from 'react'

const DisplayAlbum = ({album}) => {
    
    const {id} = useParams()
    const [albumData, setAlbumData] = useState("")
    console.log(albumData)

    const {playwithtId, songsData, albumsData} = useContext(PlayerContext)

    useEffect(()=>{
      albumsData.map((item)=>{
        if(item._id == id){
          setAlbumData(item)
        }
      })
    },[])


  return albumData ? (
    <>
      <Navbar/>
      <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
        <img className='h-44 rounded' src={albumData.image} alt="" />
        <div className='flex flex-col gap-3'>
            <p className='text-sm'>Playlist</p>
            <h1 className='text-5xl md:text-7xl font-bold'>{albumData.name}</h1>
            <p className='text-sm'>{albumData.desc}</p>
            <div className='flex items-center justify-center gap-1'>
                <img className='h-4' src={assets.spotify_logo} alt="" />
                <b>Spotify&bull;</b>
                <p>1,323,154 likes</p>
                <b>&bull;50 songs,</b>
                <p>about 2 hr 30 min</p>
            </div>
        </div>
      </div>
      <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
        <p><b className='mr-4'>#</b>Title</p>
        <p>Album</p>
        <p className='hiden sm:block'>Date Added</p>
        <img className='w-4 m-auto' src={assets.clock_icon} alt="" />
      </div>
      <hr />
      {songsData.filter((item)=>item.album == album.name).map((item,index)=>(
        <div onClick={()=>playwithtId(item._id)}  key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer rounded'>
            <p className='text-white'> 
                <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
                <img className='inline w-10 mr-5' src={item.image} alt="" />
                {item.name}
            </p>
            <p className='text-sm'>{albumData.name}</p>
            <p className='text-sm hidden sm:block'>5 days ago</p>
            <p className='text-sm text-center'>{item.duration}</p>
        </div>
      ))}
    </>
  ) : null
}

export default DisplayAlbum
