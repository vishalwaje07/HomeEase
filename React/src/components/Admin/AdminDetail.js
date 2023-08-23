import React,{useEffect, useState} from 'react'
import { Link, useParams,useNavigate } from "react-router-dom";
import axios from "axios";
import Connection from './Connection'
const CustomerDetails = () => {
    const { id } =useParams()
    const navigate=useNavigate()
  const [customer,setcustomerDetails] = useState([])
  const [user,setUser] = useState([])
  
  useEffect(() => {
    Connection.getCustomer(id).then((response)=> {
        setcustomerDetails(response.data.customer)
        setUser(response.data.user)
       
       
        
   }).catch(error =>{
       console.log(error);
   })
  },[])
  const BackToList=(e)=>{
    navigate('/a/adminlist')
  }
  

    return (
        <div>
        <div>

            <div className="container col-8 mt-5 mb-5" >


                <div className='card text-bg-light p-1' >
                    <p >
                        <form method="post " className='container-center col-8 offset-1' > 
                            <div class="row">
                            </div>
                            <div class="row">
                                <div className='offset-4'>
                                    <div class="col-md-8">
                                        <div class="tab-content profile-tab" id="myTabContent">
                                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                            <h3 className='text-center'>Admin Details</h3><hr></hr>

                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label class="col-mb-2">User ID</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        
                                                        <p class="text-success">{user.id}</p>
                                                    </div>
                                                </div>    
                                            </div>
                                                <div class="row">
                                                <div class="col-md-6">
                                                    <label>Customer Name</label>
                                                </div>
                                                <div class="col-md-6">
                                                    
                                                    <p class="text-success">{user.name}</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Mobile</label>
                                                </div>
                                                <div class="col-md-6">
                                                    
                                                    <p class="text-success">{user.mobile}</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Email</label>
                                                </div>
                                                <div class="col-md-6">
                                                    
                                                    <p class="text-success">{user.username}</p>
                                                </div>
                                            </div>
                                                <div class="row">
                                                <div class="col-md-6">
                                                    <label> Address</label>
                                                </div>
                                                <div class="col-md-6">
                                                   
                                                    <p class="text-success">{customer.address}</p>
                                                </div>
                                            </div>
                                            
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Pincode</label>
                                                </div>
                                                <div class="col-md-6">
                                                  
                                                    <p class="text-success">{customer.pincode}</p>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Aadhaar Card</label>
                                                </div>
                                                <div class="col-md-6">
                                                   
                                                    <p class="text-success">{customer.aadhaar}</p>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Date Of Birth</label>
                                                </div>
                                                <div class="col-md-6">
                                                   
                                                    <p class="text-success">{new Date(customer.dob).toDateString()}</p>
                                                </div>
                                            </div>
                                           
                                           
                                          

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </form>
                    <div className='offset-4'>
                        <tr >

                           

                            
                            <button onClick={e=>{BackToList(e)}}
                            className="btn btn-outline-primary col-3  ms-3 mt-3 rounded-pill mb-3" style={{
                                width: 200,
                                height: 50,
                                borderRadius: 140 / 2,
                               // backgroundColor: '#D33115',
                                transform: [
                                    { scaleX: 3 }
                                ]
                            }} >Back To List</button>

                        </tr></div>
                    </p>
                </div>
            </div>

        </div>
        
    </div>


    )
}

export default  CustomerDetails