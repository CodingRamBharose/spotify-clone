import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {

  const { seekBar, seekBg, playStatus, pause, play, track, time, prevSong, nextSong, seekSong  } = useContext(PlayerContext)

  return track ?  (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
      <div className='hidden lg:flex items-center justify-center gap-4'>
        <img className='h-8' src={track.image} alt="" />
        <div>
          <p className='text-[12px]'>{track.name}</p>
          <marquee scrollamount="3" className='text-[12px] w-24 overflow-hidden whitespace-nowrap'>{track.desc}</marquee>
        </div>
      </div>
      <div className='flex flex-col m-auto'>
        <div className='flex items-center justify-center gap-4'>
          <img className='h-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
          <img onClick={prevSong} className='h-4 cursor-pointer' src={assets.prev_icon} alt="" />
          {
            playStatus ?
              <img onClick={pause} className='h-4 cursor-pointer' src={assets.pause_icon} alt="" />
              :
              <img onClick={play} className='h-4 cursor-pointer' src={assets.play_icon} alt="" />
          }
          <img onClick={nextSong} className='h-4 cursor-pointer' src={assets.next_icon} alt="" />
          <img className='h-4 cursor-pointer' src={assets.loop_icon} alt="" />
        </div>
        <div className='flex gap-2 items-center justify-center'>
          <p className='text-sm'>{time.currentTime.minute}:{time.currentTime.second}</p>
          <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
            <hr ref={seekBar} className='h-1 w-0 border-none bg-green-800 rounded-full' />
          </div>
          <p className='text-sm'>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>
      <div className='hidden lg:flex items-center gap-2 opacity-75'>
        <img className='h-4 cursor-pointer' src={assets.plays_icon} alt="" />
        <img className='h-4 cursor-pointer' src={assets.mic_icon} alt="" />
        <img className='h-4 cursor-pointer' src={assets.queue_icon} alt="" />
        <img className='h-4 cursor-pointer' src={assets.speaker_icon} alt="" />
        <img className='h-4 cursor-pointer' src={assets.volume_icon} alt="" />
        <div className='w-20 bg-slate-50 h-1 rounded-full'>

        </div>
        <img className='h-4 cursor-pointer' src={assets.mini_player_icon} alt="" />
        <img className='h-4 cursor-pointer' src={assets.zoom_icon} alt="" />
      </div>
    </div>
  ) : null
}

export default Player
