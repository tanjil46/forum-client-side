
import usePublicAxios from "../Hooks/usePublicAxios";
import Hadlines from "../general componets/Hadlines";
import AnnoncShowaftermap from "./AnnoncShowaftermap";
import { useQuery } from "@tanstack/react-query";

const ShowAnnonce = () => {

     const openAxios=usePublicAxios()
//    openAxios.get('/annonce')
//    .then(res=>{
    
//     setAnnounces(res.data)
//    })



   const{data:annonces=[]}=useQuery({
    queryKey:['announc'],
   
    queryFn:async()=>{
           const res=await openAxios.get('/annonce')
          
           return res.data
    }




   })






    return (
        <div>
            <Hadlines title={'Admin Annoncements'}></Hadlines>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 my-12">
            {
                annonces?.map((ment,idx)=><AnnoncShowaftermap ment={ment} key={idx}></AnnoncShowaftermap>)
            }
</div>



        </div>
    );
};

export default ShowAnnonce;