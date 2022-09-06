import React from "react";
import logoLight from "../tempo-images/Tempo-logo-light.svg"

export default function Eighth(){
    return(
        <section className="eighth row2">
            <div className="column" id="eighthstuff">
                <img src={logoLight} alt="" />
                <p>
                    Gain visibility
                    into time and its
                    true value
                </p>
                <button className="startBtn" id="startBtn5"><b>Get started</b></button>
            </div>
            <div className="column">
                <div className="row2" id="row2">
                    <div className="numbers column" id="1">
                        <b>JIRA</b>
                        <p>Tempo Timesheets</p>
                        <p>Tempo Planner</p>
                        <p>Tempo Budgets</p>
                        <p>Cost Tracker</p>
                        <p id="space">Timesheet Reports and Gadgets</p>
                        <p>Enterprise Solutions</p>
                        <p>Integrations</p>
                    </div>
                    <div className="numbers column" id="2">
                        <b>DEVELOPMENT GUIDES</b>
                        <p>Developers</p>
                        <p>Integrations</p>
                        <p>Server Migration</p>
                    </div>
                    <div className="numbers column" id="3">
                        <b>ABOUT</b>
                        <p>About Us</p>
                        <p>Careers</p>
                        <p>Find a Partner</p>
                        <p>Become a Partner</p>
                        <p>Additional Services</p>
                        <p>Product Updates</p>
                    </div>
                    <div className="numbers column" id="4">
                        <b>RESOURCES</b>
                        <p>Help Center</p>
                        <p>Blog</p>
                        <p>Guides</p>
                        <p>Webinars</p>
                        <p>Pricing</p>
                        <p>Idea Portal</p>
                        <p>Partner Resources</p>
                        <p>Welcome Center</p>
                    </div>
                </div>
                <div className="white column">
                    <div>
                        <h5><b>SUSCRIBE TO OUR MAILING LIST</b></h5>
                        <p>Get the inside scoop, previews, news, upcoming webinars and other fun stuff.</p>
                        <p>Email</p>
                        <input type="email" name="email" value="" id="email" />
                    </div>
                    <div id="vibes">
                        <button className="startBtn" id="startBtn6"><b>Submit</b></button>
                    </div>
                </div>
            </div>
        </section>
    )
}