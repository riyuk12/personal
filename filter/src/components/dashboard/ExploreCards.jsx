import React from 'react'
import { FavoriteRounded } from '@mui/icons-material'

function ExploreCards({post}) {
  return (
    <div className='explore_post_container'>
        <div className="imagebase">
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