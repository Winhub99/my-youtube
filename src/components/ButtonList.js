import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const buttonNames =["All","Mixes","Music","Gaming","Javascript","Thrillers","Live","Reaction videos","Film Criticism","Television Comedy","Podcasts","Superheroes","Saitama"]
  return (
    <div className='flex overflow-x-auto '>
      {buttonNames.map((name,index)=>(<Button name={name} key={index}/>))}
    </div>
  )
}

export default ButtonList
