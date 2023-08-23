import React,{useEffect, useState}  from 'react'
import {Link, useParams,useNavigate} from 'react-router-dom'
import Connection from './Connection'

const AdminCustomerList = () => {
    const { id } =useParams()
    const [users,setUsers] = useState([])
    let navigate = useNavigate()
    useEffect(() => {
        Connection.getCustomerList().then((response)=> {
            setUsers(response.data)
           console.log(response.data)
       }).catch(error =>{
           console.log(error);
       })
    },[])
  const  GetCustomer=(e,cid)=>{
    navigate(`/a/customerdetail/${cid}`)
  }
  return (
    <div className="container">
      <h2 className="text-center">Customer's List</h2>
      <table className="table table-bordered table-striped">
          <thead>
          <th>ID</th>
              <th>Name</th>
              <th>Mobile No.</th>
              <th>Email</th>       
              <th>Actions</th>
          </thead>
          <tbody>
              {
                  users.map(
                      user =>
                      <tr key={user.id}>
                        <td>{user.id}</td>
                          <td>{user.name}</td>
                          <td>{user.mobile}</td>
                          <td>{user.username}</td>
                          <td>
                              <button className="btn btn-success" onClick={e=>{GetCustomer(e,`${user.id}`)}}>Details</button>
                          </td>
                          
                      </tr>
                  )
              }
          </tbody>
      </table>
      <Link to={`/a/adashboard`}><button className="btn btn-success mb-5" >Back To DashBoard</button></Link>
    </div>
    )
}

export default AdminCustomerList