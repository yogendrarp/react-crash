import React from 'react';

class AddContact extends React.Component{
    render(){
        return(
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form">
                    <div className="field">
                        <label for="name">Name</label>
                        <input type="text" name="name" id="name" placeholder="Name"></input>
                    </div>
                    <div className="field">
                        <label for="email">Email</label>
                        <input type="text" name="email" id="email" placeholder="email"></input>
                    </div>
                    <button className="ui button pink">Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;