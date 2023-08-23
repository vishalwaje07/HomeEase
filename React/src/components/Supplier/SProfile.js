import React, { useEffect, useState } from 'react'
import Connection from './Connection'
 import { Link } from "react-router-dom";

const SDashboardCards = () => {
    const [supplier,setSupplier] = useState([])
    const [user,setUser] = useState([])
    const [service,setService] = useState([])
    const [dob,setDOB] = useState([])
    useEffect(() => {
        document.title = "Wish-it || Dashboard"
       
        Connection.getSupplierProfile().then((response)=>{
            console.log(response.data)
            setUser(response.data.user)
            setService(response.data.supplier.serviceType)
            setSupplier(response.data.supplier)
            setDOB(new Date(response.data.supplier.dob).toDateString())
        }).catch(()=>{alert("Error")})
    },[])
    
    return (
        <div class="col-8 offset-2">
    <div class="container emp-profile">
        <form method="post">
            <div class="row">
                <div class="col-md-4">
                    <div class="profile-img">
                        <img src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                         alt="" style={{
                            width: 200,
                            height: 250,
                            transform: [
                                { scaleX: 2 }
                            ]
                        }} />
                        {/* <div class="file btn btn-lg btn-primary">
                            Change Photo
                            <input type="file" name="file" />
                        </div> */}
                    </div>
                </div>
                <div class="col-md-6 mt-5">
                    <div class="profile-head">
                        <h5>
                            {user.name}
                        </h5>
                        <h6>
                        {user.username}
                        </h6>
                       
                        <ul class="nav nav-tabs mt-5" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                            </li>

                        </ul>
                    </div>
                </div>
                <div class="col-md-2">
                <Link to={`/s/editprofiles`}><button class="btn btn-secondary profile-button ms-2" type="button">Edit</button></Link>
                </div>
            </div>
            <div class="row">
            <div className='offset-4'>
                <div class="col-md-8">
                    <div class="tab-content profile-tab" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div class="row">
                                <div class="col-md-6">
                                    <label class="col-mb-2">User Id</label>
                                </div>
                                <div class="col-md-6">
                                    <p>{user.id}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Name</label>
                                </div>
                                <div class="col-md-6">
                                    <p>{user.name}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Email</label>
                                </div>
                                <div class="col-md-6">
                                    <p>{user.username}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Phone</label>
                                </div>
                                <div class="col-md-6">
                                    <p>{user.mobile}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Adhar Number</label>
                                </div>
                                <div class="col-md-6">
                                    <p>{supplier.aadhaar}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Date Of Birth</label>
                                </div>
                                <div class="col-md-6">
                                    <p>{dob}</p>
                                </div>
                            </div>
                            
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Address</label>
                                </div>
                                <div class="col-md-6">
                                    <p>{supplier.address}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Zip Code</label>
                                </div>
                                <div class="col-md-6">
                                    <p>{supplier.pincode}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Minimum Visit Charges</label>
                                </div>
                                <div class="col-md-6">
                                    <p>{supplier.charge}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label>Type_of_service</label>
                                </div>
                                <div class="col-md-6">
                                    <p>{service.name}</p>

                                </div>
                            </div>
                            
                            <hr></hr>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
        </form>
        </div>
        </div>

            )
}
export default SDashboardCards
