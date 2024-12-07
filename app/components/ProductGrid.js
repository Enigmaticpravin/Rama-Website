import React, { useState } from 'react'
import { Star, ShoppingCart, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const products = [
  {
    id: 1,
    name: 'Twin Echo Horn',
    brand: 'SonicPro',
    price: 429.99,
    originalPrice: 499.99,
    rating: 4.8,
    image:
      'https://images.unsplash.com/photo-1541414779316-956a5084c0d4?q=80&w=2007&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Cutting-edge acoustic engineering with adaptive noise cancellation and premium leather ear cushions.',
  },
  {
    id: 2,
    name: 'Crossfire Blast',
    brand: 'HealthTrack',
    price: 349.5,
    originalPrice: 399.99,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1541414779316-956a5084c0d4?q=80&w=2007&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description:
      'Advanced health monitoring with ECG, GPS tracking, and comprehensive wellness insights.',
  },
  {
    id: 3,
    name: 'Dual Strike',
    brand: 'PowerCore',
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.7,
    image:
      'https://i5.walmartimages.com/seo/Brass-Classic-Decorative-Taxi-Horn-Rubber-Vintage-Circular-With-Black-Bulb-Bugle-For-Taxi-Bike-Bus-Truck-Auto-Home-Decor-antique_3eb2fba3-e4b8-4759-822b-c8210afef6d3.50b36c70f8784a15c377dff8f0bee320.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF',
    description:
      'Multi-device charging hub with intelligent power distribution and premium aluminum construction.',
  },
  {
    id: 4,
    name: 'Double Barrel',
    brand: 'AudioMaster',
    price: 279.99,
    originalPrice: 329.99,
    rating: 4.8,
    image:
      'https://i5.walmartimages.com/seo/Brass-Classic-Decorative-Taxi-Horn-Rubber-Vintage-Circular-With-Black-Bulb-Bugle-For-Taxi-Bike-Bus-Truck-Auto-Home-Decor-antique_3eb2fba3-e4b8-4759-822b-c8210afef6d3.50b36c70f8784a15c377dff8f0bee320.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF',
    description:
      'True wireless earbuds with studio-grade sound and adaptive noise cancellation technology.',
  },
  {
    id: 5,
    name: 'Twin Flame',
    brand: 'SecureNet',
    price: 449.99,
    originalPrice: 499.99,
    rating: 4.9,
    image:
      'https://i5.walmartimages.com/seo/Brass-Classic-Decorative-Taxi-Horn-Rubber-Vintage-Circular-With-Black-Bulb-Bugle-For-Taxi-Bike-Bus-Truck-Auto-Home-Decor-antique_3eb2fba3-e4b8-4759-822b-c8210afef6d3.50b36c70f8784a15c377dff8f0bee320.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF',
    description:
      'Comprehensive AI-powered security solution with 4K night vision and real-time mobile alerts.',
  },
  {
    id: 6,
    name: 'Split Roar',
    brand: 'WorkMaster',
    price: 699.99,
    originalPrice: 849.99,
    rating: 4.9,
    image:
      'https://i5.walmartimages.com/seo/Brass-Classic-Decorative-Taxi-Horn-Rubber-Vintage-Circular-With-Black-Bulb-Bugle-For-Taxi-Bike-Bus-Truck-Auto-Home-Decor-antique_3eb2fba3-e4b8-4759-822b-c8210afef6d3.50b36c70f8784a15c377dff8f0bee320.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF',
    description:
      'Premium ergonomic office chair with adaptive lumbar support and aerospace-grade materials.',
  },
  {
    id: 7,
    name: 'Parallel Pulse',
    brand: 'SoundWave',
    price: 249.5,
    originalPrice: 299.99,
    rating: 4.7,
    image:
      'https://i5.walmartimages.com/seo/Brass-Classic-Decorative-Taxi-Horn-Rubber-Vintage-Circular-With-Black-Bulb-Bugle-For-Taxi-Bike-Bus-Truck-Auto-Home-Decor-antique_3eb2fba3-e4b8-4759-822b-c8210afef6d3.50b36c70f8784a15c377dff8f0bee320.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF',
    description:
      'Immersive 360-degree sound with adaptive acoustic technology and rugged waterproof design.',
    features: ['360° Sound', 'Waterproof', '20hr Battery', 'Smart Connect']
  },
  {
    id: 8,
    name: 'Twin Tuner',
    brand: 'CreativePro',
    price: 399.99,
    originalPrice: 449.99,
    rating: 4.8,
    image:
      'https://i5.walmartimages.com/seo/Brass-Classic-Decorative-Taxi-Horn-Rubber-Vintage-Circular-With-Black-Bulb-Bugle-For-Taxi-Bike-Bus-Truck-Auto-Home-Decor-antique_3eb2fba3-e4b8-4759-822b-c8210afef6d3.50b36c70f8784a15c377dff8f0bee320.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF',
    description:
      'Advanced digital canvas with pressure-sensitive surface and professional-grade color accuracy.',
  },
  {
    id: 9,
    name: 'Mirror Tone',
    brand: 'BrewMaster',
    price: 299.99,
    originalPrice: 349.99,
    rating: 4.7,
    image:
      'https://i5.walmartimages.com/seo/Brass-Classic-Decorative-Taxi-Horn-Rubber-Vintage-Circular-With-Black-Bulb-Bugle-For-Taxi-Bike-Bus-Truck-Auto-Home-Decor-antique_3eb2fba3-e4b8-4759-822b-c8210afef6d3.50b36c70f8784a15c377dff8f0bee320.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF',
    description:
      'Intelligent brewing system with precision temperature control and personalized coffee profiles.',
    features: ['AI Brewing', 'Temp Control', 'App Connect', 'Custom Profiles']
  },
  {
    id: 10,
    name: 'Echo Blade',
    brand: 'GameTech',
    price: 179.99,
    originalPrice: 219.99,
    rating: 4.8,
    image:
      'https://i5.walmartimages.com/seo/Brass-Classic-Decorative-Taxi-Horn-Rubber-Vintage-Circular-With-Black-Bulb-Bugle-For-Taxi-Bike-Bus-Truck-Auto-Home-Decor-antique_3eb2fba3-e4b8-4759-822b-c8210afef6d3.50b36c70f8784a15c377dff8f0bee320.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF',
    description:
      'Hyper-precise gaming mouse with customizable weight system and programmable optical switches.',
  }
]

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/products/${product.id}`}>
    <div
      className='group relative'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
        bg-white 
        border 
        border-gray-200  
        overflow-hidden 
        md:rounded-xl
        text-left
        transition-all 
        duration-500 
        transform 
        ${isHovered ? 'shadow-2xl -translate-y-2' : 'shadow-lg'}
        relative
      `}
      >
        {/* Discount Badge */}
        {product.originalPrice && (
          <div className='absolute top-4 left-4 z-10 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold'>
            {Math.round(
              ((product.originalPrice - product.price) /
                product.originalPrice) *
                100
            )}
            % OFF
          </div>
        )}

        {/* Product Image */}
        <div className='relative overflow-hidden'>
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className={`
              w-full 
              h-64 
              object-cover 
              transition-transform 
              duration-500 
              ${isHovered ? 'scale-110' : 'scale-100'}
            `}
            priority
          />
        </div>

        {/* Product Details */}
        <div className='p-6'>
          {/* Brand and Rating */}
          <div className='flex justify-between items-center mb-3'>
            <span className='text-sm font-medium text-gray-500'>
              {product.brand}
            </span>
            <div className='flex items-center text-yellow-500'>
              <Star className='w-4 h-4 mr-1' fill='currentColor' />
              <span className='font-semibold text-sm'>{product.rating}</span>
            </div>
          </div>

          {/* Product Name */}
          <h3 className='font-bold text-lg md:text-xl text-gray-800 mb-3 line-clamp-2'>
            {product.name}
          </h3>
          {/* Price and Buy Button */}
          <div className='flex justify-between items-center'>
            <div>
              <span className='text-sm md:text-2xl font-bold text-gray-900 mr-3'>
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className='text-xs md:text-sm text-gray-400 line-through'>
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <button
              className={`
                bg-black 
                text-white 
                px-3
                py-1
                md:px-6 
                md:py-3 
                rounded-full 
                hover:bg-gray-800 
                transition-all 
                duration-300 
                flex 
                items-center
                text-sm
                font-medium
                ${isHovered ? 'shadow-xl' : ''}
              `}
            >
              <ShoppingCart className='w-4 h-4 mr-2' />
              Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
    </Link>
  )
}

const ProductGrid = () => {
  return (
<div className='container mx-auto md:mt-10'>
  
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 md:gap-8'>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
  );
};


export default ProductGrid
