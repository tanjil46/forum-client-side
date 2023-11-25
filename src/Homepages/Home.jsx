import { useState } from "react";
import usePublicAxios from "../Hooks/usePublicAxios";
import Banner from "./Banner";
import ShowAnnonce from "./ShowAnnonce";
import ShowPost from "./ShowPost";


const Home = () => {

 const openAxios=usePublicAxios()
  const[totalAnnonce,setTotalAnnoce]=useState(0)
 openAxios.get('/annonce-count')
 .then(res=>{
   console.log(res.data)
   setTotalAnnoce(res.data.totalA)
 })



    return (
        <div>
            <Banner></Banner>
            <ShowPost></ShowPost>
            {
                totalAnnonce>0 && <ShowAnnonce></ShowAnnonce>
            }

        </div>
    );
};

export default Home;