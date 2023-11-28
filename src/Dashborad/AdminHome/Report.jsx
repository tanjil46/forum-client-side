import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Hadlines from "../../general componets/Hadlines";
import { MdReport } from "react-icons/md";
import usePublicAxios from "../../Hooks/usePublicAxios";
import Swal from "sweetalert2";


const Report = () => {

const axiosSecure=UseAxiosSecure()
const openAxios=usePublicAxios()
    const {data:reports=[],refetch}=useQuery({
        queryKey:['reports'],
        queryFn:async()=>{
           const res=await axiosSecure.get('/report')
           return res.data
        }
       
       })

   console.log(reports)



  const reportHandler=(report)=>{




 Swal.fire({
  title: "Are you sure?",
  text: "You want to Ban User For doing Comment!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, Ban It!"
}).then((result) => {
  if (result.isConfirmed){

   openAxios.delete(`/report/${report._id}`)
   .then(res=>console.log(res.data))
   refetch()
    const banInfo={banEmail:report?.commentorEmail}

    openAxios.post('/banuser',{banInfo})
    .then(res=>{
      console.log(res.data)
      if(res.data.insertedId){
    
        Swal.fire(
          'success',
          'User Ban For Comment Succesfully',
          'success'
        )
      }
    })

  }


  })









  

  }














    return (
        <div>
            <Hadlines title={'Report User'}></Hadlines>



            <div className="overflow-x-auto ">
  <table className="table w-full bg-orange-300 min-h-screen">
    {/* head */}
    <thead>
      <tr>
      
        <th className="text-black font-bold">Post Owner</th>
        <th className="text-black font-bold" >FeedBack</th>
        <th className="text-black font-bold">Commentor</th>
        <th className="text-black font-bold">Action</th>
        <th className="text-black font-bold"></th>
        
      </tr>
    </thead>
    <tbody>

{
    reports.map((report,index)=> <tr key={index}>
       
        <td className="md:text-base text-xs"> {report?.postOwner}
        </td>

        <td className="font-bold md:text-base text-xs text-red-400 ">
         {report?.feedback}

        </td>
        
        <td  className="p-3">
           
         {report?.commentorEmail}

            </td>








        <th>
        <button onClick={(()=>reportHandler(report ))}  className="btn md:btn-lg btn-xs bg-red-400"><MdReport></MdReport></button>




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

export default Report;