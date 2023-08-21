import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Register() {

  const [name,setname]=useState('');
  const [username,setusername]=useState('');
  const [password,setpassword]=useState('');

  const signup=()=>{
      console.log(name,username,password)
      //add checks
      // add a new user to db
  }
  

  return (
    <>
        <div className="form_container">
          
          <div className="container-input">
            <h4>name</h4>
            <div className="username_container">
              <input type="text" placeholder='name' className="username" onChange={(e)=>{setname(e.target.value)}} />
            </div>
          </div>
          <div className="container-input">
            <h4>username</h4>
            <div className="username_container">
              <input type="text" placeholder='username' className="username" onChange={(e)=>{setusername(e.target.value)}} />
            </div>
          </div>
          <div className="container-input">
            <h4>password</h4>
            <div className="username_container">
              <input type="text" placeholder='password' className="username"  onChange={(e)=>{setpassword(e.target.value)}}/>
            </div>
          </div>

          
          <button className='login_button' onClick={signup}> sign up </button>
        </div>
        <Link to='/'>or Login</Link>
    </>
  )
}

export default Register