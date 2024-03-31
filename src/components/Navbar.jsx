// import { FiHome } from "react-icons/fi";
// import { MdInfo } from "react-icons/md";
// import { FaTasks } from "react-icons/fa";
// import { AiOutlineMail } from "react-icons/ai";
// import { IoNewspaperOutline } from "react-icons/io5";
// import { MdForum } from "react-icons/md";

import { Link } from "react-router-dom";


function NavBar() {
  return (

<nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <div className="container-fluid ">
    {/* <Link className="navbar-brand" href="#">
      Navbar
    </Link> */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav m-auto pl-3">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">
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
        <li className="nav-item dropdown">
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
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <li>
              <Link className="dropdown-item" to="/iot">
                IoT
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
              Embedded System Engineering
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
              Web Application development
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
              Mobile Application Development
              </Link>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/blog">
            Blog
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/forum">
            Forum
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


    // <div className="  navBar ">
     
    //   <div className="nav ">
    //     <ul className="list  ">
    //       <li>
    //         <a href="/">
    //           {/* <FiHome size={15} />  */}
    //           Home
    //         </a>
    //       </li>
    //       <li>
    //         <a href="/aboutus">
    //           {/* <MdInfo size={15} /> */}
    //            About Us
    //         </a>
    //       </li>
    //       <div className="dropdown">
    //         <li className="dropbtn">
    //           <a href="#">
    //             {/* <FaTasks size={15} />  */}
    //             Services
    //           </a>
    //         </li>
    //         <div className="dropdown-content">
    //           <a href="/iot">IoT</a>
    //           <a href="#">Embedded System Engineering</a>
    //           <a href="#">Web Application development</a>
    //           <a href="#">Mobile Application Development</a>
    //         </div>
    //       </div>
    //       <li>
    //         <a href="/contact">
    //           {" "}
    //           {/* <AiOutlineMail size={15} />  */}
    //           Contact Us
    //         </a>
    //       </li>
    //       <li>
    //         <a href="/career">
    //           {" "}
    //           {/* <AiOutlineMail size={15} />  */}
    //           Career
    //         </a>
    //       </li>
    //       <li>
    //         {" "}
    //         <a href="/blog">
    //           {/* <IoNewspaperOutline size={15} />  */}
    //           Blog
    //         </a>
    //       </li>
    //       <li>
    //         {" "}
    //         <a href="/forum">
    //           {/* <MdForum size={15} />  */}
    //           Forum
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
      
    // </div>
  );
}

export default NavBar;
