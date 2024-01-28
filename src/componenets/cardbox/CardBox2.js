import React from 'react'
import Card from '../Card'
import CardWithoutImage from '../CardWithoutImage'

import Image from '../images/Photo3.png'

const CardBox = () => {
  return (
    <div >
    <div className=" flex flex-col space-y-2 flex-shrink-0">
    <div className=" bg-gray-200 w-362 h-50 flex-shrink-0 flex items-center justify-between p-4 rounded-10 bg-F4F4F4">
      <div className="text-left">Trello</div>
      <div className="w-60 h-10">{/* Insert your SVG image here */}</div>
    </div>
       <CardWithoutImage/>
       <Card Image={Image}/>
       
      
      {/* Add more CardBox components as needed */}
    </div>
  </div>
  )
}


export default CardBox
