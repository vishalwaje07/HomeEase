import React, { useEffect, useState } from 'react'
import Connection from './Connection'
const SDashboardCards = () => {
    const [supplier,setSupplier] = useState([])
    const [user,setUser] = useState([])
    useEffect(() => {
        document.title = "Wish-it || Dashboard"
       
        Connection.getSupplierDashboard().then((response)=>{
            
            setUser(response.data.user)
            setSupplier(response.data.sdashboard)
           // console.log(response.data)
        }).catch((err)=>{alert(err)})
    },[])
    
    return (
        <div class="container rounded bg-white mt-3 mb-5 ">
            <h4 class="offset-5 mt-2">Supplier Dashboard</h4>
            <div class="row">
                <div class="center  border-right">
                    <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                        <img class="rounded-circle width:70 height:120 " src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" style={{
                            width: 200,
                            height: 250,
                          
                            backgroundColor: '#FF6F00',
                            transform: [
                                { scaleX: 2 }
                            ]
                        }} />
                        <span class="font-weight-bold">{user.name}</span><span class="text-black-50">{user.username}</span><span> </span></div>
                </div>
                <div class="card-group mb-5 offset-1">
                    <div class="card-wrap ms-5 ">
                        <div class="card-header one">
                            <i class="fas fa-code">{supplier.allorders}</i>
                        </div>
                        <div class="card-content">
                            <br />
                            <button class="card-btn one">All Orders</button>
                        </div>
                    </div>
                    <div class="card-wrap ms-5">
                        <div class="card-header two">
                            <i class="fab fa-css3-alt">{supplier.neworders}</i>
                        </div>
                        <div class="card-content">
                            <br />
                            <button class="card-btn two">New Orders</button>
                        </div>
                    </div>
                    <div class="card-wrap ms-5">
                        <div class="card-header three">
                            <i class="fab fa-html5">{supplier.pendingorders}</i>
                        </div>
                        <div class="card-content">
                            <br />
                            <button class="card-btn three">Pending Orders</button>
                        </div>
                    </div>
                    <div class="card-wrap ms-5">
                        <div class="card-header four">
                            <i class="fab fa-js-square">{supplier.cancalledorders}</i>
                        </div>
                        <div class="card-content">
                            <br />
                            <button class="card-btn four">Cancelled Orders</button>
                        </div>
                    </div>
                    <div class="card-wrap ms-5">
                        <div class="card-header five">
                            <i class="fab fa-js-square">{supplier.completedorders}</i>
                        </div>
                        <div class="card-content">
                            <br />
                            <button class="card-btn five">Completed Orders</button>
                        </div>
                    </div>
                    
                </div>
            </div>
            </div>

            )
}
export default SDashboardCards