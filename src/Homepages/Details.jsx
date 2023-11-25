import { useEffect, useState } from "react";
import usePublicAxios from "../Hooks/usePublicAxios";
import { useParams } from "react-router-dom";
import Hadlines from "../general componets/Hadlines";
import { BiComment, BiDownvote, BiUpvote } from "react-icons/bi";


const Details = () => {
const openAxios=usePublicAxios()
const {id}=useParams()
const[details,setDetails]=useState([])
    useEffect(()=>{
 
 
        openAxios.get('/userpost')
        .then(res=>{
           
           setDetails(res.data)
        })
    
    
    
    },[openAxios])


const findsameId=details.find(deta=>deta._id===id)
console.log(findsameId)

// const{name,tags,description,image,title,date}=findsameId




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
                   <p className="btn"><BiUpvote className="text-3xl text-green-600"></BiUpvote></p>
                   <p className="btn"><BiDownvote className="text-3xl text-red-600"></BiDownvote></p>
                   <p className="btn"><BiComment className="text-blue-600 text-3xl"></BiComment></p>
                   </div>
              
              
              
              
              
              
                  <div className="card-actions justify-end">
                   
                  </div>
                </div>
              </div>
              
        </div>
    );
};

export default Details;