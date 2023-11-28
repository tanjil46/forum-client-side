import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { FaComment, FaUsers } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { PieChart, Pie,Cell, Tooltip, Legend } from 'recharts';
import Hadlines from "../../general componets/Hadlines";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Adminprofile = () => {
    const{user}=useAuth()
    const axiosSecure=UseAxiosSecure()
    const { register, handleSubmit,reset} = useForm()

  

    const {data:result}=useQuery({
        queryKey:['reslut'],
        queryFn:async()=>{
           const res=await axiosSecure.get('/admin-stats')
           return res.data
        }
       
       })


    console.log(result)







    const data=[
        { name: 'Number of Post', value:result?.totalpost },
        { name: 'Number Of Users', value:result?.totalusers},
        {  name:'Number of Comments' ,value:result?.totalcomment}                     
       
      ];
      
      const COLORS = ['#4CAF50', '#F44336', '#FFFF00'];


const onSubmit=async(data)=>{
const tags=data.tags
console.log(tags)

const tagInfo={tags}

axiosSecure.post('/addtag',tagInfo)
.then(res=>{
    reset()
    console.log(res.data)
    if(res.data.insertedId){
        Swal.fire(
            'Success',
            'Tag added',
            'success'
        )
    }
})

}






    return (
        <div>
           <p className="text-3xl">
                <span>Hi,Welcome </span> {user?.displayName?user.displayName:'Back'}
                </p>






                <div className="stats w-full shadow flex my-5 text-center justify-center">
  
  <div className="stat bg-cyan-400">
    <div className="stat-figure text-primary ">
     <FaUsers className="md:text-2xl text-lg"></FaUsers>
    </div>
    <div className="md:stat-title  text-xs md:text-lg">Total Users</div>
    <div className="md:stat-value text-lg font-bold text-primary">{result?.totalusers}</div>
   
  </div>
  
  <div className="stat bg-cyan-400">
    <div className="stat-figure text-secondary">
     <MdMail className="md:text-2xl text-lg"></MdMail>
    </div>
    <div className="md:stat-title text-xs md:text-lg">Total Posts</div>
    <div className="md:stat-value font-bold text-lg text-secondary">{result?.totalpost}</div>
    
  </div>
  

  <div className="stat bg-cyan-400">
    <div className="stat-figure text-secondary">
     <FaComment className="md:text-2xl text-lg"></FaComment>
    </div>
    <div className="md:stat-title text-xs md:text-l">Total Comments</div>
    <div className="md:stat-value font-bold text-lg text-secondary">{result?.totalcomment}</div>
    
  </div>


  
</div>












            <div className=" w-full bg-orange-200">
    <div className="card-body mx-auto">
     


<img className="md:w-[180px] w-[100px] rounded-full mx-auto border-orange-600 border-2" src={user?.photoURL}></img>

     <p className="text-center text-xl font-bold">{user?.displayName}</p>
     <p className="text-center text-red-500 md:text-xl text-lg font-bold">{user?.email}</p>
    </div>

</div>




<div className="">

   <Hadlines title={'Add Tags'}></Hadlines>
   <form className="p-4 bg-slate-500" onSubmit={handleSubmit(onSubmit)}>
      

      <div className="form-control w-full my-6">
  <label className="label">
    <span className="label-text">Add Tag</span>
   
  </label>
  <input {...register('tags',{required:true})} type="text"  placeholder="Add New Tag" className="input  input-bordered input-primary w-full " />
    <div className="my-4">
        <button className="btn bg-slate-500">Add Tag</button>
    </div>
</div>
</form>
</div>








<div className="">
    
<div className='h-screen grid justify-center items-center lg:flex lg:justify-center lg:items-center'>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            labelLine={false}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value}%`} />
          <Legend />
        </PieChart>
        <div style={{ textAlign: 'center' }}>
          {data.map((entry, index) => (
            <div key={`label-${index}`} style={{ display: 'inline-block', margin: '10px' }}>
              <div
                style={{
                  width: '100px',
                  height: '20px',
                  backgroundColor: COLORS[index % COLORS.length],
                  display: 'inline-block',
                  marginRight: '5px',
                }}
              />
              <span>{`${entry.name}: ${entry.value}%`}</span>
            </div>
          ))}
        </div>
    
      </div>



</div>






          </div>

            
        
    );
};

export default Adminprofile;