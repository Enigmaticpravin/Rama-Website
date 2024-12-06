'use client'

import logo from '@/app/images/LOGO RAMA.png'
import ContactPopup from './ContactPopup'
import horn from '@/app/images/horn.png'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react'

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
    <div className='text-white overflow-x-hidden'>
      <div
        ref={sectionRefs.hero}
        style={{
          transform: `translateY(${calculateParallax(
            sectionRefs.hero,
            0.3
          )}px)`,
          opacity: 1 - scrollPosition / 500,
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}
        className='relative h-screen flex items-center justify-center text-center px-4 bg-white'
      >
        <div className='relative z-10 max-w-4xl animate-fade-in justify-center items-center flex flex-col'>
          <Image
            src={logo}
            alt='logo'
            className='justify-center w-24 h-18 mb-4'
          ></Image>
          <div className='rounded-xl'>
            <Image src={horn} alt='product' className='-mb-20'></Image>
          </div>
          <h1
            className='text-2xl md:text-6xl font-bold mt-10 text-orange-400 animate-slide-up uppercase'
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
      </div>

      {/* Call to Action */}
      <div className='relative py-24 text-center animate-fade-in bg-gradient-to-b from-white via-orange-50 to-orange-500'>
        <div className='absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent z-10'></div>
        <div className='relative z-20 max-w-5xl mx-auto'>
          <h2 className='text-2xl md:text-5xl font-bold mb-6 text-gray-800 px-6'>
            Transform Your Road Experience
          </h2>
          <p className='text-sm md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto px-10'>
            Rama-branded-horns are not just a product. They are a commitment to
            safer, clearer road communication.
          </p>
          <button
            onClick={() => setIsPopupOpen(true)}
            className='px-6 py-2 md:px-12 md:py-5 border border-white bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-2xl transform transition hover:scale-105 active:scale-95'
          >
            Order Now
          </button>
        </div>
      </div>
      {isPopupOpen && <ContactPopup onClose={() => setIsPopupOpen(false)} />}
    </div>
  )
}

export default UltraHornLanding
