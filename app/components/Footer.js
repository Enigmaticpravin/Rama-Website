import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-white py-16 relative">
      {/* Subtle decorative line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Brand Section */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Acme Studio</h3>
            </div>
            <p className="text-sm text-gray-600 max-w-xs mx-auto md:mx-0">
              Crafting digital experiences that inspire and transform. Innovative design meets thoughtful technology.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 max-w-xs mx-auto md:mx-0">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Services', href: '/services' },
                { name: 'Projects', href: '/projects' },
                { name: 'Contact', href: '/contact' },
                { name: 'Blog', href: '/blog' }
              ].map(({ name, href }) => (
                <Link 
                  key={name} 
                  href={href} 
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Connect</h4>
            
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-5 mb-4">
              {[
                { Icon: Github, href: '#', label: 'GitHub' },
                { Icon: Linkedin, href: '#', label: 'LinkedIn' },
                { Icon: Twitter, href: '#', label: 'Twitter' },
                { Icon: Mail, href: '#', label: 'Email' }
              ].map(({ Icon, href, label }) => (
                <a 
                  key={label} 
                  href={href} 
                  aria-label={label}
                  className="text-gray-500 hover:text-gray-900 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Icon size={22} strokeWidth={1.5} />
                </a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="text-sm text-gray-600 space-y-2">
              <p>hello@acmestudio.com</p>
              <p>+1 (555) 123-4567</p>
            </div>

            {/* Copyright */}
            <p className="text-xs text-gray-500 mt-4">
              © {new Date().getFullYear()} Acme Studio. All rights reserved.
            </p>
          </div>
        </div>

        {/* Subtle footer bottom line */}
        <div className="mt-12 pt-6 border-t border-gray-100 text-center">
          <p className="text-xs text-gray-500">
            Designed with care in San Francisco, CA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;