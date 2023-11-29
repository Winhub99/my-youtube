import React from 'react'

const ChatMessage = ({name,message,imageUrl}) => {
  return (
    <div className='flex items-center shadow-md py-1 mt-1'>
      <img className='w-12' src={imageUrl}></img>
      <span className='font-bold text-xl px-1'>{name}</span>
      <span>{message}</span>
    </div>
  )
}

export default ChatMessage
