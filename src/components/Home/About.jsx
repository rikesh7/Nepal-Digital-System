

import SocialIcons from "../SocialIcons";
import  { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';



function AboutUs() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    // Use modulo operator to loop back to 0 after reaching the last element
    setIndex(selectedIndex % slides.length);
  };

  const slides = [
   
    { src: '/officeworks2.jpg', alt: 'Second slide' },
    { src: '/officeworks3.jpg', alt: 'Image' },

  { src: '/rafting.png', alt: 'Image' },
    
    { src: '/officeworks6.jpg', alt: 'Third slide' },
   
    // Add more slides as needed
  ];
 

  return (
    <div className="container mt-5  ">
    
      <div className="  row aboutUs  ">
      <h2 className="text-center text-uppercase">About Us</h2>
    
        <div className="col-lg-6 mt-4">
        
          <h5 className="text-uppercase justify-text mt-4 ">
          Expertise in Embedded System Engineering and IoT solutions
          </h5>
          <p className="mt-4 justify-text">
        Our group specializes in hardware design, embedded softwares, IoT setup and integration, integrating systems and devices with ease to maximize productivity. Furthermore, we provide all-inclusive services for developing desktop, mobile, and online applications, creating UIs that are easy to use and feature-rich on all platforms. By prioritizing scalability, we make sure that our solutions expand to meet your company's demands. Our end-to-end assistance covers everything from production to installation and continuous maintenance to keep your systems operating efficiently. At NDS, we're dedicated to advancing technology and providing our clients with outstanding outcomes.
          </p>
         </div>
        
        <div className="col-lg-6 d-flex row align-items-center justify-content-between mt-4">
       
       
 <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} className='mb-5  '>
      {slides.map((slide, idx) => (
        <Carousel.Item key={idx}>
          <img className="d-block w-100 gallery" src={slide.src} alt={slide.alt} />
          <div className="overlay"></div>
        </Carousel.Item>
      ))}
      {/* Custom Indicators */}
      <ol className="carousel-indicators rounded">
        {slides.map((_, idx) => (
          <li key={idx} className={index % slides.length === idx ? 'active' : ''} onClick={() => handleSelect(idx)}></li>
        ))}
      </ol>
    </Carousel>
    </div>
    <div className="justify-content-center row ps-3  ">
     
     <div className="contact-img col-lg-6 mt-4">
         <img  src="/officeworks7.png" alt="testimonial" />
       </div>
       <div className="col-lg-6">
    
       <h5 className="text-uppercase  colorPage mt-4">An embedded systems and IoT company.</h5>
         <p className="justify-text colorPage mt-4">
         Nepal Digital Systems creates edge computing and Internet of Things solutions to help you expand your company using cutting edge, intelligent, high-tech innovation. We can take the load off your shoulders and assist you in concentrating on the things that are most important to you, from strategy to execution. You may rely on us for:
         </p>
         
         
         {/* <a href="/contact" className="btn contact-btn rounded-pill btn-outline-light mt-4">
           Contact Us
         </a> */}
         
         {/* <div className="heading mt-4">
         <SocialIcons/>
       </div> */}
         </div>
      
     </div>
      </div> </div>
  );
}

export default AboutUs;
