import usePublicAxios from "../Hooks/usePublicAxios";




const ShowPost = () => {
const openAxios=usePublicAxios()

openAxios.get('/userpost')
.then(res=>{
    console.log(res.data)
})






    return (
        <div>
          
        </div>
    );
};

export default ShowPost;