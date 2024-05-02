

function Career() {
  return (
    <div className="container  ">
                <div className="  career-form   Auth-form"  >
                  <form method="POST"className="" encType="multipart/form-data"  >
                    {" "}
                    {/* <input
                  type="hidden"
                  name="csrfmiddlewaretoken"
                  defaultValue="whTiuGNbAkS1ee1Dci2Ibzh1mRL5o1SnXS8e2oAzr2tWcBK7jg2Cra1ACC9o91vg"
                /> */}
                    <h1 className="mb-5 mt-5 "  style={{ color: "#26426b" }}>
                     Join Us
                    </h1>
                    {/* <h2>To Be Part Of NDS</h2> */}
                    <div id="div_id_full_name" className=" mb-5">
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
                    <div id="div_id_address" className=" mb-5">
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
                    <div id="div_id_phone_number" className=" mb-5">
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
                    <div id="div_id_email" className=" mb-5">
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
                    <div className=" mb-5">
                      {" "}
                      <label
                      style={{ color: "#26426b" }}
                        htmlFor="id_resume"
                        className="requiredField"
                        
                      >
                        Resume<span   className="asteriskField">*</span>{" "}
                      </label>{" "}
                      <div className="controls form-control">
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
                    <button type="submit" className="btn w-100 mb-3 contact-btn  btn-outline-light ">
                      Submit
                    </button>
                  </form>
                  <p /></div>
                </div>
  )
}

export default Career