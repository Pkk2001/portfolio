import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: 'About',
    href: '#about'
  },
  {
    name: 'Projects',
    href: '#projects'
  },
  {
    name: 'Skills',
    href: '#skills'
  },
  {
    name: 'Education',
    href: '#education'
  },
  {
    name: 'Contact',
    href: '#contact'
  }];

  return (
    <motion.nav
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dark/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a
          href="#"
          className="font-serif text-2xl font-bold text-cream tracking-wider group">
          
          P<span className="text-gold transition-colors duration-300">.</span>K
          <span className="text-gold transition-colors duration-300">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) =>
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-medium text-sage hover:text-gold transition-colors duration-300 relative group">
            
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-cream hover:text-gold transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen &&
      <motion.div
        initial={{
          opacity: 0,
          height: 0
        }}
        animate={{
          opacity: 1,
          height: 'auto'
        }}
        exit={{
          opacity: 0,
          height: 0
        }}
        className="md:hidden bg-dark border-t border-charcoal mt-4">
        
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navLinks.map((link) =>
          <a
            key={link.name}
            href={link.href}
            className="text-sage hover:text-gold text-lg font-medium transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}>
            
                {link.name}
              </a>
          )}
          </div>
        </motion.div>
      }
    </motion.nav>);

}