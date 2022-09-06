import React from "react";
import about from "../tempo-images/About Tempo-1.svg"

export default function Sixth(){
    return(
        <section class="sixth">
            <div>
                <div class="row" id="list0">
                    <h1>There's a lot you can do with Tempo</h1>
                </div>
                <div class="row2 alllist">
                    <div class="list" id="list1">
                        <h3>Track time on the go</h3>
                        <p>Get things done wherever and whenever you want with Tempo's mobile app.</p>
                    </div>
                    <div class="list" id="list2">
                        <h3>Integrate Tempo seamlessly with other tools</h3>
                        <p>Drive more integration and automation between Jira, Tempo and your ecosystem of solutions.</p>
                    </div>
                    <div class="list" id="list3">
                        <h3>Track customer cost or CAPEX expenses</h3>
                        <p>Organize time tracking data into different categories for reporting.</p>
                    </div>
                    <div class="list" id="list4"> 
                        <h3>Plan resources</h3>
                        <p>Optimize the use of resource and plan staffing needs.</p>
                    </div>
                    <div class="list" id="list5">
                        <h3>Keep on top of project costs</h3>
                        <p>Transform your team's tracked time efforts in Tempo Timesheets into tracked cost.</p>
                    </div>
                    <div class="list" id="list6">
                        <h3>Manage finances</h3>
                        <p>Monitor the financials of projects and portfolios.</p>
                    </div>
                </div>
                <div class="row" id="secondrow">
                    <div id="secondrowimage">
                        <img src={about} alt="" />
                    </div>
                    <div class="column" id="secondcolumn">
                        <h1>About Tempo</h1>
                        <p>
                            Tempo creates easy-to-use applications so customers can
                            track and understand time, their most constrained resource.
                            We include a growing team of over 100 employees in offices
                            in Boston, Montreal and Reykjavik and have a network
                            of more than 20,000 customers, both large and small, across
                            a range of industries.
                        </p>
                        <div>
                            <button class="startBtn" id="startBtn4">Learn more about Tempo</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}