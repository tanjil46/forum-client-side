import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import usePublicAxios from "./usePublicAxios";


const useMypost = () => {
    const openAxios=usePublicAxios()
    const{user}=useAuth()
    const {refetch, data:posts=[]}=useQuery({
        queryKey:['post',user?.email],
        queryFn:async()=>{
            const res=await openAxios.get(`/userpost?email=${user.email}`)
            return res.data
        }
    })
    return[refetch,posts]
};

export default useMypost;