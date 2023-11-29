import React, { useEffect ,useState} from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import {addMessage} from "../utils/ChatSlice"
import generate from "../utils/Namegenerator"
const LiveChat = () => {
const dispatch = useDispatch()
const chatMessages = useSelector(store=>store.chat.messages)
const [liveMessage, setLiveMessage] = useState("")


    useEffect(()=>{
        const timer=setInterval(()=>{
            dispatch(addMessage({
            name:generate(),
            message:"Simmy Simmy yeah! Simmi yeh simm simmi.",
            imageUrl:"https://tse1.mm.bing.net/th?id=OIP.8pQGc1uvCGFkeniunEv1rwHaHa&pid=Api&P=0&h=180"
            }))
           // console.log("API call here")
            },2000)
        

        return()=>{
            clearInterval(timer)
        }
    },[])
  return (
    <>
    <div className='h-[640px] w-full  p-2 border border-black  bg-slate-200  rounded-lg overflow-y-scroll flex flex-col-reverse' >
      {chatMessages.map((chat,index)=><ChatMessage key={index} name={chat.name} message={chat.message} imageUrl={chat.imageUrl}/>)}
    </div>
    <form className='w-full mt-1' onSubmit={(e)=>{
        e.preventDefault()
        console.log("submit called on: "+ liveMessage)
        dispatch(addMessage({
            name:"Vinod Mehta",
            message:liveMessage,
            imageUrl:"https://yt3.ggpht.com/Y3fVP06kq04tYkpE9SeizxnslxiVnHPAxkDu1cfC4Pgol8vTykM33hkAwKcZ9ihKg-9ncCE_HdM=s68-c-k-c0x00ffffff-no-rj"
        }))

        setLiveMessage("")

        
        
        
    }}>
          <input className='p-2 w-full border border-blue-400' type='text' placeholder='Type message...' value={liveMessage} onChange={(e)=>{setLiveMessage(e.target.value)}}
          />
          </form>
    </>
  )
}

export default LiveChat
