import React from 'react'

const Video = ({data}) => {
    const {snippet,statistics} = data;
    const {title,channelTitle,thumbnails, publishedAt} =snippet
    const {viewCount} = statistics
  return (
    <div className='p-2 m-2 w-72 shadow-lg'>
      <img className='rounded-lg' src={thumbnails?.medium?.url}/>
      <h1 className='font-bold text-lg py-2'>{title}</h1>
      <ul>
        <li className='text-gray-600'>{channelTitle}</li>
        <li>{viewCount} views</li>
      </ul>
    </div>
  )
}

export default Video
