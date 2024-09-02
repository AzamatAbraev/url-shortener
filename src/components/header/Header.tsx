import logo from "../../assets/images/logo.svg";
import useScreenSize from "../../utils/getScreenSize";
import { useEffect, useState } from "react";
import hamburger from "../../assets/images/hamburger.svg";

import "./Header.css"

const Header = () => {
  const [open, setOpen] = useState(false);

  const screenSize = useScreenSize();

  useEffect(() => {
    if (screenSize > 650) {
      setOpen(false)
    }
  }, [screenSize])
  return (
    <header>
      <div className="container nav-container">
        <div className="nav-left">
          <img src={logo} alt="Logo" />
          <ul className="nav-menu">
            <li className="nav-item"><a href="#features" className="nav-link">Features</a></li>
            <li className="nav-item"><a href="#pricing" className="nav-link">Pricing</a></li>
            <li className="nav-item"><a href="#resources" className="nav-link">Resources</a></li>
          </ul>
        </div>
        <div className="nav-right">
          <button className="login-btn">Login</button>
          <button className="register-btn">Sign Up</button>
          <button onClick={() => setOpen(!open)} className="toggle-btn">
            <img src={hamburger} alt="Toggle Button" />
          </button>
        </div>
        {open && screenSize < 650 && <div className="nav-toggle">
          <ul className="nav-menu-toggle">
            <li className="nav-item"><a href="#features" className="nav-link">Features</a></li>
            <li className="nav-item"><a href="#pricing" className="nav-link">Pricing</a></li>
            <li className="nav-item"><a href="#resources" className="nav-link">Resources</a></li>
          </ul>
          <div className="line"></div>
          <div className="nav-buttons-toggle">
            <button className="login-btn-toggle">Login</button>
            <button className="register-btn-toggle">Sign Up</button>
          </div>
        </div>}
      </div>
    </header>
  )
}

export default Header