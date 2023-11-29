
import usePublicAxios from "../Hooks/usePublicAxios";
import { Link, useParams } from "react-router-dom";
import Hadlines from "../general componets/Hadlines";
import { BiComment, BiDownvote, BiUpvote } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import { FaShare } from "react-icons/fa";
import { useEffect, useState } from "react";

const Details = () => {
const openAxios=usePublicAxios()
const {user}=useAuth()
const {id}=useParams()
const[disabled,setDisabled]=useState(false)
 const { register, handleSubmit,reset} = useForm()


const{data:details=[]}=useQuery({
    queryKey:['details-post'],
  
    queryFn:async()=>{
           const res=await openAxios.get('/userpost')
             
           return res.data
          
    }
})







const findsameId=details.find(deta=>deta._id===id)
console.log(findsameId)




//   VOTE COUNTS
const upVoteHandler=(findsameId)=>{

const voteupInfo={upVote:findsameId.upVote}

openAxios.patch(`/userpost/upvote/${findsameId?._id}`,voteupInfo)
.then(res=>{
    console.log('upvote', res.data)
    if(res.data.modifiedCount>0){
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "upVote Given",
            showConfirmButton: false,
            timer: 1500
          })





    }

})

};


const downVoteHandler=(findsameId)=>{

    const voteDownInfo={downVote:findsameId.downVote}

openAxios.patch(`/userpost/downvote/${findsameId?._id}`,voteDownInfo)
.then(res=>{
    console.log('downVote',res.data)
    if(res.data.modifiedCount>0){
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "downVote Given",
            showConfirmButton: false,
            timer: 1500
          })





    }
})




}













const onSubmit=async(data)=>{
 const comment=data.comment
 const cTitle=data.title
 console.log(comment)
 const commentInfo={
    email:user?.email,
    comment,cTitle,commetId:findsameId._id
 }


const resC=await openAxios.post('/comment',commentInfo)
console.log(resC.data)
reset()
 if(resC.data.insertedId){
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your Comment Added",
        showConfirmButton: false,
        timer: 1500
      })
 }

    

}




const{data:banUsers=[]}=useQuery({
  queryKey:['banUsers'],

  queryFn:async()=>{
         const res=await openAxios.get('/banuser')
           
         return res.data
        
  }
})

const theUser=banUsers.map(ban=>ban.banInfo?.banEmail)[0]




 console.log(theUser)








useEffect(()=>{



if(theUser==user?.email){
  setDisabled(true)
}


  



},[theUser,user?.email])
console.log(disabled)











    return (
        <div>
           <Hadlines title={'Give Your Opinion In This Post'}></Hadlines>
           <div className=" rounded-3xl max-h-screen mx-auto w-[80%] text-black border-2 border-black my-4">
                
                <div className="card-body  ">
                  <div className="flex gap-2">
                   <img className="w-[40%] rounded-full" src={findsameId?.image}></img>
                   <div className="">
                      <p className="text-lg font-bold">{findsameId?.name}</p>
                      <h1>{findsameId?.date}</h1>
                   </div>
                         
                  </div>
                  <p className="text-center font-bold">{findsameId?.title}</p>
              
                  <p>{findsameId?. description} <span className="text-lg text-blue-600 border-b-2 border-blue-400">{findsameId?.tags}</span> </p>
                   <div className="my-4 flex justify-center items-center border border-b-lime-300">
                   <p onClick={()=>upVoteHandler(findsameId)} className="btn"><BiUpvote className="text-3xl text-green-600"></BiUpvote></p>
                   <p onClick={()=>downVoteHandler(findsameId)} className="btn"><BiDownvote className="text-3xl text-red-600"></BiDownvote></p>
                      {/* COMMENT WITH MODEL */}
                    <Link className="btn" to={`/share/${findsameId?._id}`}><FaShare className="text-3xl text-blue-600"></FaShare></Link>

                   </div>
              
              
                    
              
              
              
                  <div className="card-actions justify-center">
                             
{/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}><BiComment className="text-blue-600 text-3xl"></BiComment></button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box bg-slate-500">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    
    <form   onSubmit={handleSubmit(onSubmit)}>



    <div className="form-control w-full my-6">
  <label className="label">
    <span className="label-text">Post Title*</span>
   
  </label>
  <input {...register('title',{required:true})} type="text" defaultValue={findsameId?.title} placeholder=" Post Title" className="input  input-bordered input-primary w-full " />
  
</div>




<div className="form-control">
  <label className="label">
    <span className="label-text">Your Comment</span>
   
  </label>
  <textarea {...register('comment',{required:true} )} className="textarea textarea-bordered h-24" placeholder="your comment"></textarea>
  
  </div>


{
  disabled?<button disabled type="submit" className="btn my-4">Add Comment</button>:
<button  type="submit" className="btn my-4">Add Comment</button>
}

 



    </form>










  </div>
</dialog>

                  </div>
                </div>
              </div>
              
        </div>
    );
};

export default Details;