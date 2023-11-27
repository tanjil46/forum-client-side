import { useQuery } from "@tanstack/react-query";
import usePublicAxios from "../Hooks/usePublicAxios";



const Tags = () => {
 const openAxios=usePublicAxios()

    const{data:popularity=[]}=useQuery({
        queryKey:['popularity'],
      
        queryFn:async()=>{
               const res=await openAxios.get('/popular')
                 
               return res.data
           
        }
      })





    return (
        <div className="my-4">
            <p className="flex justify-center gap-3 text-white text-base md:text-xl">Popular Topics:
          {
            popularity.slice(0,4).map((popular,idx)=><p className="border-b-blue border-b text-white" key={idx}>{popular.tags}</p>)
          }  

          </p>
        </div>
    );
};

export default Tags;