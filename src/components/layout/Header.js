import React, { useEffect, useState } from 'react';

// import components
import Logo from '../../assets/img//logo.png';
import Nav from '../layout/navBar/Nav';
import NavMobile from '../layout/navBar/Nav';

const Header = () => {

  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? 'bg-tertiary h-20' : 'h-24'
      } flex items-center fixed top-0 w-full text-white z-10 bg-secundary transition-all duration-300`}
    >
      <div className='container mx-auto h-full flex items-center justify-between'>
        {/* logo */}
        <a href='/'>
          <img className='h-40 w-40'src={Logo} alt='' />
        </a>
        {/* nav */}
        <div className='hidden lg:block'>
          <Nav />
        </div>
        {/* nav mobile*/}
        <div className='lg:hidden'>
          <NavMobile />
        </div>

      </div>
    </header>
  );
};

export default Header;

