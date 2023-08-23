import React,{useEffect, useState} from 'react'
import { Link, useParams,useNavigate } from "react-router-dom";
import Connection from './Connection'
const OrderDetails = () => {
    const { id } =useParams()
  const [order,setorderDetails] = useState([])
const[customer,setCustomer]=useState([])
const navigate=useNavigate()
  useEffect(() => {
    document.title = "HomeEase || Order Details"
    Connection.getOrder(id).then((response)=> {
        setorderDetails(response.data.order)
        setCustomer(response.data.customer)
      
   }).catch(error =>{
      alert(error);
   })
  },[])
  const ToOrders=()=>{
    navigate('/a/orderlist')
}
  
    return (
        <div>
        <div>

            <div className="container col-8 mt-5" >


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
                                            <h3 className='text-center'>Order Details</h3><hr></hr>

                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label class="col-mb-2">Order ID</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p class="text-success">{order.orderid}</p>
                                                    </div>
                                                </div>    
                                            </div>
                                            
                                                <div class="row">
                                                <div class="col-md-6">
                                                    <label>Customer Id</label>
                                                </div>
                                                <div class="col-md-6">
                                                    
                                                    <p class="text-success">{customer.customerid}</p>
                                                </div>
                                            </div>
                                                <div class="row">
                                                <div class="col-md-6">
                                                    <label>Supplier Id</label>
                                                </div>
                                                <div class="col-md-6">
                                               
                                                    <p class="text-success">{order.supplierid}</p>
                                                </div>
                                            </div>
                                            
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Service Id</label>
                                                </div>
                                                <div class="col-md-6">
                                                   
                                                    <p class="text-success">{order.servicetypeid}</p>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Service Description</label>
                                                </div>
                                                <div class="col-md-6">
                                                   
                                                    <p class="text-success">{order.description}</p>
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
                                                    <label>Service Status</label>
                                                </div>
                                                <div class="col-md-6">
                                                   
                                                    <p class="text-success">{order.status}</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Rating</label>
                                                </div>
                                                <div class="col-md-6">
                                                   
                                                    <p class="text-success">{order.rating}</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>FeedBack</label>
                                                </div>
                                                <div class="col-md-6">
                                                   
                                                    <p class="text-success">{order.feedback}</p>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </form>
                    <div className='offset-4'>
                        <tr >


                            
<button onClick={e=>{ToOrders(e)}} className="btn btn-primary col-3   ms-3 mt-3 rounded-pill mb-3" style={{
                                width: 200,
                                height: 50,
                                borderRadius: 140 / 2,
                                //backgroundColor: '#D33115',
                                transform: [
                                    { scaleX: 3 }
                                ]
                            }} >Back To Orders</button>

                        </tr></div>
                    </p>
                </div>
            </div>

        </div>
        
    </div>


    )
}

export default  OrderDetails