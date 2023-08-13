import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import{ BrowserRouter as Router } from 'react-router-dom';
import { DataLayer } from './components/datalayer/Datalayer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <DataLayer>
        <App />
      </DataLayer>
    </Router>
  </React.StrictMode>,
)
