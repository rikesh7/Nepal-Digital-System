
import ImageSlider from '../components/Home/ImageSlider'

import AboutUs from '../components/Home/About'
import Services from '../components/Home/Service'
import LanguageLogos from '../components/Home/LanguageLogos'




function Homepage() {
  return (
   <div className='container'>
    <ImageSlider/>
    <AboutUs/>
    <Services/>
    <LanguageLogos/>
   
    </div>
  )
}

export default Homepage