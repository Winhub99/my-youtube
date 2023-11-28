import React from 'react'


const Button = ({name}) => {
  return (
    <div className='bg-gray-200 p-2 m-3 ml-0 rounded-lg cursor-pointer'>
      <button>{name}</button>
    </div>
  )
}

export default Button
