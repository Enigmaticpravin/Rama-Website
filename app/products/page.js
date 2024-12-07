'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'

export default function ProductDetail () {
  const [activeFeature, setActiveFeature] = useState(0)

  const product = {
    name: 'Twin Echo Acoustics Pro',
    brand: 'SonicPro Engineered',
    price: 429.99,
    originalPrice: 499.99,
    description:
      'Precision audio engineering that transforms every listening moment into an immersive experience.',
    features: [
      {
        title: 'Adaptive Noise Cancellation',
        detail: 'Isolates pure sound, creating a personal acoustic sanctuary.'
      },
      {
        title: 'Aerospace Titanium Construction',
        detail:
          'Ultralight frame designed for unparalleled durability and comfort.'
      },
      {
        title: 'Audiophile-Grade Sound',
        detail: 'Calibrated acoustic chambers delivering crystal-clear audio.'
      }
    ],
    image:
      'https://i5.walmartimages.com/seo/Brass-Classic-Decorative-Taxi-Horn-Rubber-Vintage-Circular-With-Black-Bulb-Bugle-For-Taxi-Bike-Bus-Truck-Auto-Home-Decor-antique_3eb2fba3-e4b8-4759-822b-c8210afef6d3.50b36c70f8784a15c377dff8f0bee320.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF'
  }

  return (
    <div
      className='min-h-screen flex flex-col items-center justify-center bg-white'
      style={{
        backgroundImage: `
    linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
  `,
        backgroundSize: '30px 30px'
      }}
    >
      <Navbar></Navbar>
      <div className='container max-w-5xl bg-white shadow-xl rounded-2xl overflow-hidden'>
        <div className='grid md:grid-cols-2'>
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className='relative'
          >
            <Image
              src={product.image}
              alt={product.name}
              width={800}
              height={800}
              className='w-full h-full object-cover object-center'
              priority
            />
          </motion.div>

          {/* Product Details */}
          <div className='p-12 space-y-6'>
            <div>
              <h1 className='text-4xl font-light text-neutral-800 mb-2'>
                {product.name}
              </h1>
              <p className='text-neutral-500 text-sm uppercase tracking-wider'>
                {product.brand}
              </p>
            </div>

            <p className='text-neutral-600 text-base leading-relaxed'>
              {product.description}
            </p>

            {/* Features */}
            <div className='space-y-4'>
              {product.features.map((feature, index) => (
                <div
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`
                    border-b pb-4 last:border-b-0
                    ${activeFeature === index ? 'opacity-100' : 'opacity-60'}
                    cursor-pointer transition-opacity
                  `}
                >
                  <h4 className='text-neutral-800 font-medium mb-1'>
                    {feature.title}
                  </h4>
                  {activeFeature === index && (
                    <p className='text-neutral-500 text-sm'>{feature.detail}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Pricing */}
            <div className='flex items-center justify-between'>
              <div>
                <span className='text-3xl font-light text-neutral-800'>
                  ${product.price.toFixed(2)}
                </span>
                <span className='text-neutral-400 line-through ml-3 text-sm'>
                  ${product.originalPrice.toFixed(2)}
                </span>
              </div>
              <span className='bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs'>
                {Math.round((1 - product.price / product.originalPrice) * 100)}%
                OFF
              </span>
            </div>

            {/* Call to Action */}
            <div className='w-full flex justify-center items-center gap-2'>
                <div className='p-4 border border-black rounded-lg items-center justify-center'>
                <ShoppingCart width={20} height={20}></ShoppingCart>
                </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className='w-full py-4 h-auto bg-neutral-800 text-white rounded-lg 
                transition-colors hover:bg-neutral-700'
            >
              Purchase now
            </motion.button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}
