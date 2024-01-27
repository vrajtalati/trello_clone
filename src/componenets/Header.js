import React from 'react'
import SearchBar from '../miscellenious/SearchBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faBell, faBellSlash } from '@fortawesome/free-solid-svg-icons';



const Header = () => {
  return (
    <>
    <div className="flex items-center justify-between">
      <div className="w-10%">
        <img src="../../public/Logo.png" alt="Your Logo" />
      </div>

      <div className="w-10%">
        jdbvjbs
      </div>

      <SearchBar onSearch="" />

      <div className="flex items-center space-x-4">
        <div>
          <FontAwesomeIcon icon={faPlusCircle} />
        </div>

        <div>
          <FontAwesomeIcon icon={faBell} />
        </div>

        <div>
          <FontAwesomeIcon icon={faBellSlash} />
        </div>
      </div>
    </div>
  </>
  )
}

export default Header
