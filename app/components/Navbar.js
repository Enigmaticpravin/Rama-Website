import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Home, User, Settings } from 'lucide-react';
import logo from '@/app/images/LOGO RAMA.png'
import NavigationMenu from './NavigationMenu'
import HorizontalMenu from './HorizontalMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('/');

  const navLinks = [
    { 
      href: '/', 
      label: 'Home', 
      icon: <Home size={20} /> 
    },
    { 
      href: '/profile', 
      label: 'Profile', 
      icon: <User size={20} /> 
    },
    { 
      href: '/settings', 
      label: 'Settings', 
      icon: <Settings size={20} /> 
    }
  ];

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    hover: { scale: 1.1 }
  }

  return (
    <nav
      className='w-full flex flex-col mx-auto bg-white text-white shadow-md sticky top-0 z-50'
      style={{
        backgroundImage: `
  linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
  linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
`,
        backgroundSize: '30px 30px'
      }}
    >
      <div className=' px-4 sm:px-6 lg:px-8'>
        <div className='flex w-full h-14 md:h-20 justify-between items-center'>
          <div className='flex-shrink-0'>
            <Link href='/' legacyBehavior>
              <Image
                src={logo}
                alt='logo'
                className=' w-14 h-auto mr-5 cursor-pointer'
              ></Image>
            </Link>
          </div>
          <div className='hidden md:flex space-x-8'>
            <HorizontalMenu navLinks={navLinks} activeLink={activeLink}></HorizontalMenu>
          
          </div>
          <div className='flex md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-black hover:text-gray-200 focus:outline-none'
            >
              <svg
                className='w-8 h-8 p-2 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:border-orange-600 neumorphism-glow'
                fill='none'
                stroke='black'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                {isOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M6 18L18 6M6 6l12 12'
                    className='stroke-black transition-all duration-300'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16m-7 6h7'
                    className='stroke-black transition-all duration-300'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='md:hidden text-black bg-white'
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <NavigationMenu navLinks={navLinks} activeLink={activeLink}></NavigationMenu>
            
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
