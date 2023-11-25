import { useState } from "react";
import usePublicAxios from "../Hooks/usePublicAxios";
import Hadlines from "../general componets/Hadlines";
import AnnoncShowaftermap from "./AnnoncShowaftermap";

const ShowAnnonce = () => {
const[annonces,setAnnounces]=useState([])
    const openAxios=usePublicAxios()
   openAxios.get('/annonce')
   .then(res=>{
    console.log(res.data)
    setAnnounces(res.data)
   })

    return (
        <div>
            <Hadlines title={'Admin Annoncements'}></Hadlines>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6 my-12">
            {
                annonces.map((ment,idx)=><AnnoncShowaftermap ment={ment} key={idx}></AnnoncShowaftermap>)
            }
</div>



        </div>
    );
};

export default ShowAnnonce;