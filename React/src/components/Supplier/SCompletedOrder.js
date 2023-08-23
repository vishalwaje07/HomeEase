import React,{useEffect, useState}  from 'react'
import Connection from './Connection'
import {  useNavigate,useParams} from "react-router-dom";
const SCompletedOrder = () => {
    const navigate=useNavigate()
    const { id } =useParams()
    const[order,SetOrder]=useState('')
    const OrderDetail=()=>{
        navigate(`/s/orderdetail/${id}`)
    }
    const ToOrders=()=>{
        navigate('/s/supplierorders')
    }
    useEffect(() => {
        document.title = "HomeEase || Completed"
        Connection.getOrder(id).then((response)=> {
            SetOrder(response.data.order)
           
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
                        <form method="post " className='container-center col-8' > 
                            <div class="row">
        
        
        
                            </div>
                            <div class="row">
                                <div className='offset-4'>
                                    <div class="col-md-8">
                                        <div class="tab-content profile-tab" id="myTabContent">
                                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                           
                                            <h3 className='text-center'>Completed Order</h3>
                                            
                                            <hr></hr>
        
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
        
{/* //paste below for buttons  */}

                    <div className='d-grid gap-2'>
                        <tr className='row'>
                         <button onClick={e=>{OrderDetail(e)}} className="btn btn-outline-primary mt-3 rounded-pill offset-1 " style={{
                                 width: 300,
                                 height: 50,
                                 borderRadius: 140 / 2,
                                // backgroundColor: '#4CAF50',
                                transform: [
                                    { scaleX: 3 }
                                ]
                            }}>Details</button>
                         <button onClick={e=>{ToOrders(e)}} className="btn btn-outline-primary mt-3 rounded-pill offset-1" style={{
                                 width: 300,
                                 height: 50,
                                 borderRadius: 140 / 2,
                                // backgroundColor: 'red',
                                transform: [
                                    { scaleX: 3 }
                                ]
                            }}>Back</button>
                            </tr>
                    </div>
















                        
                    </p>
                </div>
            </div>
        
        </div>
        
        </div>


    )
}

export default SCompletedOrder