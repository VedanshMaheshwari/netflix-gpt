import React from 'react';
import { useState } from 'react';
import DropSignout from './DropSignout.jsx';
import { useSelector } from 'react-redux';

const Header = () => {

    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    }

    const user = useSelector(store => store.user);
    return (
        <div className='absolute w-screen px-10 py-4 bg-gradient-to-b from-black z-10 flex justify-between items-center'>
            <img 
            className='w-40'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix-logo" />
            
        
        { user && (<div className='flex items-center gap-3'>
                <img
                  className='rounded w-10 h-10 object-cover'
                  src={user?.photoURL}
                  alt="usericon"
                />
                <button onClick={toggleDropdown} className='text-white text-xxs '>▼</button>
                {showDropdown && <DropSignout/>}
            </div>)
        }
        </div>
    );
};

export default Header;