

import { Link } from "react-router-dom";
import { FaNetworkWired,FaMicrochip,FaDesktop,FaMobileAlt} from 'react-icons/fa';
function Services(){ 
 return(
 <div className="container   mt-5  " >
 
   <div className=" row gx-5 mt-4 "style={{backgroundColor:'#ccc',borderRadius:'8px'}}>
   
     <Link className="col-lg-3 text-center gx-5 service-card " to="/iot" >
     
       <FaNetworkWired className=" mt-4    "/>
       <h4 className=" title mt-4 " >
        IoT
       </h4>
       <p className="justify-text mt-4" > At Nepal Digital Systems, we are a leading provider of IoT solutions.
                      We offer custom solutions to businesses across various industries, 
                     such as smart homes, industrial automation, and agriculture monitoring.
                       </p>
     </Link>
   
     <Link className="col-lg-3 text-center gx-5  service-card " to="/embedded" >
     
       <FaMicrochip className="mt-4"/>
       <h4 className=" title mt-4">
       Embedded System Engineering
       </h4>
       <p className="justify-text mt-4" > Nepal Digital Systems is an expert in Embedded System Design and Development, 
                     offering custom solutions for various applications including industrial ensures
                     </p>
     </Link>
     
     <Link className="col-lg-3 text-center gx-5  service-card " to="/web" >
     
       <FaDesktop className="mt-4"/>
       <h4 className=" title mt-4">
       Web Application development
       </h4>
       <p className="justify-text mt-4">  At Nepal Digital Systems, we are a leading provider of IoT solutions.
                    We offer custom solutions to businesses across various industries, 
                    such as smart homes, industrial automation, and agriculture monitoring.
                  </p>
     </Link>
    
     <Link className="col-lg-3 text-center gx-5  service-card "  to="/mobile" >
     
       <FaMobileAlt className="mt-4"/>
       <h4 className=" title mt-4">
       Mobile Application Development
       </h4>
       <p className="justify-text mt-4">   Nepal Digital Systems develops custom mobile and desktop apps using the latest technologies to provide a seamless user experience.</p>
     </Link>
   
   </div>
   
 </div>
)
}
export default Services;