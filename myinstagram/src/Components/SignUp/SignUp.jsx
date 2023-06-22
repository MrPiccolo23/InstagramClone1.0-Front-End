import React, { Component } from 'react';
import "./SignUp.css";
import {storage, auth} from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";  // <-- Import this
class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = { 
            emailId : '',
            name: '',
            userName: '',
            password: ''
        }
    }

    newSignUp=()=>{
        createUserWithEmailAndPassword(auth, this.state.emailId, this.state.password) // <-- Use this
            .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            
            let payload = {
                "userId": user.uid,
                "userName": this.state.userName,
                "name": this.state.name,
                "profileImage": ""
            }

            const requestOptions ={
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body : JSON.stringify(payload),
            }

            fetch("http://localhost:8080/users",requestOptions)
            .then(response => response.json())
            .then(data => {
                // localStorage.setItem("users", user)
                localStorage.setItem("users", JSON.stringify(user))
                window.location.reload();

                

            })

            .catch(error =>{

            })

            })
            .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
            });
        }
    

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
        <div>
            <input name="emailId" className='loginpage_text' onChange={this.handleChange} value={this.state.emailId} type="text" placeholder='Mobile Number or Email ' />
            <input name="name" className='loginpage_text' onChange={this.handleChange} value={this.state.name} type="text" placeholder='Full Name ' />
            <input name="userName" className='loginpage_text' onChange={this.handleChange} value={this.state.userName} type="text" placeholder='Username' />
            <input name="password" className='loginpage_text' onChange={this.handleChange} value={this.state.password} type="password" placeholder='password' />
            <button className='login_button' onClick={this.newSignUp}>Sign Up</button>
        </div>
        );
    }
}
export default SignUp ;
