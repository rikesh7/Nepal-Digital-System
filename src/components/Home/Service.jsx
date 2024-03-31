import CustomContainer from "../CustomContainer";


function Services() {
  return (
    <CustomContainer>
    <div className="services ">
      <h6 className="mb-4">Our Services</h6>
      <h1 className="text-uppercase mt-4">Services we offer</h1>
      <div className="row gx-5">
        <div className="card-title col-lg-3">
          <h3 className="mt-4">IoT</h3>
          <p className="card-text justify-text mt-4">
            At Nepal Digital Systems, we are a leading provider of IoT
            solutions. We offer custom solutions to businesses across various
            industries,such as smart homes,  <br /><br /><a className="text-white" href="">Read More...</a>
          </p>
         
        </div>
        <div className="card-title col-lg-3">
          <h3 className="text-uppercase mt-4">Embedded System Engineering</h3>
          <p className="card-text mt-4">
            Nepal Digital Systems is an expert in Embedded System Design and
            Development, offering custom solutions for various applications
            including industrial<br /><br /><a className="text-white" href="">Read More...</a>
          </p>
         
        </div>
        <div className="card-title col-lg-3">
          <h3 className="text-uppercase mt-4">Web Application development</h3>
          <p className="card-text mt-4">
            Nepal Digital Systems offers custom web design and development
            services to help businesses create a strong online presence. Our
            experienced team <br /><br /><a className="text-white" href="">Read More...</a>
          </p>
         
        </div>
        <div className="card-title col-lg-3">
          <h3 className="text-uppercase mt-4">Mobile Application Development</h3>
          <p className="card-text mt-4">
            Nepal Digital Systems develops custom mobile and desktop apps using
            the latest technologies to provide a seamless user experience. From
            utility apps <br /><br /><a className="text-white" href="">Read More...</a>
          </p>
        
        </div>
      </div>
    </div></CustomContainer>
  );
}

export default Services;
