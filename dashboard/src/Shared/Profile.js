import React, { useState ,useEffect ,useRef}  from 'react'
import profilepic from '../Assets/Dashboard/Ellipse 4.svg'
import dropdown from '../Assets/Dashboard/arrow-square-down.svg'
import bell from '../Assets/Dashboard/notification-bing.svg'
import Activity from '../Components/Dashboard/Activity'
import Profilepic1 from '../Assets/Dashboard/Ellipse 5.svg'
import Profilepic2 from '../Assets/Dashboard/Ellipse 6.svg'
import line from '../Assets/Dashboard/Vector 2.svg'
import './profile.css'

export default function Profile() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    
    const notificationGroupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationGroupRef.current && !notificationGroupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

    return (
        <>
            <div class="profileLayout">
           
                <div class="bell">
                <a href="#" onClick={toggleDropdown}>
                        <img src={bell} alt="notification" /></a>
                        
            </div>
            {isOpen && (
       <div  ref={notificationGroupRef} className="notification-group">
                        <div className="notification-list">
                        
                            <a href="#">
                            <div className="notification-item"><Activity name="Alex Morgan" profilepic={Profilepic1} type="message" /></div>
                                </a>
                                <img src={line} style={{ paddingTop: "10px", paddingBottom: "10px" }} alt="line" />

            <a href="#">
            <div className="notification-item"><Activity name="Mujo Prosper" profilepic={Profilepic2} type="connection request" /></div>
            </a>

       </div>
     </div>
      )}
            <div class="profile">
                <img src={profilepic} style={{width: "45px",height: "45px",paddingRight:"20px"}} alt="profilePic" />
                <span style={{paddingRight:"10px"}}>Jacob Frost</span>
                <img src={dropdown} alt="dropdown"/>
            </div>
        </div>
        </>
    )
}