import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

// Sophisticated animation variants
const linkVariants = {
  hidden: { 
    opacity: 0, 
    x: -20,
    transition: { 
      duration: 0.4, 
      ease: "easeOut" 
    }
  },
  visible: (custom) => ({ 
    opacity: 1, 
    x: 0,
    transition: { 
      delay: custom * 0.1,
      duration: 0.5, 
      ease: "anticipate" 
    }
  }),
  hover: {
    scale: 1.025,
    transition: { 
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const NavigationMenu = ({ navLinks, activeLink }) => {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <nav className="bg-gradient-to-br from-white via-gray-50 to-gray-100 border border-gray-100 overflow-hidden">
      <div className='px-2'>
        {navLinks.map((link, index) => (
          <motion.div
            key={link.href}
            custom={index}
            variants={linkVariants}
            initial='hidden'
            animate='visible'
            whileHover='hover'
            className="relative group"
            onHoverStart={() => setHoveredLink(link.href)}
            onHoverEnd={() => setHoveredLink(null)}
          >
            <Link 
              href={link.href} 
              className={`
                block relative px-3 py-2 transition-all duration-300
                ${activeLink === link.href 
                  ? 'bg-blue-50 text-blue-700' 
                  : 'text-gray-700 hover:bg-blue-50/50'}
              `}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {link.icon && (
                    <div className={`
                      p-2 rounded-lg transition-all duration-300
                      ${hoveredLink === link.href 
                        ? 'bg-blue-100 text-blue-600' 
                        : 'bg-gray-100 text-gray-500'}
                    `}>
                      {link.icon}
                    </div>
                  )}
                  <span className="text-sm font-medium tracking-wide">
                    {link.label}
                  </span>
                </div>
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ 
                    opacity: hoveredLink === link.href ? 1 : 0, 
                    x: hoveredLink === link.href ? 0 : -10 
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRight 
                    className="text-blue-500 opacity-70 group-hover:opacity-100 transition-opacity"
                    size={20} 
                  />
                </motion.div>
              </div>
              
              {/* Subtle hover line */}
              <motion.span 
                className="absolute bottom-0 left-0 h-0.5 bg-blue-500 origin-left"
                initial={{ width: 0 }}
                animate={{ 
                  width: hoveredLink === link.href ? '100%' : 0 
                }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </nav>
  );
};

export default NavigationMenu;