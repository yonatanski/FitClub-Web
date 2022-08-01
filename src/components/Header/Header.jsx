import React, { useState } from "react"
import "./Header.css"
import Logo from "../../assets/logo.png"
import Bars from "../../assets/bars.png"
import { Link } from "react-scroll"

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false
  const [menuOpened, setMenuOpened] = useState(true)

  return (
    <div className="header">
      <img className="header__logo" src={Logo} alt="" />
      {menuOpened && mobile === true ? (
        <div style={{ backgroundColor: "var(--appColor)", padding: "0.5rem", borderRadius: "5px" }} onClick={() => setMenuOpened(false)}>
          <img src={Bars} alt="ham burger menu " style={{ width: "1.5rem", height: "1.5rem" }} />
        </div>
      ) : (
        <ul className="header__menu">
          <li>
            <Link onClick={() => setMenuOpened(!menuOpened)} activeClass="active" to="home" spy={true} smooth={true}>
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpened(!menuOpened)} to="programs" spy={true} smooth={true}>
              Programs
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpened(!menuOpened)} to="reasons" spy={true} smooth={true}>
              Why Us
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpened(!menuOpened)} to="plans" spy={true} smooth={true}>
              Plans
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpened(!menuOpened)} to="testimonials" spy={true} smooth={true}>
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  )
}

export default Header
