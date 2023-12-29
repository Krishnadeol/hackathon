import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Events' },
    { id: 3, text: 'TimeLine' },
    { id: 4, text: 'Gallery' },
    { id: 5, text: 'About' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`bg-[#211f39] sticky flex justify-between items-center h-16 max-w-[1240px] mx-auto px-4 text-white rounded-full  ${isScrolled ? 'fixed top-0 left-0 right-0 z-50' : ''}`}>
      <img className='h-18 w-24 text-xl font-bold text-[#7167e2]' src='src/images/logo1.png' alt="Logo" />

      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-[#7167e2] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
          >
            {item.text}
          </li>
        ))}
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-16 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-50'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
  
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl gap-5 hover:bg-[#7167e2] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            {item.text}
          </li>
        ))}
       
      </ul>
    </div>
  );
};

export default Navbar;
