import { useForm } from "react-hook-form";
import Hadlines from "../../general componets/Hadlines";


const UserAddpost = () => {
    const { register, handleSubmit } = useForm()


    function getCurrentDateTime() {
      const currentDateAndTime = new Date();
      const formatTedDate = currentDateAndTime.toISOString(); // You can format this date as needed
    
      return formatTedDate;
    }


 const onSubmit=async(data)=>{

const image=data.image
const name=data.name
const title=data.title
const date=getCurrentDateTime()
const tags=data.tags
const email=data.email
const description=data.desc
console.log(image,name,title,data,tags,date,email,description)










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
  <input {...register('email',{required:true})} type="text" placeholder=" Author email" className="input  input-bordered input-primary w-full " />
  
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
  <option value="Travel">Travel</option>
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
<button className="btn bg-slate-500 " type="submit">Add Post</button> 
</div>

     
    </form>
        </div>
        </div>
    );
};

export default UserAddpost;