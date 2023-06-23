import React, { useState } from 'react'
import "./post.css"
import { Users } from '../../dummyData'

const Post = ({post}) => {
    const [like,setLike] = useState(post.like);
    const [isLiked,setIsLiked] = useState(false);
    const localUrl = "http://localhost:3000/assets/"
    
    const likeHandler = ()=>{
        setLike(isLiked ? like-1:like+1)
        setIsLiked(!isLiked)
    }
    return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImg' src={Users.filter(u=>u.id===post.userId)[0].profilePicture} alt=''/>
                    <span className="postUsername">{Users.filter(u=>u.id===post.userId)[0].username}</span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <i className="fa-solid fa-list"></i>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className='postImg' src={localUrl+post.photo} alt="" />
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