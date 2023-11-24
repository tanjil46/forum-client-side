import { useForm } from "react-hook-form";
import Hadlines from "../../general componets/Hadlines";
import usePublicAxios from "../../Hooks/usePublicAxios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";


const bbImage_hosting_key='26084db1c96279fe50abffb136cb0e8e';
const bbImage_hosting_api=`https://api.imgbb.com/1/upload?key=${bbImage_hosting_key} `
const UserAddpost = () => {
    const { register, handleSubmit,reset} = useForm()
const openAxios=usePublicAxios()
const{user}=useAuth()
const [totalPost,setTotalPost]=useState(0)
const [becomeMember,setBecomeMember]=useState(false)


openAxios.get(`/post-count/${user?.email}`)
.then(res=>{
  console.log(res.data)
  setTotalPost(res?.data?.toTalPost)
})
console.log(totalPost)
// const {refetch,data:toTalPost}=useQuery({
//   queryKey:['totalpost',user.email],
//   queryFn:async()=>{
//       const res=await openAxios.get(`/post-count/${user?.email}`)
//       return res.data
 
//   }

// })
// console.log('payment')


  
useEffect(()=>{
if(totalPost>=5){
  setBecomeMember(true)
    
    }

},[totalPost])


 











function getCurrentDateTime() {
  const currentDateAndTime = new Date()
  const formatTedDate = currentDateAndTime.toISOString(); 

  return formatTedDate;
}


 const onSubmit=async(data)=>{
  const imageUrl={image:data.image[0]}


  const res=await openAxios.post(bbImage_hosting_api,imageUrl,{
    headers:{
      'content-Type':'multipart/form-data'
    }
    
  })
  console.log(res.data)

const image=res.data.data.display_url
const name=data.name
const title=data.title
const date=getCurrentDateTime()
const tags=data.tags
const email=data.email
const description=data.desc
console.log(image,name,title,tags,date,email,description)

const userPost={image,name,title,tags,date,email,description,upVote:0,downVote:0}


const postRes=await openAxios.post('/userpost',userPost)
  console.log(postRes.data)

if(postRes.data.insertedId){
  reset()
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "SuccesFully Posted",
    showConfirmButton: false,
    timer: 1500
  });
}




 }



    return (
      
        <div className="">
           <Hadlines title={'Make Your Post'}></Hadlines>
        
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 ">
          <form className="p-12" onSubmit={handleSubmit(onSubmit)}>
      







      <div className="form-control w-full my-6">
  <label className="label">
    <span className="label-text">Author Name*</span>
   
  </label>
  <input {...register('name',{required:true})} type="text" placeholder=" Author Name" className="input  input-bordered input-primary w-full " />
  
</div>




<div className="form-control w-full my-6">
  <label className="label">
    <span className="label-text">Author Email*</span>
   
  </label>
  <input {...register('email',{required:true})} defaultValue={user?.email} type="text" placeholder=" Author email" className="input  input-bordered input-primary w-full " />
  
</div>




<div className="form-control w-full my-6">
  <label className="label">
    <span className="label-text">Post Title*</span>
   
  </label>
  <input {...register('title',{required:true})} type="text" placeholder=" Post Title" className="input  input-bordered input-primary w-full " />
  
</div>















<div className="my-6 mx-auto ">

<label className="label">
    <span className="label-text">Author Image*</span>
   
  </label>



<input type="file" {...register('image',{required:true} )} className="file-input file-input-bordered w-full max-w-xs" />


</div>













<div className="form-control w-full my-6">
  <label className="label">
    <span className="label-text">Select Your Tags*</span>
   
  </label>
 

  <select defaultValue='default' {...register('tags',{required:true} )}    className="select select-bordered w-full ">
  <option disabled value='default'>Selete A Tags</option>
  <option value="technology">Technology</option>
  <option value="design">Design</option>
  <option value="health">Health</option>
  <option value="travel">Travel</option>
  <option value="works">Works</option>
</select> 
  
</div>







<div className="form-control">
  <label className="label">
    <span className="label-text">Post Description</span>
   
  </label>
  <textarea {...register('desc',{required:true} )} className="textarea textarea-bordered h-24" placeholder="Post description"></textarea>
  
  </div>

<div className="text-center my-6">
{

becomeMember?<Link to='/member' className="btn bg-slate-500 ">BECOME A MEMBER</Link> :

<button className="btn bg-slate-500 " type="submit">Add Post</button> 

}
</div>

     
    </form>
        </div>
        </div>
    );
};

export default UserAddpost;