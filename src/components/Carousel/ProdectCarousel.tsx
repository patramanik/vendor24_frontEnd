import React, { useState, ReactNode, useEffect } from 'react';

interface CarouselProps {
  children: ReactNode[];
}

const ProdectCarousel: React.FC<CarouselProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const itemsPerSlide = () => {
    if (windowWidth >= 1024) {
      return 4; // 4 items per slide for desktop
    } else if (windowWidth >= 768) {
      return 2; // 2 items per slide for tablet
    } else {
      return 1; // 1 item per slide for mobile
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(children.length / itemsPerSlide()));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(children.length / itemsPerSlide())) % Math.ceil(children.length / itemsPerSlide()));
  };

  const slideWidth = (): string => {
    return `${100 / itemsPerSlide()}%`; // Explicitly define return type as string
  };

  const slideOffset = (): string => {
    return `${-(currentIndex * 100)}%`; // Calculate the offset based on the currentIndex
  };

  return (
    <div className="relative w-full overflow-hidden p-12">
      <div
        className="flex transition-transform duration-300"
        style={{ transform: `translateX(${slideOffset()})` }} // Adjust the transform property to slide between cards
      >
        {children.map((child, index) => (
          <div key={index} className="w-full flex-shrink-0" style={{ width: slideWidth() }}>
            {child}
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 dark:text-white text-black p-2 rounded-full hover:bg-gray-700 transition duration-300"
        aria-label="Previous Slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 dark:text-white text-black p-2 rounded-full hover:bg-gray-700 transition duration-300"
        aria-label="Next Slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default ProdectCarousel;
