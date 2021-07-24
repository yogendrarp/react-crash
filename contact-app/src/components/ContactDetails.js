import React from 'react';
import {Link} from 'react-router-dom';
import user from '../images/user.png';


const ContactDetails = (props) =>{
    const {name,email} = props.location.state.contact;
    return(
        <div className="main" style={{marginTop:"5em"}}>
            <div className="ui card centered">
                <img src={user} alt="user"></img>
                <div className="content">
                    <div className="header"> {name}</div>
                    <div className="description">{email}</div>
                </div>
            </div>
            <div className="center-div">
                <Link to="/">
                <button className="ui button pink center">Back to Contact List</button></Link>
            </div>
        </div>
    );
};

export default ContactDetails;