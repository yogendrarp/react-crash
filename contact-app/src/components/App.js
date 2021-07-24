import React, {useState, useEffect} from 'react';
import {uuid} from 'uuidv4'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';

function App() {
  const LOCAL_STORAGE_KEY="contacts";
  const [contacts, setContacts] = useState([]);
  
  const addContactHandler = (contact) =>{
    setContacts([...contacts, {id:uuid(),...contact}]);
  };

  const removeContactHandler =(id)=>{
    const newContactList  = contacts.filter((contact)=>{
      return contact.id!==id;
    });
    setContacts(newContactList);
  }

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrievedContacts){
      setContacts(retrievedContacts);
    }
  }, []);

  return (
    <div className="ui container">
      <Router>
        <Header/>
        <Switch>
          <Route 
          path="/" 
          exact 
          render={(props) => (
            <ContactList 
            {...props}
            contacts={contacts}
            getContactId={removeContactHandler}
            />
          )}
          />
          <Route 
          path="/add" 
          render={(props) =>(

            <AddContact {...props} addContactHandler={addContactHandler}/>
          )}
          />
        </Switch>
          <Route
          path="/contact/:id" component={ContactDetails} 
          />
      </Router>
    </div>
  );
}

export default App;
