import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import Hadlines from "../../general componets/Hadlines";


const Report = () => {

const axiosSecure=UseAxiosSecure()

    const {data:reports=[]}=useQuery({
        queryKey:['reports'],
        queryFn:async()=>{
           const res=await axiosSecure.get('/report')
           return res.data
        }
       
       })

   console.log(reports)





    return (
        <div>
            <Hadlines title={'Report User'}></Hadlines>



            <div className="overflow-x-auto ">
  <table className="table w-full bg-orange-300 min-h-screen">
    {/* head */}
    <thead>
      <tr>
        <th>
        #
        </th>
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
        <th>
          {index+1}
        </th>
        <td>
       {report.postOwner}
        </td>

        <td className=" ">
         {report.feedback}

        </td>
        
        <td  className="p-3">
           
         {report.commentorEmail}

            </td>








        <th>
        <button  className="btn bg-red-400">Report commentetor</button>




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