import { useFormik } from "formik";
import React, {  useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import Connection from '../Services/Connection'


const validate = (cdata) => {
  const errors = {}
  let pattern1 = /^[a-z0-9._%]+@[a-z0-9.-]+.[a-z]{3}$/
  let pattern2 = /^[a-zA-Z0-9!@#$]{7,16}$/
  if (!cdata.username)
    errors.username = "Email is required!"
  else if (!pattern1.test(cdata.username))
    errors.username = "Use Correct Pattern for Email!"

  if (!cdata.password)
    errors.password = "Password is required!"
  else if (!pattern2.test(cdata.password))
    errors.password = "Use Correct Pattern for password!"

  return errors

}

function SignIn() {
  useEffect(() => {
    document.title = "Wish-it || SignIn"
  })
function ForgotPassword(e){
  
  e.preventDefault()
  var username = formik.values.username;
  var password = formik.values.password;
  const user = { username, password }
  Connection.forgotPass(user).then((response) => {
    if (response.data.userid != 0) {

        const tok = response.data.token;
        navigate('/verify',
            {
                state: {
                    token: tok,
                }
            });
    }

}).catch(error => { alert("Please provide Registered Email") })
}

  let navigate = useNavigate()
  

  const SaveUser =  (e) => {
    var username = formik.values.username;
    var password = formik.values.password;
   
    const user = { username, password }
    Connection.getToken(user).then((response) => {
      console.log(response.data.role);
      console.log(response.data.token);
      sessionStorage.setItem("JwtToken", response.data.token)
      
      if (response.data.role === 'ROLE_ADMIN') {
        navigate("/a/adashboard")
      }
      if (response.data.role === 'ROLE_CUSTOMER') {
        navigate("/c/card")
      }
      if (response.data.role === 'ROLE_SUPPLIER') {
        navigate("/s/sdashboard")
      }
    }).catch(error => { alert(error) })
  };

  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validateOnBlur: true,
    validate: validate,
    onSubmit:()=>{
      SaveUser()
  }
})

  return (

    <div className="container col-5 mt-5 mb-5">
      <div className='card text-bg-light p-3 '>
        <form
          onSubmit={formik.handleSubmit}
        >
          <h3 className='text-center'>SignIn</h3>
          <div className="form-group mb-2">
            <label className="form-label mt-4">Email</label>
            <input type="text"
              placeholder="Enter Username"
              name="username"
              className="form-control rounded-pill mt-2"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></input>
            {formik.touched.username && formik.errors.username ?
              <span className="text-danger">
                {formik.errors.username}</span> : null}

          </div>
          <div className="form-group mb-2">
            <label className="form-label mt-4">Password</label>
            <input type="password" placeholder="Enter password"
              name="password"
              className="form-control rounded-pill mt-2"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></input>
            {formik.touched.password && formik.errors.password ?
              <span className="text-danger">
                {formik.errors.password}</span> : null}
          </div>
          <div className='d-grid gap-2'>
            <button className="btn btn-primary mt-4 rounded-pill"
            type="submit"
            >Submit</button>
          </div>
        </form>
        <div className='text-center mt-3'><small><a href='' onClick={ e=>{ForgotPassword(e)}}>
          Forgot Password</a></small>
        </div>

      </div>
    </div>


  );
}


export default SignIn