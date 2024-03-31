import { FaCheck } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import CustomContainer from "../CustomContainer";
function AboutUs() {
  return (
    <CustomContainer>
      <div className="row gx-5 justify-content-between">
        <div className="col-lg-6 mb-5">
          <h6>About Us</h6>
          <h1 className="text-uppercase mt-4">
            Serving with Embedded System Engineering and <br />
            IoT solution with several years of experience
          </h1>
          <p className="justify-text mt-4">
            Embedded Software Development and Hardware Design.IoT cloud setup
            and integration, mobile, desktop and web app developnent.Scaling,
            manifacturing, installation, maintenance etc.
          </p>
          <div className="heading mt-4">
          <h6>
            <FaCheck />
             &nbsp; Innovation
          </h6>
          <h6>
            <FaCheck />
            &nbsp; Professional Team
          </h6>
          <h6>
            <FaCheck />
            &nbsp; Professional Guidance
          </h6>
          <h6>
            <FaCheck />
            &nbsp; Best Secured
          </h6>
          <FaFacebook />
          &nbsp;  <FaLinkedin />
        </div></div>
        <div className="col-lg-6">
          <img src="/about.jpg" alt="about" />
        </div>
      </div>
    </CustomContainer>
  );
}

export default AboutUs;
