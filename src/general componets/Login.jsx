import { Link, useLocation, useNavigate } from "react-router-dom";

import Forum from '../img/forum-logojpg.jpg'
import GoogleLogin from "./GoogleLogin";
import useAuth from "../Hooks/useAuth";
import { useForm } from "react-hook-form";
const Login = () => {

const location=useLocation()
const navigate=useNavigate()
const {userSingIn}=useAuth()
const { register, handleSubmit } = useForm()


const onSubmit=async(data)=>{
  
   
    const email=data.email
    const password=data.password
     userSingIn(email,password)
     .then((result)=>{
      console.log(result.user)
      navigate(location?.state?location.state:'/')
     })
    .catch(error=>console.log(error.message))
    }
    
    
    
    









    return (
        



        <div className="bg-gradient-to-r from-slate-500 to-slate-700 flex p-20 gap-0 ">


        <div className="card card-side mx-auto  bg-base-100 shadow-xl">
          
        <div className="hidden lg:block">
            <img className=" w-[500px] h-[600px]" src={Forum}></img>
         </div>
        
        
          <div className="card-body ">
           
        
        
        
          <div className="">
        
        
        
         <div className="hero ">
         <div className="hero-content ">
        
        
         <div className="card flex-shrink-0  w-full lg:w-[500px] h-[600px]  bg-white">
             <div className="">
         <p className="text-center text-xl font-bold">JOIN US</p>
         </div>
         <form onSubmit={handleSubmit(onSubmit)} className="card-body">
         <div className="form-control">
        
           <label className="label">
           </label>
          <input {...register('email',{required:true})} type="email" placeholder="email" className="input input-bordered" required />
         </div>
         <div className="form-control">
           <label className="label">
            <span className="label-text">Password</span>
           </label>
           <input  {...register('password',{required:true})} type="password" placeholder="password" className="input input-bordered" required />
           <label className="label">
             <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
           </label>
        </div>
         <div className="form-control mt-6">
         <button className="btn no-animation bg-gradient-to-r from-purple-500 to-pink-500">LOGIN</button>
         </div>
      
        
        </form>
        
        <p className="text-center">Need An Account?</p>
         <Link className="btn bg-slate-500 text-black " to='/resister'>Sign Up</Link>


        <div className="space-y-4">
         
         

         <p className="text-center my-4">Or,Login with social media
           
         <GoogleLogin></GoogleLogin>
         </p>
        
        </div>
        
        
        
        </div>
        </div>
         </div>
        
        
        
        
        
        
        
        
        
        
        
        
        
         </div>
        
        
        
        
        
        
        
        
        
        
            </div>
          </div>
        </div>
        
        
        
        
        
        
        
        
        


    );
};

export default Login;