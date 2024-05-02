import {Routes,Route} from "react-router-dom"
import Homepage from "./pages/Homepage";
import 'animate.css';
import Career from "./components/Home/Career";
import AboutUs from "./components/Home/About";
import IoT from "./components/Services/IoT";
import ContactUs from "./components/Home/ContactUs";
import Header from "./components/Header";
import Embedded from "./components/Services/Embedded";
import Web from "./components/Services/Web";
import Mobile from "./components/Services/Mobile";
import Footer from "./components/Footer";

function App() {
  return <div className="app">
    <Header/>
  <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/aboutus" element={<AboutUs/>}></Route>
    <Route path="/iot" element={<IoT/>}></Route>
    <Route path="/embedded" element={<Embedded/>}></Route>
    <Route path="/web" element={<Web/>}></Route>
    <Route path="/mobile" element={<Mobile/>}></Route>
    <Route path="/career" element={<Career/>}></Route>
    <Route path="/contact" element={<ContactUs/>}></Route>
  </Routes>
<Footer/>
  </div>;
}

export default App;
