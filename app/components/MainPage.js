'use client'

import header from '@/app/images/hornhead.gif'
import ContactPopup from './ContactPopup'
import horn from '@/app/images/horn.png'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'
import Navbar from './Navbar'
import ProductGrid from './ProductGrid'

const UltraHornLanding = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const sectionRefs = {
    hero: useRef(null),
    features: useRef(null),
    technical: useRef(null)
  }

  const poppinsStyle = {
    fontFamily: 'Poppins, sans-serif'
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const calculateParallax = (ref, speed = 0.5) => {
    if (!ref.current) return 0
    const position = ref.current.offsetTop
    return (scrollPosition - position) * speed
  }

  return (
    <div ref={sectionRefs.hero}
    style={{
            backgroundImage: `
        linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
      `,
      backgroundSize: '30px 30px'
    }}
    className='flex flex-col items-center justify-center text-center bg-white'>
         <Navbar></Navbar>
            <img src='https://i.imgur.com/J6JSq6r.gif'></img>
        <div className='z-10 max-w-4xl animate-fade-in justify-center items-center flex-col mt-24 hidden'>
          
          <div className='hidden'>
            <Image src={horn} alt='product' className='-mb-20'></Image>
          </div>
          <h1
            className='text-2xl md:text-6xl font-bold mt-10 hidden text-orange-400 animate-slide-up uppercase'
            style={poppinsStyle}
          >
            A horn that blows
          </h1>
          <p className='text-gray-900 tracking-[0.2rem] md:tracking-[0.8rem] mb-6'>
            branded & bestselling
          </p>

          <div className='animate-pop-in delay-500'>
            <button
              onClick={() => setIsPopupOpen(true)}
              className='px-6 py-2 md:px-10 md:py-4 bg-orange-400 hover:bg-orange-500 rounded-full text-white shadow-2xl transform transition hover:scale-105 active:scale-95'
            >
              Purchase now
            </button>
            
          </div>
         
        </div>
        <ProductGrid></ProductGrid>
      {isPopupOpen && <ContactPopup onClose={() => setIsPopupOpen(false)} />}
    </div>
  )
}

export default UltraHornLanding
