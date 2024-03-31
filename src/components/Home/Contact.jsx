import CustomContainer from "../CustomContainer";

function Contact() {
  return (
    <CustomContainer>
      <div className="row gx-5 ">
        <div className="col-lg-6">
          <h1 className="text-uppercase mb-4"><strong>An embedded systems and I<span className="text-lowercase">o</span>T company.</strong></h1>
          
          <p className="justify-text mt-4">
            Nepal Digital Systems designs and develops IoT and edge computing
             solution to let you grow your business with the use of next
            generation
             smart high tech innovation. From planning to implementation,
            we can
             take the burden off your shoulders and help you focus on the
            tasks 
            that matter the most to you. You can trust us for:
          </p>
          
          
          <a href="/contact" className="btn btn-primary btn-sm mt-4">
            Contact Us
          </a><br /><br /><br />
          
          
        </div>
        <div className="intro-img   col-lg-6">
          <img src="/testimonial-2.jpg" alt="testimonial" />
        </div>
      </div>
    </CustomContainer>
  );
}

export default Contact;
