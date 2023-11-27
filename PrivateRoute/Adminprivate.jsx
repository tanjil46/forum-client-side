import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../src/Hooks/useAdmin";
import useAuth from "../src/Hooks/useAuth";
import PropTypes from 'prop-types';

const Adminprivate = ({children}) => {
    const {user,loading}=useAuth()
    const[isAdmin,isAdminPending]=useAdmin()
    const location=useLocation()
    if(loading || isAdminPending){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user && isAdmin ){
        return children
    }
    
    
        return <Navigate state={location.pathname} to='/login'></Navigate>
};

Adminprivate.propTypes={
    children:PropTypes.node,
    
    
    }
export default Adminprivate;