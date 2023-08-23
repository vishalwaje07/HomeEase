import React,{useEffect, useState}  from 'react'
import {  useNavigate,useParams,Link } from "react-router-dom";
import CustConnection from './ConnectionCustomer/CustConnection';
const CCompletedOrders=()=> {
    const { id } =useParams()
    const navigate=useNavigate()
    
    const[order,SetOrder]=useState('')
    
    const BackToOrders=()=>{
        navigate('/c/ord')
    }
    const Details=()=>{
        navigate(`/c/ordDetails/${id}`)
    }
    const Feedback=()=>{
        navigate(`/c/feedback/${id}`)
    }
    useEffect(() => {
        document.title = "Wish-it || Pending Order"
        CustConnection.getOrderDetails(id).then((response)=> {
            SetOrder(response.data.order)
           
       }).catch(error =>{
           console.log(error);
       })
    },[])
    
        return (
            <div className="container col-10 mt-5 mb-5">


            <div className='card text-bg-light p-3  mb-3'>
            <h3 className='text-center'>Completed Order</h3><hr></hr>
            <p className='container-center col-8 ms-5'>
                <form  >
                    
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
                            <div class="row">
                                <div class="col-md-6">
                                    <label class="col-mb-2">Rating</label>
                                </div>
                                <div class="col-md-6 ">
                                    <p class="text-success">{order.rating}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <label class="col-mb-2">FeedBack</label>
                                </div>
                                <div class="col-md-6 ">
                                    <p class="text-success">{order.feedback}</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
            
            
            
                    
                </form>
                </p>
                <div className='d-grid gap-2'>
                        <tr className='row'>
                        <button onClick={e=>{Details(e)}}
                        className="btn btn-success mt-3 rounded-pill offset-1 " style={{
                                width: 200,
                                height: 50,
                                borderRadius: 140 / 2,
                                backgroundColor: '#4CAF50',
                                transform: [
                                    { scaleX: 3 }
                                ]
                            }}>Details</button>
                        <button onClick={e=>{Feedback(e)}} className="btn btn-warning mt-3 rounded-pill offset-1" style={{
                                width: 200,
                                height: 50,
                                borderRadius: 140 / 2,
                               // backgroundColor: 'red',
                                transform: [
                                    { scaleX: 3 }
                                ]
                            }}>Feedback</button>
                             <button onClick={e=>{BackToOrders(e)}} className="btn btn-primary mt-3 rounded-pill offset-1" style={{
                                width: 200,
                                height: 50,
                                borderRadius: 140 / 2,
                               // backgroundColor: 'red',
                                transform: [
                                    { scaleX: 3 }
                                ]
                            }}>Back To Orders</button>
                            </tr>
            </div>
            </div>
            </div>
            
        )

       
    
}
export default CCompletedOrders