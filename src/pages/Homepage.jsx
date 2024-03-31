
import Introduction from '../components/Home/Introduction'
import ImageSlider from '../components/Home/ImageSlider'
import Contact from '../components/Home/Contact'
import AboutUs from '../components/Home/About'
import Services from '../components/Home/Service'
// import ClientReview from '../components/Home/ClientReview'
import LanguageLogos from '../components/Home/LanguageLogos'
import Footer from '../components/Footer'

function Homepage() {
  return (
    <>
    <Introduction/>
    {/* <Header/>
    <NavBar/> */}
    
    <ImageSlider/>
    <Contact/>
    <AboutUs/>
    <Services/>
    {/* <ClientReview/> */}
    <LanguageLogos/>
    <Footer/>
    </>
  )
}

export default Homepage