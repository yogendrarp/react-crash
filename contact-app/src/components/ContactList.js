import React, {useRef} from 'react';
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';


const ContactList = (props) =>{
    const inputEl = useRef("");
    const deleteContactHandler = (id)=>{
        props.getContactId(id);
    };

    const getSearchTerm=()=>{
        props.searchKeyWord(inputEl.current.value);
    }
    
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
            <div className="ui search" style={{marginTop:"1em"}}>
                <div className="ui icon input">
                    <input ref={inputEl}
                     type="text" 
                     placeholder="Search Contact" 
                     className="prompt" 
                     value={props.term} 
                     onChange={getSearchTerm}/>
                    <i className="ui search icon"></i>
                </div>
            </div>
            <div className="ui celled list">
                {
                    renderContactList.length>0?renderContactList:"No contacts available"
                }
            </div>
        </div>
    );
}

export default ContactList;