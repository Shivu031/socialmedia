import React from 'react'
import './online.css'

const Online = ({user}) => {
  const localUrl = "http://127.0.0.1:5000/images/"
  return (
    <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
            <img src={localUrl+user.profilePicture} alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername">{user.username}</span>
    </li>
  )
}

export default Online