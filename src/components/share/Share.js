import React from "react";
import "./share.css";

const Share = () => {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className='shareProfileImg' src="/assets/person/1.jpg" alt=""/>
                <input placeholder="What's in your mind?" className="shareInput" />
            </div>
            <hr className="shareHr"/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <i className="fa-solid fa-photo-film fa-lg"></i>
                        <span className="shareOptionText mx-2">Photo or Video</span>
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
                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
  );
};

export default Share;
