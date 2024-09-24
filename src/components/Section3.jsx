import "./Main.css"
import React from 'react'
import left from "../assests/Landing-Page/sec3-left.svg"
import right from "../assests/Landing-Page/sec3-right.svg"

const Section3 = () => {
    return (
        <div className="section-3">
            <div className="left">
                <h2>Ease of Use</h2>
                <p><span>Intuitive design and simple input fields</span> make SalesNexa accessible to everyone.</p>
                <img src={left} alt="left" />
            </div>
            <div className="right">
                <h2>Real time Results</h2>
                <p>Watch as your sales efforts are amplified in real-time, <span>with automated systems.</span></p>
                <img src={right} alt="right" />
            </div>
        </div>
    )
}

export default Section3
