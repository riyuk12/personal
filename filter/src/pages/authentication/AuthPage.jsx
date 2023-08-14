import React from 'react'
import { Route,Routes,Outlet } from 'react-router-dom'
import Login from '../../components/Authentication/Login'
import Register from '../../components/Authentication/Register'
import './Auth.css'

const BaseCard=()=>{
    return(
        <div className='cardContainer'>
            <div className="card card1"><Outlet></Outlet></div>
            <div className="card card2"></div>
            <div className="card card3"></div>
        </div>
    ) 
}

function AuthPage() {
  return (
    <Routes>  
      <Route path='/' element={<BaseCard />}>
        <Route path='/' element={ <Login/> }/>
        <Route path='/register' element={<Register/>}/>
      </Route>
    </Routes>
  )
}

export default AuthPage