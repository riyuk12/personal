import React from 'react'
import { Modal ,Button } from '@mui/material'
import { useState } from 'react'
import Post from './Post'



function ModalPostViewer({open,onClose,post}) {

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"

      sx={{'& .MuiModal':{
        display:'flex' ,
        justifyContent:'center',
        alignItems:'center'
      }}}
    >
      <div className="modal-content">
        <Button onClick={onClose}>Close Modal</Button>
        <Post  imgurl={post?.image_url} desc={ post?.description} username={post?.username} profile_picture={post?.profile_picture_url} />
      </div>
    </Modal>
  )
}

export default ModalPostViewer