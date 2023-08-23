import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Connection from '../Supplier/Connection'
import { useFormik } from 'formik'
import { Line } from 'react-bootstrap-icons';
import { checkTargetForNewValues } from 'framer-motion';

const validate = (supData) => {
    const errors = {}
    let pattern1 = /^([a-zA-Z ]+)$/
    let pattern2 = /^([1-9]{1}[0-9]{5}|[1-9]{1}[0-9]{3}\\s[0-9]{3})$/
    let pattern3 = /^([0-9]{12})$/
    let pattern6 = /^([0-9]{0,4})$/
    let pattern4 = /^([0-9]{10})$/
    let pattern5 = /^[a-z0-9._%]+@[a-z0-9.-]+.[a-z]{3}$/

    if (!supData.name)
        errors.name = "Name is Required!"
    else if (!pattern1.test(supData.name))
        errors.name = "Alphabets Only"

    if (!supData.address)
        errors.address = "Address is Required!"

    if (supData.pincode.length == 0)
        errors.pincode = "PinCode required!"
    else if (!pattern2.test(supData.pincode))
        errors.pincode = "Numbers upto 6-Digits Only1"

    if (!supData.dob)
        errors.dob = 'Date Of Birth Required!'

    if (supData.aadhaar.length == 0)
        errors.aadhaar = "Adhard Number required"
    else if (!pattern3.test(supData.aadhaar))
        errors.aadhaar = "Numbers upto 12-Digits Only!"

    if (supData.charge.length == 0)
        errors.charge = "Minimum Amount required"
    else if (!pattern6.test(supData.charge))
        errors.charge = "Numbers upto 4-Digits Only!"

    if (supData.mobile.length == 0)
        errors.mobile = "Mobile Number required!"
    else if (!pattern4.test(supData.mobile))
        errors.mobile = "Numbers upto 10-Digits Only!"

    if (supData.username.length == 0)
        errors.username = "Email required!"
    else if (!pattern5.test(supData.username))
        errors.username = "Use Correct Pattern for Email!"

    if (!supData.service)
        errors.service = "Service Required!"

    return errors
}




