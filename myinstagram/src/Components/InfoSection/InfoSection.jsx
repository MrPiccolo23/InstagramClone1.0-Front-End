import { Avatar } from '@material-ui/core';
import React, { Component } from 'react';
import "./InfoSection.css";
import imageSrc from "../../images/pp4.jpeg"

class InfoSection extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userName: "Anonymous", // Default username is "Anonymous"
        }
    }

    componentDidMount() {
        const user = JSON.parse(localStorage.getItem("users"));
        if(user && user.userName) { // Check if "userName" is available in "user"
            this.setState({userName: user.userName});
        }
    }

    render() {
        return (
            <div>
                <div className='info_container'>
                    <Avatar src={imageSrc} className="info_image"/>
                    <div className='info_content'>
                        <div className='info_username'>{this.state.userName}</div>
                        <div className='info_description'>Description</div>
                    </div>
                </div>
            </div>
        );
    }
}
export default InfoSection ;
