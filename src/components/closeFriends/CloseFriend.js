import React from 'react'
import './closeFriend.css'

const CloseFriend = ({user}) => {
  const localUrl = "http://localhost:3000/assets/"
  return (
    <li className="sidebarFriend">
        <img className='sidebarFriendImg' src={localUrl+user.profilePicture} alt=''/>
        <span className="sidebarFriendName">{user.username}</span>
    </li>
  )
}

export default CloseFriend
