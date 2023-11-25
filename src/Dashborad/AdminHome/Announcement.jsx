import { useForm } from "react-hook-form";
import Hadlines from "../../general componets/Hadlines";
import usePublicAxios from "../../Hooks/usePublicAxios";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";


const bbImage_hosting_key='26084db1c96279fe50abffb136cb0e8e';
const bbImage_hosting_api=`https://api.imgbb.com/1/upload?key=${bbImage_hosting_key} `
const Announcement = () => {

    const { register, handleSubmit,reset} = useForm()
    const openAxios=usePublicAxios()
     const axiosSecure=UseAxiosSecure()
     const {user}=useAuth()
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
    const  desc=data.desc
console.log(image,name,title,desc)

 const annouceInfo={image,name,title,desc}
 
 const adminres=await axiosSecure.post('/annouce',annouceInfo) 
 console.log(adminres.data)
    if(adminres.data.insertedId){
        reset()
        Swal.fire(
            'Success',
            'Announcement Posted Succesfully',
            'success'
        )
    }








}





    return (
        <div>
            <Hadlines title={'Make Annoouncement For Users'}></Hadlines>

            <div className="bg-gradient-to-r from-green-500 to-slate-500 ">
          <form className="p-12" onSubmit={handleSubmit(onSubmit)}>
      







      <div className="form-control w-full my-6">
  <label className="label">
    <span className="label-text">Author Name*</span>
   
  </label>
  <input {...register('name',{required:true})} type="text" defaultValue={user?.displayName} placeholder=" Author Name" className="input  input-bordered input-primary w-full " />
  
</div>



<div className="my-6 mx-auto ">

<label className="label">
    <span className="label-text">Author Image*</span>
   
  </label>



<input type="file" {...register('image',{required:true} )} className="file-input file-input-bordered w-full max-w-xs" />


</div>




<div className="form-control w-full my-6">
  <label className="label">
    <span className="label-text">Post Title*</span>
   
  </label>
  <input {...register('title',{required:true})} type="text" placeholder=" Post Title" className="input  input-bordered input-primary w-full " />
  
</div>





<div className="form-control">
  <label className="label">
    <span className="label-text">Post Description</span>
   
  </label>
  <textarea {...register('desc',{required:true} )} className="textarea textarea-bordered h-24" placeholder="Post description"></textarea>
  
  </div>

<div className="text-center my-6">


<button className="btn bg-slate-500 " type="submit">Add Post</button>:

 


</div>

     
    </form>
        </div>






        </div>
    );
};

export default Announcement;