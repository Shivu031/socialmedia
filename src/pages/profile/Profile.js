import React, {useEffect,useState} from 'react'
import "./profile.css"
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import axios from 'axios';
import {useParams} from 'react-router';


const Profile = () => {

  const [user,setUser] = useState({});
  const username = useParams().username;
  
    useEffect(()=>{
        const fetchUser = async()=>{
            const res =  await axios.get(`/users?username=${username}`);
            setUser(res.data);
        }
        fetchUser();
    },[username])

  const localUrl = "http://localhost:3000/assets/"
  return (
    <>
      <Topbar/>
      <div className="profile">
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                <img src={user.coverPicture || localUrl+"Person/noCover.png"} alt="" className="profileCoverImg" />
                <img src={user.profilePicture || localUrl+"Person/noAvatar.png"} alt="" className="profileUserImg" />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">{user.username}</h4>
                    <span className="profileInfoDesc">{user.description}</span>
                </div>
            </div>
            <div className="profileRightBottom">
            <Feed username={username}/>
            <Rightbar user={user}/>
            </div>
        </div>
        
      </div>
      
    </>
  )
}

export default Profile
