import React from 'react'
import "./sidebar.css"
import {Users} from '../../dummyData'
import CloseFriend from '../closeFriends/CloseFriend'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem my-4">
            <i className="fa-solid fa-rss fa-lg"></i>
            <span className="sidebarListItemText mx-3">Feed</span>
          </li>
          <li className="sidebarListItem my-4">
            <i className="fa-brands fa-rocketchat fa-lg"></i>
            <span className="sidebarListItemText mx-3">Chat</span>
          </li>
          <li className="sidebarListItem my-4">
            <i className="fa-solid fa-circle-play fa-lg"></i>
            <span className="sidebarListItemText mx-3">Videos</span>
          </li>
          <li className="sidebarListItem my-4">
            <i className="fa-solid fa-user-group fa-lg"></i>
            <span className="sidebarListItemText mx-3">Groups</span>
          </li>
          <li className="sidebarListItem my-4">
            <i className="fa-solid fa-bookmark fa-lg"></i>
            <span className="sidebarListItemText mx-3">Bookmarks</span>
          </li>
          <li className="sidebarListItem my-4">
            <i className="fa-regular fa-circle-question fa-lg"></i>
            <span className="sidebarListItemText mx-3">Questions</span>
          </li>
          <li className="sidebarListItem my-4">
            <i className="fa-solid fa-shop fa-lg"></i>
            <span className="sidebarListItemText mx-3">Marketplace</span>
          </li>
          <li className="sidebarListItem my-4">
            <i className="fa-regular fa-calendar-plus fa-lg"></i>
            <span className="sidebarListItemText mx-3">Events</span>
          </li>
          <li className="sidebarListItem my-4">
            <i className="fa-solid fa-book fa-lg"></i>
            <span className="sidebarListItemText mx-3">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className='sidebarHr'/>
        <ul className="sidebarFriendList">
          {Users.map(u=>(
            <CloseFriend key={u.id} user={u}/>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
