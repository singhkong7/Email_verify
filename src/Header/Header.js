import React from 'react'
import "./Header.scss";
import NotificationsNoneTwoToneIcon from '@material-ui/icons/NotificationsNoneTwoTone';
import {IoMdSearch} from "react-icons/io";
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';
function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <img src="https://www.xemailverify.com/assets/img/logoXemail.png" alt=" " />
                <input type="text"  placeholder="Search for" />
                    <IoMdSearch style={{backgroundColor:"blueviolet",color:"white",height:"40px",width:"40px" ,marginLeft:"0px"}} />
            </div>
            <div className="header_right">
                <a href=" "><NotificationsNoneTwoToneIcon style={{height:"8vh",width:"8vh"}} /></a>
                <a href=" "><EmailTwoToneIcon style={{height:"8vh",width:"8vh"}} /></a>
                <p style={{marginTop:"10px",marginLeft:"4vh"}}>Priyansh Singh</p>
                <img src="/DSC_1247.JPG" alt="" className="round_image" style={{marginLeft:"2vh"}}  />
            </div>
        </div>
    )
}

export default Header
