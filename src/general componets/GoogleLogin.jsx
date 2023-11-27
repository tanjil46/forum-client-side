
import { FaGoogle} from "react-icons/fa";
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import usePublicAxios from "../Hooks/usePublicAxios";


const GoogleLogin = () => {

    const {googleLogIn}=useAuth()
    const openAxios=usePublicAxios()
    const navigate=useNavigate()
    
    const brozeBadge='https://i.ibb.co/h7xdGsq/images.jpg'

        const googleLogInHanler=()=>{
    
            googleLogIn()
            .then((result)=>{
              console.log(result.user)
              const userInfo={
               email:result.user.email,
                name:result.user.displayName,
              photo:result.user.photoURL,
              badge:brozeBadge
            }
              openAxios.post('/users',userInfo)
          .then(res=>{
                console.log(res.data)
          })
    
    
    navigate('/')
    
    
            })
            .catch(error=>console.log(error.message))
            
            
            }
    
    







    return (
        <div className="my-4">
            
       <button onClick={googleLogInHanler}>

       <AwesomeButton     className="space-x-3" type="primary">
Google
 <FaGoogle></FaGoogle>

            </AwesomeButton>




       </button>
          
 





        </div>
    );
};

export default GoogleLogin;