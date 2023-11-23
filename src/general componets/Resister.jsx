import { Link, useNavigate } from "react-router-dom";

import Forum from '../img/forum-logojpg.jpg'
import GoogleLogin from "./GoogleLogin";
import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
const Resister = () => {

const{createUser,updateUserProfile}=useAuth()
const naviagte=useNavigate()

const resiterHandler=e=>{


    e.preventDefault()
    
   
    const email=e.target.email.value
    const password=e.target.password.value
    const name=e.target.name.value
    const photo=e.target.photoUrl.value
    console.log(email,password,name,photo)
  
  

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
 <form onSubmit={resiterHandler}  className="card-body">


 <div className="form-control">
   <label className="label">
    <span className="label-text">Name</span>
   </label>
   <input type="text" placeholder="Your name" name="name" className="input input-bordered" required />
 
</div>


<div className="form-control">
   <label className="label">
    <span className="label-text">PhotoUrl</span>
   </label>
   <input type="text" placeholder="Your Image" name="photoUrl" className="input input-bordered" required />
 
</div>










 <div className="form-control">

   <label className="label">
   <span className="label-text">Email</span>
   </label>
  <input type="email" placeholder="email" name="email" className="input input-bordered" required />
 </div>
 <div className="form-control">
   <label className="label">
    <span className="label-text">Password</span>
   </label>
   <input type="password" placeholder="password" name="password" className="input input-bordered" required />
 
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