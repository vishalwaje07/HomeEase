import React, { useEffect, useState } from 'react'
import {  useNavigate } from "react-router-dom";
import Connection from './Connection'

const SEditProfile = (supplier) => {
    const [name,setNames] = useState()
    const [address,setAddress] = useState()
    const [pincode,setPincode] = useState()
    const [dob,setDob] = useState()
    const [aadhaar,setAadhaar] = useState()
    const [mobile,setMobile] = useState()
    const [charge,setCharge] = useState()

    

    useEffect(() => {
        document.title = "Wish-it || Edit Profile"
        Connection.getAdminProfile().then((response)=>{
            // console.log(response.data)
            setNames(response.data.user.name)
            setAddress(response.data.customer.address)
            setPincode(response.data.customer.pincode)           
            setAadhaar(response.data.customer.aadhaar)
            setMobile(response.data.user.mobile)  
        }).catch(()=>{alert("Error")})
    
    },[])
    
    let navigate = useNavigate()
    const EditProfile = (e) => {
            e.preventDefault()
            const customer = { name, address, pincode, dob, aadhaar, mobile }
            Connection.EditProfile(customer).then((response) => {
                if (response.data.customer.customer != 0) {
                        navigate("/a/adminprofile")
                }
    
            }).catch(error => { alert("something went wrong") })
        }
    return (


        <div>

            <div>

                <div className="container col-8 mt-5 mb-5">


                    <div className='card text-bg-light p-3 '>
                        <form >
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h4 class="offset-5">Admin Edit Profile</h4>
                        </div>
                            <div className="form-group mb-2">
                                <label className="form-label mt-4">Name</label>
                                <input type="text"
                                    placeholder="Enter Full Name"
                                    name="name"
                                    value={name}
                                    onChange = {(e) => setNames(e.target.value)}
                                    required
                                   pattern="/^([a-zA-Z ]+)$/"
                                   
                                    className="form-control rounded-pill mt-2"
                                     />
                                     
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label mt-4">Mobile No.</label>
                                <input type="number"
                                    placeholder="Enter Mobile"
                                    name="mobile"
                                    value={mobile}
                                    onChange = {(e) => setMobile(e.target.value)}
                                  
                                    className="form-control rounded-pill mt-2"/>
                                
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label mt-4">Aadhaar Number</label>
                                <input type="number"
                                    placeholder="Enter Aadhaar No."
                                    name="aadhaar"
                                    value={aadhaar}
                                    onChange = {(e) => setAadhaar(e.target.value)}
                                   
                                    className="form-control rounded-pill mt-2"></input>
                                
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label mt-4">Address</label>
                                <input type="text"
                                    placeholder="Enter Address"
                                    name="address"
                                    value={address}
                                    onChange = {(e) => setAddress(e.target.value)}
                                  
                                    className="form-control rounded-pill mt-2"
                                    ></input>
                               
                            </div>


                            <div className="form-group mb-2">
                                <label className="form-label mt-4">Pin Code</label>
                                <input type="number"
                                    placeholder="Enter PinCode"
                                    name="pincode"
                                    value={pincode}
                                    onChange = {(e) => setPincode(e.target.value)}
                                 
                                    className="form-control rounded-pill mt-2"
                                    ></input>
                               
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label mt-4">DOB  </label>
                               
                                <input type="date"
                                    placeholder="Enter DOB"
                                    name="dob"
                                    value={dob}
                                    onChange = {(e) => setDob(e.target.value)}
                                    
                                    className="form-control rounded-pill mt-2"
                                    required></input>
                               
                            </div>

                            <button className="btn btn-success col-4 rounded-pill mt-2 offset-4 " onClick={(e)=>{EditProfile(e)}} >Save Profile</button><br></br>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SEditProfile



// const validate = (supData) => {
//     const errors = {}
//     let pattern1 = /^([a-zA-Z ]+)$/
//     let pattern2 = /^([1-9]{1}[0-9]{5}|[1-9]{1}[0-9]{3}\\s[0-9]{3})$/
//     let pattern3 = /^([0-9]{12})$/
//     let pattern6 = /^([0-9]{0,4})$/
//     let pattern4 = /^([0-9]{10})$/

//     if (!supData.name)
//         errors.name = "Name is Required!"
//     else if (!pattern1.test(supData.name))
//         errors.name = "Alphabets Only"

//     if (!supData.address)
//         errors.address = "Address is Required!"

//     if (supData.pincode.length == 0)
//         errors.pincode = "PinCode required!"
//     else if (!pattern2.test(supData.pincode))
//         errors.pincode = "Numbers upto 6-Digits Only1"

//     if (!supData.dob)
//         errors.dob = 'Date Of Birth Required!'

//     if (supData.aadhaar.length == 0)
//         errors.aadhaar = "Adhard Number required"
//     else if (!pattern3.test(supData.aadhaar))
//         errors.aadhaar = "Numbers upto 12-Digits Only!"

//     if (supData.charage.length == 0)
//         errors.charage = "Minimum Amount required"
//     else if (!pattern6.test(supData.charage))
//         errors.charage = "Numbers upto 4-Digits Only!"

//     if (supData.mobile.length == 0)
//         errors.mobile = "Mobile Number required!"
//     else if (!pattern4.test(supData.mobile))
//         errors.mobile = "Numbers upto 10-Digits Only!"

//     if (!supData.service)
//         errors.service = "Service Required!"

//     return errors
// }

// const initialValues= {
//     name: '',
//     address:'',
//     pincode: '',
//     dob: '',
//     aadhaar: '',
//     charage: '',
//     mobile: ''
   
// }

    // const SaveUser = (e) => {
    //     let name = formik.values.name;
    //     let address = formik.values.address;
    //     let pincode = formik.values.pincode;
    //     let dob = formik.values.dob;
    //     let aadhaar = formik.values.aadhaar;
    //     let mobile = formik.values.mobile;

    //     const customer = { name, address, pincode, dob, aadhaar, mobile }
    //     Connection.saveSupplier(customer).then((response) => {
    //         if (response.data.userid != 0) {

    //             const tok = response.data.token;
                
    //         }

    //     }).catch(error => { navigate("/") })
    // }

    // const formik = useFormik({
    //      initialValues:{initialValues},
    //     validateOnBlur: true,
    //     validate: validate,
    //     onSubmit: () => {
    //         alert("You are now subscribed.")
    //         SaveUser()
    //     },
    //     //enableReinitialize:true
        
    // })
