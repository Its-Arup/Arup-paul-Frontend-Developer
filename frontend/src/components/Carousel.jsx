import React, { useState, useRef, useEffect } from 'react';
import '../styles/Carousel.css'; // Import your CSS file
import CarouselCard from './CarouselCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const items = [
  <CarouselCard number={'01'} quater={'Q4 2023'} phase={'Phase.1'} />,
  <CarouselCard number={'02'} quater={'Q1 2024'} phase={'Phase.2'} />,
  <CarouselCard number={'03'} quater={'Q2 2024'} phase={'Phase.3'} />,
  <CarouselCard number={'04'} quater={'Q3 2024'} phase={'Phase.4'} />,
];

const Carousel = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const carouselRef = useRef(null);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.pageX - translateX);
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const offsetX = event.pageX - startX;
      setTranslateX(offsetX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    updateTranslate();
  };

  const handleTouchStart = (event) => {
    setIsDragging(true);
    setStartX(event.touches[0].pageX - translateX);
  };

  const handleTouchMove = (event) => {
    if (isDragging) {
      const offsetX = event.touches[0].pageX - startX;
      setTranslateX(offsetX);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    updateTranslate();
  };

  const updateTranslate = () => {
    const itemWidth = carouselRef.current.offsetWidth / 2.5;
    const targetIndex = Math.round(translateX / itemWidth);
    const targetX = targetIndex * itemWidth;
    setTranslateX(targetX);
  };

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div
      className="draggable-carousel"
      ref={carouselRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="carousel-content"
        style={{
          transform: `translateX(${translateX}px)`,
          transition: isDragging
            ? 'none'
            : 'transform 0.5s cubic-bezier(0.42, 0, 0.58, 1)',
        }}
      >
        {items.map((item, index) => (
          <div key={index} className="carousel-item" data-aos="fade-left">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
