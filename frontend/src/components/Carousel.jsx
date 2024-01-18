import React, { useState, useRef } from 'react';
import '../styles/Carousel.css'; // Import your CSS file

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7'];

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
    const itemWidth = carouselRef.current.offsetWidth / 2.5;
    const targetIndex = Math.round(translateX / itemWidth);
    const targetX = targetIndex * itemWidth;
    setTranslateX(targetX);
  };

  return (
    <div
      className="draggable-carousel"
      ref={carouselRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div
        className="carousel-content"
        style={{
          transform: `translateX(${translateX}px)`,
          transition: isDragging
            ? 'none'
            : 'transform 0.5s cubic-bezier(0.42, 0, 0.58, 1)', // Adjust duration and cubic-bezier as needed
        }}
      >
        {items.map((item, index) => (
          <div key={index} className="carousel-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;