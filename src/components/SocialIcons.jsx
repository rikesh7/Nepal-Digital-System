import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function SocialIcons() {
  return (
    <div className="d-flex">
      <a className="btn btn-outline-light btn-items me-2" href="https://www.facebook.com/nepaldigitalsystems/" target='_blank'>
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a
        className="btn btn-outline-light btn-items me-2"
        href="https://www.youtube.com/@nepaldigitalsystems" target='_blank'
      >
        <FontAwesomeIcon icon={faYoutube} />
      </a>
      <a className="btn btn-outline-light btn-items me-2" href="https://www.linkedin.com/company/nepal-digital-systems/" target='_blank'>
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
    </div>
  );
}

export default SocialIcons;
