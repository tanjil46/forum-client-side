import { useEffect, useState } from "react";
import Tags from "./Tags";
import usePublicAxios from "../Hooks/usePublicAxios";
import ShowPost from "./ShowPost";



const Banner = () => {

const[tagValues,setTagvalues]=useState()
 

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
 

 
 
 
 
  const findValueWithTags=newToOlder.filter(tag=>tag.tags.includes(tagValues))
 
  console.log(findValueWithTags)
 
 
 
 
 
 
 
 







    return (
        <div className='my-6'>
            <p className='text-center text-3xl font-bold'>Search Your Post</p>

  <div className="my-12">

  <div  className="text-center ">
    <form >
 <input onChange={(e)=>setTagvalues(e.target.value)} value={tagValues} name='tags' className="py-2 px-10 outline-none border-b-4  border-red-500" type="text"  placeholder="Your Post" ></input>
 <button type="submit"  className="btn btn-error">Search</button>
 </form>
 <Tags></Tags>
 </div>






  </div>

        

  <div className="">
    {
      findValueWithTags.map((tagPost,idx)=><ShowPost tagPost={tagPost} key={idx}></ShowPost>)
    }
  </div>




    </div>
    )
};

export default Banner;