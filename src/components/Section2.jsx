import "./Main.css"
import React from 'react'
import SecImage from "../assests/Landing-Page/sec-2.svg"

const Section2 = () => {
    return (
        <div className="section-2">
            <h3>Efficiency at your Finger Tips</h3>
            <p className="text">SalesNexa automates the most time-consuming parts <span>of the sales process.</span></p>
            <img src={SecImage} alt="image" />
        </div>
    )
}

export default Section2
