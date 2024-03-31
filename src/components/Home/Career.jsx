import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdMail } from "react-icons/md";
import { Link } from "react-router-dom";
function Career() {
  return (
    <div className=" container color">
      {/*Form Column*/}
      <div className="">
        <div className="inner-column">
          {/*Contact Form*/}
          <div className="contact-form">
            <div className="container">
              <div className="row  g-5">
                <div className="col-md-8">
                  <form method="POST" encType="multipart/form-data">
                    {" "}
                    {/* <input
                  type="hidden"
                  name="csrfmiddlewaretoken"
                  defaultValue="whTiuGNbAkS1ee1Dci2Ibzh1mRL5o1SnXS8e2oAzr2tWcBK7jg2Cra1ACC9o91vg"
                /> */}
                    <h2 className="mb-5 mt-5" style={{ color: "black" }}>
                      Drop Your Resume
                    </h2>
                    <div id="div_id_full_name" className="form-group mb-5">
                      <div className="form-floating ">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                        />
                        <label htmlFor="name">Full Name</label>
                      </div>
                    </div>{" "}
                    <div id="div_id_address" className="form-group mb-5">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                        />
                        <label htmlFor="address">Address</label>
                      </div>
                    </div>{" "}
                    <div id="div_id_phone_number" className="form-group mb-5">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                        />
                        <label htmlFor="number">Phone Number</label>
                      </div>
                    </div>{" "}
                    <div id="div_id_email" className="form-group mb-5">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                        />
                        <label htmlFor="email">Email</label>
                      </div>
                    </div>{" "}
                    <div id="div_id_resume" className="form-group mb-5">
                      {" "}
                      <label
                        htmlFor="id_resume"
                        className="control-label  requiredField"
                      >
                        Resume<span className="asteriskField">*</span>{" "}
                      </label>{" "}
                      <div className="controls ">
                        {" "}
                        <input
                          type="file"
                          name="resume"
                          className="clearablefileinput"
                          required=""
                          id="id_resume"
                        />{" "}
                      </div>
                    </div>
                    <button type="submit" className="btn submit btn-sm">
                      Submit
                    </button>
                  </form>
                  <p />
                </div>

                <div
                  className="info-column col-md-4"
                  style={{ color: "#25426b" }}
                >
                  <div className="inner-column">
                    <h2 className="mt-5 mb-5" style={{ color: "black" }}>
                      Contact Us
                    </h2>
                    <h4 className="mb-5" style={{ fontSize: 16 }}>
                      We are always looking for exceptional talent. If you are
                      interested to work with NDS, please submit your resume.
                    </h4>
                    <br />
                    <ul className="list-info ">
                      <li className="mb-5">
                        <p>
                          <Link to="https://www.google.com/maps/place/Nepal+Digital+Systems/@27.6754533,85.3010871,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb19822d8d1595:0x449540c978c37a06!8m2!3d27.6754533!4d85.303662!16s%2Fg%2F11sx74trs7?entry=ttu">
                            {" "}
                            <MdLocationOn /> Dhobighat,Kathmandu, NEPAL
                          </Link>
                        </p>
                      </li>
                      <li className="mb-5">
                        <p>
                          {" "}
                          <MdCall />{" "}
                          <Link to="tel:+1234567890">01-5911134</Link>,{" "}
                          <Link href="tel:+1234567890">+977-9851280029</Link>
                        </p>
                      </li>
                      <li className="mb-5">
                        <p>
                          {" "}
                          <MdMail />{" "}
                          <Link to="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMTRzdVcrwhsxMHSCMQDzKBtbWXBnqBDPGDkSXqsbbmQhZXtCSFWVKKctQlkxbpMpXcvnfm">
                            email@nepaldigisys.com
                          </Link>
                        </p>
                      </li>
                    </ul>

                    <a
                      className="me-2"
                      href="https://www.facebook.com/nepaldigitalsystems/?locale=hi_IN"
                    >
                      <FaFacebook />
                      &nbsp;
                    </a>

                    <a
                      className="me-2"
                      href="https://www.youtube.com/channel/UCnt9YPtVXiPkple0n9RIICg"
                    >
                      <FaYoutube />
                      &nbsp;
                    </a>

                    <a
                      className="me-2"
                      href="https://np.linkedin.com/company/nepal-digital-systems"
                    >
                      <FaLinkedin />
                      &nbsp;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*End Contact Form*/}
        </div>
      </div>
      {/*Info Column*/}
    </div>
  );
}

export default Career;
