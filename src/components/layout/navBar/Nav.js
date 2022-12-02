import React from 'react';

// import navigation data
import { navigation } from '../../../data';

// import Link
import {Link} from 'react-router-dom';

const Nav = () => {
  
  return (
    <nav>
      <ul className='flex space-x-8 capitalize text-[15px]'>
        {navigation.map((item, idx) => {
          return (
            <li
              className='text-violet-500 hover:text-violet-400 cursor-pointer'
              key={idx}
            >
              <Link
                to={item.href}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
