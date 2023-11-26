import { BiComment, BiDownvote, BiUpvote } from "react-icons/bi";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "../Hooks/usePublicAxios";
const Posts = ({posts}) => {
    const{image,tags,name,date,upVote,downVote,description,title,_id}=posts

    const openAxios=usePublicAxios()



    const{data:commentsC}=useQuery({
      queryKey:['details-post',title],
    
      queryFn:async()=>{
             const res=await openAxios.get(`/comment-count/${title}`)
               
             return res.data?.toTalComments
            
      }
  })


console.log(commentsC)



    return (
        <div>
         <Link to={`/detail/${_id}`}>
            <div className=" lg:w-[80%] min-h-[400px] w-[full] text-black border-2 border-black my-4">
                
  <div className="card-body  ">
    <div className="flex gap-2">
     <img className="w-[90px] rounded-full" src={image}></img>
     <div className="">
        <p className="text-lg font-bold">{name}</p>
        <h1>{date}</h1>
     </div>
           
    </div>
    <p className="text-center font-bold">{title}</p>

    <p>{description} <span className="text-lg text-blue-600 border-b-2 border-blue-400">{tags}</span> </p>
     <div className="my-4 flex justify-center items-center border border-b-lime-300">
     <p className="flex text-2xl items-center"><BiUpvote className="text-3xl text-green-600"></BiUpvote>{upVote}</p>
     <p className="flex text-2xl items-center"><BiDownvote className="text-3xl text-red-600"></BiDownvote>{downVote}</p>
     <p className="text-2xl flex items-center">{commentsC}<BiComment className="text-blue-600 text-3xl"></BiComment></p>
     </div>






  </div>
</div>


</Link>

        </div>
    );
};

Posts.propTypes={
    posts:PropTypes.object
      
      }
export default Posts;