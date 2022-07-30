import React from "react"
import "./Join.css"

const Join = () => {
  return (
    <div className="join-us" id="join-us">
      <div className="join-us__left">
        <hr />
        <div>
          <span className="stroke-text"> READY TO </span>
          <span> LEVEL UP </span>
        </div>
        <div>
          <span> YOUR BODY </span>
          <span className="stroke-text"> WITH US? </span>
        </div>
      </div>
      <div className="join-us__right">
        <form action="" className="join-us__right__from">
          <input type="email" name="user_email" placeholder="Enter your Email address" />
          <button className="btn join-us__right--btn"> Join Now</button>
        </form>
      </div>
    </div>
  )
}

export default Join
