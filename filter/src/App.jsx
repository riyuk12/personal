import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import { useDataLayerValue } from './components/datalayer/Datalayer'
import Dashboard from './pages/dashboard/dashboard'
import AuthPage from './pages/authentication/AuthPage'

function App() {

  const [{user},dispatch]=useDataLayerValue();
  const [verified,setverified]=useState(false);

  return (
    <>
    {verified ? <Dashboard />:<AuthPage/> }
    
    </>
  )
}

export default App
