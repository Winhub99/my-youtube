import React, { useEffect, useState } from 'react'
import { toggleMenu } from '../utils/AppSlice'
import { useDispatch, useSelector } from 'react-redux'
import { YOUTUBE_SEARCH_API } from "../utils/Constants"
import { cacheResults } from "../utils/SearchSlice"
const Head = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  //console.log(searchText)

  const dispatch = useDispatch()
  const searchCache = useSelector(store => store.search)
  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }
  
  const fetchSuggestions = async () => {

    const data = await fetch(YOUTUBE_SEARCH_API + searchText)
    const json = await data.json()
    console.log(json[1])
    dispatch(cacheResults({
      [searchText]: json[1],
    }))
  }
  useEffect(() => {
    const timer = setTimeout(() => {

      if (searchCache[searchText]) {
        setSuggestions(searchCache[searchText])
      } else {
        fetchSuggestions()

      }
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [searchText,searchCache]);

  return (
    <div className='shadow-lg'>
      <div className='grid grid-flow-col p-5 m-2 mb-0 '>
        <div className='flex col-span-1'>
          <img
           className='h-8 cursor-pointer' 
           alt='sidebar-menu' 
           src='https://tse3.mm.bing.net/th?id=OIP.tQmL3J28pFPoRIHXj_RQhQHaHa&pid=Api&P=0&h=180'
            onClick={() => { toggleMenuHandler() }} />
          <img 
          className='h-8 ml-2 cursor-pointer'
           alt='youtube-logo'
            src='https://tse2.mm.bing.net/th?id=OIP.aByvAl4Fl4Dk3N9fA3IudwHaFM&pid=Api&P=0&h=180' />
        </div>
        <div className=' col-span-10 px-10 flex' >
          <input
            className=' w-1/2 border border-gray-400 p-2 rounded-l-full px-5 '
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            type='text' placeholder='Search'
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)} />
          <button
            className=' border border-gray-400  bg-gray-100 rounded-r-full p-2 '>
            <img
              className='h-5' alt="search icon"
              src='https://tse2.mm.bing.net/th?id=OIP.vyhkMafwzVBCCSsgGJfI4wHaHa&pid=Api&P=0&h=180' />
          </button>
        </div>
        <div className='col-span-1 '>
          <img className='h-8' alt='user-icon' src='https://tse1.mm.bing.net/th?id=OIP.8pQGc1uvCGFkeniunEv1rwHaHa&pid=Api&P=0&h=180' />
        </div>
      </div>
      {showSuggestions && <div className='fixed w-[38.75rem] ml-[15.68rem] bg-white rounded-2xl top-[4.55rem] border border-gray-200 shadow-lg'>
        <ul className=' '>
          {suggestions.map(item => (<li key={item} className='px-5 py-2 hover:bg-gray-100 font-semibold '>{item}</li>))}
        </ul>
      </div>}
    </div>
  )
}

export default Head
