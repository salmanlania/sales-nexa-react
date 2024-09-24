import "./Main.css"
import React, { useState } from 'react'
import roboHead from "../assests/Landing-Page/robo-head.svg"
import { Button } from "@mui/material"

const Section1 = () => {

    const [is_overed, set_is_overed] = useState(false)

    return (
        <div className="section-1">
            <p className="welcome">Welcome to</p>
            <h3>Sales<span>Nexa</span></h3>
            <p className="gateway">Your Gateway to <span>Automation</span></p>
            <img src={roboHead} alt="robo-head" />
            <Button color="primary" variant={is_overed ? "contained" : "outlined"} onMouseOver={() => set_is_overed(true)} onMouseLeave={() => set_is_overed(false)}>Get Started</Button>
        </div>
    )
}

export default Section1
