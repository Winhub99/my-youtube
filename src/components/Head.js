import React from 'react'
import { toggleMenu } from '../utils/AppSlice'
import { useDispatch } from 'react-redux'

const Head = () => {

    const dispatch = useDispatch()
    const toggleMenuHandler=()=>{
        dispatch(toggleMenu())
    }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='flex col-span-1'>
      <img className='h-8 cursor-pointer' alt='sidebar-menu' src='https://tse3.mm.bing.net/th?id=OIP.tQmL3J28pFPoRIHXj_RQhQHaHa&pid=Api&P=0&h=180' onClick={()=>{toggleMenuHandler()}}/>
      <img className='h-8 ml-2' alt='youtube-logo' src='https://tse2.mm.bing.net/th?id=OIP.aByvAl4Fl4Dk3N9fA3IudwHaFM&pid=Api&P=0&h=180'/>
      </div>
      <div className=' col-span-10 px-10 flex' >
        <input className=' h-8 w-1/2 border border-gray-400 p-2 rounded-l-full' type='text' placeholder='Search'/>
        <button  className='h-8 border border-gray-400  bg-gray-100 rounded-r-full p-2 '><img className='h-5' src='https://tse2.mm.bing.net/th?id=OIP.vyhkMafwzVBCCSsgGJfI4wHaHa&pid=Api&P=0&h=180'/></button>
      </div>
      <div className='col-span-1 '>
        <img className='h-8' alt='user-icon' src='https://tse1.mm.bing.net/th?id=OIP.8pQGc1uvCGFkeniunEv1rwHaHa&pid=Api&P=0&h=180'/>
      </div>
    </div>
  )
}

export default Head
