import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import logo from '@/app/images/LOGO RAMA.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    hover: { scale: 1.1 },
  };

  return (
    <nav className="w-fit h-fit justify-center mx-auto rounded-full bg-white text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" legacyBehavior>
            <Image
            src={logo}
            alt='logo'
            className='justify-center w-20 h-auto mr-5'
          ></Image>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ duration: 0.3 }}
              >
                <Link href={link.href} legacyBehavior>
                  <a className="text-lg font-medium text-black hover:text-gray-200 transition">
                    {link.label}
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-gray-200 focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="black"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
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
            className="md:hidden text-black bg-white rounded-xl shadow-lg"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-1 px-4 pt-2 pb-3">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  transition={{ duration: 0.3 }}
                >
                  <Link href={link.href} legacyBehavior>
                    <a className="block text-lg text-black font-medium hover:text-gray-200 transition">
                      {link.label}
                    </a>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;