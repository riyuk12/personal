import React from 'react'
import {FavoriteOutlined, Comment, ShareRounded } from '@mui/icons-material'
import { useState } from 'react'
import './Post.css'

function Post({imgurl,desc,username,profile_picture}) {
    const [toggle,setToggle]=useState(false);

  return (
    <div className="post_container">
        <div className="header">
            <div className="pfp">
                <img src={profile_picture} alt="" />
            </div>
            <div className="post_username">{username}</div>
        </div>
        <div className="content">
            <img src={imgurl} alt="" />
        </div>
        <div className="footer">
            <div className="actions" style={{display:'flex',gap:'20px' ,justifyContent:'center'}}> <FavoriteOutlined sx={{color:'red'}} /> <Comment sx={{color:'#555'}}/> <ShareRounded sx={{color:'#555'}}/> </div>
            <description>{desc}</description>
        </div>
    </div>
  )
}

export default Post