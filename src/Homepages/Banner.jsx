import { useEffect, useState } from "react";
import Tags from "./Tags";
import usePublicAxios from "../Hooks/usePublicAxios";

import Posts from "./Posts";



const Banner = () => {

const[tagValues,setTagvalues]=useState('')
 const[findTags,setFindTags]=useState([])

 const openAxios=usePublicAxios()
 const [userposts,setUserPosts]=useState([])
 
 

// const tagHanlder=e=>{
//   e.preventDefault()
//   const tag=e.target.tags.value
//   setTagvalues(tag)
//   openAxios.get(`/userpost?tag=${tag}`,tag)
//   .then(res=>{})
 
// }



 console.log(tagValues)
 
 useEffect(()=>{
 
 
     openAxios.get('/userpost')
     .then(res=>{
        
         setUserPosts(res.data)
     })
 
 
 
 },[openAxios])
 
 
 
 const newToOlder = userposts.sort((a, b) => new Date(b.date)- new Date(a.date));
 
console.log(newToOlder)
 
 
 useEffect(()=>{


 
  const findValueWithTags=newToOlder.filter(tagOfPost=>tagOfPost.tags.includes(tagValues))
 setFindTags(findValueWithTags)
  console.log(findValueWithTags)
 
 


  },[newToOlder,tagValues])
 
 
 
 
 
 







    return (
        <div className='my-6'>
            <p className='text-center text-3xl font-bold'>Search Your Post</p>

  <div className="my-12">

  <div  className="text-center ">
    <form >
  <input onChange={(e)=>setTagvalues(e.target.value)} className="py-2 px-10 outline-none border-b-4  border-red-500" type="text"  placeholder="Your Post" ></input> 
 <button type="submit"  className="btn btn-error">Search</button>
 </form>
 <Tags></Tags>
 </div>






  </div>

        

  <div className="grid grid-cols-1 lg:grid-cols-2 p-10 gap-3 my-4">
    {
  findTags.map((posts,idx)=><Posts posts={posts} key={idx}></Posts>)
    }
  </div>




    </div>
    )
};

export default Banner;