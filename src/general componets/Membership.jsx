
import { Link } from 'react-router-dom';
import meMber from'../img/360_F_503750620_MCeQsrUqic4BPihZQqWrckhLJYZIarZO.jpg'
import badgeGolds from '../img/images11.jpg'
import { FaHandPointRight } from 'react-icons/fa';
const Membership = () => {
    return (
        <div className='p-10'>
            
            <div className="p-20 gap-0 ">


<div className="card card-side mx-auto bg-base-100 shadow-xl">
  
<div className="hidden lg:block">
    <img className="w-[500px] h-[600px]" src={meMber}></img>
 </div>


  <div className="card-body ">
   
  <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={badgeGolds} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      <FaHandPointRight></FaHandPointRight>Become Member
      <div className="badge badge-secondary">80$</div>
    </h2>
    <p className='flex items-center text-xl'><FaHandPointRight></FaHandPointRight>You can Do Ulimited Post</p>
    <p className='flex items-center text-xl'><FaHandPointRight></FaHandPointRight>Get The Gold badge</p>
    
  </div>
</div>







<Link to='/payment' className='btn bg-green-600'>Pay Now</Link>


</div>










    </div>
  </div>
</div>







     
    );
};

export default Membership;