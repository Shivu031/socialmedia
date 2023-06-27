import React from 'react'
import './closeFriend.css'

const CloseFriend = ({user}) => {
  const localUrl = "http://127.0.0.1:5000/images/"
  return (
    <li className="sidebarFriend">
        <img className='sidebarFriendImg' src={localUrl+user.profilePicture} alt=''/>
        <span className="sidebarFriendName">{user.username}</span>
    </li>
  )
}

export default CloseFriend
