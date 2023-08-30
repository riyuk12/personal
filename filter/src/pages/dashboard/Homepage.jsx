import React, { useEffect, useState } from 'react'
import './homepage.css'
import filter from '../../assets/filter.png'
import Post from '../../components/dashboard/Post'
import { Description } from '@mui/icons-material'
import { Filter } from '@mui/icons-material'
import Feed from './Feed'
import Explore from './Explore'
import UserProfile from './UserProfile'
import { useDataLayerValue } from '../../components/datalayer/Datalayer'

function Homepage() {
    const [posts,setposts]=useState([])
    const [activetab,setactivetab]=useState('home'); 
    const [{user},dispatch]=useDataLayerValue()
    const [activeProfile,setactiveProfile]=useState(user) 
    const [userdata,setuserdata]=useState([]) 

    useEffect(()=>{
        fetch('/src/pseudo_backend/posts.json')
        .then((res)=>{
            return  res.json()
        })
        .then((data)=>setposts(data))
        .catch((error)=>{console.log(error)})
    },[])

    useEffect(()=>{
        fetch('/src/pseudo_backend/data.json')
        .then((res)=>{
            return  res.json()
        })
        .then((data)=>setuserdata(data))
        .catch((error)=>{console.log(error)})

        setuserdata(userdata.filter((elem)=>elem.basicProfile.username!=user.basicProfile.username))
    },[])


  return (
    <div className="cover">
        <div className="nav">
            <div className="logo" onClick={()=>setactivetab("home")}>
                <img src={filter} />
            </div>
            <div className="menu_container">
                <div className="tab home" onClick={()=>setactivetab("home")}> home</div>
                <div className="tab explore" onClick={()=>setactivetab("explore")}>explore</div>
                {/* <div className="tab create" onClick={()=>setactivetab("create")}>create</div> */}
                <div className="tab profile" onClick={()=>{setactivetab("profile")}}>profile</div>
            </div>

        </div>
        <div className="main_container">
            {(activetab=="home") && <Feed posts={posts}/>}
            {(activetab=="explore") && <Explore posts={posts} />}
            {(activetab=="profile") && <UserProfile user={activeProfile } posts={posts} />}

            {/* could use router to make better look it up */}
        </div>
        <div className="following">
            <h1>Suggested Users</h1>
            <div className="suggestedusers">
                
                {userdata.map((elem)=>(
                    <div className="user user1" 
                    onClick={()=>{
                        setactivetab("profile")
                        setactiveProfile(elem)
                        }}  >
                        <img src={filter} />
                        <h2>{elem.basicProfile.username}</h2>
                    </div>
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default Homepage