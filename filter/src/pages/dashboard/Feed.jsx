import React, { useEffect } from 'react'
import Post from '../../components/dashboard/Post'

function Feed({posts}) {
  
  return (
    <>
            <div className="posts_container">
                {posts.map((post)=>( <Post imgurl={post?.image_url} desc={post?.description} username={post?.username} profile_picture={post?.profile_picture_url} /> ))} 
            </div>
    </>
  )
}

export default Feed