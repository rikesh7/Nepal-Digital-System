import {Routes,Route} from "react-router-dom"
import Homepage from "./pages/Homepage";
import Login from "./components/Auth/LoginForm";
import ContactPage from "./pages/ContactPage";
import 'animate.css';
import BlogPage from "./pages/BlogPage";
import AboutUs from "./components/Home/About";
import IoT from "./components/Auth/Services/IoT";
import ForumPage from "./pages/ForumPage";
import Career from "./components/Home/Career";
import NavBar from "./components/Navbar";
import Header from "./components/Header";
import BlogDetail from "./pages/BlogDetail";

function App() {
  return <>
  <Header/>
  <NavBar/>
  <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/auth" element={<Login/>}/>
    <Route path="/contact" element={<ContactPage/>}></Route>
    <Route path="/blog" element={<BlogPage/>}></Route>
    <Route path="/aboutus" element={<AboutUs/>}></Route>
    <Route path="/iot" element={<IoT/>}></Route>
    <Route path="/forum" element={<ForumPage/>}></Route>
    <Route path="/career" element={<Career/>}></Route>
    <Route path="/blogdetail" element={<BlogDetail/>}></Route>

  </Routes>

  </>;
}

export default App;
