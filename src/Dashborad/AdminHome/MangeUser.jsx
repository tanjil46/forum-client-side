import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../Hooks/useAxiosSecure";
import Hadlines from "../../general componets/Hadlines";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {  FaUsers } from "react-icons/fa";

import userAdmin from '../../img/useradmin.jpg'
const MangeUser = () => {
const axiosSecure=UseAxiosSecure()
const[memeberShip,setmemBership]=useState([])


const {data:users=[],refetch}=useQuery({

    queryKey:['users'],
    queryFn:async()=>{
     const res=await axiosSecure.get('/users')
   
      return res.data
}
   
})

useEffect(()=>{
 axiosSecure.get('/payment')
 .then(res=>{
    console.log(res.data)
    setmemBership(res.data)
 })

},[axiosSecure])

const findGoldMember=memeberShip.map(ship=>ship.goldBadge)





const hadlerAdmin=(user)=>{
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(res=>{
        console.log(res.data)
        if(res.data.modifiedCount>0)
        refetch()
        Swal.fire(
            'Success',
            `${user.name} is an Admin Now`,
            'success'
        );
    })
    
    
     }






















    return (
        <div>
            <Hadlines title={'Manage Users'}></Hadlines>
            <p>length:{users?.length}</p>

            <div className="overflow-x-auto ">
  <table className="table w-full bg-orange-300 min-h-screen">
    {/* head */}
    <thead>
      <tr>
        <th>
        #
        </th>
        <th className="text-black font-bold">Name</th>
        <th className="text-black font-bold" >Email</th>
        <th className="text-black font-bold">Role</th>
        <th className="text-black font-bold">MemberShip</th>
        <th className="text-black font-bold"></th>
        
      </tr>
    </thead>
    <tbody>

{
    users.map((user,index)=> <tr key={index}>
        <th>
          {index+1}
        </th>
        <td>
         {user?.name}
        </td>

        <td>
          <p>{user?.email}</p>
        </td>
        
        <td  className="p-3">
            {
                user.role==='admin'?<img className="w-[40px] bg-orange-300 rounded-full" src={userAdmin}></img>:
            <p className="btn"><FaUsers onClick={()=>hadlerAdmin(user)} className=" text--black text-2xl text-center   "></FaUsers></p>
}
            </td>








        <th>
        {
        findGoldMember.length>0? <img className="w-[100px] rounded-full" src={findGoldMember[0]}></img>:
        <img className="w-[90px] rounded-full" src={user?.badge}></img>
       }




        </th>
     </tr>)
}


      {/* row 1 */}
     
    </tbody>
    {/* foot */}
   
    
  </table>
</div>










        </div>
    );
};

export default MangeUser;