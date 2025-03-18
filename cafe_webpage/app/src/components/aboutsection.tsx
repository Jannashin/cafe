import React, { useEffect, useRef } from 'react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (textRef.current) {
              textRef.current.classList.add('animate-fade-in-left');
            }
            if (imageRef.current) {
              imageRef.current.classList.add('animate-fade-in-right');
            }
          }
        });
      },
      { threshold: 0.1 }
    );
  
    // Store the current ref value in a variable
    const currentSectionRef = sectionRef.current;
  
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }
  
    // Use the stored variable in the cleanup function
    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  return (
    <section id="about" className="section-padding bg-secondary/30" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="opacity-0" ref={textRef}>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
              Our <span className="text-primary">Story</span>
            </h2>
            <p className="text-muted-foreground mb-4">
              Founded in 2024, Serene began as a dream to create a space where time slows down and
              connections deepen. Our founders, Emma and Liam, met while studying culinary arts and
              bonded over their shared passion for quality coffee and mindful moments.
            </p>
            <p className="text-muted-foreground mb-6">
              What started as a tiny corner café has grown into a beloved community hub, where 
              we continue to honor our commitment to sustainability, quality, and the art of
              hospitality. Each cup we serve carries our story and our gratitude.
            </p>
            <div className="flex space-x-4 md:space-x-6">
              <div>
                <p className="text-3xl font-serif font-semibold text-primary">12+</p>
                <p className="text-sm text-muted-foreground">Years of Excellence</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-semibold text-primary">3</p>
                <p className="text-sm text-muted-foreground">Lovely Locations</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-semibold text-primary">1000+</p>
                <p className="text-sm text-muted-foreground">Happy Customers</p>
              </div>
            </div>
          </div>
          <div className="relative opacity-0" ref={imageRef}>
            <div className="absolute -top-4 -left-4 w-24 h-24 md:w-32 md:h-32 bg-primary/10 rounded-full z-0"></div>
            <div className="relative z-10 overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1513267048331-5611cad62e41?auto=format&fit=crop&q=80&w=1000"
                alt="Inside our café"
                className="w-full h-auto rounded-lg shadow-md"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 md:w-48 md:h-48 bg-accent rounded-full z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
