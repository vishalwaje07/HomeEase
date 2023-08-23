import React, {  useState, useEffect } from 'react'
import {   useLocation, useNavigate } from "react-router-dom";
import Connection from '../Services/Connection' 
 
const VerifyOTP = () => {
  let navigate=useNavigate()
  const id =0
  const [otp, SetOtp] = useState('')
  useEffect(() => {
    document.title = "Wish-it || Verify OTP"
    
},[])
  // var [token,setToken]=useState(sessionStorage.getItem("JwtToken"))
  const { state } = useLocation();
  var token=state.token
  const Verify=(e)=>{
     e.preventDefault();     
     const user={otp,token,token}
    Connection.verifyot(user).then((response)=>{
      console.log(response.data)
      if(response.data!= null){
        navigate("/setnewpassword",{
          state: {
              token:token,
               }
      });
      }
    
  } ).catch(error =>{navigate("/")})
}
 
  


  return (
    <>



<div className="container col-5 mt-5 mb-5">
          
             
             <div className='card text-bg-light p-3 '>
                  <form>
                  <h3 className='text-center'>Verify OTP</h3>
                      <div className="form-group mb-2">
                          <label className="form-label mt-4">Enter OTP</label>
                          <input type="number" 
                          placeholder="Enter OTP" 
                           name="otp" 
                           value={otp}
                          onChange={(e)=>SetOtp(e.target.value)}
                          className="form-control rounded-pill mt-2" 
                          ></input>
                      </div>
                     
                     <div className='d-grid gap-2'>
                      <button className="btn btn-primary mt-4 rounded-pill" 
                      onClick={(e)=>Verify(e)}
                      >Verify</button>
                      </div>
                  </form>
              
                  <div className='d-grid gap-2'>
                      <button className="btn btn-success mt-4 rounded-pill" >SignIn</button>
                      </div>
         
      </div>
      </div>
    </>
  )
}

export default VerifyOTP
