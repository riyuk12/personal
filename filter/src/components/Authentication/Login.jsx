import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {VisibilityOutlined,VisibilityOffOutlined} from '@mui/icons-material'

function Login() {

  const [passvisible,setpassvisible]=useState(false);

  return (
    <>
        <div className="form_container">
          
          <div className="container-input">
            <h4>username</h4>
            <div className="username_container">
              <input type="text" placeholder='username' className="username" />
            </div>
          </div>

          <div className="container-input">
            <h4>password</h4>
            <div className="pass_container">
              <input type={passvisible?'text':'password'} placeholder='password' className="password" />
              <button className='toggle_password_view' onClick={()=>{setpassvisible(!passvisible)}}> {passvisible?<VisibilityOutlined sx={{color:'#8EC3B0'}}/>:<VisibilityOffOutlined sx={{color:'#8EC3B0'}}/>}</button>
            </div>
          </div>
          <button className='login_button'> login </button>
        </div>
        <Link className='register_link' to='/register'>or Register</Link>
    </>
  )
}

export default Login