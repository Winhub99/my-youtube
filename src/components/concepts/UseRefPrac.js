import React, { useRef, useState } from 'react'

const UseRefPrac = () => {
    const[stateVar,setStateVar] = useState("OFF")
    let localVar= 0;
    const refVar = useRef("saveMe");
  return (
    <div className='w-4/12 bg-slate-300'>
        <h1 className='font-bold'>The localVar is: {localVar}</h1>
        <button className='p-1 m-1 bg-green-300' onClick={()=>{
            localVar++;
            console.log("localVar: "+ localVar)
        }}>Increment</button>

        <h1 className='font-semibold'>Update State variable: {stateVar}</h1>
        <button className='p-1 m-1 bg-green-300' onClick={()=>{
            (stateVar==="ON"?setStateVar("OFF"):setStateVar("ON"))
        }}>ChangeState</button>

        <h1 className='font-semibold'>The value of useRef variable:{refVar.current}</h1>
        <button className='p-1 m-1 bg-green-300' onClick={()=>{

            refVar.current += " through state change "
}}>Add String</button>
        
    </div>
  )
}

export default UseRefPrac
