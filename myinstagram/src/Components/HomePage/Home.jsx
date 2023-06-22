import React, { Component } from 'react';
import MainContent from '../MainContent/MainContent';
import NavBar from '../NavBar/NavBar';
import "./Home.css";

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = { }
    }
    render() {
        return (
        <div>
            <NavBar/>
            <MainContent/>
        </div>
        );
    }
}
export default Home ;