import React, { useState, useEffect } from 'react';
import SearchBar from '../miscellenious/SearchBar';
import Logo from './images/Logo.svg';
import Trello from './images/Trello.svg';
import Icons from './images/Icons.svg';
import oval from './images/Oval.png';
import globe from './images/globe.svg';
import hard from './images/Hard.svg';
import heart from './images/Heart.svg';
import searchIcon from './images/serachIcon.svg';
import user1 from './images/userImages/user1.svg';
import user2 from './images/userImages/user2.svg';

import user3 from './images/userImages/user3.svg';
import user4 from './images/userImages/user4.svg';

const Header = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  
  const userAvatars = [
    user1,
    user2,
   user3,
   user4
  ];

  return (
    <>
      <div className={`flex items-center justify-between ${isSmallScreen ? 'm-4' : 'm-3 '}`}>
        
        {!isSmallScreen && (
          <div className="w-20 border-r-2 pr-2">
            <img
              src={Logo}
              alt="Your Logo"
              className="w-75.832 h-29.996 flex-shrink-0"
            />
          </div>
        )}

        <div className="w-10% flex items-center border-r-2 pr-2">
          <img src={Trello} alt="Logo" className="mr-2" />
          {!isSmallScreen && <div>Boards</div>}
        </div>

        
        {isSmallScreen ? (
          <div className="ml-4">
            <img
              src={searchIcon}
              alt="Your Logo"
              className="w-75.832 h-29.996 flex-shrink-0"
            />
          </div>
        ) : (
          <SearchBar onSearch="" />
        )}

          <div className="flex items-center space-x-4 ml-auto">
            <div>
              <img
                src={Icons}
                alt="Your Logo"
                className="w-75.832 h-29.996 flex-shrink-0"
              />
            </div>

            <div>
              <img
                src={oval}
                alt="Your Logo"
                className="w-75.832 h-29.996 flex-shrink-0"
              />
            </div>
          </div>
        {/* )} */}
      </div>

     
      <div className={` ml-auto flex ml-4 ${isSmallScreen ? ' flex-col items-start':'flex row  items-center pl-4 '}`}>
        <div
          style={{
            color: '#000',
            fontFamily: 'Poppins',
            fontSize: '26px',
            fontStyle: 'normal',
            fontWeight: 500,
            lineHeight: 'normal',
            marginRight: '10px',
          }}
        >
          Bracket
        </div>

        <div className={`flex flex-1  justify-between`}>
        <div className={`flex items-center  ${isSmallScreen ? ' m-0 pl-3':'ml-8 pl-10'}`}>
          <div>
            <img
              src={heart}
              alt="Your Logo"
              className="w-75.832 h-29.996 flex-shrink-0"
            />
          </div>

          <div className="border-r-2 h-6 mx-2"></div>

          <div className='flex m-2'>
            <img
              src={globe}
              alt="Your Logo"
              className="w-75.832 h-29.996 flex-shrink-0"
            />
            <div> Public </div>
          </div>

          {/* <div className="border-r-2 h-6 mx-2"></div> */}

          <div>
            <img
              src={hard}
              alt="Your Logo"
              className="w-75.832 h-29.996 flex-shrink-0"
            />
          </div>
        </div>

        {/* Dots Image Section */}
        <div className="relative right-0  flex items-center space-x-2">
  {userAvatars.slice(0, 7).map((avatar, index) => (
    <div
      key={index}
      className={`rounded-full overflow-hidden border-2 border-white ${index > 0 ? 'relative z-10' : ''}`}
      style={{ marginLeft: `${index * -5}px` }}
    >
      <img src={avatar} alt={`User Avatar ${index + 1}`} className="w-8 h-8 object-cover" />
    </div>
  ))}
 
     </div>
     </div>
      </div>
    </>
  );
}

export default Header;
