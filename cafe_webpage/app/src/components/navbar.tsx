import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="text-primary font-serif text-2xl font-semibold">Serene</a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#menu" className="button-hover-effect text-foreground hover:text-primary/90">Menu</a>
            <a href="#about" className="button-hover-effect text-foreground hover:text-primary/90">About</a>
            <a href="#gallery" className="button-hover-effect text-foreground hover:text-primary/90">Gallery</a>
            <a href="#contact" className="button-hover-effect text-foreground hover:text-primary/90">Contact</a>
            <a 
              href="#reserve" 
              className="bg-primary text-primary-foreground px-4 py-2 rounded-md transition-all hover:bg-primary/90"
            >
              Reserve
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="h-6 w-6"
            >
              {isMobileMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a 
                href="#menu" 
                className="px-4 py-2 text-foreground hover:bg-secondary rounded-md" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Menu
              </a>
              <a 
                href="#about" 
                className="px-4 py-2 text-foreground hover:bg-secondary rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#gallery" 
                className="px-4 py-2 text-foreground hover:bg-secondary rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </a>
              <a 
                href="#contact" 
                className="px-4 py-2 text-foreground hover:bg-secondary rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a 
                href="#reserve" 
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Reserve
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
