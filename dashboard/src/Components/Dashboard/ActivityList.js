import React from "react";
import './activitylist.css'
import Profilepic1 from '../../Assets/Dashboard/Ellipse 5.svg'
import Profilepic2 from '../../Assets/Dashboard/Ellipse 6.svg'
import line from '../../Assets/Dashboard/Vector 2.svg'
import more from '../../Assets/Dashboard/3square.svg'
import Activity from './Activity'
export default function ActivityList() {
    return (
        <div className="ActivityList">
            <a href="#">
            <Activity name="Alex Morgan" profilepic={Profilepic1} type="message" /></a>
            <img src={line} style={{ paddingTop: "10px", paddingBottom: "20px" }} alt="line" />
            <a href="#">
            <Activity name="Mujo Prosper" profilepic={Profilepic2} type="connection request" /></a>
            <img src={line} style={{ paddingTop: "10px", paddingBottom: "20px" }} alt="line" />
            <span class="moreStuff"><div class="greyCircle" style={{marginRight:"15px"}}><img src={more} alt="more" /></div>Upcomming Task - &nbsp;<b> Create a campaign for designers &nbsp;</b> due on &nbsp;<b>02/04/2023.</b></span>
        </div>
    )
}