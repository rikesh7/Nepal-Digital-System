import { Link } from "react-router-dom";

function Header() {
  return (
    <div className=" container  ">
      <nav className="navbar  navbar-expand-lg d-flex justify-content-between">

<div>
       <Link className="logo " to={"/"}> <img src="/ndslogo.png" alt="NDS" /></Link>      
       </div>
  <div>
    <button
      className="navbar-toggler navbar-light "
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon " />
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item ">
          <Link className="nav-link " aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/aboutus">
            About Us
          </Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="/contact">
            Contact Us
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/career">
           Career
          </Link>
        </li>
        <li className="nav-item dropdown ">
         
          <Link
            className="nav-link dropdown-toggle"
            to="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Services
          </Link>
          <ul
            className="dropdown-menu centered "
            aria-labelledby="navbarDropdownMenuLink"
          ><Link  to="/iot">
            <li>
              
                IoT
             
            </li>
            </Link>
           
              <Link  to="/embedded">
              <li>
              Embedded System Engineering
              </li>
              </Link>
            
            
              <Link  to="/web">
              <li>
              Web Application development
              </li>
              </Link>
              <Link  to="/mobile">
            <li>
              
              Mobile Application Development
              
            </li>
            </Link>
          </ul>
         
        </li>
       
      </ul>
    </div>
    </div>
</nav>

      
      
    </div>
  )
}

export default Header