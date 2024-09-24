import "./FooterCss/Main.scss"
import React from 'react'
import footer from "../assests/Landing-Page/footer-bg-created.svg"
import logo from "../assests/Landing-Page/LOGO.svg"
import { RiFacebookBoxFill as Facebook } from "react-icons/ri";
import { FaLinkedin as Linkedin, FaInstagram as Instagram, FaXTwitter as XTwitter } from "react-icons/fa6";



const Footer = () => {

    const options = ["Home", "About", "Features", "Contact Us"]

    return (
        <div className="footer">
            <img src={footer} alt="footer" />
            <div className="main">
                <div className="socials">
                    <a href="#"><Facebook /></a>
                    <a href="#"><Linkedin /></a>
                    <a href="#"><Instagram /></a>
                    <a href="#"><XTwitter /></a>
                </div>
                <div className="desc">
                    <img src={logo} alt="logo" />
                    <p>Join the ranks of sales professionals who are transforming their approach with SalesNexa. Say goodbye to the manual work and hello to the future of sales automation. Get started today and experience the difference that true automation can make.</p>
                </div>
                <div className="menu">
                    <h2>Quick Menu</h2>
                    <ul>
                        {options?.map((option, i) => <li key={i}>{option}</li>)}
                    </ul>
                </div>
                <div className="contact">
                    <h2>Contact</h2>
                    <p>
                        Address: 21-C, 5th Lane, Zamzama Commercial, Phase 5, DHA, Karachi, Pakistan <a href="mailto:info@indenta-technologies.com">info@indenta-technologies.com</a> +92 21 111 124 338
                    </p>
                </div>
                <div className="copyright">
                    {new Date().getFullYear()} Indenta-Technologies. All rights reserved.
                </div>
            </div>
        </div>
    )
}

export default Footer
