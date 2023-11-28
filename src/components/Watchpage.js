import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu, toggleMenu } from '../utils/AppSlice';
import { useSearchParams } from 'react-router-dom';

const Watchpage = () => {
    const [searchParams] = useSearchParams();

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeMenu())
    },[])
  return (
    <div className='p-3 m-3'>
      <iframe width="1200" height="690" src={"https://www.youtube.com/embed/"+searchParams.get("v")+"?si=FRd-wxqhpnr_twNm"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default Watchpage
