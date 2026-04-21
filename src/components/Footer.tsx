import React from 'react';
export function Footer() {
  return (
    <footer className="bg-dark text-sage py-8 border-t border-charcoal text-center md:text-left">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="font-serif font-bold text-cream">P.K.</span> &copy;{' '}
          {new Date().getFullYear()} All Rights Reserved.
        </div>
        <div className="text-sm">
          Designed with <span className="text-gold">precision</span>.
        </div>
      </div>
    </footer>);

}