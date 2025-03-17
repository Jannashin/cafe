import React, { useEffect, useRef } from 'react';

const menuItems = [
  {
    id: 1,
    name: "Signature Cappuccino",
    description: "Velvety espresso topped with perfectly steamed milk and a delicate layer of foam.",
    price: "$4.50",
    category: "drinks",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 2,
    name: "Matcha Latte",
    description: "Premium ceremonial grade matcha whisked with steamed milk for a calm energy boost.",
    price: "$5.25",
    category: "drinks",
    image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 3,
    name: "Almond Croissant",
    description: "Buttery, flaky croissant filled with rich almond cream and topped with sliced almonds.",
    price: "$4.75",
    category: "pastries",
    image: "https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: 4,
    name: "Avocado Toast",
    description: "Artisanal sourdough topped with smashed avocado, poached egg, and microgreens.",
    price: "$9.50",
    category: "food",
    image: "https://images.unsplash.com/photo-1603046891744-450f9caccc8d?auto=format&fit=crop&q=80&w=600"
  }
];

const FeaturedMenu = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const menuRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              menuRefs.current.forEach((item, index) => {
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
  }, []);

  return (
    <section id="menu" className="section-padding" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Our Signature Creations</h2>
          <p className="text-muted-foreground">
            Every item on our menu is crafted with care, using only the finest ingredients to create 
            flavors that comfort and inspire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <div 
              key={item.id}
              className="menu-card opacity-0"
              ref={el => {
                menuRefs.current[index] = el;
              }}
            >
              <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">{item.name}</h3>
              <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-primary font-medium">{item.price}</span>
                <span className="inline-block bg-secondary text-xs uppercase tracking-wider px-2 py-1 rounded">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="#"
            className="inline-block border border-primary text-primary hover:bg-primary/5 px-6 py-2 rounded-md transition-colors"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
