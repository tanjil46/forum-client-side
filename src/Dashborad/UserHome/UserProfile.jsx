

import useAuth from "../../Hooks/useAuth";
import usePublicAxios from "../../Hooks/usePublicAxios";

import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";


const UserProfile = () => {
   
    const{user}=useAuth()
   const openAxios=usePublicAxios
  
    
   const axiosSecure=UseAxiosSecure()
 





 const {data:payment=[]}=useQuery({
    queryKey:['payment',user?.email],
    queryFn:async()=>{
       const res=await axiosSecure.get(`/payment/${user?.email}`)
       return res.data
    }
   
   })



const findGoldBadge=payment?.map(pay=>pay.goldBadge)








const {data:userEmail=[]}=useQuery({
    queryKey:['useremail',user?.email],
    queryFn:async()=>{
       const res=await openAxios.get('/users')
       return res.data
    }
   
   })






   
   
  const userfind=userEmail?.find(userss=>userss.email===user?.email)
 





    const {data:mypost=[]}=useQuery({
        queryKey:['mypost',user?.email],
        queryFn:async()=>{
           const res=await openAxios.get(`userpost/${user?.email}`)
           return res.data
        }
       
       })


console.log(mypost)



 

   
 
 const recentPost = mypost.sort((a, b) => new Date(b.date)- new Date(a.date));

const myThreePost=recentPost?.slice(0,3)
console.log(myThreePost)

    return (
        <div>
            <p className="text-3xl">
                <span className="">Hi,Welcome </span> {user?.displayName?user.displayName:'Back'}
                
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
<p className="text-center text-xl font-bold border-b-2 border-orange-500">My 3 Recent Posts</p>
      {
       
        myThreePost?.map((three,idx)=><li key={idx}>{three.title}</li>)
      }

    </div>

</div>





          </div>

            
        </div>
    );
};

export default UserProfile;