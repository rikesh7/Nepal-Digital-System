import  { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// Import your CSS file for custom styling

function ImageSlider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    // Use modulo operator to loop back to 0 after reaching the last element
    setIndex(selectedIndex % slides.length);
  };

  const slides = [
   
   
    { src: '/officeworks4.jpg', alt: 'Third slide' },
    { src: '/officeworks5.jpg', alt: 'Third slide' },
    
    
    { src: '/officeworks8.jpg', alt: 'Third slide' },
  
    // Add more slides as needed
  ];

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} className=' carousel'>
      {slides.map((slide, idx) => (
        <Carousel.Item key={idx}>
          <img className="d-block  resolution   " src={slide.src} alt={slide.alt} />
        </Carousel.Item>
      ))}
      {/* Custom Indicators */}
      <ol className="carousel-indicators rounded">
        {slides.map((_, idx) => (
          <li key={idx} className={index % slides.length === idx ? 'active' : ''} onClick={() => handleSelect(idx)}></li>
        ))}
      </ol>
    </Carousel>
  );
}

export default ImageSlider;
