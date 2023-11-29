import React, { useEffect, useState } from 'react'
import {YOUTUBE_VIDEOS_API} from "../utils/Constants"
import Video from './Video'
import { Link } from 'react-router-dom'
const VideoContainer = () => {
    const [videos,setVideos]= useState([])
    const fetchVideos=async()=>{
        const data= await fetch(YOUTUBE_VIDEOS_API)
        const json = await data.json();
      //  console.log(json?.items)
        setVideos(json?.items)
    }
    useEffect(()=>{
        fetchVideos()
    },[])

    if(!videos){
        return "Loding..."
    }
  return (
    <div className='flex flex-wrap'>
      
      {videos.map((item)=>(<Link to={"watch?v="+item.id} key={item.id}><Video data={item} /></Link>))}
      
    </div>
  )
}

export default VideoContainer
