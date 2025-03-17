import React, { useEffect, useRef, useState } from 'react';

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&q=80&w=600",
    alt: "Coffee art",
    category: "drinks"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=600",
    alt: "Café interior",
    category: "space"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1514066558159-fc8c737ef259?auto=format&fit=crop&q=80&w=600",
    alt: "Pastries display",
    category: "food"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1511081692775-05d0f180a065?auto=format&fit=crop&q=80&w=600",
    alt: "People enjoying coffee",
    category: "experience"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1525193612562-0ec53b0e5d7c?auto=format&fit=crop&q=80&w=600",
    alt: "Coffee brewing",
    category: "drinks"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1515215316771-2742baa337f4?auto=format&fit=crop&q=80&w=600",
    alt: "Cozy corner",
    category: "space"
  }
];

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);
    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                if (entry.target === sectionRef.current) {
                  imageRefs.current.forEach((item, index) => {
                    if (item) {
                      setTimeout(() => {
                        item.classList.add('animate-fade-in');
                      }, index * 150);
                    }
                  });
                }
              }
            });
          },
          { threshold: 0.1 }
        );
      
        // Store the current value in a variable
        const currentRef = sectionRef.current;
      
        if (currentRef) {
          observer.observe(currentRef);
        }
      
        // Use the stored variable in the cleanup
        return () => {
          if (currentRef) {
            observer.unobserve(currentRef);
          }
        };
      }, [filter]);
  return (
    <section id="gallery" className="section-padding" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Glimpses of Serenity</h2>
          <p className="text-muted-foreground mb-8">
            A visual journey through our spaces, creations, and the moments we've shared with our community.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                filter === 'all' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-foreground hover:bg-primary/10'
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('drinks')}
              className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                filter === 'drinks' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-foreground hover:bg-primary/10'
              }`}
            >
              Drinks
            </button>
            <button 
              onClick={() => setFilter('food')}
              className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                filter === 'food' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-foreground hover:bg-primary/10'
              }`}
            >
              Food
            </button>
            <button 
              onClick={() => setFilter('space')}
              className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                filter === 'space' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-foreground hover:bg-primary/10'
              }`}
            >
              Space
            </button>
            <button 
              onClick={() => setFilter('experience')}
              className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                filter === 'experience' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-secondary text-foreground hover:bg-primary/10'
              }`}
            >
              Experience
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div 
              key={image.id} 
              className="gallery-item opacity-0"
              ref={el => {
                imageRefs.current[index] = el;
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white bg-primary/80 px-3 py-1 rounded-full text-sm">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
