import React, { useEffect } from 'react';
import Navbar from '../components/navbar';
import HeroSection from '../components/herosection';
import FeaturedMenu from '../components/featuredmenu';
import AboutSection from '../components/aboutsection';
import Gallery from '../components/gallery';
import ContactSection from '../components/contactsection';
import Footer from '../components/footer';

const Index = () => {
  // Smooth scroll implementation for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            window.scrollTo({
              behavior: 'smooth',
              top: element.getBoundingClientRect().top + window.scrollY - 100,
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturedMenu />
      <AboutSection />
      <Gallery />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
