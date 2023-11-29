import axios from "axios";

const openAxios=axios.create({
    baseURL:'https://forum-server-eight.vercel.app'
})
const usePublicAxios = () => {
    return openAxios
};

export default usePublicAxios;