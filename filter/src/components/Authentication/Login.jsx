import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {VisibilityOutlined,VisibilityOffOutlined, Verified} from '@mui/icons-material'
import { useDataLayerValue } from '../datalayer/Datalayer';




function Login({setverified ,verified}) {

  //normal vars
  const [{user},dispatch]=useDataLayerValue();
  const [passvisible,setpassvisible]=useState(false);
  const [inputerror,setinputerror]=useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //fetch data
  const [logindata,setLogindata]=useState([])

  //handlers
  const handleUsernameChange = e => setUsername(e.target.value);
  const handlePasswordChange = e => setPassword(e.target.value);



  useEffect(()=>{
    fetch('/src/pseudo_backend/userinfo.json')
    .then((res)=>res.json())
    .then(
      (data)=>{
        setLogindata(data)
      })
    .catch((error)=>console.log(error))
  },[])

  const getUserData=async()=>{
    await fetch('/src/pseudo_backend/data.json')
    .then((res)=> res.json())
    .then((data)=>{
      const user = data.find((elem) => elem.basicProfile.username === username);
        if(user){
          dispatch({
            type:'SET_USER',
            user:user
          })
          console.log(user)
        }
      
    })
  }
  
  const checkCredentials=(e)=>{
    e.preventDefault();
    logindata.forEach((ele) => {
      if(ele.username===username && ele.password===password){
        console.log('logged in')
          getUserData()
          setverified(true)
        }
    });

    if(verified){
      setinputerror(false)
      //search the username from data.json check for username match then dispatch that user as user
    }
    else{
      setinputerror(true)
    }
    
  }

  return (
    <>
        <form onSubmit={checkCredentials} className="form_container">
          
          <div className="container-input">
            <h4>username</h4>
            <div className="username_container">
              <input type="text" placeholder='username' value={username} className="username" onChange={handleUsernameChange} />
            </div>
          </div>

          <div className="container-input">
            <h4>password</h4>
            <div className="pass_container">
              <input type={passvisible?'text':'password'} placeholder='password' value={password} className="password" onChange={handlePasswordChange}/>
              <button className='toggle_password_view' onClick={()=>{setpassvisible(!passvisible)}}> {passvisible?<VisibilityOutlined sx={{color:'#8EC3B0'}}/>:<VisibilityOffOutlined sx={{color:'#8EC3B0'}}/>}</button>
            </div>
          </div>
          {inputerror && <h5 style={{margin:0}}>username or password incorrect</h5>}
          
          <button className='login_button' type='submit'> login </button>
        </form>
        <Link className='register_link' to='/register'>or Register</Link>
    </>
  )
}

export default Login