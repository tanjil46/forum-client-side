
import { Link } from 'react-router-dom';
import Forum from '../img/forum-logojpg.jpg'
import { IoIosLogOut } from "react-icons/io";
import useAuth from '../Hooks/useAuth';
import { FaUser } from 'react-icons/fa';
import Swal from 'sweetalert2';
import UseAxiosSecure from '../Hooks/UseAxiosSecure';
import { useEffect, useState } from 'react';
import useAdmin from '../Hooks/useAdmin';
const Navbar = () => {
  const {user,userLogOut}=useAuth()
  const[totalAnnoce,setTotalAnnoce]=useState(0)
  const axiosSecure=UseAxiosSecure()
  const isAdmin=useAdmin()
  const admin=isAdmin[0]
   useEffect(()=>{

    axiosSecure.get('/annonce-count')
    .then(res=>{
      console.log(res.data)
      setTotalAnnoce(res.data.totalA)
    })
  






   },[axiosSecure])

  const logoutUserHandler=()=>{
    userLogOut()
    .then(()=>{
     Swal.fire(
      'Succes',
      'SuccesFully Logout',
      'success'
     )
    })
     .catch(error=>console.log(error.message))
  }





    return (
        <div>
             <div>
        <div className="navbar flex-col md:flex-row md:justify-between flex max-w-screen-xl md:h-[140px]  bg-gradient-to-r space-y-6 from-violet-500 to-fuchsia-500 text-white">
  <div className="">
   <img className='md:w-[180px] w-[100px]' src={Forum}></img>
    
  </div>
  <div className="  ">
    <ul className="  flex items-center   space-x-5 font-bold px-1">
    <Link to='/'>HOME</Link>
    <Link to='/member'>MEMBERSHIP</Link>
    
    <Link  className="">

    <div className="indicator">
        <svg  xmlns="http://www.w3.org/2000/svg" className="w-[50px]  " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span className="indicator-item badge badge-secondary">{totalAnnoce}</span> 
      </div>



 
     </Link>



{
  !user && <Link to='/login'>JOIN US</Link>
}

   



    </ul>
  </div>
  <div className="">
{
  user &&  <div className="dropdown dropdown-bottom dropdown-end">
  <label tabIndex={0} className="">
    <img className='md:w-[70px] w-[40px]  rounded-full' src={user&& user.photoURL}></img>

  </label>
  <div tabIndex={0} className="dropdown-content z-[1] card card-compact w-[150px] md:w-64 p-2 shadow bg-gradient-to-r from-slate-500 to-blue-500 text-primary-content">
    <div className="card-body space-y-6">
      
      <img className='md:w-[70px] w-[40px] rounded-full mx-auto' src={user.photoURL}></img>
      <h3 className="md:text-xl text-lg flex items-center justify-center"><FaUser></FaUser>{user.displayName}</h3>
      
     {
      admin? <Link to='/dashboard/adminhome' className='text-center text-sm md:text-lg font-bold hover:text-slate-300'> DASHBOARD</Link>:<Link to='/dashboard/userprofile' className='text-center md:text-lg font-bold hover:text-slate-300 text-sm'> DASHBOARD</Link>
     } 
     
  
     <div className="text-center">
      <button onClick={logoutUserHandler} className='btn md:text-2xl text-xl bg-slate-400'><IoIosLogOut></IoIosLogOut></button>
     </div>
      
    </div>
  </div>
</div>

 




}
  </div>
</div>
        </div>
        </div>
    );
};

export default Navbar;