import React from 'react'
import { useSelector } from 'react-redux'
import store from '../utils/store'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const showSider =useSelector(store=>store.app.isMenuOpen)

    if(!showSider){
        return null
    }
  return (
    <div className='p-2 shadow-lg w-48'>
     <ul className='pt-5'>
        <Link to={"/"}><li>Home</li></Link>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
        <h1 className='font-bold pt-5'>You</h1>
      <ul >
        <li>Your Channel</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
        <li>Show More</li>
      </ul>
        <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul>
        <li>Cricbuzz</li>
        <li>BrownVoid</li>
        <li>Seedhe Maut</li>
        <li>MensXp</li>
      </ul>
    </div>
  )
}

export default Sidebar
