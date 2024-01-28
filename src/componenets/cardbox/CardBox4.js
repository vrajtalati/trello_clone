import React from 'react'
import Card from '../Card'
import CardWithoutImage from '../CardWithoutImage'
import Image from '../images/Photo5.png'
import dots from '../images/dots.svg'
const CardBox = () => {
  return (
    <div >
    <div className="flex flex-col space-y-2 ">
    <div className=" bg-gray-200 w-362 h-50 flex-shrink-0 flex items-center justify-between p-4 rounded-10 bg-F4F4F4">
  <div className="flex items-center justify-between w-full">
    <div>Trello</div>
    <div className="w-60 h-10 mt-auto">
      <img src={dots} alt="Dots" />
    </div>
  </div>
</div>

       <CardWithoutImage/>
       
       <Card Image={Image}/>
       <CardWithoutImage/>
       <CardWithoutImage/>
      
      {/* Add more CardBox components as needed */}
    </div>
  </div>
  )
}

export default CardBox
