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



//  const commentLength=comments.map(leng=>leng.comment)

  


// // const word=commentLength.split()

// console.log(commentLength)



// const maxlength=commentLength.length=20
// const maxLength2=commentLength.slice(0,maxlength)
// console.log('commelength',maxlength,word)

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
            <Hadlines title={'See All Your Comments'}></Hadlines>

           
            <div className="overflow-x-auto ">
  <table className="table w-full bg-orange-300 min-h-screen">
    {/* head */}
    <thead>
      <tr>
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
        <td>
         {comment?.email}
        </td>

        <td className="text-center">
           {comment?.comment}
         
        </td>
        
        <td  className="p-3">
           
       
  
  <select onChange={feedbackHandler} value={feedback} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box  space-y-4">
     <option className="" value={'Inappropriate Content'}>Inappropriate Content </option>
        <option value={'Unwanted Promotion'}>Unwanted Promotion</option>
        <option value={'Harassment or Threats'}>Harassment or Threats</option>
   
  feed</select>


            </td>








        <th>
        <button onClick={()=>reportHandler(comment)} disabled={disabled} className="btn bg-red-400"><MdReport></MdReport></button>




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