import React, { Component } from 'react';
import "./NavBar.css";
import Grid from '@material-ui/core/Grid';
import insta_log from "../../images/logoinsta.png";
import home from "../../images/home.svg";
import message from "../../images/message.svg";
import find from "../../images/find.svg";
import react from "../../images/love.svg";
import Avatar from '@material-ui/core/Avatar';
import pp from "../../images/pp1.png";
import logoutImage from "../../images/logout.png";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = { }
    }

    handleLogout = async () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            localStorage.removeItem("users");
            if(this.props.navigate) {
                this.props.navigate('/'); 
            } 
            // else handle case when navigate is undefined
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <div className='navbar_barContent'>
                    <Grid container>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={3}>
                            <img className='navbar_logo' src={insta_log} width='105px' alt=""/>
                        </Grid>
                        <Grid item xs={3}>
                            <input type="text" className='navbar_searchBar' placeholder='Search' />
                        </Grid>
                        <Grid item xs={3} style={{"display":"flex"}}>
                            <img className='navbar_img' src={home} width='25px' alt="" />
                            <img className='navbar_img' src={message}  width='25px'alt="" />
                            <img className='navbar_img' src={find} width='25px' alt="" />
                            <img className='navbar_img' src={react}  width='25px'alt="" />
                            <Avatar src={pp} className='navbar_img' style={{'maxWidth':'25px','maxHeight':'25px'}} />
                            <div className='navbar_img' onClick={this.handleLogout}>
                                <img src={logoutImage} width='25px' alt="Logout" />
                                <span>Logout</span>
                            </div>
                        </Grid>
                        <Grid item xs={1}></Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

const NavBarWithNavigation = () => {
    const navigate = useNavigate();
    return <NavBar navigate={navigate} />;
}

export default NavBarWithNavigation;
