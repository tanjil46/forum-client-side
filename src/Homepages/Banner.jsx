import { useEffect, useState } from "react";
import Tags from "./Tags";
import usePublicAxios from "../Hooks/usePublicAxios";

import Posts from "./Posts";
import { useQuery } from "@tanstack/react-query";



const Banner = () => {

const[tagValues,setTagvalues]=useState('')
 const[findTags,setFindTags]=useState([])
const[pagePerPost,setPagePerpost]=useState(5)
const[currentPage,setCurrentPage]=useState(0)
 const openAxios=usePublicAxios()

 


// const tagHanlder=e=>{
//   e.preventDefault()
//   const tag=e.target.tags.value
//   setTagvalues(tag)
//   openAxios.get(`/userpost?tag=${tag}`,tag)
//   .then(res=>{})
 
// }



 console.log(tagValues)
 
 
 
const{data:userposts=[]}=useQuery({
  queryKey:['postcount'],

  queryFn:async()=>{
         const res=await openAxios.get(`/userpost?page=${currentPage}&size=${pagePerPost} `)
           
         return res.data.result
     
  }
})






 

const{data:postcount}=useQuery({
  queryKey:['postcount'],

  queryFn:async()=>{
         const res=await openAxios.get('/totalpost')
           
         return res.data.result
     
  }
})








 


const totalPages=Math.ceil(postcount/pagePerPost)


const pages=[]
for(let i=0;i<totalPages;i++){
    pages.push(i)
   
} 

console.log(totalPages,pages)















 
 const newToOlder = userposts.sort((a, b) => new Date(b.date)- new Date(a.date));
 
console.log(newToOlder)
 
 
 useEffect(()=>{


 
  const findValueWithTags=newToOlder.filter(tagOfPost=>tagOfPost.tags.includes(tagValues))
 setFindTags(findValueWithTags)
  console.log(findValueWithTags)
 
 


  },[newToOlder,tagValues])
 
 
 
 
 

  const pagehandler=(e)=>{
    const pageValue=parseInt(e.target.value)
    setPagePerpost(pageValue)
    setCurrentPage(0)
    
    
     }
    
    
    const prevhanler=()=>{
    if(currentPage>0){
        setCurrentPage(currentPage-1)
    }
    }
    
    const nexthandler=()=>{
    
    if(currentPage<pages.length-1){
        setCurrentPage(currentPage+1)
    }
    
    }
    
    
 







    return (
        <div className='my-6'>
            <p className='text-center text-3xl font-bold'>Search Your Post</p>

  <div className="my-12">

  <div  className="text-center ">
   
  <input onChange={(e)=>setTagvalues(e.target.value)} className="py-2 px-10 outline-none border-b-4  border-red-500" type="text"  placeholder="Your Post" ></input> 
 <button   className="btn btn-error">Search</button>

 <Tags></Tags>
 </div>






  </div>

        

  <div className="grid grid-cols-1 lg:grid-cols-2 p-10 gap-3 my-4">
    {
  findTags.map((posts,idx)=><Posts posts={posts} key={idx}></Posts>)
    }
  </div>



  <div className="text-center space-x-8">
       
       <button className="btn bg-slate-400" onClick={prevhanler}>Prev</button>
       {
           pages.map(page=><button onClick={()=>setCurrentPage(page)} 
           className= {`"btn bg-slate-500" ${currentPage===page ?'text-white btn bg-slate-800':undefined} `}key={page}>{page}</button>)
       }
      <button className="btn bg-slate-400" onClick={nexthandler}>Next</button>

      
<select value={pagePerPost} onChange={pagehandler} name='' id=''>
           <option  value='5'>5</option>
          <option value='10'>10</option>
          <option value='12'>12</option>
          <option value='20'>20</option>
           </select>




     </div>



    </div>
    )
};

export default Banner;