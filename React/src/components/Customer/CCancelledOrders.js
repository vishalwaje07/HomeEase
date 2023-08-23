import React,{useEffect, useState}  from 'react'
import {  useNavigate,useParams} from "react-router-dom";
import CustConnection from './ConnectionCustomer/CustConnection';
const CCancelledOrders=()=> {
    const { id } =useParams()
    const navigate=useNavigate()
    
    const[order,SetOrder]=useState('')
    
    const Reject=()=>{
        CustConnection.CRejectOrder(id).then((response)=>{
            navigate('/c/ord')
        }).catch(()=>{
            alert("Something Went Wrong")
        })
       
    }
    const BackToOrders=()=>{
        navigate('/c/ord')
    }

    useEffect(() => {
        document.title = "HomeEase || Pending Order"
        CustConnection.getOrderDetails(id).then((response)=> {
            SetOrder(response.data.order)
           
       }).catch(error =>{
           alert(error);
       })
    },[])
    
        return (
            <div className="container col-8 mt-5 mb-5">


            <div className='card text-bg-light p-3  mb-3'>
            <h3 className='text-center'>Cancelled Order</h3><hr></hr>
            <p className='container-center col-8 ms-5'>
                <form>
                <div class="row">
        </div>
        <div class="row">
            <div className='offset-4'>
                <div class="col-md-8">
                    <div class="tab-content profile-tab" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div class="row">
                                <div class="col-md-6">
                                    <label class="col-mb-2">OrderId</label>
                                </div>
                                <div class="col-md-6 ">
                                    <p class="text-success">{order.orderid}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label class="col-mb-2">ServiceId</label>
                                </div>
                                <div class="col-md-6 ">
                                    <p class="text-success">{order.servicetypeid}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label class="col-mb-2">Service Booked for</label>
                                </div>
                                <div class="col-md-6 ">
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
                            <div class="row">
                                <div class="col-md-6">
                                    <label class="col-mb-2">Status</label>
                                </div>
                                <div class="col-md-6 ">
                                    <p class="text-success">{order.status}</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
            
            
            
                    
                </form>
                </p>
                
            <div className='text-center mt-3'><button onClick={e=>{BackToOrders(e)}} type="button" class="btn btn-outline-primary">Back to Orders</button></div>
            </div>
            </div>
            
        )

       
    
}
export default CCancelledOrders
