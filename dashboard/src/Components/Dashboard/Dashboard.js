import React from 'react'
import './dashboard.css'
import trend from '../../Assets/Dashboard/trend-up.svg'
import line from '../../Assets/Dashboard/Vector 1.svg'
import barGraph from '../../Assets/Dashboard/barGraph.svg'
import Searchbox from '../../Shared/Searchbar'
import Profile from '../../Shared/Profile'
import calender from '../../Assets/Dashboard/calculator.svg'
import dropdownarrow from '../../Assets/Dashboard/small-arrow-square-down.svg'
import piechart from '../../Assets/Dashboard/Group 34147.svg'
import scatterchart from '../../Assets/Dashboard/Group 34148.svg'
import ActivityList from './ActivityList'

export default function Dashboard() {
    
    return(<>
        <div class="dashboard">
            <div>
                <span class="dashboardText"><b>Dashboard</b></span>
            </div>
            <div class="analyticList">
                <div>
                    <div><span class="lighttext">Connections</span></div>
                    <div><span class="numbers">2632 <div class="smallgreenround" ><img src={trend} alt="stat" /><span>56%</span></div></span></div>
                    <img style={{display:"flex",paddingBottom:"20px"}} src={line} alt="line"/>
                </div>

                <div>
                    <div><span class="lighttext">Followers</span></div>
                    <div><span class="numbers">2667 <div class="smallgreenround" ><img src={trend} alt="stat" /><span>0%</span></div></span></div>
                    <img style={{display:"flex",paddingBottom:"20px"}} src={line} alt="line"/>
                </div>

                <div>
                    <div><span class="lighttext">Connect invites</span></div>
                    <div><span class="numbers">100 <div class="smallgreenround" ><img src={trend} alt="stat" /><span>60%</span></div></span></div>
                </div>

              
            </div>
            <div class="barGraph">
                <img style={{ width: "360px", height: "353px" }} src={barGraph} alt="barGraph" />
                <div class="smallBlackText">
                    <div class="annotationbox">
                    <div class="coloredBlock" style={{background:"#C2ECC1"}}></div>
                    <span>Connections</span>
                    </div>

                    <div class="annotationbox">
                    <div class="coloredBlock" style={{background:"#1F1F1F"}}></div>
                    <span>Follows</span>
                    </div>

                    <div class="annotationbox">
                    <div class="coloredBlock" style={{background:"#C5C7F6"}}></div>
                    <span>Connect Invites</span>
                    </div>
                   
                </div>
            </div>
            
        </div>

        <div class="ActivityBoard">
            <div class="Topheader">
                <Searchbox />
                <Profile/>
            </div>

            <div class="CampaignAnalytic">
                <div class="CampaignHead">
                    <span class="bigText">Campaign Analytics</span>
                    <div class="greydiv">
                        <img src={calender } style={{width:'18px',height:'18px'}} alt="calender" />
                        <span>Mar 10 - Apr 10</span>
                        <img src={dropdownarrow} alt="dropdown"/>
                    </div>                    
                </div>
                <div class="CampaignAnalyticList">
                <div>
                    <div><span class="lighttext">Invitations sent</span></div>
                    <div><span class="CampaignNumbers">286</span></div>
                </div>

                <div>
                    <div><span class="lighttext">Pending Invitations</span></div>
                    <div><span class="CampaignNumbers">12</span></div>
                </div>

                <div>
                    <div><span class="lighttext">Profile views</span></div>
                    <div><span class="CampaignNumbers">2891</span></div>
                </div>

              
                </div>
                <div class="CampaignVisuals">
                    <img src={piechart} alt=""/>
                    <img src={scatterchart} alt=""/>
                </div>
            </div>

            <div class="RecentActivity">
                <div class="CampaignHead">
                    <span class="bigText">Recent Activity</span>
                    <div class="RecentGreydiv">
                        <span>Last 24h</span>
                        <img src={dropdownarrow} alt="dropdown"/>
                    </div>                    
                </div>
                
                <ActivityList/>

            </div>
            
           
        </div>
        
    </>)
}