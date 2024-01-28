import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import heart from './images/Heart.svg';
import message from './images/message.svg';
import attach from './images/attach.svg';
import user1 from './images/userImages/user1.svg';
import user2 from './images/userImages/user2.svg';

import user3 from './images/userImages/user3.svg';
import user4 from './images/userImages/user4.svg';




const CardWithoutImage = () => {
    const userAvatars = [
        user1,
       user2,
      user3,
      user4
        
      ];
  return (
    <div className="max-w-md mx-auto bg-gray-200 shadow-md rounded-md overflow-hidden relative">
   

    {/* Text Content */}
    <div className="p-4">
      <p className="text-lg font-semibold mb-2">Card Title</p>
      <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>

 {/* Avatars at the Bottom Left */}
{/* Avatars at the Bottom Left */}
<div className="relative left-4 bottom-4 flex items-center space-x-2">
  {userAvatars.slice(0, 3).map((avatar, index) => (
    <div
      key={index}
      className={`rounded-full overflow-hidden border-2 border-white ${index > 0 ? 'relative z-10' : ''}`}
      style={{ marginLeft: `${index * -10}px` }}
    >
      <img src={avatar} alt={`User Avatar ${index + 1}`} className="w-8 h-8 object-cover" />
    </div>
  ))}
  <div className="relative">
   
  </div>
{/* </div> */}



    </div>

    {/* Icons at the Bottom Right */}
    <div className="absolute right-4 bottom-4 flex items-center space-x-1">
        <div className="flex items-center ">
          <span className="text-gray-600">43</span>
          <img src={message} className="w-4 h-4" alt="Message Icon" />
        </div>

        <div className="flex items-center ">
          <span className="text-gray-600">43</span>
          <img src={heart} className="w-4 h-4" alt="Heart Icon" />
        </div>

        <div className="flex items-center ">
          <span className="text-gray-600">43</span>
          <img src={attach} className="w-4 h-4" alt="Attach Icon" />
        </div>
      </div>
    </div>
  )
}

export default CardWithoutImage
