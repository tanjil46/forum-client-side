import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "../../Hooks/usePublicAxios";
import Hadlines from "../../general componets/Hadlines";
import { useParams } from "react-router-dom";
import { MdReport } from "react-icons/md";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";


const AllComments = () => {
const{title}=useParams()
const openAxios=usePublicAxios()

const {user}=useAuth()
const[disabled,setDisabled]=useState(true)
const [feedback,setFeedBack]=useState('')
    const {data:comments=[]}=useQuery({
        queryKey:['comments'],
        queryFn:async()=>{
           const res=await openAxios.get(`/usercomment/${title}`)
           return res.data
        }
       
       })





const reportHandler=(comment)=>{

    const reportInfo={feedback,
      commentorEmail:comment.email,
      postOwner:user?.email
    }

    openAxios.post('/report',reportInfo)
    .then(res=>{
        console.log(res.data)
        if(res.data.insertedId){
            Swal.fire(
               'success',
               'Reported Succesfully',
               'success'
            )
        }
    })


setDisabled(true)
}


const feedbackHandler=(event)=>{

setFeedBack(event.target.value)
 setDisabled(false)



}

console.log(feedback)







    return (
        <div>
            <Hadlines title={'See All Comments'}></Hadlines>

           
            <div className="overflow-x-auto ">
  <table className="table w-full  bg-orange-300 min-h-screen">
    {/* head */}
    <thead>
      <tr className=""> 
      
      
        <th>
        #
        </th>
        <th className="text-black font-bold">Commentor Email</th>
        <th className="text-black font-bold" >Comments</th>
        <th className="text-black font-bold">FeedBack</th>
        <th className="text-black font-bold">Report</th>
        <th className="text-black font-bold"></th>
        
      </tr>
    </thead>
    <tbody>

{
    comments.map((comment,index)=> <tr key={index}>
        <th>
          {index+1}
        </th>
        <td className="text-xs md:text-base">
         {comment?.email}
        </td>

        <td className=" text-justify  h-[120px] md:h-[200px]">
           {comment?.comment.split(' ').slice(0, 20).join(' ')}
           <p>{/* The button to open modal */}
<label htmlFor="my_modal_6" className=""><a className="link link-primary">See More</a> </label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box ">
   
    <p>{comment?.comment}</p>
    
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">Close!</label>
    </div>
  </div>
</div></p>
        </td>
        
        <td  className="p-4">
           
       
  
  <select onChange={feedbackHandler} value={feedback} className="dropdown-content z-[1] w-[80px] md:w-[180px]  md:p-2  bg-base-100 rounded-box  space-y-4">
     <option className="text-xs md:text-base" value={'Inappropriate Content'}>Inappropriate Content </option>
        <option className="text-xs md:text-base"  value={'Unwanted Promotion'}>Unwanted Promotion</option>
        <option className="text-xs md:text-base" value={'Harassment or Threats'}>Harassment or Threats</option>
   
  feed</select>
 
           

            </td>
             







        <th className="mr-6 ">
        <button onClick={()=>reportHandler(comment)} disabled={disabled} className="btn  btn-xs md:btn-lg bg-red-400"><MdReport></MdReport></button>




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

export default AllComments;