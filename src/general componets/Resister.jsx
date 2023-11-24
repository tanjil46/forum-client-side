import { Link, useNavigate } from "react-router-dom";

import Forum from '../img/forum-logojpg.jpg'
import GoogleLogin from "./GoogleLogin";
import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import usePublicAxios from "../Hooks/usePublicAxios";
const Resister = () => {
const openAxios=usePublicAxios()
const{createUser,updateUserProfile}=useAuth()
const naviagte=useNavigate()
const { register, handleSubmit } = useForm()
const brozeBadge='https://i.ibb.co/h7xdGsq/images.jpg'
const onSubmit=async(data)=>{


  
    
   
    const email=data.email
    const password=data.password
    const name=data.name
    const photo=data.photo
    console.log(email,password,name,photo)
  
 
    if(password.length<6){
        return Swal.fire(
            'Warning!',
            'Your Password Must be  Minimum Six characters',
            'warning'
        ) 
        }
        else if(!/[A-Z]/.test(password)){
            return Swal.fire(
                'Warning!',
                'There Must Be a Capital latter',
                'warning'
            )
    
      
        }
        else if(!/[@$!%*?&]/.test(password)){
            return Swal.fire(
                'Warning!',
                'There Must Be a Special latter',
                'warning'
            )
    
            
    
    
        }
        
  

    createUser(email,password)
    .then((result)=>{
        console.log(result.user)
    
    
    updateUserProfile(name,photo)
    .then((result)=>{
        console.log(result)
        //  TODO:user will post from here
        Swal.fire(
            'Succes',
            'Succesfully Sign In',
            'success'
        )

        const userInfo={email,name,photo,badge:brozeBadge}

     openAxios.post('/users',userInfo)
     .then(res=>console.log('User posted',res.data))






    })
   

naviagte('/')
    })
    
    .catch(error=>console.log(error.message))
    
    
    
    
    
    







}


















    return (
        <div>
            


            <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 flex p-20 gap-0 ">


<div className="card card-side mx-auto bg-base-100 shadow-xl">
  
<div className="hidden lg:block">
    <img className="w-[500px] h-[600px]" src={Forum}></img>
 </div>


  <div className="card-body ">
   



  <div className="">



 <div className="hero ">
 <div className="hero-content ">


 <div className="card flex-shrink-0 w-full lg:w-[500px] h-[600px]  bg-white">
     <div className="">
 <p className="text-center text-xl font-bold">Sing In</p>
 </div>
 <form onSubmit={handleSubmit(onSubmit)}  className="card-body">


 <div className="form-control">
   <label className="label">
    <span className="label-text">Name</span>
   </label>
   <input type="text" {...register('name',{required:true})} placeholder="Your name" className="input input-bordered" required />
 
</div>


<div className="form-control">
   <label className="label">
    <span className="label-text">PhotoUrl</span>
   </label>
   <input type="text" {...register('photo',{required:true})} placeholder="Your Image" className="input input-bordered" required />
 
</div>










 <div className="form-control">

   <label className="label">
   <span className="label-text">Email</span>
   </label>
  <input {...register('email',{required:true})} type="email" placeholder="email"  className="input input-bordered" required />
 </div>
 <div className="form-control">
   <label className="label">
    <span className="label-text">Password</span>
   </label>
   <input type="password" {...register('password',{required:true})} placeholder="password" className="input input-bordered" required />
 
</div>
 <div className="form-control mt-6">
 <button type="submit" className="btn no-animation bg-gradient-to-r from-purple-500 to-pink-500">SING IN</button>
 </div>

</form>
<div className="flex ">
    <p className='text-sm'>Already Resisterd! Please Login</p>
    <Link className='' to='/login'>

        <AwesomeButton type="secondary">Login Now</AwesomeButton>
    </Link>
</div>
 </div>
</div>
 </div>


<p className="flex items-center justify-center">Or,Login With 
<GoogleLogin></GoogleLogin>

</p>

</div>










    </div>
  </div>
</div>











        </div>
    );
};

export default Resister;