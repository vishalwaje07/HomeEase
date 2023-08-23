import React,{useEffect, useState}  from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
 import CustConnection from './ConnectionCustomer/CustConnection';


const CustomSuppliers = () => {
    const { pincode } =useParams()
    const id=`${sessionStorage.getItem("ServiceId")}`
    
    const [suppliers,setsuppliers] = useState([])
    const navigate=useNavigate()
     useEffect(() => {
        console.log(id)
        CustConnection.CustomSuppliers(id,pincode).then((res)=>{
            setsuppliers(res.data.supplierslist)
        }).catch((err)=>{
    alert("Please select service")
        })
    
      },[])


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

export default CustomSuppliers