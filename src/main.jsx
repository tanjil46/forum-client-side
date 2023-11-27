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
import Payment from './general componets/payment/Payment';
import MangeUser from './Dashborad/AdminHome/MangeUser';
import Announcement from './Dashborad/AdminHome/Announcement';

import Details from './Homepages/Details';
import SharePost from './Homepages/SharePost';
import Mypost from './Dashborad/UserHome/Mypost';
import AllComments from './Dashborad/UserHome/AllComments';
import Report from './Dashborad/AdminHome/Report';
import Adminprofile from './Dashborad/AdminHome/Adminprofile';

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
    },
    {
      path:'/payment',
      element:<Payment></Payment>
    },
    {
      path:'/detail/:id',
      element:<Details></Details>
 
    },
    {
      path:'/share/:id',
      element:<SharePost></SharePost>
    }






    ]
  },

                        // DASHBOARD LAYOUT



{
  path:'dashboard',
  element:<Dashboard></Dashboard>,
  children:[

      //  USER ROUTES


    {
      path:'addpost',
      element:<UserAddpost></UserAddpost>
    },
    {
      path:'userprofile',
      element:<UserProfile></UserProfile>
    },
    {
      path:'mypost',
      element:<Mypost></Mypost>
    },
    {
path:'comment/:title',
element:<AllComments></AllComments>
    },


       //ADMIN ROUTES


    {
    path:'users',
    element:<MangeUser></MangeUser>

    },
    {
      path:'ament',
      element:<Announcement></Announcement>
    },
    {
      path:'report',
      element:<Report></Report>
    },
    {
      path:'adminhome',
      element:<Adminprofile></Adminprofile>
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
