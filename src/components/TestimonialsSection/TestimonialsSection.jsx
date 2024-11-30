import React, { useState, useEffect, useRef } from "react";
import "./TestimonialsSection.scss";
import testimonials from "./testimonials"; // Import the testimonials array

function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isHovered = useRef(false); 
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change slide every 5 seconds
    }
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoSlide(); // Start auto-slide on mount
    return () => stopAutoSlide(); // Clear interval on unmount
  }, []);

  const handleMouseEnter = () => {
    isHovered.current = true;
    stopAutoSlide();
  };

  const handleMouseLeave = () => {
    isHovered.current = false;
    startAutoSlide();
  };


  const handleBulletClick = (index) => {
    setCurrentIndex(index);
  };

  const { content, name, year, image } = testimonials[currentIndex];

  return (
    <div className="container">
      <h2>Testimonials</h2>
      <div className="flex-row">
        <hr />
        <h3>WHAT THEY SAY</h3>
        <hr />
      </div>

      <div 
      className="testimonial-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      
      >
        <div className="testimonial-content">{content}</div>
      </div>

      <div className="testimonial-info">
        <div className="testimonial-person">
          <div className="testimonial-row">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{year}</p>
            </div>
          </div>
        </div>
        <div className="bullets">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`bullet ${index === currentIndex ? "selected" : ""}`}
              onClick={() => handleBulletClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSection;
