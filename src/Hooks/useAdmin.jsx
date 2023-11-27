import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import useAuth from "./useAuth";



const useAdmin = () => {
    const{user,loading}=useAuth()
    const axiosSecure=UseAxiosSecure()
    const{data:isAdmin,isPending:isAdminPending}=useQuery({
        queryKey:[user?.email,'isAdmin'],
         enabled:!loading,
        queryFn:async()=>{
               const res=await axiosSecure.get(`/user/admin/${user.email}`)
              
               return res.data?.admin
        }
    })
    return [isAdmin,isAdminPending]
};

export default useAdmin;