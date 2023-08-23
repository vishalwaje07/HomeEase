import React from 'react' 
import {Route, Routes } from 'react-router-dom'
import {SupplierNav} from '../Supplier/SupplierNav';
import SideBarS from '../Supplier/SideBarS'
import {Footer} from '../Shared/Footer';
import SDashboardCards from '../Supplier/SDashboardCards';
import SProfile from '../Supplier/SProfile';
import SEditProfile from '../Supplier/SEditProfile';
import OrdersS from '../Supplier/OrderList';
import  NewEnquiryS from '../Supplier/SNewEnquiry'
import  PendingOrderS from '../Supplier/SPendingOrder'
import  CancalledOrderS from '../Supplier/SCancalledOrder'
import  CompletedOrderS from '../Supplier/SCompletedOrder'
import  SCustomerDetails from '../Supplier/SCustomerDetails'
import {TbLayoutDashboard} from 'react-icons/tb'

import ChangePassword from '../Shared/ChangePassword'

import ContactUs from '../Shared/ContactUs';
 
const SupplierfrontPage= ()=>{
  return ( 
    <div>         
    <div className="container11">
  <div className="header1"><SupplierNav/></div>
  <div className="sidebar1"><SideBarS/></div>
  <div className="footer1"><Footer/></div>
  <div className="content1">
       <Routes>
       <Route exact path="sdashboard" element={<SDashboardCards/>}/>
       <Route exact path="editprofiles" element={<SEditProfile/>}/>
       <Route exact path="supplierorders" element={<OrdersS/>}/>
       <Route exact path="profiles" element={<SProfile/>}/>
       <Route exact path="newenquiry/:id" element={<NewEnquiryS/>}/>
       <Route exact path="pendingorder/:id" element={<PendingOrderS/>}/>
       <Route exact path="cancalledorder/:id" element={<CancalledOrderS/>}/>
       <Route exact path="completedorder/:id" element={<CompletedOrderS/>}/>
       <Route exact path="orderdetail/:id" element={<SCustomerDetails/>}/>
     
      
       <Route exact path="changepassword" element={<ChangePassword/>}/>
       <Route exact path="contactUs" element={<ContactUs/>}/>
       </Routes>
      </div>
   </div>             
   </div> 
    ) 
  } 
export default SupplierfrontPage