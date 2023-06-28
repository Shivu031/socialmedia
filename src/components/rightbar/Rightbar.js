import React, { useContext, useEffect,useState } from 'react'
import "./rightbar.css"
import {Users} from '../../dummyData'
import Online from '../online/Online'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const Rightbar = ({user}) => {
  const localUrl = "http://127.0.0.1:5000/images/"
  const [friends,setFriends] = useState([]);
  const {user:currentUser,dispatch} = useContext(AuthContext);
  const [followed,setFollowed] =useState(false);

  useEffect(()=>{
    setFollowed(currentUser.followings.includes(user?._id));
  },[currentUser,user]);

  useEffect(()=>{
    const getFriends = async()=>{
      try{
        const friendList = await axios.get("/users/friends/"+user._id);
        setFriends(friendList.data);
      }catch(err){
        console.log(err);
      }
    };
    getFriends();
  },[user]);

  const handleClick = async()=>{
    try{
      if(followed){
        await axios.put("/users/"+user._id+"/unfollow",{userId:currentUser._id});
        dispatch({type:"UNFOLLOW",payload:user._id});
      }else{
        await axios.put("/users/"+user._id+"/follow",{userId:currentUser._id});
        dispatch({type:"FOLLOW",payload:user._id});
      }
    }catch(err){
      console.log(err);
    }
    setFollowed(!followed)
  };

  const HomeRightbar = ()=>{
    return(
      <>
      <div className="birthdayContainer">
          <img className="birthdayImg" src={`${localUrl}gift.png`} alt="" />
          <span className="birthdayText"><b>Shiv</b> and <b>3 other friends</b> have a birthday today</span>
        </div>
        <img src={`${localUrl}ad.jpg`} alt="" className="rightbarAd" />
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
    
    return (
      <>
      {user.username !== currentUser.username && (
        <button className="rightbarFollowButton" onClick={handleClick}>
          {followed ? "Unfollow " : "Follow "}
          {followed ? <i className="fa-solid fa-minus"></i> : <i className="fa-solid fa-plus"></i>}
        </button>
      )}
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
        {friends.map((friend)=>(
          <Link to={"/profile/"+friend.username} style={{textDecoration:"none"}}>
            <div className="rightbarFollowing">
              <img src={friend.profilePicture ? localUrl+friend.profilePicture : localUrl+"person/noAvatar.png"} alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">{friend.username}</span>
            </div>
          </Link>
        ))}
        
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
