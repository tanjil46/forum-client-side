import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../src/Hooks/useAuth";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
   const{loading,user}=useAuth()
      
           const location=useLocation()

     
if(loading){
      return <span className="loading loading-spinner loading-lg text-center"></span>;
}

 if(user){
   return children
 }







return <Navigate state={location.pathname} to='/login'></Navigate> 
      
  
};

PrivateRoute.propTypes={
    children:PropTypes.node,
    
    
    }


export default PrivateRoute;