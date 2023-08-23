import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Connection from '../Services/Connection'
import { useFormik } from 'formik'

const validateCustomer = (custData) => {
    const errors = {}
    let pattern1 = /^([a-zA-Z ]+)$/
    let pattern2 = /^([1-9]{1}[0-9]{5}|[1-9]{1}[0-9]{3}\\s[0-9]{3})$/
    let pattern3 = /^([0-9]{12})$/
    let pattern4 = /^([0-9]{10})$/
    let pattern5 = /^[a-z0-9._%]+@[a-z0-9.-]+.[a-z]{3}$/

    if (!custData.name)
        errors.name = "Name is Required!"
    else if (!pattern1.test(custData.name))
        errors.name = "Alphabets Only"

    if (!custData.address)
        errors.address = "Address is Required!"

    if (custData.pincode.length == 0)
        errors.pincode = "PinCode required!"
    else if (!pattern2.test(custData.pincode))
        errors.pincode = "Numbers upto 6-Digits Only!"

    if (!custData.dob)
        errors.dob = 'Date Of Birth Required!'

    if (custData.aadhaar.length == 0)
        errors.aadhaar = "Adhard Number required"
    else if (!pattern3.test(custData.aadhaar))
        errors.aadhaar = "Numbers upto 12-Digits Only!"

    if (custData.mobile.length == 0)
        errors.mobile = "Mobile Number required!"
    else if (!pattern4.test(custData.mobile))
        errors.mobile = "Numbers upto 10-Digits Only!"

    if (custData.username.length == 0)
        errors.username = "Email required!"
    else if (!pattern5.test(custData.username))
        errors.username = "Use Correct Pattern for Email!"

    return errors
}

const SignUp = () => {

    let navigate = useNavigate()
    // const [name, SetName] = useState('')
    // const [address, SetAddress] = useState('')
    // const [pincode, SetPincode] = useState('')
    // const [dob, SetDob] = useState('')
    // const [aadhaar, SetAadhaar] = useState('')
    // const [mobile, SetMobile] = useState('')
    // const [password, SetPassword] = useState('')
    // const [username, SetUsername] = useState('')
    useEffect(() => {
        document.title = "Wish-it || SignUp"
      })
    const SaveUser = (e) => {
        let name = formik.values.name;
        let address = formik.values.address;
        let pincode = formik.values.pincode;
        let dob = formik.values.dob;
        let aadhaar = formik.values.aadhaar;
        let mobile = formik.values.mobile;
        let username = formik.values.username;
        

        const customer = { name, address, pincode, dob, aadhaar, mobile, username }
        Connection.saveCustomer(customer).then((response) => {
            if (response.data.userid != 0) {

                const tok = response.data.token;
                navigate('/verify',
                    {
                        state: {
                            token: tok,
                        }
                    });
            }

        }).catch(error => { navigate("/") })
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            address: '',
            pincode: '',
            dob: '',
            aadhaar: '',
            mobile: '',
            username: ''
        },
        validate: validateCustomer,
        onSubmit: () => {
           
            SaveUser()
            
        }
    })


    return (
        <>
        <div>
            <div className="container col-8 mt-5 mb-5">
                <div className='card text-bg-light p-3 '>
                    <form onSubmit={formik.handleSubmit}>
                        <h3 className='text-center'>Customer SignUp Form</h3>
                        <div className="form-group mb-2">
                            <label className="form-label mt-4">Name</label>
                            <input type="text"
                                placeholder="Full Name"
                                name="name" className="form-control rounded-pill mt-2"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required />
                            {formik.touched.name && formik.errors.name ?
                                <span className="text-danger">{formik.errors.name}</span>
                                : null}
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label mt-4">Address</label>
                            <input type="text"
                                placeholder="Address"
                                name="address"
                                value={formik.values.address}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="form-control rounded-pill mt-2"
                                ></input>
                            {formik.touched.address && formik.errors.address ? <span className="text-danger">
                                {formik.errors.address}</span> : null}
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label mt-4">PinCode</label>
                            <input type="number"
                                placeholder="PinCode"
                                name="pincode"
                                value={formik.values.pincode}
                                className="form-control rounded-pill mt-2"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            ></input>{formik.touched.pincode && formik.errors.pincode ? <span className="text-danger">
                                {formik.errors.pincode}</span> : null}
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label mt-4">Date Of Birth</label>
                            <input type="date"
                                placeholder="Enter DOB"
                                name="dob"
                                value={formik.values.dob}
                                className="form-control rounded-pill mt-2"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            ></input>
                            {formik.touched.dob && formik.errors.dob ? <span className="text-danger">
                                {formik.errors.dob}</span> : null}
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label mt-4">Aadhaar Number</label>
                            <input type="number"
                                placeholder="Aadhaar No."
                                name="aadhaar"
                                value={formik.values.aadhaar}
                                className="form-control rounded-pill mt-2"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            ></input>{formik.touched.aadhaar && formik.errors.aadhaar ? <span className="text-danger">
                                {formik.errors.aadhaar}</span> : null}
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label mt-4">Mobile No.</label>
                            <input type="number"
                                placeholder="Enter Mobile"
                                name="mobile"
                                value={formik.values.mobile}
                                className="form-control rounded-pill mt-2"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            ></input>
                            {formik.touched.mobile && formik.errors.mobile ? <span className="text-danger">
                                {formik.errors.mobile}</span> : null}
                        </div>
                        <div className="form-group mb-2">
                            <label className="form-label mt-4">Email</label>
                            <input type="Email"
                                placeholder="This will be your Username"
                                name="username"
                                value={formik.values.username}
                                className="form-control rounded-pill mt-2"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            ></input>
                            <label className="small">OTP will be sent on this email</label><br></br>
                            {formik.touched.username && formik.errors.username ? <span className="text-danger">
                                {formik.errors.username}</span> : null}
                        </div>
                        {/* <div className="form-group mb-2">
                          <label className="form-label mt-4">Password</label>
                          <input type="password" placeholder="Enter password" 
                          name="password" 
                          value={password}
                          onChange={(e)=>SetPassword(e.target.value)}
                          className="form-control rounded-pill mt-2" 
                          required></input>
                      </div>
                      <div className="form-group mb-2">
                          <label className="form-label mt-4">Confirm Password</label>
                          <input type="password" placeholder="Confirm password" 
                          name="cnfpassword" 
                          value={cnfpassword}
                          onChange={(e)=>SetConfirmPassword(e.target.value)}
                          className="form-control rounded-pill mt-2" 
                          required></input>
                      </div> */}
                        <div className='d-grid gap-2'>
                            <button className="btn btn-primary mt-4 rounded-pill" type="submit">Get OTP</button>
                        </div>
                    </form>
                    <div className='d-grid gap-2'>
                        <button className="btn btn-success mt-4 rounded-pill" >SignIn</button>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default SignUp
