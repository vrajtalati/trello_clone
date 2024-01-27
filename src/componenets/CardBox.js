import React from 'react'
import Card from './Card'
import CardWithoutImage from './CardWithoutImage'
import Image from './images/Photo.png'
const CardBox = () => {
  return (
    <div >
    <div className="flex flex-col space-y-2 ">
       <CardWithoutImage/>
       <CardWithoutImage/>
       <Card Image={Image}/>
      
      {/* Add more CardBox components as needed */}
    </div>
  </div>
  )
}

export default CardBox
