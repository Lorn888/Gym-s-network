import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {GRIContextProvider} from './context/GRIContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <GRIContextProvider>

    <App />
  
  </GRIContextProvider>
  </React.StrictMode>,
)