const JoinUs = () => {
    const [category, setServices] = useState([]);
    useEffect(() => {
        document.title = "Wish-it || Supplier-Join Us"
        Connection.getAllServices().then((response) => {
            setServices(response.data)
            console.log(response.data)
        })
    }, []);

    let navigate = useNavigate()

    const SaveUser = (e) => {
        let name = formik.values.name;
        let address = formik.values.address;
        let pincode = formik.values.pincode;
        let dob = formik.values.dob;
        let aadhaar = formik.values.aadhaar;
        let mobile = formik.values.mobile;
        let username = formik.values.username;
        let charge = formik.values.charge;
        let service=formik.values.service;
        const customer = { name, address, pincode, dob, aadhaar, mobile, username, charge ,service}
       
        Connection.saveSupplier(customer).then((response) => {
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

    const check=(e)=>{
        if(formik.values.service=="Painting"){ return formik.values.service=1; }
        else if(formik.values.service=="Building Maintenance"){ return formik.values.service=2; }
        else if(formik.values.service=="Electrician"){return formik.values.service=3;}
        else if(formik.values.service=="Fabrication"){return formik.values.service=4;}
        else if(formik.values.service=="Flooring"){return formik.values.service=5;}
        else if(formik.values.service=="Furniture"){return formik.values.service=6;}
        else if(formik.values.service=="Gardening"){return formik.values.service=7;}
        else if(formik.values.service=="Interior Design"){return formik.values.service=8;}
        else if(formik.values.service=="Kitchen Appliance Repair"){return formik.values.service=9;}
        else if(formik.values.service=="Laptop/Desktop Repair"){return formik.values.service=10;}
        else if(formik.values.service=="AC/TV Repair"){return formik.values.service=11;}
        else if(formik.values.service=="Pest Control"){return formik.values.service=12;}
        else if(formik.values.service=="Plumbing"){return formik.values.service=13;}
        else if(formik.values.service=="Security System"){return formik.values.service=14;}
        else if(formik.values.service=="Solar Installation"){return formik.values.service=15;}
        else if(formik.values.service=="Water Tank Cleaning"){return formik.values.service=16;}
        else if(formik.values.service=="Waterproofing"){return formik.values.service=17;}
        }

    const formik = useFormik({
        initialValues: {
            id: '',
            name: '',
            address: '',
            pincode: '',
            dob: '',
            aadhaar: '',
            service: '',
            mobile: '',
            username: '',
            charge: ''
        },
        validateOnBlur: true,
        validate: validate,
        onSubmit: () => {
            check();
            const service = formik.values.service;
            
            SaveUser()
        }
    })

    return (


        <div>

            <div>

                <div className="container col-8 mt-5 mb-5">
                    <div className='card text-bg-light p-3 '>
                        <form onSubmit={formik.handleSubmit}>
                            <h3 className='text-center'>Join Us</h3>
                            <div className="form-group mb-2">
                                <label className="form-label mt-4">Name</label>
                                <input type="text"
                                    placeholder="Enter Full Name"
                                    name="name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="form-control rounded-pill mt-2"
                                />{formik.touched.name && formik.errors.name ?
                                    <span className="text-danger">{formik.errors.name}</span>
                                    : null}
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label mt-4">Email</label>
                                <input type="Email"
                                    placeholder="This will be your Username"
                                    name="username"
                                    value={formik.values.username}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="form-control rounded-pill mt-2"
                                    required></input>
                                <label className=""><small>OTP will be sent on this email</small></label><br></br>
                                {formik.touched.username && formik.errors.username ? <span className="text-danger">
                                    {formik.errors.username}</span> : null}
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label mt-4">Mobile No.</label>
                                <input type="number"
                                    placeholder="Enter Mobile"
                                    name="mobile"
                                    value={formik.values.mobile}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="form-control rounded-pill mt-2"
                                    required

                                />
                                {formik.touched.mobile && formik.errors.mobile ? <span className="text-danger">
                                    {formik.errors.mobile}</span> : null}
                            </div>
                            <div className="form-group mb-2">
                                <label className="form-label mt-4">Aadhaar Number</label>
                                <input type="number"
                                    placeholder="Enter Aadhaar No."
                                    name="aadhaar"
                                    value={formik.values.aadhaar}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="form-control rounded-pill mt-2"
                                    required></input>
                                {formik.touched.aadhaar && formik.errors.aadhaar ? <span className="text-danger">
                                    {formik.errors.aadhaar}</span> : null}
                            </div>


                            <div className="form-group mb-2">
                                <label className="form-label mt-4">Address</label>
                                <input type="text"
                                    placeholder="Enter Address"
                                    name="address"
                                    value={formik.values.address}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="form-control rounded-pill mt-2"
                                    required></input>
                                {formik.touched.address && formik.errors.address ? <span className="text-danger">
                                    {formik.errors.address}</span> : null}
                            </div>



                            <div className="form-group mb-2">
                                <label className="form-label mt-4">Pin Code</label>
                                <input type="number"
                                    placeholder="Enter PinCode"
                                    name="pincode"
                                    value={formik.values.pincode}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="form-control rounded-pill mt-2"
                                    required></input>
                                {formik.touched.pincode && formik.errors.pincode ? <span className="text-danger">
                                    {formik.errors.pincode}</span> : null}
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label mt-4">DOB</label>
                                <input type="date"
                                    placeholder="Enter DOB"
                                    name="dob"
                                    value={formik.values.dob}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="form-control rounded-pill mt-2"
                                    required></input>
                                {formik.touched.dob && formik.errors.dob ? <span className="text-danger">
                                    {formik.errors.dob}</span> : null}
                            </div>




                            <div className="form-group mb-2">
                                <label className="form-label mt-4">Service Type</label>&nbsp;&nbsp;

                                <select name="service"
                                    value={formik.values.service}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    onSubmit={ e=>{check(e)}}>
                                    <option selected disabled >Select Option</option>
                                    {
                                        category.map((getCate) => (
                                            <option key={getCate.id}>{getCate.name}</option>
                                        )
                                        )
                                    }
                                </select><br></br>
                                {formik.touched.service && formik.errors.service ? <span className="text-danger">
                                    {formik.errors.service}</span> : null}
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label mt-4">Minimum Visit Charges</label>
                                <input type="number"
                                    placeholder="Enter visit charges"
                                    name="charge"
                                    value={formik.values.charge}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="form-control rounded-pill mt-2"
                                ></input>
                                {formik.touched.charge && formik.errors.charge ? <span className="text-danger">
                                    {formik.errors.charge}</span> : null}
                            </div>
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
        </div>
    )
}

export default JoinUs