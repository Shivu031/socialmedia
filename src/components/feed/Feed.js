import React, { useEffect, useState } from 'react';
import './feed.css';
import Share from '../share/Share';
import Post from '../post/Post';
import axios from 'axios';


const Feed = ({username}) => {
  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async()=>{
      const res = username ? await axios.get("/posts/profile/"+username) : await axios.get("/posts/timeline/6491b3abc9cc0b931c36e0bb");
      setPosts(res.data);
    }
    fetchPosts();
  },[username])

  return (
    <div className='feed'>
      <div className="feedWrapper">
        <Share/>
        {posts.map(p=>(
          <Post key={p._id} post={p}/>
        ))}

      </div>
    </div>
  )
}

export default Feed