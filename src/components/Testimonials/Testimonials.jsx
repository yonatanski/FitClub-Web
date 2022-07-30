import React, { useState } from "react"
import "./Testimonial.css"
import leftArrow from "../../assets/leftArrow.png"
import rightArrow from "../../assets/rightArrow.png"

import { testimonialsData } from "../../data/testimonialsData"

const Testimonials = () => {
  const [selected, setSelected] = useState(0)
  const testimonialsDataLength = testimonialsData.length

  return (
    <div className="testimonials">
      <div className="testimonials__left">
        <span> Testimonials </span>
        <span className="stroke-text"> what they </span>
        <span> say about us </span>
        <span>{testimonialsData[selected].review}</span>
        <span>
          <span style={{ color: "var(--orange)" }}>{testimonialsData[selected].name}</span> - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="testimonials__right">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt="pictureo" />
        <div className="testimonials__right__arrows">
          <img
            src={leftArrow}
            alt=""
            onClick={() => {
              selected === 0 ? setSelected(testimonialsDataLength - 1) : setSelected((prev) => prev - 1)
            }}
          />
          <img
            src={rightArrow}
            alt=""
            onClick={() => {
              selected === testimonialsDataLength - 1 ? setSelected(0) : setSelected((prev) => prev + 1)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Testimonials
