import React from 'react'
import { Route,Routes } from 'react-router-dom'
import {useDataLayerValue } from '../../components/datalayer/Datalayer'
import Homepage from './Homepage';
import Post from '../../components/dashboard/Post';

function Dashboard() {
  const [{user},dispatch]=useDataLayerValue();
  console.log(user)
  return (
    
    <Routes>  
      <Route path='/' element={ <Homepage /> } />

    </Routes>
  )
}

export default Dashboard