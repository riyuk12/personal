import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import { useDataLayerValue } from './components/datalayer/Datalayer'

function App() {

  const [{user},dispatch]=useDataLayerValue();
  const [verified,setverified]=useState(false);

  return (
    <>
    <Routes>
      
      {verified &&
        <Route path='/' element={<h1>hehe</h1>}>
          <Route index element={<h1>Home</h1>}/>
        </Route>
      }
    </Routes>
      
    </>
  )
}

export default App
