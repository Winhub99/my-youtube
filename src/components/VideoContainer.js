import React, { useEffect, useRef, useState } from 'react'
import {YOUTUBE_VIDEOS_API} from "../utils/Constants"
import Video from './Video'
import { Link } from 'react-router-dom'
const VideoContainer = () => {
    const [videos,setVideos]= useState([])
    const [error, setError] =useState(null)
    const [isLoading,setIsLoading]= useState(false)
    const [pageToken,setPageToken] = useState("")
   // const [nextPageToken,setNextPageToken] = useState("")
    let nextPageToken = useRef("")

    const fetchVideos=async()=>{
      setIsLoading(true)
      setError(null)
     try{
        const data= await fetch(YOUTUBE_VIDEOS_API +pageToken)
        const json = await data.json();

      //  console.log(json?.items)
      console.log(nextPageToken)
      console.log("THe nextPageToken value is : "+json.nextPageToken )
      nextPageToken.current=json.nextPageToken
      console.log("The value of nextPageToken in useref is : "+nextPageToken.current)
        setVideos(prevState=>[...prevState,...json?.items])
     }catch(error){
      setError(error)
     }finally{
      setIsLoading(false)
     }
    }
    
    const handleScroll=()=>{
      if(window.innerHeight + document.documentElement.scrollTop +1 >=document.documentElement.scrollHeight && !isLoading){
        if(nextPageToken.current){
        setPageToken(nextPageToken.current) 
        }
    }
    }
    useEffect(()=>{
        fetchVideos()        
    },[pageToken])

    
    useEffect(()=>{    
      window.addEventListener('scroll',handleScroll)

  return ()=>window.removeEventListener('scroll',handleScroll)
},[])

    if(!videos ){
        return "Loding..."
    }
  return (
    <div className='flex flex-wrap'>
      {isLoading && <p>...Load State....</p>}
      {error && <p>{error.message}</p>}
      {videos.map((item)=>(<Link to={"watch?v="+item.id} key={item.id}><Video data={item} /></Link>))}
      
    </div>
  )
}

export default VideoContainer
