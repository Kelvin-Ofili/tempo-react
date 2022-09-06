import React from "react";
import homepage from "../tempo-images/75505_New Illustrations for about us and homepage_Final_Homepage_Superside.svg"

export default function First(){
    return(
        <section class="first">
            <div class="row2">
                <div id="track">
                    <h1 class="colour1">Invest your time</h1>
                    <p class="colour2">From time tracking to resource planning to roadmapping, get the data you need to optimize how your team works</p>
                    <button class="startBtn" id="startBtn2"><b>Book a demo</b></button>
                </div>
                <div class="firstimg">
                    <img src={homepage} alt=""/>
                </div>   
            </div>
        </section>
    )
}