import React, { useEffect , useState } from 'react'
import {  Link, useNavigate,useLocation } from "react-router-dom";
import Connection from '../Services/Connection' 
 
const ChangePassword = () => {
  let navigate=useNavigate()
 
  const [username, SetPassword] = useState('')
  const [password, SetConfirmPassword] = useState('')

  useEffect(() => {
    document.title = "Wish-it || Change Password"
    
},[])
const SetNewPass=(e)=>{
    e.preventDefault();
    const user={username,password}
    alert(JSON.stringify(user))
    Connection.changePassword(user).then((response)=>{
      if(response.data!=0){
        sessionStorage.removeItem('JwtToken')
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
                           name="username" 
                           value={username}
                          onChange={(e)=>SetPassword(e.target.value)}
                          className="form-control rounded-pill mt-2" 
                          ></input>
                      </div>
                      <div className="form-group mb-2">
                          <label className="form-label mt-4">Confirm New Password</label>
                          <input type="text" 
                          placeholder="Confirm Password" 
                           name="password" 
                           value={password}
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
                      <button className="btn btn-success mt-4 rounded-pill" onClick={e=>navigate('/signIn')} >SignIn</button>
                      </div>
         
      </div>
      </div>


    </>
  )
}

export default ChangePassword
