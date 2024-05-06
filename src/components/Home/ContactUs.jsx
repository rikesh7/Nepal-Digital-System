
import { MdLocationOn,MdCall,MdMail, } from "react-icons/md";
import { Link } from "react-router-dom";
import SocialIcons from "../SocialIcons";
import { useState } from "react";


function ContactUs() {
  const token = import.meta.env.bearerToken;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  console.log(token);
  const handleSubmit = async (e) => {
    e.preventDefault();
   
if(token){
    try {
      
      // Send form data to the backend
      const response = await fetch('/192.168.1.76:8000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, subject, message})
      });

      if (!response.ok) {
        throw new Error('Form submission failed.');
      }

      // Get confirmation message from backend response
      const data = await response.json();
      console.log(data);  

    
    } catch (error) {
      // console.error('Error submitting form:', error);
      // setConfirmationMessage('An error occurred while submitting the form.');
      // console.log(confirmationMessage);
    }
  }};
  return (
    <div className=" container ">
    
         
          <div className="contactUs  row  mb-3">
              <div className="col-lg-6 column">
              <div
                  className="col-lg-12 mb-5 " 
                  style={{ color: "#25426b" }}
                >
                  <div className="contact-info  Auth-form">
                    <h2 className="mt-5 text-uppercase " >
                      Contact Us
                    </h2>
                    <ul className="mt-4">
                      <li >
                        <p >
                          <Link to="https://www.google.com/maps/place/Nepal+Digital+Systems/@27.6754533,85.3010871,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb19822d8d1595:0x449540c978c37a06!8m2!3d27.6754533!4d85.303662!16s%2Fg%2F11sx74trs7?entry=ttu">
                            {" "}
                            <MdLocationOn className="colorPage"  /> <span className="colorPage"  >Dhobighat,Kathmandu, NEPAL</span>
                          </Link>
                        </p>
                      </li>
                      <li className="">
                        <p>
                          {" "}
                          <MdCall  />{" "}
                          <Link className="colorPage" to="tel:01-5911134" >01-5911134</Link>,{" "}
                          <Link className="colorPage" to="tel:+977-9851280029" >+977-9851280029</Link>
                        </p>
                      </li>
                      <li className="">
                        <p>
                        <MdMail/>
                          <Link className="colorPage" to="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMTRzdVcrwhsxMHSCMQDzKBtbWXBnqBDPGDkSXqsbbmQhZXtCSFWVKKctQlkxbpMpXcvnfm">
                        email@nepaldigisys.com
                          </Link>
                        </p>
                      </li>
                    </ul>
                    
                    <SocialIcons/>
                  </div>
                  
            </div>
            <div className="iframe col-lg-12 row" >

                <iframe className="map mb-5"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.353948758702!2d85.303662!3d27.675453299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19822d8d1595%3A0x449540c978c37a06!2sNepal%20Digital%20Systems!5e0!3m2!1sen!2snp!4v1712725132585!5m2!1sen!2snp"
 
  style={{ border: 0 }}
  allowFullScreen=""
  width={650}
  height={350}
  loading="lazy"
  
  referrerPolicy="no-referrer-when-downgrade"
/>

                </div> </div> 
                <div className="container query col-lg-6 mt-5 ">
  
    
      
  <div >
    <h2 className="text-center text-uppercase colorPage ">For sales or business queries</h2>
    <form className="mt-4" onSubmit={handleSubmit}>
      <div className="row g-2">
        <div className="col-md-6">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              value={name}
              id="name"
              onChange={(e) => setName(e.target.value)} required
              placeholder=""
            />
            <label htmlFor="name">Name</label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
               onChange={(e) => setEmail(e.target.value)} required
              placeholder="Your Email"
            />
            <label htmlFor="email">Email</label>
          </div>
        </div>
     
                        <div className="col-md-12">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="subject"
              value={subject} 
              onChange={(e) => setSubject(e.target.value)} 
              placeholder="Subject"
            />
            <label htmlFor="subject">Subject</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating">
            <textarea
              className="form-control"
              placeholder="Leave a message here"
              id="message"
             
               onChange={(e) => setMessage(e.target.value)} 
              style={{ height: 300 }}
              defaultValue={""}
            />
            <label htmlFor="message">Message</label>
          </div>
        </div>

        <div className="col-12">
          <button
            className="btn  w-100  revColor"
          
            type="submit"
          >
          Submit
          </button>
        </div>
      </div>
    </form>
  </div>



</div>
        
                </div>

    </div>
  );
}

export default ContactUs;
