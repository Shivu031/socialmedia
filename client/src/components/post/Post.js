import React, {useContext, useEffect, useState } from 'react'
import "./post.css"
import axios from 'axios';
import {Link} from 'react-router-dom';
import {format} from 'timeago.js';
import { AuthContext } from '../../context/AuthContext';

const Post = ({post}) => {
    const [like,setLike] = useState(post.likes.length);
    const [isLiked,setIsLiked] = useState(false);
    const localUrl = "http://127.0.0.1:5000/images/"

    const [user,setUser] = useState({});
    const {user:currentUser} = useContext(AuthContext);
    

    useEffect(()=>{
        setIsLiked(post.likes.includes(currentUser._id))
    },[currentUser._id,post.likes])

    useEffect(()=>{
        const fetchUser = async()=>{
            const res =  await axios.get(`/users?userId=${post.userId}`);
            setUser(res.data);
        }
        fetchUser();
    },[post.userId])
    
    const likeHandler = ()=>{
        try{
            axios.put("/posts/"+post._id+"/like",{userId:currentUser._id})
        }catch(err){

        }
        setLike(isLiked ? like-1:like+1)
        setIsLiked(!isLiked)
    }
    return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <Link to={`profile/${user.username}`}>
                        <img className='postProfileImg' src={user.profilePicture ? localUrl+user.profilePicture : localUrl+"person/noAvatar.png"} alt=''/>
                    </Link>
                    <span className="postUsername">{user.username}</span>
                    <span className="postDate">{format(post.createdAt)}</span>
                </div>
                <div className="postTopRight">
                    <i className="fa-solid fa-list"></i>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.description}</span>
                <img className='postImg' src={localUrl+post.img} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src={`${localUrl}like.png`}onClick={likeHandler} alt=''/>
                    <img className='likeIcon' src={`${localUrl}heart.png`}onClick={likeHandler} alt=''/>
                    <span className="postLikeCounter">{like} people like it</span>
                </div>
                <div className="postBottomRight"></div>
                <span className="postCommentText">{post.comment} comments</span>
            </div>
        </div>
    </div>
  )
}

export default Post