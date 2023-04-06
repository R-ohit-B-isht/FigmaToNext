import React from "react";
import './activity.css'

export default function Activity(props) {
    return (<>
        <div class="activity">
            <img src={props.profilepic} style={{width: '36px',height: '36px',marginRight:"15px"}} alt="profilepic" />
            <span><b>{props.name}</b> sent you a <b>{props.type}</b></span>
         </div>
    </>)
}