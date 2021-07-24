import React from 'react';
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';


const ContactList = (props) =>{
    const deleteContactHandler = (id)=>{
        props.getContactId(id);
    };
    
    const renderContactList =  props.contacts.map((contact)=>{
        return (
          <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />
        );
    });
    return(
        <div className="main" style={{marginTop:"5em"}}>
            <h2>Contact List</h2>
            <Link to="/add">
                <button className="ui button pink inverted left">Add Contact</button>
            </Link>
            <div className="ui celled list">
                {renderContactList}
            </div>
        </div>
    );
}

export default ContactList;