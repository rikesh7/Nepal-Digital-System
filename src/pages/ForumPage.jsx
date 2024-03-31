

// frontend/src/App.js


function ForumPage() {


  return (
  <div>
       <div className="container-xxl py-5 color">
  <div className="container px-lg-5">
    <div className="row justify-content-center">
      <div className="col-lg-7">
        <div
          className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{
            visibility: "visible",
            animationDelay: "0.1s",
            animationName: "fadeInUp"
          }}
        >
          {/* <h6 className="position-relative d-inline  ps-4 color">
            Contact Us
          </h6> */}
          <h2 className="mt-2 color">Discussion Forum</h2>
        </div>
        <div
          className="wow fadeInUp"
          data-wow-delay="0.3s"
          style={{
            visibility: "visible",
            animationDelay: "0.3s",
            animationName: "fadeInUp"
          }}
        >
          <form>
            <div className="row g-3">
              <div className="col-md-12">
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                  />
                  <label htmlFor="name">Title</label>
                </div>
              </div>
              {/* <div className="col-md-6">
              <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                  />
                  <label htmlFor="email">Your Email</label>
                </div>
              </div> */}
              {/* <div class="col-12">
                                  <div class="form-floating">
                                      <input type="text" class="form-control" id="subject" placeholder="Subject">
                                      <label for="subject">Subject</label>
                                  </div>
                              </div> */}
              <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a message here"
                    id="message"
                    style={{ height: 300 }}
                    defaultValue={""}
                  />
                  <label htmlFor="message">Content</label>
                </div>
              </div>
              {/* <div id="div_id_resume" className="form-group">
  {" "}
  <label htmlFor="id_resume" className="control-label  requiredField">
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
  </div>{" "}
</div> */}

              <div className="col-12">
                <button
                  className="btn btn-primary w-100 py-3 revColor"
                  // onclick="sendMail()"
                  type="submit"
                >
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default ForumPage;
