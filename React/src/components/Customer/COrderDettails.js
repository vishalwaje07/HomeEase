import React,{useEffect, useState}  from 'react'
import {  useNavigate,useParams } from "react-router-dom";
import CustConnection from './ConnectionCustomer/CustConnection';
const COrderDettails = () => {
    const navigate=useNavigate()
    const { id } =useParams()
    const[order,SetOrder]=useState('')
    const[supplier,SetSupplier]=useState('')
    const[service,SetService]=useState('')
    const[UseOtp,SetUseOtp]=useState('')

    useEffect(() => {
        document.title = "Wish-it || Order Details"
        CustConnection.getSupplierDetails(id).then((response)=> {
            // SetOrder(response.data.order)
            SetSupplier(response.data.supplier)
            SetService(response.data.supplier.serviceType)
            SetUseOtp(response.data.useOtp)
            console.log(response.data)    
       }).catch(error =>{
           alert(error);
       })
    },[])

    const BackToOrders=()=>{
        navigate('/c/ord')
    }
    return (
        
        <div>
        <div>
        
            <div className="container col-8 mt-5 mb-5" >
        
        
                <div className='card text-bg-light p-1' >
                    <p >
                    <form  className='container-center col-8' >
                                <div class="row">
                                </div>
                                <div class="row">
                                    <div className='offset-4'>
                                        <div class="col-md-8">
                                            <div class="tab-content profile-tab" id="myTabContent">
                                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                <h3 className='text-center'>Supplier Details</h3><hr></hr>

                                                <div class="row">
                                                        <div class="col-md-6">
                                                            <label class="col-mb-2">OrderId</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p class="text-success">{id}</p>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <label class="col-mb-2">Service Name</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p class="text-success">{service.name}</p>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                    <div class="col-md-6">
                                                        <label>ServiceId</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p class="text-success">{service.id}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                        <div class="col-md-6">
                                                            <label>Supplier Name</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p class="text-success">{UseOtp.otp}</p>
                                                        </div>
                                                    </div> <div class="row">
                                                        <div class="col-md-6">
                                                            <label>Supplier Email</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p class="text-success">{UseOtp.token}</p>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <label>Phone Number</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p class="text-success">{UseOtp.userid}</p>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Address</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p class="text-success">{supplier.address}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>PinCode</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p class="text-success">{supplier.pincode}</p>
                                                    </div>
                                                </div>
                                                

                                           
                                              
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Charge</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p class="text-success">{supplier.charge}</p>
                                                    </div>
                                                </div>
                                                </div>


                                                <div className='text-center mt-3'><button onClick={e=>{BackToOrders(e)}} type="button" class="btn btn-outline-primary">Back to Orders</button></div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </form>
 
                    </p>
                </div>
               
            </div>
        
        </div>
        
        </div>


    )
}

export default COrderDettails