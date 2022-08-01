import React from "react"
import "./Programs.css"
import RightArrow from "../../assets/rightArrow.png"
import { programsData } from "../../data/programsData"

const Programs = () => {
  return (
    <div className="programs" id="programs">
      <div className="programs__header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>
      <div className="programs__categories">
        {programsData.map((program) => (
          <div className="programs__categories__category" key={program.heading}>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="programs__categories__category--join-now">
              <span>Join Now</span>
              <img src={RightArrow} alt="eight arrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Programs
