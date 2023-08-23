import React,{useEffect, useState}  from 'react'
import {Link,useNavigate} from 'react-router-dom'
import Connection from './Connection'

const OrderList = () => {
    const [orders,setOrders] = useState([])
    const navigate=useNavigate()
    const GetOrderDetails=(e,id)=>{
        navigate(`/a/orderdetails/${id}`)
    
        }
    useEffect(() => {
        Connection.getOrderList().then((response)=> {
            setOrders(response.data.orderlist)
           console.log(response.data.orderlist)
       }).catch(error =>{
           alert(error);
       })
    },[])
  return (
    <div className="container col-9">
      <h2 className="text-center">Order's List</h2>
      <table className="table table-bordered table-striped">
          <thead>
              <th>Order Id</th>
              <th>Status</th>
              
              <th>ServiceId</th>
              <th>Description</th>
             
              <th>Actions</th>
          </thead>
          <tbody>
              {
                  orders.map(
                      od =>
                      <tr key={od.orderid}>
                          <td>{od.orderid}</td>
                          <td>{od.status}</td>
                          <td>{od.servicetypeid}</td>
                          <td>{od.description}</td>
                          
                          <td><button className="btn btn-success" type='button' onClick={(e)=>{GetOrderDetails(e,od.orderid)}} >Details</button></td>

                         
                          
                      </tr>
                  )
              }
          </tbody>
      </table>
      <Link to={`/a/adashboard`}><button className="btn btn-success mb-5" >Back To DashBoard</button></Link>
    </div>
    )
}

export default OrderList