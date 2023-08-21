import React from 'react'
import { Route,Routes } from 'react-router-dom'
import {useDataLayerValue } from '../../components/datalayer/Datalayer'
import Homepage from './Homepage';

function Dashboard() {
  const [{user},dispatch]=useDataLayerValue();
  console.log(user)
  return (
    <Routes>  
      <Route path='/' element={ <Homepage /> }>
        <Route index element={<h1>Home</h1>}/>
      </Route>
    </Routes>
  )
}

export default Dashboard