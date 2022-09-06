import React from "react";
import shown from "../tempo-images/easy adoption-1.svg"
import shownToo from "../tempo-images/meaningful reporting-1.svg"

export default function Fifth(){
    return(
        <section className="fifth">
            <div className="column" id="fifthhead1">
                <h1 className="colour1">Seamless Time Tracking</h1>
                <p className="colour2">Time tracking has never been easier with Tempo's seamless integration into Jira</p>
            </div>
            <div className="row row2" id="fifthstuff0">
                <div className="column fifthstuff" id="fifthstuff1">
                    <div>
                        <h3 className="colour1">Multiple ways to track time</h3>
                        <p className="colour2">From My Work to keyboard shortcuts, there are seven ways to track time.</p>
                    </div>
                    <div>
                        <h3 className="colour1">Calendar integrations</h3>
                        <p className="colour2">Google Calendar and Office 365 integrations make time tracking quick and easy.</p>
                    </div>
                    <div>
                        <h3 className="colour1">Customization and automated suggestions</h3>
                        <p className="colour2">Smart suggestions help users keep track of their time without disrupting their work.</p>
                    </div>
                    <div>
                        <h3 className="colour1">Easy adoption</h3>
                        <p className="colour2">Users learn to use Tempo quickly with its easy and intuitive user interface.</p>
                    </div>
                </div>
                <div id="fifthstuffimage1">
                    <img src="tempo-images/multiple ways to track time.svg" className="extra-stuff" alt="" />
                    <img src="tempo-images/Proven time tracking at scale-1.svg" className="extra-stuff" alt="" />
                    <img src="tempo-images/customized suggestions-1.svg" className="extra-stuff" alt="" />
                    <img src={shown} alt="" />
                </div>
            </div>
            <div className="column" id="fifthhead2">
                <h1 className="colour1">Meaningful Reporting</h1>
                <p className="colour2" id="line1">Timesheets lets you see time logged for issues, projects teams, users, accounts or even custom Jira filters</p>
            </div>
            <div className="row2" id="fifthstuff01">
                <div id="fifthstuffimage2">
                    <img src={shownToo} alt="" />
                    <img src="tempo-images/export reports.svg" className="extra-stuff" alt="" />
                </div>
                <div className="column fifthstuff" id="fifthstuff2">
                    <div>
                        <h4 className="colour1">Insight into the value of time</h4>
                        <p className="colour2">Build custom reports in seconds, with granular data and useful insights into your team.</p>
                    </div>
                    <div>
                        <h4 className="colour1">Export reports</h4>
                        <p className="colour2">Save and export reports as XLS, CSV or PDF.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}