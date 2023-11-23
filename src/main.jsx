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
import Login from './general componets/Login';
import Resister from './general componets/Resister';
import Authprovider from './general componets/Authprovider';


const router=createBrowserRouter([


  {
    path:'/',
    errorElement:<Errorelement></Errorelement>,
    element:<Roots></Roots>,
    children:[

    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/resister',
      element:<Resister></Resister>
    }






    ]
  }

                        // DASHBOARD LAYOUT



{
  path:'dashboard'
}














])





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
    <div className="max-w-screen-xl mx-auto">
    <RouterProvider router={router}></RouterProvider>
    </div>
    </Authprovider>
 
  </React.StrictMode>,
)
