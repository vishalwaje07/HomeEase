import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
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
        document.title = "HomeEase || Edit Profile"
        Connection.getSupplierProfile().then((response)=>{
            console.log(response.data)
            setNames(response.data.user.name)
            setAddress(response.data.supplier.address)
            setPincode(response.data.supplier.pincode)           
            setAadhaar(response.data.supplier.aadhaar)
            setMobile(response.data.user.mobile)
            setCharge(response.data.supplier.charge)
            
        }).catch(()=>{alert("Error")})
    
    },[])
    
    let navigate = useNavigate()
    const EditProfile = (e) => {
            e.preventDefault()
            const supplier = { name, address, pincode, dob, aadhaar, mobile ,charge}
            Connection.EditProfile(supplier).then((response) => {
                if (response.data.supplier.supplierid != 0) {
                        navigate("/s/profiles")
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
                            <h4 class="offset-5">Supplier Edit Profile</h4>
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
                                <label className="form-label mt-4">DOB</label>
                                <input type="date"
                                    placeholder="Enter DOB"
                                    name="dob"
                                    value={dob}
                                    onChange = {(e) => setDob(e.target.value)}
                                    
                                    className="form-control rounded-pill mt-2"
                                    required></input>
                               
                            </div>

                            

                            <div className="form-group mb-2">
                                <label className="form-label mt-4">Minimum Visit Charges</label>
                                <input type="number"
                                    placeholder="Enter visit charges"
                                    name="charge"
                                    value={charge}
                                    onChange = {(e) => setCharge(e.target.value)}
                                  
                                    className="form-control rounded-pill mt-2"
                                    ></input>
                               
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




