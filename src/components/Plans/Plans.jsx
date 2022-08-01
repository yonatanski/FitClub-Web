import React from "react"
import { plansData } from "../../data/plansData"
import whiteTick from "../../assets/whiteTick.png"
import "./Plans.css"

const Plans = () => {
  return (
    <div className="plans" id="plans">
      <div className="blur plans--blur-1"></div>
      <div className="blur plans--blur-2"></div>
      <div className="programs__header" style={{ gap: "2rem" }}>
        <span className="stroke-text"> READY TO START </span>
        <span> YOUR JOURNEY </span>
        <span className="stroke-text"> NOW WITHUS </span>
      </div>
      {/* plans card  */}
      <div className="plans__card">
        {plansData.map((plan, i) => (
          <div className="plans__card__item" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>{plan.price}</span>

            <div className="plans__card__feauters">
              {plan.features.map((feauter, i) => (
                <div className="plans__card__feauters__item" key={i}>
                  <img src={whiteTick} alt="white tick" />
                  <span key={i}>{feauter}</span>
                </div>
              ))}
            </div>
            <div>
              <span>see more benfits</span>
            </div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Plans
