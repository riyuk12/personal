import React from 'react'

import Post from '../../components/dashboard/Post'

function UserProfile({user}) {
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
                    <h4>following {user?.socialConnections?.following.length}</h4>
                    <h4>followers {user?.socialConnections?.followers.length}</h4>
                    <h4>posts {user?.postsAndMedia?.uploadedMedia.length}</h4>
                </div>
            </div>
        </div>

        <div className="userpostscontainer">
            {/* {user?.postsAndMedia?.map((post)=>( <Post imgurl={post?.image_url} desc={post.description} username={user?.basicProfile?.username} profile_picture={user?.basicProfile?.profilePicture}/> ))} */}
            {console.log(user?.postsAndMedia)}
            {/* has issue with post display filter data from post.json */}
        </div>
    </div>
  )
}

export default UserProfile