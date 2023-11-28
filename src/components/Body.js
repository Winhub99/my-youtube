import React from 'react'
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <Outlet/>
    </div>
  )
}

export default Body;