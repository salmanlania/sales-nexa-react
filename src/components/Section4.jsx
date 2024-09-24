import "./Main.css"
import { Button } from "@mui/material"
import React from 'react'
import hand from "../assests/Landing-Page/sec-4.svg"
import whatsapp from "../assests/Landing-Page/whatsapp.svg"
import linkedin from "../assests/Landing-Page/linkedin.svg"
import gmail from "../assests/Landing-Page/gmail.svg"
import googleMaps from "../assests/Landing-Page/google-maps.svg"

const Section4 = () => {
    return (
        <div className="section-4">
            <h2>Platforms</h2>
            <p>For our services.</p>
            <Button color="primary" variant="contained">Learn More</Button>
            <div className="img">
                <img src={hand} alt="hand" />
                <div className="icons-main">
                    <div className="icons-sts">
                        <a href="#"><img src={whatsapp} alt="icon" /></a>
                        <a href="#"><img src={linkedin} alt="icon" /></a>
                        <a href="#"><img src={gmail} alt="icon" /></a>
                        <a href="#"><img src={googleMaps} alt="icon" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4
