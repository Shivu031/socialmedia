import React from 'react'
import "./rightbar.css"
import {Users} from '../../dummyData'
import Online from '../online/Online'

const Rightbar = ({user}) => {

  const HomeRightbar = ()=>{
    return(
      <>
      <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" alt="" />
          <span className="birthdayText"><b>Shiv</b> and <b>3 other friends</b> have a birthday today</span>
        </div>
        <img src="/assets/ad.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u=>(
            <Online key={u.id} user={u}/>
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = ()=>{
    const localUrl = "http://127.0.0.1:5000/images/"
    return (
      <>
      <h4 className='rightbarTitle'>User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">{user.city}</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">{user.from}</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">{user.relationship===1 ? "Single" : user.relationship===2 ? "Married" : "."}</span>
        </div>
      </div>
      <h4 className='rightbarTitle'>User friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src={`${localUrl}person/1.jpg`} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">Shivi</span>
        </div>
      </div>
      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}

export default Rightbar
