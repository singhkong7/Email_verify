import React from "react";
import './Dashboard.scss';
import {IoMdSpeedometer} from "react-icons/io";
import {FaUserCheck,FaFileDownload,FaHandHoldingUsd} from "react-icons/fa";
import VerifiedUserTwoToneIcon from '@material-ui/icons/VerifiedUserTwoTone';
import ContactMailTwoToneIcon from '@material-ui/icons/ContactMailTwoTone';
import ListTwoToneIcon from '@material-ui/icons/ListTwoTone';
import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';
import PaymentTwoToneIcon from '@material-ui/icons/PaymentTwoTone';
function Dashboard() {
  return (
    <div className="section">
        <div className="dashboard">
        <h4> <IoMdSpeedometer /> Dashboard</h4>
        <hr  />
        <div className="dashboard_body">
            <h4>@ EMAIL VERIFICATION</h4>
            <h6 className="row-col-2"><FaUserCheck/> Single email verification</h6>
            <h6 className="row-col-2"><ContactMailTwoToneIcon/> Bulk email verification</h6>
            <h6 className="row-col-2"><FaFileDownload/> Download verified result</h6>
            <h6 className="row-col-2"><VerifiedUserTwoToneIcon/> Email verification API</h6>
        </div>
        <hr />
        <div className="dashboard_body">
            <h4><FaHandHoldingUsd/> INTEGRATION</h4>
            <h6 className="row-col-2"><ListTwoToneIcon/> My Apps</h6>
            <h6 className="row-col-2"><DescriptionTwoToneIcon/> Email Tools</h6>
        </div>
        <hr />
        <div className="dashboard_body">
            <h4><FaHandHoldingUsd/> BILLING</h4>
            <h6 className="row-col-2"><ListTwoToneIcon/> Manage Plans</h6>
            <h6 className="row-col-2"><DescriptionTwoToneIcon/> Invoices</h6>
            <h6 className="row-col-2"><PaymentTwoToneIcon/> Buy Credits</h6>
        </div>
    </div>
    <div className="body">
        <h3>Single Email verification</h3>
        <div className="body_center">
            <h5>Enter your email id below and check the results!</h5>
            <div className="body_text">
                <input type="text" placeholder="Enter Email....." className="input" />
                <button type="button">Verify</button>
            </div>
        </div>
    </div>
    </div>
  );
}

export default Dashboard;
