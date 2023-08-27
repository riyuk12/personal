import React from 'react'
import { FavoriteRounded } from '@mui/icons-material'
import { useState } from 'react'
import ModalPostViewer from './ModalPostViewer';

function ExploreCards({post}) {
  const [open,setOpen]=useState(false);

  const handleOpen=()=>{
    setOpen(true)
    console.log("settrue")
  }
  const handleClose=()=>{
    setOpen(false)
    console.log("setfalse")
  }
  

  return (
    <div className='explore_post_container' >
      <ModalPostViewer open={open} onClose={handleClose} post={post}/>
        <div className="imagebase" onClick={handleOpen}>
            <img src={post?.image_url}  />
            <div className="card_cover">
                <FavoriteRounded />
                <h4>{post?.like}</h4>
            </div>
        </div>
    </div>
  )
}

//add an onclick event to imagebase and open a modal showing post component with the relevant data of post
export default ExploreCards