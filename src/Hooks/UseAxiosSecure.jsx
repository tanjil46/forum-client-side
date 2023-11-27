import axios from "axios";


const axiosSecure=axios.create({
    baseURL:'http://localhost:5000'
})
const UseAxiosSecure = () => {
    // const navigate=useNavigate()
    //  const{userLogOut}=useAuth()
    axiosSecure.interceptors.request.use(function(config){
        const token=localStorage.getItem('myToken')
       
    config.headers.authorization=`Bearer ${token}`
        return config
    },
    function(error){
        return Promise.reject(error)
    }
)



// axiosSecure.interceptors.response.use(function(response){
// return response
// },async(error)=>{
   
//     const status=error.response.status;

// if(status===401 || status==403 ){
//     await userLogOut();
  
// }



//     return Promise.reject(error)
// }
// )

    return axiosSecure
};

export default UseAxiosSecure;