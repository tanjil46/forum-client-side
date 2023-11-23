import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Errorelement from './general componets/Errorelement';
import Roots from './general componets/Roots';
import Home from './Homepages/Home';


const router=createBrowserRouter([


  {
    path:'/',
    errorElement:<Errorelement></Errorelement>,
    element:<Roots></Roots>,
    children:[

    {
      path:'/',
      element:<Home></Home>
    }






    ]
  }





])





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
