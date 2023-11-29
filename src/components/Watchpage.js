import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/AppSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const Watchpage = () => {
    const [searchParams] = useSearchParams();

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu())
    },[])
  return (
    <div className='flex flex-col w-full'>
      <div className='flex w-full'>
        <div className='p-1 ml-1 '>
          <iframe className='rounded-lg' width="1100" height="640" src={"https://www.youtube.com/embed/"+searchParams.get("v")+"?si=FRd-wxqhpnr_twNm"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className='w-full p-1'>
          <LiveChat/>
          
        </div>
    </div>
    <CommentsContainer/>
    </div>
  )
}

export default Watchpage
