import React from 'react'
import './homepage.css'
import filter from '../../assets/filter.png'
import Post from '../../components/dashboard/Post'

function Homepage() {
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
                <Post />
            </div>

        </div>
        <div className="following">
            <div className="profile_link">
                riyuk
            </div>
            <div className="suggestedusers">
                <div className="user user1">user1</div>
                <div className="user user2">user2</div>
                <div className="user user3">user3</div>
                <div className="user user4">user4</div>
                <div className="user user5">user5</div>
            </div>
        </div>
    </div>
  )
}

export default Homepage