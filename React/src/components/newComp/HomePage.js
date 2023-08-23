import React from 'react' 
import {Route, Routes } from 'react-router-dom'

import {Footer} from '../Shared/Footer';
import ContactUs from '../Shared/ContactUs';
import Home from '../Shared/Home';
import JoinUs from '../Shared/JoinUs';
import SignIn from '../Shared/SignIn';
import SignUp from '../Shared/SignUp';
import {NavBar} from '../Shared/NavBar';
import VerifyOtp from '../Shared/VerifyOTP';
import NewPassword from '../Shared/NewPassword';

const HomePage= ()=>{
  return ( 
    <div>         
    <div className="container12">
  <div className="header12"><NavBar /></div>
  <div className="footer12"><Footer/></div>
  <div className="content12">
       <Routes>
       <Route index element={<Home/>}/>
       <Route exact path="joinUs" element={<JoinUs />}/>
      <Route exact path="signIn" element={<SignIn />}/>
      <Route exact path="signUp" element={<SignUp />}/>
      <Route exact path="contactUs" element={<ContactUs/>}/>
      <Route exact path="verify" element={<VerifyOtp/>}/>
      <Route exact path="setnewpassword" element={<NewPassword/>}/>
      
       </Routes>
      </div>
   </div>             
   </div> 
    ) 
  } 
export default HomePage