import { useEffect, useState } from "react";
import usePublicAxios from "../Hooks/usePublicAxios";
import Banner from "./Banner";
import ShowAnnonce from "./ShowAnnonce";



const Home = () => {
    const[totalAnnonce,setTotalAnnoce]=useState(0)
 const openAxios=usePublicAxios()
 useEffect(()=>{

   
    openAxios.get('/annonce-count')
    .then(res=>{
    
      setTotalAnnoce(res.data.totalA)
    })



 },[openAxios])
 



    return (
        <div>
            <Banner></Banner>
           
            {
                totalAnnonce>0 && <ShowAnnonce></ShowAnnonce>
            }

        </div>
    );
};

export default Home;