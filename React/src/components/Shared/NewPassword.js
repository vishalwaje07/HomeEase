import React, { useEffect , useState } from 'react'
import {  Link, useNavigate,useLocation } from "react-router-dom";
import Connection from '../Services/Connection' 
 
const NewPassword = () => {
  let navigate=useNavigate()
  const id=1
  const [otp, SetPassword] = useState('')
  const [cnfpassword, SetConfirmPassword] = useState('')
  
  const { state } = useLocation();
  const token=state.token
  useEffect(() => {
    document.title = "Wish-it || New Password"
    
},[])
  const SetNewPass=(e)=>{
    e.preventDefault();
    const user={id,otp,token}
    Connection.savePassword(user).then((response)=>{
      if(response.data!=0){
        navigate("/signIn")
      }
    
  } ).catch(error =>navigate("/"))}
 
  


  return (
    <>

<div className="container col-5 mt-5 mb-5">
          
             
             <div className='card text-bg-light p-3 '>
                  <form>
                  <h3 className='text-center'>New Password</h3>
                      <div className="form-group mb-2">
                          <label className="form-label mt-4">Enter New Password</label>
                          <input type="password" 
                          placeholder="Enter New Password" 
                           name="otp" 
                           value={otp}
                          onChange={(e)=>SetPassword(e.target.value)}
                          className="form-control rounded-pill mt-2" 
                          ></input>
                      </div>
                      <div className="form-group mb-2">
                          <label className="form-label mt-4">Confirm New Password</label>
                          <input type="password" 
                          placeholder="Confirm Password" 
                           name="cnfpassword" 
                           value={cnfpassword}
                          onChange={(e)=>SetConfirmPassword(e.target.value)}
                          className="form-control rounded-pill mt-2" 
                          ></input>
                      </div>
                     
                     <div className='d-grid gap-2'>
                      <button className="btn btn-primary mt-4 rounded-pill" 
                      onClick={(e)=>SetNewPass(e)}
                      >Save</button>
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

export default NewPassword
