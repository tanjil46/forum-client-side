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
import Dashboard from './Dashborad/Dashboard';
import UserAddpost from './Dashborad/UserHome/UserAddpost';
import {
  QueryClient,
  QueryClientProvider
 
}from '@tanstack/react-query'
import UserProfile from './Dashborad/UserHome/UserProfile';
import Membership from './general componets/Membership';

const queryClient = new QueryClient()
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
    },
    {
      path:'/member',
      element:<Membership></Membership>
    }






    ]
  },

                        // DASHBOARD LAYOUT



{
  path:'dashboard',
  element:<Dashboard></Dashboard>,
  children:[

      //  USER INFO


    {
      path:'addpost',
      element:<UserAddpost></UserAddpost>
    },
    {
      path:'userprofile',
      element:<UserProfile></UserProfile>
    }













  ]
}














])





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>

    <QueryClientProvider client={queryClient}>

    <div className="max-w-screen-xl mx-auto">
    <RouterProvider router={router}></RouterProvider>
    </div>

    </QueryClientProvider>

    </Authprovider>
 
  </React.StrictMode>,
)
