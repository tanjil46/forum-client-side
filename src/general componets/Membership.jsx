
import { Link } from 'react-router-dom';
import meMber from'../img/360_F_503750620_MCeQsrUqic4BPihZQqWrckhLJYZIarZO.jpg'
import badgeGolds from '../img/images11.jpg'
import { FaHandPointRight } from 'react-icons/fa';
const Membership = () => {
    return (
        <div className='p-10'>
            
            <div className="p-20 gap-0 ">


<div className="card md:flex md:flex-row md:items-center bg-base-100 shadow-xl">
  
<div className="hidden  lg:block">
    <img className="w-[500px] h-[600px] " src={meMber}></img>
 </div>


  <div className="">
   
  <div className="md:w-96 w-full py-5 bg-slate-400 shadow-xl">
  <figure><img src={badgeGolds} alt="" /></figure>
  <div className="p-5 w-full">
    <h2 className="md:card-title flex items-center">
      <FaHandPointRight></FaHandPointRight>Become Member
      <div className="badge badge-secondary">80$</div>
    </h2>
    <p className='flex items-center md:text-xl'><FaHandPointRight></FaHandPointRight>You can Do
    <br></br> Ulimited Post</p>
    <p className='flex items-center md:text-xl'><FaHandPointRight></FaHandPointRight>Get The Gold badge</p>
    <div className="text-center my-3">
    <Link to='/payment' className='btn  bg-green-600'>Buy Now</Link>
    </div>
  </div>
</div>










</div>










    </div>
  </div>
</div>







     
    );
};

export default Membership;