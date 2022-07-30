import React from "react"
import "./Footer.css"
import Github from "../../assets/github.png"
import instagram from "../../assets/instagram.png"
import linkedin from "../../assets/linkedin.png"
import logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <div className="footer__social">
        <div className="footer__social__icons">
          <img src={Github} alt="github icon" />
          <img src={instagram} alt="instagram icon" />
          <img src={linkedin} alt="linkedin icon" />
        </div>

        <div className="footer__social__logo">
          <img src={logo} alt="conpany logo" />
        </div>
      </div>
      <div className="blur footer--blur-1"></div>
      <div className="blur footer--blur-2"></div>
    </div>
  )
}

export default Footer
