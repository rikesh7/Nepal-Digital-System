import { Link,useNavigate} from "react-router-dom";

import { useState } from "react";
function Header() {
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  const handleServicesClick = (e) => {
    e.preventDefault();  // Prevent the default link behavior
    navigate('/');  // Redirect to the /services page
  };
  return (
    <div className=" container  ">
      <nav className="navbar  navbar-expand-lg d-flex justify-content-between">


       <Link className="logo " to={"/"}> <img src="/ndslogo.png" alt="NDS" /></Link>      
    
       
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
   
    <div className="collapse navbar-collapse  " id="navbarSupportedContent">
      <ul className="  navbar-nav   ms-auto">
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
        <li className="nav-item dropdown "      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
         
          <Link
            className="nav-link  dropdown-toggle"
            to="/"
            id="navbarDropdownMenuLink"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded={dropdownVisible ? 'true' : 'false'}
            onClick={handleServicesClick}
          >
            Services
          </Link>
          <ul
            className={`dropdown-menu centered ${dropdownVisible ? 'show' : ''}`}
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
   
</nav>

      
      
    </div>
  )
}

export default Header