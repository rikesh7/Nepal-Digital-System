
import { MdLocationOn,MdCall ,MdMail } from 'react-icons/md';
import { Link } from 'react-router-dom';

import SocialIcons from './SocialIcons';

function Footer() {
  return (
   <div className='container  mt-5 '>
    <div className=' footer  row '>
      
      <div className=' footer-items pt-5  row '>
        <div className=' col-lg-4 mb-2'>
            <h5 className='text-uppercase text-white '>Get In Touch</h5>
          <Link className=' text-white' to="https://www.google.com/maps/place/Nepal+Digital+Systems/@27.6754533,85.3010871,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb19822d8d1595:0x449540c978c37a06!8m2!3d27.6754533!4d85.303662!16s%2Fg%2F11sx74trs7?entry=ttu"> <p className=' '> <MdLocationOn /> Dhobighat,Kathmandu, NEPAL</p></Link>
             <p className='  text-white '> <MdCall /> <Link className=' text-white' to="tel:+1234567890">01-5911134</Link>, <Link className=' text-white' to="tel:+1234567890">+977-9851280029</Link></p>
             <p className='  text-white'> <MdMail /> <Link className=' text-white' to="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMTRzdVcrwhsxMHSCMQDzKBtbWXBnqBDPGDkSXqsbbmQhZXtCSFWVKKctQlkxbpMpXcvnfm">email@nepaldigisys.com</Link></p>
            
             </div>
        <div className=' col-lg-4 mb-2 '>
        <h5 className='text-uppercase  text-white'>Popular Links</h5>
            <Link to="/"><p className='  text-white' > Home</p></Link>
           <Link to="/contact"> <p className='  text-white'>Contact Us</p></Link>              
           <Link to="/aboutus"><p className='  text-white' >About Us</p></Link>
          
        </div>
       <div className='col-lg-4'>
         <h5 className='text-uppercase text-white'>Follow Us</h5>
         <SocialIcons/>
       </div>
        </div>
        <div className='d-flex copyright  col-lg-6 '>
    <p>© Copyright 2018-{new Date().getFullYear()}<strong className='strong'> Nepal Digital Systems Pvt. Ltd.</strong> All Rights Reserved </p>
</div>
    </div>
    </div>
  )
}

export default Footer