import React, { Component, useContext } from 'react';
import "./SignIN.css";
import {auth} from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth"; 
import { UserContext } from '../UserContext';

class SignIN extends Component {
    static contextType = UserContext;
    constructor(props){
    super(props);
    this.state = { 
        emailId : '',
        password: ''
    }
}

handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    });
}

login=()=>{
    signInWithEmailAndPassword(auth, this.state.emailId, this.state.password) // <-- Use this
    .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // localStorage.setItem("users", user)
        localStorage.setItem("users", JSON.stringify(user))
        this.context.setUserId(user.uid);
        window.location.reload();
        // ...
        })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
    });
}

    render() {
    return (
        <div>
            <input name="emailId" className='loginpage_text' onChange={this.handleChange} value={this.state.emailId} type="text" placeholder='Phone number, username, or email ' />
            <input name="password" className='loginpage_text' onChange={this.handleChange} value={this.state.password} type="password" placeholder='password' />
            <button className='login_button' onClick={this.login}>Log In</button>
        </div>
    );
}
}

export default SignIN;
