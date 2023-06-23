import React from 'react'
import './online.css'

const Online = ({user}) => {
  const localUrl = "http://localhost:3000/assets/"
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