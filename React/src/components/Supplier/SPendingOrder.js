import React,{useEffect, useState}  from 'react'
import { App } from 'react-bootstrap-icons'
import Connection from './Connection'
import {  useNavigate,useParams,Link, Navigate } from "react-router-dom";
const SPendingOrder = () => {
    const navigate=useNavigate()
    const { id } =useParams()
    const[order,SetOrder]=useState('')
    const[customer,SetCustomer]=useState('')
    const[user,SetUser]=useState('')

    const Completed=()=>{
        Connection.CompletedOrder(id).then((response)=>{
            navigate('/s/supplierorders')
        }).catch(()=>{
            alert("Something Went Wrong")
        })
    }
    const Cancalled=()=>{
        Connection.RejectOrder(id).then((response)=>{
            navigate('/s/supplierorders')
        }).catch(()=>{
            alert("Something Went Wrong")
        })
       
    }


    useEffect(() => {
        document.title = "Wish-it || Completed"
        Connection.getOrderDetails(id).then((response)=> {
            SetOrder(response.data.order)
            SetCustomer(response.data.customer)
            SetUser(response.data.user)
             console.log(response.data)
           
       }).catch(error =>{
           alert(error);
       })
    },[])
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
                                                <h3 className='text-center'>Pending Order </h3><hr></hr>

                                                <div class="row">
                                                        <div class="col-md-6">
                                                            <label class="col-mb-2">OrderId</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p class="text-success">{order.orderid}</p>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <label class="col-mb-2">Coustomer Name</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p class="text-success">{user.name}</p>
                                                        </div>
                                                    </div>


                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <label>Phone</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <p class="text-success">{user.mobile}</p>
                                                        </div>
                                                    </div>

                                                </div>


                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Address</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p class="text-success">{customer.address}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>PinCode</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p class="text-success">{customer.pincode}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>ServiceId</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p class="text-success">{order.servicetypeid}</p>
                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Status</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p class="text-success">{order.status}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Service Booked for</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p class="text-success">{new Date(order.orderdate).toDateString()}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Description</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p class="text-success">{order.description}</p>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </form>
        


                    <div className='d-grid gap-2'>
                        <tr className='row'>
                         <button onClick={e=>{Completed(e)}} className="btn btn-outline-primary mt-3 rounded-pill offset-1 " style={{
                                 width: 300,
                                 height: 50,
                                 borderRadius: 140 / 2,
                                 backgroundColor: '#4CAF50',
                                transform: [
                                    { scaleX: 3 }
                                ]
                            }}>Completed</button>
                         <button onClick={e=>{Cancalled(e)}} className="btn btn-outline-primary mt-3 rounded-pill offset-1" style={{
                                 width: 300,
                                 height: 50,
                                 borderRadius: 140 / 2,
                                 backgroundColor: 'red',
                                transform: [
                                    { scaleX: 3 }
                                ]
                            }}>Cancel</button>
                            </tr>
                    </div>

    
                    </p>
                </div>
            </div>
        
        </div>
        
        </div>


    )
}

export default SPendingOrder