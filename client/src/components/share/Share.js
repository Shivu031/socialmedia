import React, { useContext, useRef, useState } from "react";
import "./share.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const Share = () => {
    const {user} = useContext(AuthContext);
    const localUrl = "http://127.0.0.1:5000/images/"
    const description = useRef();
    const [file,setFile] = useState(null);
   
    const submitHandler = async (e)=>{
        e.preventDefault()
        const newPost = {
            userId: user._id,
            description:description.current.value
        }
        if(file){
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name",fileName);
            data.append("file",file);
            newPost.img = fileName;
            try{
                await axios.post("/upload",data);
            }catch(err){
                console.log(err);
            }
        }
        try{
            await axios.post("/posts",newPost)
            window.location.reload();
        }catch(err){
            
        }
    }

  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className='shareProfileImg' src={user.profilePicture ? localUrl+user.profilePicture : localUrl+"person/noAvatar.png"} alt=""/>
                <input placeholder={"What's in your mind "+ user.username + "?"} className="shareInput" ref={description} />
            </div>
            <hr className="shareHr"/>
            {file && (
                <div className="shareImgContainer">
                    <i className="fa-solid fa-xmark" onClick={()=>setFile(null)}></i>
                    <img src={URL.createObjectURL(file)} alt="" className="shareImg"/>
                </div>
            )}
            <form className="shareBottom" onSubmit={submitHandler}>
                <label className="shareOptions">
                    <div htmlFor="file" className="shareOption">
                        <i className="fa-solid fa-photo-film fa-lg"></i>
                        <span className="shareOptionText mx-2">Photo or Video</span>
                        <input style={{display:"none"}} type="file" id="file" accept=".png,.jpg,.jpeg" onChange={(e)=>setFile(e.target.files[0])}/>
                    </div>
                    <div className="shareOption">
                        <i className="fa-solid fa-tag fa-xl"></i>
                        <span className="shareOptionText mx-2">Tag</span>
                    </div>
                    <div className="shareOption">
                        <i className="fa-solid fa-location-dot fa-xl" ></i>
                        <span className="shareOptionText mx-2">Location</span>
                    </div>
                    <div className="shareOption">
                        <i className="fa-solid fa-face-smile fa-xl"></i>
                        <span className="shareOptionText mx-2">Feelings</span>
                    </div>
                </label>
                <button className="shareButton" type="submit">Share</button>
            </form>
        </div>
    </div>
  );
};

export default Share;
