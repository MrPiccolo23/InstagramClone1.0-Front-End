import { Avatar } from '@material-ui/core';
import React, { Component } from 'react';
import "./StatusBar.css";
import statusimg from "../../images/pp1.png"
import uploadImage from "../../images/statusadd.png"
import {storage,auth} from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

class StatusBar extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            statusList:[]
        }
    }

    componentDidMount(){
        this.getData();
    }

    getData=()=>{
        const user = JSON.parse(localStorage.getItem("users"));
        if(user) {
            const userId = user.uid;
            fetch(`http://localhost:8080/status/${userId}`)
            .then(response => response.json())
            .then(data => {
                this.setState({statusList: data});
            });
        }
        // else handle case when user is null
    }

    uploadStatus =(event)=>{
        const user = JSON.parse(localStorage.getItem("users"));
        if(!user) {
            // handle case when user is null
            return;
        }

        let image=event.target.files[0];
        const thisContext=this;
        if(image == null || image === undefined)
            return;
    
        const storageRef = ref(storage, "status/" + image.name);
        var uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
            "state_changed",
            function (snapshot) {
            },
            function (error) {
            },
            function () {
            getDownloadURL(uploadTask.snapshot.ref).then(function (downloadURL) {
                console.log(downloadURL);

                let payload = {
                    "statusId": Math.floor(Math.random()*100000).toString(),
                    "userId": JSON.parse(localStorage.getItem("users")).uid,
                    "path": downloadURL,
                    "timeStamp": new Date().getTime()
                }
    
                const requestOptions ={
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body : JSON.stringify(payload),
                }
    
                fetch("http://localhost:8080/status",requestOptions)
                .then(response => response.json())
                .then(data => {
                    thisContext.getData();
                })
                .catch(error =>{
    
                })
                
            })
            }
        );
    }   

    render() { 
        return ( 
        <div>
            <div className="statusbar_container">
            <div className="fileupload">
                <label htmlFor="file-upload-status" >
                    <img className="statusbar_upload" src={uploadImage} width="55px" height="55px" alt='' />
                </label>
                    <input id="file-upload-status" onChange={this.uploadStatus} type="file"/>
            </div>
                {
                    this.state.statusList.map((item,index)=>(
                        <div className="status">
                            <Avatar className="statusbar_status" src={item.path} />
                            <div className="statusbar_text">{item.userName}</div>
                        </div>
                    ))
                }
            </div>
        </div>
        );
    }
}
export default StatusBar ;
