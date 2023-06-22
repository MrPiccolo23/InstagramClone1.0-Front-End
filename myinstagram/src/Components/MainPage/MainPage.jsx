import React, { Component } from 'react';
import Post from '../Post/Post';
import "./MainPage.css";
import uploadImage from "../../images/upload.png";
import { app } from "../firebase";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

class MainPage extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            postArray:[],
            progressBar: "",
        }
    }

    componentDidMount(){
        this.getPost();
    }

    getPost = () => {
        const user = JSON.parse(localStorage.getItem("users"));
        if(!user) {
            return;
        }
        
        const userId = user.uid;
        const thisContext=this;
        fetch(`http://localhost:8080/post/${userId}`)
        .then(response => response.json())
        .then(data => {
            thisContext.setState({postArray: data});
            console.log(data);
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
        });
    }

    upload = (event) => {
        const user = JSON.parse(localStorage.getItem("users"));
        if(!user) {
            return;
        }
        
        let image=event.target.files[0];
        const thisContext=this;
        if(image == null || image === undefined)
            return;

        const storage = getStorage(app);
        const storageRef = ref(storage, "images/" + image.name);
        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
            "state_changed",
            function (snapshot) {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                thisContext.setState({progressBar: progress});
            },
            function (error) {
                // Handle unsuccessful uploads
            },
            function () {
                getDownloadURL(uploadTask.snapshot.ref).then(function (downloadURL) {
                    console.log(downloadURL);
                    
                    let payload = {
                        "postId": Math.floor(Math.random()*100000).toString(),
                        "userId": user.uid,
                        "postPath": downloadURL,
                        "timeStamp": new Date().getTime(),
                        "likeCount": 0
                    }

                    const requestOptions ={
                        method: "POST",
                        headers: { 'Content-Type': 'application/json' },
                        body : JSON.stringify(payload),
                    }

                    fetch("http://localhost:8080/post",requestOptions)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        thisContext.getPost();
                    })
                    .catch(error =>{
    
                    })
                });
            }
        );
    }

    render() { 
        console.log(this.props.postImage);
        return ( 
            <div>
                <div className="mainpage__container">  
                    <div className="mainpage_divider"></div>
                    <div className="fileupload">
                        <label htmlFor="file-upload" >
                            <img className="mainpage_uploadicon" src={uploadImage} alt='' />
                        </label>
                        <input onChange={this.upload} id="file-upload" type="file"/>
                    </div>
                    <div className="mainpage_divider"></div>   
                </div>
                <div className="upload_text">{this.state.progressBar}</div>
                {
                        this.state.postArray.map((item,index)=> {
                        console.log(item);  
                        return <Post id={item.postId} userName={item.userName} postImage={item.postPath} likes={item.likeCount} />
                        })
                }
            </div>
        );
    }
}
export default MainPage;
