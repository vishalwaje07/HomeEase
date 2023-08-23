import {React,useState} from 'react' 
import {Route, Routes } from 'react-router-dom'
import { AdminNav } from '../Admin/AdminNav';

import AdminProfile from '../Admin/AdminProfile';
import AdminCustomerList from '../Admin/AdminCustomerList';
import AdminSupplierList from '../Admin/AdminSupplierList';
import AEditProfile from '../Admin/AEditProfile';
import AdminList from '../Admin/AdminList';
import OrderList from '../Admin/OrderList';
import OrderDetails from '../Admin/OrderDetails';
import SupplierDetails from '../Admin/SupplierDetails';
import CustomerDetails from '../Admin/CustomerDetails';
import ADashBoard from '../Admin/ADashboardCards';
import AdminDetails from '../Admin/AdminDetail'
import SidebarA from '../Admin/Sidebar';
import {Footer} from '../Shared/Footer';
import ChangePassword from '../Shared/ChangePassword'

import ContactUs from '../Shared/ContactUs';
import {FaHome,FaBars,FaPeopleCarry} from 'react-icons/fa'
import {FcBusinessman,FcContacts} from 'react-icons/fc'
import {BsBasket,BsFillPersonLinesFill,BsShieldLock} from 'react-icons/bs'
import {IoIosPeople} from 'react-icons/io'
import {TbLayoutDashboard} from 'react-icons/tb'

import { NavLink } from 'react-router-dom';
import {motion,AnimatePresence} from "framer-motion"
const routes=[
    {
        path:"/",
        name:"Home",
        icon:<FaHome/>,
    },
    {
        path:"adashboard",
        name:"Dashboard",
        icon:<TbLayoutDashboard/>,
    },
    {
        path:"adminprofile",
        name:"Profile",
        icon:<FcBusinessman/>,
    },
    {
        path:"orderlist",
        name:"Orders",
        icon:<BsBasket/>,
    },
    {
        path:"customerslist",
        name:"Customers",
        icon:<IoIosPeople/>,
    },
    {
        path:"supplierlist",
        name:"Suppliers",
        icon:<FaPeopleCarry/>,
    },
    {
        path:"adminlist",
        name:"Admins",
        icon:<BsFillPersonLinesFill/>,
    },
    
    {
        path:"changepassword",
        name:"Change Password",
        icon:<BsShieldLock/>,
    },
    {
        path:"contactUs",
        name:"Contact Us",
        icon:<FcContacts/>,
    },
    
]


   

 
const SupplierfrontPage= ()=>{
  const[isOpen,setIsOpen]=useState(false);

    const toggle=()=>setIsOpen(!isOpen)

    const showAnimation={
        hidden:{
            width:0,
            opacity:0,
            Transition:{
                duration:0.5,
            },
        },
        show:{
            width:"auto",
            opacity:1,
            Transition:{
                duration:0.2,
            },
        },
    };
  return ( 
    <div>         
    <div className="container11">
  <div className="header1"><AdminNav/></div>
  <div className="sidebar1">

  <div className='main-container'>
      <motion.div animate={{width:isOpen?"200px":"35px"}} className="sidebar">
          <div className='top_section'>
              {isOpen && <h1 className='logo'>WISH IT</h1>}
              <div className='bars'>
                  <FaBars onClick={toggle}/>
              </div>
          </div>

          

          <section className='routes'>
              {routes.map((route)=>(
                  <NavLink to={route.path} key={route.name} className="linked">
                      <div className='icon'>
                          {route.icon}
                      </div>
                     <AnimatePresence>
                     {isOpen && <motion.div
                     variants={showAnimation}
                     initial="hidden"
                     animate="show"
                     exit="hidden"
                     className='link_text'>
                          {route.name}
                      </motion.div>}
                     </AnimatePresence>
                  </NavLink>
              ))}
          </section>
      </motion.div>
    </div>
    
  </div>
  <div className="footer1"><Footer/></div>
  <div className="content1">
       <Routes>
       <Route exact path="adashboard" element={<ADashBoard/>}/>
      <Route exact path="adminprofile" element={<AdminProfile/>}/>
      <Route exact path="editadmin" element={<AEditProfile/>}/>
      <Route exact path="customerslist" element={<AdminCustomerList/>}/>
      <Route exact path="customerdetail/:id" element={<CustomerDetails/>}/>
      <Route exact path="supplierlist" element={<AdminSupplierList/>}/>             
      <Route exact path="supplierdetail/:id" element={<SupplierDetails/>}/>
      <Route exact path="adminlist" element={<AdminList/>}/>
      <Route exact path="admindetail/:id" element={<AdminDetails/>}/>
      <Route exact path="orderlist" element={<OrderList/>}/>
      <Route exact path="orderdetails/:id" element={<OrderDetails/>}/>
      <Route exact path="changepassword" element={<ChangePassword/>}/>
     
      <Route exact path="contactUs" element={<ContactUs/>}/>
       </Routes>
      </div>
   </div>             
   </div> 
    ) 
  } 
export default SupplierfrontPage