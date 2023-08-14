import React from 'react'
import { Route,Routes } from 'react-router-dom'

function Dashboard() {
  return (
    <Routes>  
      <Route path='/' element={<h1>hehe</h1>}>
        <Route path='/child' element={<h1>Home</h1>}/>
      </Route>
    </Routes>
  )
}

export default Dashboard