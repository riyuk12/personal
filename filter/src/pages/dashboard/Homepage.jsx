import React, { useEffect, useState } from 'react'
import './homepage.css'
import filter from '../../assets/filter.png'
import Post from '../../components/dashboard/Post'
import { Description } from '@mui/icons-material'
import { Filter } from '@mui/icons-material'

function Homepage() {
    const [posts,setposts]=useState([])

    useEffect(()=>{
        fetch('/src/pseudo_backend/posts.json')
        .then((res)=>{
            return  res.json()
        })
        .then((data)=>setposts(data))
        .catch((error)=>{console.log(error)})
    },[])

  return (
    <div className="cover">
        <div className="nav">
            <div className="logo">
                <img src={filter} />
            </div>
            <div className="menu_container">
                <div className="tab home"> home</div>
                <div className="tab explore">explore</div>
                <div className="tab create">create</div>
                <div className="tab profile">profile</div>
            </div>

        </div>
        <div className="main_container">
            <div className="stories_container">
                stories make a component
            </div>
            <div className="posts_container">
                {posts.map((post)=>( <Post imgurl={post?.image_url} desc={post?.description} username={post?.username} profile_picture={post?.profile_picture_url} /> ))} 
                
            </div>

            {/* empty main container create logic to switch between homepage,explore and profile */}

        </div>
        <div className="following">
            <div className="profile_link">
                <div className="user user1">
                    <img src={filter} />
                    <h2>riyuk</h2>
                </div>
            </div>
            <div className="suggestedusers">
                <div className="user user1">
                    <img src={filter} />
                    <h2>user1</h2>
                </div>
                <div className="user user2">
                    <img src="" />
                    <h2>user2</h2>
                </div>
                <div className="user user3">
                    <img src="" />
                    <h2>user3</h2>
                </div>
                <div className="user user4">
                    <img src="" />
                    <h2>user4</h2>
                </div>
                <div className="user user5">
                    <img src="" />
                    <h2>user5</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homepage