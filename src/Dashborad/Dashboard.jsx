
import { NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoIosAdd } from "react-icons/io";
import { FaHome, FaUsers } from "react-icons/fa";
import { MdLocalPostOffice, MdReport } from "react-icons/md";
import { PiMicrophoneStageDuotone } from "react-icons/pi"
import logo from '../img/forum-logojpg.jpg'
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
const isAdmin=useAdmin()
console.log(isAdmin)

    const admin=isAdmin[0];
    return (
        <div className="md:flex ">
        <div className="md:w-60 w-full md:min-h-screen h-[500px] bg-slate-600 space-y-4">
          <img className="w-[150px] md:w-[300px] py-6 md:py-0 mx-auto" src={logo}></img>
        <ul className="md:menu  flex justify-center  ">


{
admin?
<><li className="">

<NavLink to='/dashboard/adminhome' className='text-white text-3xl   mx-auto md:text-5xl'>
 <CgProfile className="my-3"></CgProfile>
 </NavLink>


 <NavLink to='/dashboard/users' className='text-white text-3xl mx-auto md:text-5xl'>
 <FaUsers className="my-3"></FaUsers>
</NavLink>

<NavLink to='/dashboard/report' className='text-white text-3xl mx-auto md:text-5xl'>
<MdReport className="my-3"></MdReport>
 </NavLink>


 <NavLink to='/dashboard/ament' className='text-white text-3xl  mx-auto md:text-5xl'>
<PiMicrophoneStageDuotone className="my-3"></PiMicrophoneStageDuotone>
</NavLink>


</li></>:
//USER DASBOARD
<li className="space-y-6">

<NavLink to='/dashboard/userprofile' className='text-white mx-auto text-3xl md:text-5xl'>
 <CgProfile className="my-3"></CgProfile></NavLink>


<NavLink to='/dashboard/addpost' className='text-white text text-3xl mx-auto md:text-5xl'>
<IoIosAdd className="my-3"></IoIosAdd></NavLink>


 <NavLink to='/dashboard/mypost' className='text-white text-3xl mx-auto md:text-5xl'>
 <MdLocalPostOffice className="my-3"></MdLocalPostOffice></NavLink>

</li>


}

</ul>






      
       <div className="divider my-24">
        <ul className="space-y-5">
        <li>
       <NavLink to='/' className='text-white flex items-center'>
           <FaHome></FaHome>
               Home</NavLink>

     </li>


             
               </ul>
       </div>

       

      
        </div>
        <div className="flex-1 p-8">
            <Outlet></Outlet>
        </div>
    </div>
    );
};

export default Dashboard;