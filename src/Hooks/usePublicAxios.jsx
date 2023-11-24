import axios from "axios";

const openAxios=axios.create({
    baseURL:'http://localhost:5000'
})
const usePublicAxios = () => {
    return openAxios
};

export default usePublicAxios;