"use client";

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const clients = [
  { id: 1, name: "Silversheen", logo: "/silversheen.png" },
  { id: 2, name: "Eijc", logo: "/eijc.png" },
  { id: 4, name: "Fulwari", logo: "/FULWARI.png" },
  { id: 5, name: "Meauraa", logo: "/meauraa.png" },
  { id: 6, name: "TATTVAM", logo: "/TATTVAM.png" },
  { id: 7, name: "House Of Ceramics", logo: "/house-of-ceramics.png" },
  { id: 8, name: "Rama Art", logo: "/rama-art.png" },
];



export default function ClientLogoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  

  const slidesToShow = {
    mobile: 1,
    tablet: 2,
    desktop: 4
  };
  
  const [itemsPerSlide, setItemsPerSlide] = useState(slidesToShow.desktop);
  

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(slidesToShow.mobile);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(slidesToShow.tablet);
      } else {
        setItemsPerSlide(slidesToShow.desktop);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const totalSlides = Math.ceil(clients.length / itemsPerSlide);
  

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
  };
  
  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };
  
  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Trusted By
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Our Clients
          </h2>
          <p className="text-muted-foreground text-lg">
            Partnering with leading brands to deliver exceptional digital experiences
          </p>
        </div>
        
       
        <div className="relative max-w-7xl mx-auto px-16">
          
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-300 hover:shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-muted-foreground" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-background border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-300 hover:shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-muted-foreground" />
          </button>
          
          
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="min-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                >
                  {clients
                    .slice(
                      slideIndex * itemsPerSlide,
                      (slideIndex + 1) * itemsPerSlide
                    )
                    .map((client, idx) => {
                      const globalIndex = slideIndex * itemsPerSlide + idx;
                      return (
                        <div
                          key={client.id}
                          className="group p-6 rounded-xl bg-background border-2 border-purple-600 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 flex items-center justify-center min-h-[140px]"
                        >
                          <div className="flex flex-col items-center justify-center gap-3">
                            <div className="w-full h-14 flex items-center justify-center">
                              <img
                                src={client.logo}
                                alt={client.name}
                                className="max-w-full max-h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                              />
                            </div>
                            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                              {client.name}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                </div>
              ))}
            </div>
          </div>
          
          
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              >
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? 'w-8 bg-primary'
                      : 'w-2 bg-muted-foreground/30 hover:bg-primary/50'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}