import React from 'react'
import { useSelector } from 'react-redux'
import store from '../utils/store'
import { Link } from 'react-router-dom'
import {HomeIcon,YoutubeIcon ,CircleUserIcon, History, PlaySquare, Clock4, ChevronRight, Film, ListVideo} from "lucide-react"

const Sidebar = () => {
    const showSider =useSelector(store=>store.app.isMenuOpen)

    if(!showSider){
        return null
    }
  return (
    <div className='p-2 shadow-lg w-48 flex-shrink-0'>
     <ul className='pt-5'>
        <Link to={"/"}><li className='flex'><HomeIcon size={20}/><span className='ml-1'> Home </span></li></Link>
        <li className='flex'><Film  size={20}/><span className='ml-1'> Shorts</span></li>
        <li className='flex'><ListVideo /> <span className='ml-1'>Subscriptions</span></li>
      </ul>
        <h1 className='font-bold pt-5'>You</h1>
      <ul >
      <li className='flex '><CircleUserIcon size={20} /><span className='ml-1'> Your Channel</span></li>
        <li className='flex'><History size={20} /> <span className='ml-1'>History</span></li>
        <li className='flex'><PlaySquare size={20} /> <span className='ml-1'> Your Videos</span></li>
        <li  className='flex'><Clock4 size={20} /> <span className='ml-1'>Watch Later</span></li>
        <li  className='flex'><ChevronRight size={20} style={{transform:"rotate(90deg)"}} /> <span className='ml-1'>Show More</span></li>
      </ul>
        <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul>
        <li >Cricbuzz</li>
        <li>BrownVoid</li>
        <li>Seedhe Maut</li>
        <li>MensXp</li>
      </ul>
    </div>
  )
}

export default Sidebar
