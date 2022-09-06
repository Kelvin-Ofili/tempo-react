import React from "react";
import jiraScreen from "../tempo-images/jira screen.webp"
import timeSheets from "../tempo-images/five/timesheets.svg"
import planner from "../tempo-images/five/planner.svg"
import budget from "../tempo-images/five/Budgets.svg"
import cost from "../tempo-images/five/cost.svg"
import prime from "../tempo-images/five/prime.svg"
import lightServer from "../tempo-images/five/Heroshot Light - Server 2 cloud.svg"

export default function Fourth(){
    return(
        <section className="fourth">
            <div className="column colour1" id="fourthhead">
                <h1><b>Our time tracking and management product suite</b></h1>
            </div>
            <div className="row row1">
                <div className="parts">
                    <p className="jira" id="top"><b>TEMPO FOR JIRA</b></p>
                    <h3 className="jira colour1" id="middle">Automated Time Tracking in Jira</h3>
                    <p className="jira colour2" id="bottom">Tempo offers insightful data that helps teams better manage their time and finances.</p>
                </div>
                <div>
                    <img id="row1img" src={jiraScreen} alt="" />
                </div>
            </div>
            <div className="six">
                <div className="six1">
                    <button className="column">
                        <img src={timeSheets} alt="" />
                        <div className="align" id="timesheets">
                            <h3><b>TEMPO TIMESHEETS</b></h3>
                            <p>Time tracking made easy</p>
                        </div>
                    </button>
                </div>
                <div className="six1">
                    <button className="column">
                        <img src={planner} alt="" />
                        <div className="align" id="planner">
                            <h3><b>TEMPO PLANNER</b></h3>
                            <p>Optimize your workforce effortlessly</p>
                        </div>
                    </button>
                </div>
                <div className="six1">
                    <button className="column">
                        <img src={budget} alt="" />
                        <div className="align" id="budget">
                            <h3><b>TEMPO BUDGET</b></h3>
                            <p>Extensive financial tracking in Jira</p>
                        </div>
                    </button>
                </div>
                <div className="six1">
                    <button className="column">
                        <img src={cost} alt="" />
                        <div className="align" id="tracking">
                            <h3><b>COST TRACKING</b></h3>
                            <p>Simple cost tracking for Timesheets Cloud</p>
                        </div>                          
                    </button>
                </div>
                <div className="six1">
                    <button className="column">
                        <img src={prime} alt="" />
                        <div className="align" id="reports">
                            <h3><b>TIMESHEET REPORTS AND GADGETS</b></h3>
                            <p>Lightweight Time Reporting for Jira</p>
                        </div>
                    </button>
                </div>
                <div className="six1">
                    <button className="column" id="large">
                        <img src={lightServer} alt="" />
                        <div className="align" id="suite">
                            <h3><b>TEMPO SUITE</b></h3>
                            <p>Seamless migration from Server to Cloud</p>
                        </div>
                    </button>
                </div>
            </div>    
        </section>
    )
}