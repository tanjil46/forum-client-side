import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../Hooks/useAxiosSecure";
import Hadlines from "../../general componets/Hadlines";

import Swal from "sweetalert2";
import {  FaUsers } from "react-icons/fa";

import userAdmin from '../../img/useradmin.jpg'
const MangeUser = () => {
const axiosSecure=UseAxiosSecure()


const {data:users=[],refetch}=useQuery({

    queryKey:['users'],
    queryFn:async()=>{
     const res=await axiosSecure.get('/users')
   
      return res.data
}
   
})
























const hadlerAdmin=(user)=>{
    axiosSecure.patch(`/users/admin/${user.name}`)
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
        <td className="">
         {user?.name}
        </td>

        <td className="">
          <p className='w-[130px] md:text-lg text-xs'>{user?.email}</p>
        </td>
        
        <td  className="p-3">
            {
                user.role==='admin'?<img className="md:w-[40px] w-[30px] bg-orange-300 rounded-full" src={userAdmin}></img>:
            <p className="btn"><FaUsers onClick={()=>hadlerAdmin(user)} className=" text--black text-lg md:text-2xl text-center   "></FaUsers></p>
}
            </td>








        <th>
        
        
      <img className="md:w-[90px] w-[30px] rounded-full" src={user?.badge }></img>





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