import React from 'react'
import "./profile.css"
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'


const Profile = () => {
  const localUrl = "http://localhost:3000/assets/"
  return (
    <>
      <Topbar/>
      <div className="profile">
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                <img src={`${localUrl}person/3.jpg`} alt="" className="profileCoverImg" />
                <img src={`${localUrl}person/1.jpg`} alt="" className="profileUserImg" />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Shivu</h4>
                    <span className="profileInfoDesc">Hello Everyone</span>
                </div>
            </div>
            <div className="profileRightBottom">
            <Feed/>
            <Rightbar profile/>
            </div>
        </div>
        
      </div>
      
    </>
  )
}

export default Profile
