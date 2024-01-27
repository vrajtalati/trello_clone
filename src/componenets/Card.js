import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faPaperclip } from '@fortawesome/free-solid-svg-icons';
// import Image from './images/Photo.png'

const Card = (props) => {
  const userAvatars = [
    'url_to_avatar_1',
    'url_to_avatar_2',
    'url_to_avatar_3',
    
  ];

  return (
    <div className="bg-color max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden relative">
      {/* Image */}
      {/* <img src={Image} alt="Card Image" className="w-full h-40 object-cover" /> */}
      <img src={props.Image} className="w-full h-40 object-cover" />
      

      {/* Text Content */}
      <div className="p-4">
        <p className="text-lg font-semibold mb-2">Card Title</p>
        <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      {/* Avatars at the Bottom Left */}
      <div className=" relative left-4 bottom-4 flex items-center space-x-2">
        {userAvatars.slice(0, 3).map((avatar, index) => (
          <div key={index} className="rounded-full overflow-hidden border-2 border-white">
            <img src={avatar} alt={`User Avatar ${index + 1}`} className="w-8 h-8 object-cover" />
          </div>
        ))}
        <div className="bg-blue-500 rounded-full text-white flex items-center justify-center w-8 h-8">
          +{userAvatars.length - 3}
        </div>
      </div>

      {/* Icons at the Bottom Right */}
      <div className="absolute right-4 bottom-4 flex items-center space-x-4">
        <FontAwesomeIcon icon={faHeart} className="text-red-500" />
        <FontAwesomeIcon icon={faComment} className="text-blue-500" />
        <FontAwesomeIcon icon={faPaperclip} className="text-green-500" />
      </div>
    </div>
  );
};

export default Card;
