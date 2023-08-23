import React,{useEffect, useState}  from 'react'
import Connection from './Connection'
import { useParams,Link } from "react-router-dom";
const SCancalledOrder = () => {
    const { id } =useParams()
    const[order,SetOrder]=useState('')
    useEffect(() => {
        document.title = "HomeEase || Cancelled"
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
                                           
                                            <h3 className='text-center'>Cancelled Order</h3>
                                            
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




                                            </div>
        
                                            
                                               
                                            
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                        </form>
        
                        
        
                            
        
                           
                        <div className='text-center  mt-3'><Link to={`/s/supplierorders`}><button type="button" class="btn btn-outline-primary" style={{
                            width: 300,
                            height: 50,
                            borderRadius: 140 / 2,
                           
                            transform: [
                                { scaleX: 2 }
                            ]
                        }}>Back to Orders</button></Link></div>
        
        
                        
                    </p>
                </div>
            </div>
        
        </div>
        
        </div>
        
    )
}

export default SCancalledOrder