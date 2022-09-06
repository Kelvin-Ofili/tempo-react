import React from "react";
import logo from "../tempo-images/Tempo-logo.svg"
import globe from "../tempo-images/globe.svg"

export default function Header(){
    return(
        <section className="header">
            <div className="row row1" id="example">
                <div className="logodiv">
                    <img src={logo} alt="" className="logo" />
                </div>
                <div className="row1 nav-links" id="navLinks">
                    <nav>
                        <ul>
                            <li href="">Solutions</li>
                            <li href="">Resources</li>
                            <li href="">Support</li>
                            <li href="">About Us</li>
                            <li href="">Pricing</li>
                        </ul>
                    </nav>
                </div>
                <div className="marginal row1">

                    <i className="fa fa-times" id="icon1"></i>
                    <label for="" id="icon2" >
                        <i className="fa fa-bars"></i>
                    </label>
                    <span><img src={globe} alt=""/></span>
                    <span><p className="startBtn" id="startBtn1"><b>Get Started</b></p></span>                
                </div>     
            </div> 
        </section>
    )
}