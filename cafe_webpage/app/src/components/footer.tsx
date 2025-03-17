import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-secondary py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-serif font-semibold text-white mb-4">Serene</h3>
            <p className="text-secondary/80 mb-4">
              A peaceful haven where every cup tells a story and every bite brings comfort.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </a>
              <a href="#" className="text-secondary hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </a>
              <a href="#" className="text-secondary hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-medium mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-secondary/80 hover:text-white transition-colors">Home</a></li>
              <li><a href="#menu" className="text-secondary/80 hover:text-white transition-colors">Menu</a></li>
              <li><a href="#about" className="text-secondary/80 hover:text-white transition-colors">About</a></li>
              <li><a href="#gallery" className="text-secondary/80 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-secondary/80 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-secondary/80 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-secondary/80 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-secondary/80 hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-medium mb-4">Subscribe</h4>
            <p className="text-secondary/80 mb-4">Stay updated with our latest offerings and events.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/10 text-white placeholder:text-secondary/50 px-4 py-2 rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary w-full"
              />
              <button 
                type="submit" 
                className="bg-primary text-primary-foreground px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-secondary/60">
            © {new Date().getFullYear()} Serene Café. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
