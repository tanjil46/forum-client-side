
import { Link } from 'react-router-dom';
import meMber from'../img/360_F_503750620_MCeQsrUqic4BPihZQqWrckhLJYZIarZO.jpg'
const Membership = () => {
    return (
        <div className='p-10'>
            
            <div className="p-20 gap-0 ">


<div className="card card-side mx-auto bg-base-100 shadow-xl">
  
<div className="hidden lg:block">
    <img className="w-[500px] h-[600px]" src={meMber}></img>
 </div>


  <div className="card-body ">
   
<p className='text-2xl font-bold'>Pay <span className='text-3xl font-bold text-blue-500'>80$</span> And Become <br></br>Member & Get Gold Badge</p>

<Link to='/payment' className='btn bg-green-600'>Pay Now</Link>


</div>










    </div>
  </div>
</div>







     
    );
};

export default Membership;