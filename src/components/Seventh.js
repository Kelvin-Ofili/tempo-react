import React from "react";
import book from "../tempo-images/book a demo-1.svg"

export default function Seventh(){
    return (
        <section class="seventh">
            <div class="row">
                <div class="column">
                    <h2 class="colour1">Book a personalized demo</h2>
                    <p class="colour2">
                        Learn everything you want to know about Tempo software
                        with a free demo. We'll show you how our platform allows
                        you to optimize your work with better time tracking, resource
                        planning, and financial management.
                    </p>
                    <div>
                        <button href="" class="startBtn" id="startBtn2"><b>Book a demo</b></button>
                    </div>
                </div>
                <div class="seventhimg">
                    <img src={book} alt="" id="telephone" />
                </div>
            </div>
        </section>
    )
}