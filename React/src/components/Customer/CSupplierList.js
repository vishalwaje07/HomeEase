import React,{useEffect, useState}  from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import axios from "axios";

const CSupplierList = () => {
    const { id } =useParams()
    const [suppliers,setsuppliers] = useState([])
    const navigate=useNavigate()


     var token = `${sessionStorage.getItem('JwtToken')}`
     useEffect(() => {
        sessionStorage.setItem("ServiceId",id)
     loadUser()
      },[])

  const loadUser = async () =>{
    const res = await axios.get(`http://localhost:8084/api/supplier/getservicesuppliers/${id}`,{ headers: {"Authorization" : `Bearer ${token}`} });
    setsuppliers(res.data.supplierslist)
    //console.log(res.data.supplierslist)
  }
 const Enquiry=(e,id)=>{
    navigate(`/c/enquiry/${id}`)
 }

  return (
    <div className="container">
      <h2 className="text-center">Supplier's List</h2>
      <div className='row'>
              {
                  suppliers.map(
                      sp =>
                    

              <div className=' card text-bg-light p-3 col-md-3 border t bg-gradient m-4' key={sp.id}>
             
             <div className='card__info'>
                 <h4 className='card__id'>SupplierId - {sp.supplierid}</h4>
                 <h4 className='card__title'>Service - {sp.serviceType.name}</h4>
                 <h4 className='card__title'>PinCode- {sp.pincode}</h4>
                 <h4 className='card__title'>Charge - {sp.charge}</h4>
                 <a href='' target="_blank">
                 <Link to={`/c/enquiry/${sp.supplierid}`}> <button className='btn offset-4 btn-success'>Enquiry</button></Link>
                 </a>
             </div>
         </div>
                  )
              }</div>
          
      
    </div>
    )
}

export default CSupplierList