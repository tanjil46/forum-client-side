import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "../../Hooks/usePublicAxios";
import Hadlines from "../../general componets/Hadlines";
import useAuth from "../../Hooks/useAuth";
import { FaComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Mypost = () => {
const openAxios=usePublicAxios()
const {user}=useAuth()


    // const {data:mypost=[]}=useQuery({
    //     queryKey:['mypost',user?.email],
    //     queryFn:async()=>{
    //        const res=await openAxios.get(`userpost/${user.email}`)
    //        return res.data
    //     }
       
    //    })
       
    //    const myPostId=mypost.map(post=>post._id)
    //   console.log(mypost,myPostId)



      const {data:popular=[],refetch}=useQuery({
        queryKey:['popular'],
        queryFn:async()=>{
           const res=await openAxios.get('/popular')
           return res.data
        }
       
       })



      const findUserPost=popular.filter(popu=>popu.email===user?.email)


     const deleteHandler=(userpost)=>{

  console.log(userpost._id)
   openAxios.delete(`/userpost/${userpost._id}`)
  
   .then(res=>{
    console.log(res.data)
refetch()
    if(res.data.deletedCount>0)
    {
        Swal.fire(
          'success',
          'Your Post deleted successfully',
          'success'
        )
      }
   })



     }




    return (
        <div>
            <Hadlines title={'My Posts'}></Hadlines>
            
           
            <div className="overflow-x-auto ">
  <table className="table w-full bg-orange-300 min-h-screen">
    {/* head */}
    <thead>
      <tr>
        <th>
        #
        </th>
        <th className="text-black font-bold">Post Title</th>
        <th className="text-black font-bold" >Number Of Votes</th>
        <th className="text-black font-bold">Comment</th>
        <th className="text-black font-bold">Action</th>
        <th className="text-black font-bold"></th>
        
      </tr>
    </thead>
    <tbody>

{
    findUserPost.map((userpost,index)=> <tr key={index}>
        <th>
          {index+1}
        </th>
        <td>
         {userpost?.title}
        </td>

        <td className="flex items-center justify-center gap-4">
          <p>Upvote:<span className="font-bold text-green-500 text-lg">{userpost.upVote}</span></p>
          <p>DownVote:<span className="font-bold text-red-500 text-lg" >{userpost.downVote}</span></p>
        </td>
        
        <td  className="p-3">
           
          <Link to={`/dashboard/comment/${userpost?.title}`} className="btn"><FaComment></FaComment></Link>

            </td>








        <th>
        <button onClick={()=>deleteHandler(userpost)} className="btn bg-red-400">X</button>




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

export default Mypost;