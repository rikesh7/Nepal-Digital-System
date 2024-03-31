import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
         <div className="logo  ">
        <img src="/ndslogo.png" alt="NDS" />
        
        <h1 className="title">Nepal Digital Systems</h1>
        <br/> <p className="title addr">Dhobighat,Lalitpur</p>
      </div>
     
      <div className="text-end">
        <Link to="/auth">
          <button className="btn loginBtn">Log In</button>
        </Link>
      </div>
    </div>
  )
}

export default Header