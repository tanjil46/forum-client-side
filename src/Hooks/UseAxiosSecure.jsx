import axios from "axios";



const axiosSecure=axios.create({
    baseURL:'https://forum-server-eight.vercel.app'
})
const UseAxiosSecure = () => {
    
    axiosSecure.interceptors.request.use(function(config){
        const token=localStorage.getItem('myToken')
       
    config.headers.authorization=`Bearer ${token}`
        return config
    },
    function(error){
        return Promise.reject(error)
    }
)



    return axiosSecure
};

export default UseAxiosSecure;