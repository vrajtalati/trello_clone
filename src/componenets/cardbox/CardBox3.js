import React from 'react'
import Card from '../Card'
import CardWithoutImage from '../CardWithoutImage'
import Image1 from '../images/Photo1.png'
import Image2 from '../images/Photo2.png'
import Image from '../images/Photo4.png'
import AddNewCard from '../AddNewCard'

const CardBox = () => {
  return (
    <div >
    <div className=" flex flex-col space-y-2 flex-shrink-0">
    <div className=" bg-gray-200 w-362 h-50 flex-shrink-0 flex items-center justify-between p-4 rounded-10 bg-F4F4F4">
      <div className="text-left">Test</div>
      <div className="w-60 h-10"></div>
    </div>
       <CardWithoutImage/>
       <Card Image={Image}/>
       <CardWithoutImage/>
       <CardWithoutImage/>
       <AddNewCard/>
       
      
      
    </div>
  </div>
  )
}

export default CardBox





