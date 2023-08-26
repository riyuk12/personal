import React, { useEffect } from 'react'

import { useState } from 'react'
import Post from '../../components/dashboard/Post'
import ExploreCards from '../../components/dashboard/ExploreCards'

function UserProfile({user,posts}) {
    const [userPosts,setuserPosts]=useState(posts.filter(post=>post.username==user.basicProfile.username))
  return (
    <div className='userDetailsContainer'>
        
        <div className="userdetails">
            <div className="userprofilesection">
                <img src={user?.basicProfile?.profilePicture} className="userprofile" />
            </div>
            <div className="userstatdetails">
                <div className="userProfiletext">
                    <div className="user-name">{user?.basicProfile?.username}</div>
                    <div className="bio">{user?.basicProfile?.bio}</div>
                    < a className="bio">{user?.basicProfile?.website}</a>
                </div>
                <div className="userstats">
                    <h4>following {user?.analyticsAndInsights?.engagementMetrics?.following}</h4>
                    <h4>followers {user?.analyticsAndInsights?.engagementMetrics?.followers}</h4>
                    <h4>posts {user?.postsAndMedia?.uploadedMedia.length}</h4>
                </div>
            </div>
        </div>

        <div className="userpostscontainer">
            {/* {console.log(userPosts)} */}
            {userPosts.map((post)=>(<ExploreCards post={post}/>))}
            {/* has issue with post display filter data from post.json */}
        </div>
    </div>
  )
}

export default UserProfile