

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
      <div className="justify-content-center row ps-3  ">
     
      <div className="contact-img col-lg-6 mt-4">
          <img  src="/officeworks7.png" alt="testimonial" />
        </div>
        <div className="col-lg-6">
     
        <h5 className="text-uppercase  colorPage mt-4">An embedded systems and IoT company.</h5>
          <p className="justify-text colorPage mt-4">
            Nepal Digital Systems designs and develops IoT and edge computing
             solution to let you grow your business with the use of next
            generation
             smart high tech innovation. From planning to implementation,
            we can
             take the burden off your shoulders and help you focus on the
            tasks 
            that matter the most to you. You can trust us for:
          </p>
          
          
          {/* <a href="/contact" className="btn contact-btn rounded-pill btn-outline-light mt-4">
            Contact Us
          </a> */}
          
          
          </div>
       
      </div>
        <div className="col-lg-6 mt-4">
        
          <h5 className="text-uppercase justify-text mt-4 ">
            Serving with Embedded System Engineering and IoT solution with several years of experience
          </h5>
          <p className="mt-4 justify-text">
          At NDS, we specialize in Embedded Software Development and Hardware Design,
           leveraging our expertise to create innovative solutions that power the IoT ecosystem.
            Our team excels in IoT cloud setup and integration,
             seamlessly connecting devices and systems to optimize operations.
              Additionally, we offer comprehensive services in mobile, desktop,
               and web app development, crafting user-friendly interfaces and 
               robust functionalities across platforms. With a focus on scalability,
                we ensure that our solutions grow with your business needs.
                 From manufacturing to installation and ongoing maintenance,
                  we provide end-to-end support to keep your systems running smoothly.
                   At NDS, we are committed to driving technological advancements
                    and delivering exceptional results to our clients.
          </p>
          <div className="heading mt-4">
          <SocialIcons/>
        </div></div>
        
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

      </div> </div>
  );
}

export default AboutUs;
