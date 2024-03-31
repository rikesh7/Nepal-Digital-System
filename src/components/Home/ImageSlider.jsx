import Carousel from 'react-bootstrap/Carousel';

function ImageSlider() {
  return (
    <Carousel data-bs-theme="dark" className='carousel mb-5'>
      <Carousel.Item>
        <img
          className="d-block w-100 resolution"
          src="/jorge-ramirez-2bJ2OH9e9J8-unsplash.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="top-left-caption">
          <div className='caption'>
          {/* <h1>NEPAL&apos;S</h1>
          <p>No.1 IoT consulting service provider</p> */}
          </div>
        </Carousel.Caption>
        <div className="overlay"></div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 resolution"
          src="/testimonial-2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className="top-left-caption">
          <div className='caption'>
        {/* <h1>NEPAL&apos;S</h1>
          <p>only trusted Embedded system&apos;s experts</p> */}
          </div>
        </Carousel.Caption>
        <div className="overlay"></div>

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 resolution"
          src="/vishnu-mohanan-yQpAaMsQzYE-unsplash.jpg"
          alt="Third slide"
        />
        <Carousel.Caption className="top-left-caption">
          <div className='caption'>
        {/* <h1>NEPAL&apos;S</h1>
          <p>
          Product design and Consulting experts
          </p> */}
          </div>
          
        </Carousel.Caption>
        <div className="overlay"></div>

      </Carousel.Item>
    </Carousel>
  );
}

export default ImageSlider;