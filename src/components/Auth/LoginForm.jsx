
import  { useState } from "react"

export default function Auth() {
  let [authMode, setAuthMode] = useState("signin")
  const [text,setText] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Clear email and password fields
    setEmail("");
    setPassword("");
    setText("");
  };
  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
         
        <form className="Auth-form"  onSubmit={handleSubmit}>
        <img src="/ndslogo.png" alt="ndslogo" />
          <div className="Auth-form-content">
           
            <h3 className="Auth-form-title">Sign In</h3>
           
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-4">
              <button type="submit" className="btn submit">
                Submit
              </button>
            </div>
            <p className="text-center mt-4">
              Forgot <a href="#">password?</a>
            </p>
            <div className="text-center mt-4">
              Not registered yet?{" "}
              <span className="link" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
      <img src="/ndslogo.png" alt="ndslogo" />
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
         
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g Rikesh Acharya"
              value={text}
              onChange={(e)=>setText(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn submit mt-4">
              Submit
            </button>
          </div>
          {/* <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p> */}
          <div className="text-center mt-4">
            Already registered?{" "}
            <span className="link" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
        </div>
      </form>
    </div>
  )
}