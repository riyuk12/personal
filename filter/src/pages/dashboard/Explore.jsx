import React from 'react'
import ExploreCards from '../../components/dashboard/ExploreCards'

function Explore({posts}) {
  return (
    <div className='explore_container'>
        {posts.map((post)=>(<ExploreCards post={post}/>))}
    </div>
  )
}

export default Explore