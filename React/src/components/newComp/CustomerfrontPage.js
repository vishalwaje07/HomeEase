import React from 'react' 
import {Route, Routes } from 'react-router-dom'
import { CustomerNav } from '../Customer/CustomerNav'
// import CustomerSidebar from '../Customer/CustomerSidebar'
import { Footer } from '../Shared/Footer'
import EditProfileC from '../Customer/CEditProfile'
import CustomerProfile from '../Customer/ProfileC';
import CSupplierList from '../Customer/CSupplierList';
import CEnquiryForm from '../Customer/CEnquiryForm';
import COrderList from '../Customer/COrderList';
import Card from '../Customer/Card';
import CCancelledOrders from '../Customer/CCancelledOrders';
import CCompletedOrders from '../Customer/CCompletedOrders';
import CCNewOrders from '../Customer/CCNewOrders';
import COrderDettails from '../Customer/COrderDettails';
import CPendingOrder from '../Customer/CPendingOrder'
import CustomSuppliers from '../Customer/CustomSuppliers'
import VerifyOtp from '../Shared/VerifyOTP';
import ChangePassword from '../Shared/ChangePassword'
import NewPassword from '../Shared/NewPassword';
import ContactUs from '../Shared/ContactUs';
import { useState } from 'react';
import {FaHome,FaBars} from 'react-icons/fa'
import {FcBusinessman,FcContacts} from 'react-icons/fc'
import {BsBasket,BsShieldLock} from 'react-icons/bs'
import {TbLayoutDashboard} from 'react-icons/tb'
import Feedback from '../Customer/CFeedback'
import { NavLink } from 'react-router-dom';
import {motion,AnimatePresence} from "framer-motion"
const routes=[
    {
        path:"/",
        name:"Home",
        icon:<FaHome/>,
    },
    {
        path:"card",
        name:"DashBoard",
        icon:<TbLayoutDashboard/>,
    },
    {
        path:"profilec",
        name:"Profile",
        icon:<FcBusinessman/>,
    },
    {
        path:"ord",
        name:"Orders",
        icon:<BsBasket/>,
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




const CustomerfrontPage= ()=>{

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
  <div className="header1"><CustomerNav/></div>
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
         <Route exact path="card" element={<Card/>}/>            
         <Route exact path="profilec" element={<CustomerProfile/>}/>  
         <Route exact path="editprofilec" element={<EditProfileC/>}/>
         <Route exact path="ord" element={<COrderList/>}/>   
         <Route exact path="card/d/:id" element={<CSupplierList/>}/>  
         <Route exact path="newenquiryc/:id" element={<CCNewOrders/>}/>       
         <Route exact path="pendingorderc/:id" element={<CPendingOrder/>}/>   
         <Route exact path="completedorderc/:id" element={<CCompletedOrders/>}/>
         <Route exact path="cancalledorderc/:id" element={<CCancelledOrders/>}/>
         <Route exact path="enquiry/:id" element={<CEnquiryForm/>}/>
         <Route exact path="ordDetails/:id" element={<COrderDettails/>}/>
    
 
         <Route exact path="customsuppliers/:pincode" element={<CustomSuppliers/>}/>
         <Route exact path="feedback/:id" element={<Feedback/>}/>
         <Route exact path="verify" element={<VerifyOtp/>}/>
         <Route exact path="setnewpassword" element={<NewPassword/>}/>
         <Route exact path="changepassword" element={<ChangePassword/>}/>
         <Route exact path="contactUs" element={<ContactUs/>}/>
       </Routes>
      </div>
   </div>             
   </div> 
    ) 
  } 
export default CustomerfrontPage