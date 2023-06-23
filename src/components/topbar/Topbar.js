import React from 'react'
import './topbar.css'
import {Link} from 'react-router-dom'

const Topbar = () => {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <Link to="/" style={{textDecoration:"none"}}>
          <span className="logo">Social</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
            <i className="fa-solid fa-magnifying-glass fa-lg mx-2"></i>
            <input placeholder='Search for friend,post or video' className='searchInput'/>
        </div>
      </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className='topbarLink'>Homepage</span>
                <span className='topbarLink'>Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <i className="fa-solid fa-user fa-xl"></i>
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <i className="fa-brands fa-rocketchat fa-xl"></i>
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <i className="fa-solid fa-bell fa-xl"></i>
                    <span className="topbarIconBadge">1</span>
                </div>
            </div>
            <img src='/assets/person/1.jpg' alt=''className='topbarImg'/>
        </div>
    </div>
  )
}

export default Topbar
