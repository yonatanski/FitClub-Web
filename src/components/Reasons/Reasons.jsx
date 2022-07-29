import React from "react"
import "./Reasons.css"
import image1 from "../../assets/image1.png"
import image2 from "../../assets/image2.png"
import image3 from "../../assets/image3.png"
import image4 from "../../assets/image4.png"
import nb from "../../assets/nb.png"
import adidas from "../../assets/adidas.png"
import nike from "../../assets/nike.png"
import tick from "../../assets/tick.png"

const Reasons = () => {
  return (
    <div className="reasons" id="reasons">
      <div className="reasons__left">
        <img src={image1} alt="image1" />
        <img src={image2} alt="image2" />
        <img src={image3} alt="image3" />
        <img src={image4} alt="image4" />
      </div>
      <div className="reasons__right">
        <span>some reasons</span>
        <div>
          <span className="stroke-text"> why </span>
          <span> choose </span>
          <span className="stroke-text"> us? </span>
        </div>
        <div className="reasons__right__details">
          <div>
            <img src={tick} alt="tick logo" />
            <span>OVER 140+ EXPERT COACHS</span>
          </div>
          <div>
            <img src={tick} alt="tick logo" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="tick logo" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="tick logo" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span style={{ color: "var(--gray)", fontWeight: "normal" }}>OUR PARTNERS</span>
        <div className="reasons__right__partners">
          <img src={nb} alt="nb" />
          <img src={adidas} alt="adidas shoe" />
          <img src={nike} alt="nike shoes" />
        </div>
      </div>
    </div>
  )
}

export default Reasons
