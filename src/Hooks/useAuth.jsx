import { useContext } from "react";
import { AuthContext } from "../general componets/Authprovider";


const useAuth = () => {
   const auth=useContext(AuthContext)
   return auth
};

export default useAuth;