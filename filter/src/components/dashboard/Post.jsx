import React from 'react'
import {FavoriteOutlined, Comment, ShareRounded } from '@mui/icons-material'
import { useState } from 'react'

function Post({imgurl,desc,user}) {
    const [toggle,setToggle]=useState(false);

  return (
    <div className="post_container">
        <div className="header">
            <div className="pfp">
                <img src={user?.profile_picture} alt="" />
            </div>
            <div className="username">{user?.name}</div>
        </div>
        <div className="content">
            <img src={imgurl} alt="" />
        </div>
        <div className="footer">
            <div className="actions" style={{display:'flex',gap:'20px' ,justifyContent:'center'}}> <FavoriteOutlined /> <Comment sx={{color:'#555'}}/> <ShareRounded sx={{color:'#555'}}/> </div>
            <description>{desc}</description>
        </div>
    </div>
  )
}

export default Post