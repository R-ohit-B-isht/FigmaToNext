
import React from 'react'
import { Outlet, Link ,useLocation } from "react-router-dom";

import './sidebar.css'
import logo from '../Assets/Navbar/Group 185.svg'
import dashboardlogo from '../Assets/Navbar/grid-3Dashboard.svg'
import messagelogo from '../Assets/Navbar/messageMessage.svg'
import campaignslogo from '../Assets/Navbar/flash.svg'
import calenderlogo from '../Assets/Navbar/calculator.svg'

import settinglogo from '../Assets/Navbar/setting-3.svg'
import helplogo from '../Assets/Navbar/danger.svg'
import logoutlogo from '../Assets/Navbar/send-square.svg'

export default function Sidebar() {
  const location = useLocation();
 function isPathActive(path) {
    return location.pathname==path;
  }
  return (<>
    < div  class="sidebar">
    <div class="Action "> 
            <img src={logo} alt="logo" />
            <span><b style={{fontSize:'24px'}}>Realply</b></span>
        </div> 
      < div class="Frame1">
        <Link style={{color:"white"}} to="/">
          < div class={isPathActive('/') ? "Action activeBar" : "Action"}>
            <img src={dashboardlogo} alt="logo" />
            <span>Dashboard</span>
          </ div>
        </Link>
        <Link style={{color:"white"}} to="/messages">
        < div class={isPathActive('/messages') ? "Action activeBar" : "Action"}>
          <img src={messagelogo} alt="logo" />
          <span>Messages</span>
        </ div>
        </Link>
        <Link style={{color:"white"}} to="/calender">
        < div class={isPathActive('/calender') ? "Action activeBar" : "Action"}>
          <img src={calenderlogo} alt="logo" />
          <span>Calendar</span>
        </ div>
        </Link>
        <Link style={{color:"white"}} to="/campaigns">
        < div class={isPathActive('/campaigns') ? "Action activeBar" : "Action"}>
          <img src={campaignslogo} alt="logo" />
          <span>Campaigns</span>
        </ div>
        </Link>
      </ div>
      
      <div class="Frame2">
      <Link style={{color:"white"}} to="/settings">
      < div class={isPathActive('/settings') ? "Action activeBar" : "Action"}>
          <img src={settinglogo} alt="logo" />
          <span>Settings</span>
          </ div>
          </Link>
          <Link style={{color:"white"}} to="/help">
          < div class={isPathActive('/help') ? "Action activeBar" : "Action"}>
          <img src={helplogo} alt="logo" />
          <span>Help?</span>
          </ div>
          </Link>
      </div>
      
       

          < div  class={ 'roundRectangle'}>
            < div  class={ 'Frame14'}>
                <div>
                  <span  class={ 'Yourfreetrialisabouttoendin10days'}>
                Your free trial is
                <br></br>about to end in<br></br>
                  
                  </span>
                  <b  style={{fontSize:"28px",fontFamily:"Roboto"}}>10 days.</b>
                </div>
                <div class={'billed'} style={{fontSize:"12px"}}>
              <span>
                <div> You will not be billed during your free trial.</div>
                <div>To keep your projects running after the trial end, upgrade to a paid option.</div>
              </span>
                </div>
        </ div>
        <a href="#">
                < div  class={ 'roundRectangleUpgrade'}>
                    <span >
                      <b>Upgrade</b> 
                    </span>
          </ div>
          </a>
        </ div>
        
      <div class="Frame2">
       <a href="#">
        < div  class= 'Action'>
          <img src={logoutlogo} alt="logo" />
          <span>Log out</span>
        </ div>
        </a>
        </div>
      
    
    </ div >
    <Outlet />
    </>
  )
}

