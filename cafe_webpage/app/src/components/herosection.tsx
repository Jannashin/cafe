import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.classList.add('animate-fade-in');
    }
    if (subtitleRef.current) {
      subtitleRef.current.classList.add('animate-fade-in-delay-1');
    }
    if (buttonRef.current) {
      buttonRef.current.classList.add('animate-fade-in-delay-2');
    }
  }, []);

  return (
    <section className="hero-section min-h-screen flex items-center justify-center px-4 md:px-6">
      <div className="container mx-auto pt-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-6xl font-serif font-semibold mb-6 opacity-0"
          >
            Elevate Your Moments at <span className="text-primary">Serene</span>
          </h1>
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl text-muted-foreground mb-8 opacity-0"
          >
            A peaceful haven where every cup tells a story and every bite brings comfort.
            Handcrafted with love, served in tranquility.
          </p>
          <a 
            ref={buttonRef}
            href="#menu"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md text-lg font-medium hover:bg-primary/90 transition-all opacity-0"
          >
            Explore Our Menu
          </a>
          
          <div className="mt-16 md:mt-24 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-4">
            <div className="text-center opacity-0 animate-fade-in-delay-2">
              <p className="text-4xl font-serif font-medium text-primary">7AM</p>
              <p className="text-sm text-muted-foreground mt-1">Opening Hour</p>
            </div>
            <div className="text-center opacity-0 animate-fade-in-delay-3">
              <p className="text-4xl font-serif font-medium text-primary">10PM</p>
              <p className="text-sm text-muted-foreground mt-1">Closing Hour</p>
            </div>
            <div className="text-center opacity-0 animate-fade-in-delay-3">
              <p className="text-4xl font-serif font-medium text-primary">24</p>
              <p className="text-sm text-muted-foreground mt-1">Specialty Drinks</p>
            </div>
            <div className="text-center opacity-0 animate-fade-in-delay-4">
              <p className="text-4xl font-serif font-medium text-primary">12</p>
              <p className="text-sm text-muted-foreground mt-1">Years of Passion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
