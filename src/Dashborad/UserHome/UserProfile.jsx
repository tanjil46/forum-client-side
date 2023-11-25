
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import usePublicAxios from "../../Hooks/usePublicAxios";
import UseAxiosSecure from "../../Hooks/useAxiosSecure";


const UserProfile = () => {
    const[userEmail,setUserEmail]=useState([])
    const{user}=useAuth()
   const openAxios=usePublicAxios()
   const[goldUser,setGoldUser]=useState([])
    
   const axiosSecure=UseAxiosSecure()
 
  axiosSecure.get(`/payment/${user?.email}`)
 .then(res=>{
    console.log(res.data)
    setGoldUser(res.data)
 })


const findGoldBadge=goldUser.map(gold=>gold.goldBadge)

console.log(findGoldBadge)




   openAxios.get('/users',)
   .then(res=>{
   
    setUserEmail(res.data)
   })
   
   
   
  const userfind=userEmail.find(userss=>userss.email===user?.email)
 



 
   
 
 
 



    return (
        <div>
            <p className="text-3xl">
                <span>Hi,Welcome </span> {user?.displayName?user.displayName:'Back'}
                
            </p>
            <div className="w-full flex my-6 ">






            <div className=" w-[50%] bg-orange-200">
    <div className="card-body">
       {
        findGoldBadge.length>0? <img className="w-[100px] rounded-full" src={findGoldBadge[0]}></img>:
        <img className="w-[90px] rounded-full" src={userfind?.badge}></img>
       }


<img className="w-[180px] rounded-full mx-auto border-orange-600 border-2" src={user?.photoURL}></img>

     <p className="text-center text-xl font-bold">{user?.displayName}</p>
     <p className="text-center text-red-500 text-xl font-bold">{user?.email}</p>
    </div>

</div>

<p className="border-3 border-orange-600"></p>


<div className=" w-[50%] bg-orange-200">
    <div className="card-body">
<p className="text-center text-xl font-bold border-b-2 border-orange-500">Your Activites</p>
     <p className="text-center text-red-500 text-xl font-bold"> Total Payments:</p>
     <p className="text-center text-green-600 text-xl font-bold"> Total Orders:</p>
    </div>

</div>





          </div>

            
        </div>
    );
};

export default UserProfile;