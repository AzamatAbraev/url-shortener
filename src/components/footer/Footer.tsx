import facebook from "../../assets/images/icon-facebook.svg"
import twitter from "../../assets/images/icon-twitter.svg"
import pinterest from "../../assets/images/icon-pinterest.svg"
import instagram from "../../assets/images/icon-instagram.svg"

import logo from "../../assets/images/footer-logo.svg"
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="container footer-container">
        <a href="#">
          <img className="footer-logo" src={logo} alt="Logo" />
        </a>
        <div className="footer-column">
          <h3>Features</h3>
          <a href="#shortener">Link Shortening</a>
          <a href="#links">Branded Links</a>
          <a href="#analytics">Analytics</a>
        </div>
        <div className="footer-column">
          <h3>Resources</h3>
          <a href="#blog">Blog</a>
          <a href="#developers">Developers</a>
          <a href="#support">Support</a>
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <a href="#about">About</a>
          <a href="#team">Our Team</a>
          <a href="#careers">Careers</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com/">
            <img src={facebook} alt="Facebook" /></a>
          <a href="https://www.x.com/">
            <img src={twitter} alt="Twitter" />
          </a>
          <a href="https://www.pinterest.com/">
            <img src={pinterest} alt="Pinterest" />
          </a>
          <a href="https://www.instagram.com/">
            <img src={instagram} alt="Instagram" />
          </a>

        </div>
      </div>
    </footer>
  )
}

export default Footer