import React from 'react'
import { Route,Routes,Outlet } from 'react-router-dom'
import Login from '../../components/Authentication/Login'
import Register from '../../components/Authentication/Register'
import './Auth.css'

import filter from '../../assets/filter.png'

const BaseCard=()=>{
    return(
        <div className='cardContainer'>
            <div className="card card1">
              <img className='logo' src={filter}  />
              <Outlet></Outlet>
            </div>
            <div className="card card2"></div>
            <div className="card card3"></div>
        </div>
    ) 
}

function AuthPage({setverified,verified}) {
  let x=0;
  let y=0;
  document.onmousemove = function(event)
  {
    x = event.pageX;
    y = event.pageY;
    
    var root = document.querySelector(':root');
    var rootStyles = getComputedStyle(root);
    var offset= rootStyles.getPropertyValue('--offset');
    var offset2= rootStyles.getPropertyValue('--offset2');
    var offset3= rootStyles.getPropertyValue('--offset3');

    let width=window.innerWidth
    let height=window.innerHeight

    root.style.setProperty('--positionX', `${(((x/width)-0.5)*Number(offset))+(width/2)-200}px`)
    root.style.setProperty('--positionY', `${(((y/height)-0.5)*Number(offset))+(height/2)-275}px`)
    root.style.setProperty('--positionX2', `${(((x/width)-0.5)*Number(offset2))+(width/2)-200}px`)
    root.style.setProperty('--positionY2', `${(((y/height)-0.5)*Number(offset2))+(height/2)-275}px`)
    root.style.setProperty('--positionX3', `${(((x/width)-0.5)*Number(offset3))+(width/2)-200}px`)
    root.style.setProperty('--positionY3', `${(((y/height)-0.5)*Number(offset3))+(height/2)-275}px`)
    root.style.setProperty('--positionXbg', `${-(((x/width)-0.5)*Number(offset2))}px`)
    root.style.setProperty('--positionYbg', `${-(((y/height)-0.5)*Number(offset2))}px`)

  }
  
   
  return (
    <div className='container'>
      <div className='dots'>
      </div>
      <Routes>  
        <Route path='/' element={<BaseCard />}>
          <Route path='/' element={ <Login verified={verified} setverified={setverified}/> }/>
          <Route path='/register' element={<Register/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default AuthPage