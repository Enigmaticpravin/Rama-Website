'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'
import Navbar from '@/app/components/Navbar'
import { Star, ShoppingCart } from 'lucide-react'

// Import the products array (assuming it's in a separate file)
import { products } from '@/app/products'
import LegalInformation from '@/app/components/LegalInformation'
import Footer from '@/app/components/Footer'

const ProductDetailPage = () => {
  const params = useParams()
  const productId = params.id ? parseInt(params.id) : null
  
  const product = products.find(p => p.id === productId)

  if (!product) {
    return <div className="container mx-auto p-8">Product not found</div>
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
      <div className='container max-w-6xl bg-white overflow-hidden'>
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
            <div className="p-4 border border-black rounded-lg items-center justify-center cursor-pointer transition-all hover:bg-black hover:border-white group">
  <ShoppingCart
    width={20}
    height={20}
    className="text-black group-hover:text-white transition-all duration-300"
  />
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
<LegalInformation></LegalInformation>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default ProductDetailPage