

const useAxios = () => {
    axiosSecure.interceptors.request.use(function(config){
        const token=localStorage.getItem('access_token')
       
    config.headers.authorization=`Bearer ${token}`
        return config
    },
    function(error){
        return Promise.reject(error)
    }
    )
};

export default useAxios;