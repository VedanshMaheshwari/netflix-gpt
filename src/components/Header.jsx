import React from 'react';

const Header = () => {
    return (
        <div className='absolute inset-0 px-10 py-4 bg-gradient-to-b from-black z-5'>
            <img 
            className='w-40'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix-logo" />
        </div>
    );
};

export default Header;