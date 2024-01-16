import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AppContext from './Context/AppContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  //importing appcontext for states and browser router for navigation between pages
  <AppContext>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </AppContext>
)
