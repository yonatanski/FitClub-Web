import React from "react"
import Header from "../Header/Header"
import "./Hero.css"
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import heart from "../../assets/heart.png"
import calories from "../../assets/calories.png"
import { motion } from "framer-motion"
import NumberCounter from "number-counter"

const Hero = () => {
  const transition = { type: "spring", duration: 3 }
  const mobile = window.innerWidth <= 768 ? true : false
  return (
    <div className="hero" id="home">
      <div className="blur hero--blur "></div>
      <div className="hero__leftH">
        <Header />
        <div className="hero__theBestAdd">
          <motion.div initial={{ left: mobile ? "165" : "238px" }} whileInView={{ left: "8px" }} transition={{ ...transition, type: "tween" }}></motion.div>
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
            <span>
              <NumberCounter end={140} start={100} delay="4" preFix="+" />
            </span>

            <span>EXPERT COACHES</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={800} delay="4" preFix="+" />
            </span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span>
              {" "}
              <NumberCounter end={50} start={0} delay="4" preFix="+" />
            </span>
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
        <motion.div transition={transition} initial={{ right: "-1rem" }} whileInView={{ right: "4rem" }} className="hero__heart-rate">
          <img src={heart} alt="heart logo" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero images */}
        <img src={hero_image} alt="hero_image" className="hero__rightH--hero-image" />
        <motion.img transition={transition} initial={{ right: "11rem" }} whileInView={{ right: "20rem" }} src={hero_image_back} alt="hero_image_back" className="hero__rightH--hero-image-back" />
        {/* the calories */}
        <motion.div transition={transition} initial={{ right: "37rem" }} whileInView={{ right: "28rem" }} className="hero__calories">
          <img src={calories} alt="calories" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcl</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
