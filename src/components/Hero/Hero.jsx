import React from "react"
import Header from "../Header/Header"
import "./Hero.css"
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import heart from "../../assets/heart.png"
import calories from "../../assets/calories.png"

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__leftH">
        <Header />
        <div className="hero__theBestAdd">
          <div></div>
          <span>the best fitness club in the town</span>
        </div>
        {/* hero heading text */}
        <div className="hero__text">
          <div>
            <span className="stroke-text">Shape</span>
            <span> Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
          </div>
        </div>
        {/* hero figures */}
        <div className="hero__figures">
          <div>
            <span>+ 140</span>
            <span>EXPERT COACHES</span>
          </div>
          <div>
            <span>+ 978</span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span>+ 50</span>
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>
        {/* hero buttons */}
        <div className="hero__buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="hero__rightH">
        <button className="btn">Join Now</button>
        <div className="hero__heart-rate">
          <img src={heart} alt="heart logo" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>

        {/* hero images */}
        <img src={hero_image} alt="hero_image" className="hero__rightH--hero-image" />
        <img src={hero_image_back} alt="hero_image_back" className="hero__rightH--hero-image-back" />
        {/* the calories */}
        <div className="hero__calories">
          <img src={calories} alt="calories" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcl</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
