
import { MdLocationOn } from 'react-icons/md';
import { MdCall } from 'react-icons/md';
import { MdMail } from 'react-icons/md';
import { FaFacebook } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import CustomContainer from './CustomContainer';
function Footer() {
  return (
   
    <div className=' footer'>
         <CustomContainer>
      <div className='row gx-5'>
        <div className='col-lg-4 mb-5'>
            <h5 className='text-uppercase mt-4"'>Get In Touch</h5>
          <a href="https://www.google.com/maps/place/Nepal+Digital+Systems/@27.6754533,85.3010871,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb19822d8d1595:0x449540c978c37a06!8m2!3d27.6754533!4d85.303662!16s%2Fg%2F11sx74trs7?entry=ttu"> <p className='text-white'> <MdLocationOn /> Dhobighat,Kathmandu, NEPAL</p></a>
             <p className='text-white'> <MdCall /> <a href="tel:+1234567890">01-5911134</a>, <a href="tel:+1234567890">+977-9851280029</a></p>
             <p className='text-white'> <MdMail /> <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMTRzdVcrwhsxMHSCMQDzKBtbWXBnqBDPGDkSXqsbbmQhZXtCSFWVKKctQlkxbpMpXcvnfm">email@nepaldigisys.com</a></p>
             <div className='ndsSocial'>
             <a href="https://www.facebook.com/nepaldigitalsystems/?locale=hi_IN"><FaFacebook />&nbsp;</a>
             <a href="https://www.youtube.com/channel/UCnt9YPtVXiPkple0n9RIICg"><FaYoutube />&nbsp;</a>
             <a href="https://np.linkedin.com/company/nepal-digital-systems"><FaLinkedin />&nbsp;</a>
             </div> </div>
        <div className='col-lg-4 mb-5'>
            <h5 className='text-uppercase mt-4"'>Popular Link</h5>
            <a href="/aboutus"><p className='text-white' >About Us</p></a>
           <a href="/contact"> <p className='text-white'>Contact Us</p></a>
        </div>
        <div className='col-lg-4'>
            <h5 className='text-uppercase mt-4"'>Newsletter</h5>
            <p>Embedded Software Development and Hardware Design.IoT cloud setup and integration, mobile, desktop and web app developnent.</p>
        </div></div></CustomContainer>
        <div className='d-flex copyright'>
    <p>© Copyright 2018-{new Date().getFullYear()}<strong> Nepal Digital Systems Pvt. Ltd.</strong> All Rights Reserved </p>
</div>
    </div>
    
  )
}

export default Footer