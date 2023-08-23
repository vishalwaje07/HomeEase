
import React, { useEffect, useState } from 'react'
import Connection from './Connection'
const ADashBoardCards = () => {
    const [admin,setAdmin] = useState([])
    const [user,setUser] = useState([])
    useEffect(() => {
        document.title = "HomeEase || Dashboard"
       
        Connection.getAdminDashboard().then((response)=>{
           
            setUser(response.data.user)
            setAdmin(response.data.sdashboard)
            // console.log(response.data)
        }).catch(()=>{console.log("Error")})
    },[])
   
    return (
        <div class="container rounded bg-white mt-3 mb-3 ">
            <h4 class="offset-5 mt-2">Admin Dashboard</h4>
            <div class="row">
                <div class="center  border-right">
                    <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                        <img class="rounded-circle width:70 height:120 " src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" style={{
                            width: 200,
                            height: 250,
                            borderRadius: 140 / 2,
                            backgroundColor: '#FF6F00',
                            transform: [
                                { scaleX: 2 }
                            ]
                        }} />
                        <span class="font-weight-bold">{user.name}</span><span class="text-black-50">{user.username}</span><span> </span></div>
                </div>
                <div class="card-group offset-1">
                    <div class="card-wrap ms-5">
                        <div class="card-header one">
                            <i class="fas fa-code">{admin.allorders}</i>
                        </div>
                        <div class="card-content">
                            <br />
                            <button class="card-btn one">All Orders</button>
                        </div>
                    </div>
                    <div class="card-wrap ms-5">
                        <div class="card-header two">
                            <i class="fab fa-css3-alt">{admin.neworders}</i>
                        </div>
                        <div class="card-content">
                            <br />
                            <button class="card-btn two">New Orders</button>
                        </div>
                    </div>
                    <div class="card-wrap ms-5">
                        <div class="card-header three">
                            <i class="fab fa-html5">{admin.pendingorders}</i>
                        </div>
                        <div class="card-content">
                            <br />
                            <button class="card-btn three">Pending Orders</button>
                        </div>
                    </div>
                    <div class="card-wrap ms-5">
                        <div class="card-header four">
                            <i class="fab fa-js-square">{admin.cancalledorders}</i>
                        </div>
                        <div class="card-content">
                            <br />
                            <button class="card-btn four">Cancelled Orders</button>
                        </div>
                    </div>
                    <div class="card-wrap ms-5">
                        <div class="card-header five">
                            <i class="fab fa-js-square">{admin.completedorders}</i>
                        </div>
                        <div class="card-content">
                            <br />
                            <button class="card-btn five">Completed Orders</button>
                        </div>
                    </div>
                    <div class="offset-3">
                    <div class="card-wrap mt-3 " >
                        <div class="card-header six">
                            <i class="fab fa-js-square">{admin.customers}</i>
                        </div>
                        <div class="card-content">
                            <br />
                            <button class="card-btn six">Customers</button>
                        </div>
                    </div>
                    </div>
                    <div>
                    <div class="card-wrap ms-5 mt-3">
                        <div class="card-header seven">
                            <i class="fab fa-js-square">{admin.suppliers}</i>
                        </div>
                        <div class="card-content">
                            <br />
                            <button class="card-btn seven">Suppliers</button>
                        </div>
                    </div>
                    </div>
                    <div>
                    <div class="card-wrap ms-5 mt-3">
                        <div class="card-header two">
                            <i class="fab fa-js-square">{admin.services}</i>
                        </div>
                        <div class="card-content">
                            <br />
                            <button class="card-btn two">Services</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div><br></br><br></br><br></br>
            </div>

            )
}
            export default ADashBoardCards