import React from "react";
import boeing from "../tempo-images/boeing.webp"
import vw from "../tempo-images/vw.webp"
import oracle from "../tempo-images/oracle.webp"
import officeDepot from "../tempo-images/office-depot.webp"
import redSpace from "../tempo-images/redspace-logo.webp"

export default function Third(){
    return(
        <section className="third">
            <div className="row">
                <ul className="row brands">
                    <li><img src={boeing} alt="" id="boeing" /></li>
                    <li><img src={vw} alt="" id="vw" /></li>
                    <li><img src={oracle} alt="" id="oracle" /></li>
                    <li><img src={officeDepot} alt="" id="office-depot" /></li>
                </ul>
            </div>
            <div className="row" id="redspace">
                <div className="redlogo">
                    <img src={redSpace} alt="" />
                </div>
                <div className="column campbell">
                    <p id="campbell1">
                        "Since implementing the Tempo suite, the REDspace team has estimated cost of savings of over $220,000 CAD or $25,000 CAD per Project Manager annually."
                    </p>
                    <p id="campbell2">
                        Angela Campbell | REDspace
                    </p>                      
                    <div className="row1 campbell2">
                        <button href="" id="campbell3"><b>Read the full story</b></button>
                        <button href="" className="startBtn" id="startBtn3"><b>More success stories</b></button>
                    </div>   
                </div>
            </div>
        </section>
    )
}