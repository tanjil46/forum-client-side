
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
        <div className="flex ">
        <div className="w-60 min-h-screen bg-slate-600">
          <img className="" src={logo}></img>
        <ul className="menu">


{
admin?
<><li className="space-y-5">

<NavLink to='/dashboard/adminhome' className='text-white  mx-auto text-5xl'>
 <CgProfile className=""></CgProfile>
 </NavLink>


 <NavLink to='/dashboard/users' className='text-white  mx-auto text-5xl'>
 <FaUsers></FaUsers>
</NavLink>

<NavLink to='/dashboard/report' className='text-white  mx-auto text-5xl'>
<MdReport></MdReport>
 </NavLink>


 <NavLink to='/dashboard/ament' className='text-white  mx-auto text-5xl'>
<PiMicrophoneStageDuotone></PiMicrophoneStageDuotone>
</NavLink>


</li></>:
//USER DASBOARD
<li className="space-y-6">

<NavLink to='/dashboard/userprofile' className='text-white mx-auto text-5xl'>
 <CgProfile></CgProfile></NavLink>


<NavLink to='/dashboard/addpost' className='text-white text  mx-auto text-5xl'>
<IoIosAdd></IoIosAdd></NavLink>


 <NavLink to='/dashboard/mypost' className='text-white  mx-auto text-5xl'>
 <MdLocalPostOffice></MdLocalPostOffice></NavLink>

</li>


}








      
       <div className="divider my-24">
        <ul className="space-y-5">
        <li>
       <NavLink to='/' className='text-white'>
           <FaHome></FaHome>
               Home</NavLink>

     </li>


             
               </ul>
       </div>

       

       </ul>
        </div>
        <div className="flex-1 p-8">
            <Outlet></Outlet>
        </div>
    </div>
    );
};

export default Dashboard;