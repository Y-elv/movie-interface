import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import App from './App.jsx'
import './index.css'
import Tvshow from './Components/Tvshow.jsx'
import Bookmarked from './Components/Bookmarked.jsx'
import Theater from './Components/Theater.jsx'
import Menu from './Components/Menu.jsx'
const router=createBrowserRouter([
  {
    path:"",
    element:<App/>
  },
 
 
  {
    path:"/tv",
    element:<Tvshow/>
  },
  {
    path:"/menu",
    element:<Menu/>
  },
  
  {
    path:"/bookmarked",
    element:<Bookmarked/>
  },
  
  {
    path:"/theater",
    element:<Theater/>
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
