import React from "react"
import "./Header.css"
import Logo from "../../assets/logo.png"

const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" src={Logo} alt="" />
      <ul className="header__menu">
        <li>Home</li>
        <li>Programs</li>
        <li>Why us</li>
        <li>Plans</li>
        <li>Testimonials</li>
      </ul>
    </div>
  )
}

export default Header
