import React,{useEffect, useState} from 'react' 
import {useParams,Link } from "react-router-dom"; 
import CustConnection from './ConnectionCustomer/CustConnection'; 
import {  useNavigate } from "react-router-dom";
 
const CEnquiryForm = () => { 
     var token = sessionStorage.getItem('JwtToken')
     const { id } =useParams() 
     let navigate = useNavigate()
   const [supplier,setSupplier] = useState([]) 
   const [name,setName] = useState([]) 
   const [description,setdesc] = useState() 
  const [servicetypeid,setServicetypeid]=useState()
  const [orderdate,setDate]=useState()
  const [feedback,setFeedback]=useState()
  const [rating,setRating]=useState()
   const saveOrder=(e)=>{ 
     e.preventDefault(); 
      const supplierid=supplier.supplierid
     const order={supplierid,servicetypeid,description,orderdate,feedback,rating} 
     CustConnection.setOrder(order).then((response)=>{
      sessionStorage.removeItem("ServiceId")
      navigate("/c/ord")
        
     }).catch(error=>{
       alert(error) 
     }) 
   } 
 
   useEffect(() => { 
    CustConnection.getSupplier(id).then((res)=>{
      setSupplier(res.data.supplier) //service name 
      setName(res.data.supplier.serviceType.name) // 
      setServicetypeid(res.data.supplier.serviceType.id)
    
    
    }).catch((err)=>{
      alert(err)
    })
    
   },[]) 
 
 
 
  return ( 
    <div className="container col-5 mt-5 mb-5">         
    <div className='card text-bg-light p-3 '> 
         <form> 
         <h3 className='text-center'>Customer Enquiry</h3><hr></hr> 
             <div className="form-group mb-2"> 
                 <label className="form-label mt-2 offset-3">Supplier Id:</label> 
                 <span class="offset-1" name="supplname"> 
                   {supplier.supplierid} 
                 </span> 
             </div> 
             <div className="form-group mb-2"> 
                 <label className="form-label mt-2 offset-3">Service:</label> 
                 <span class="offset-1">{name}</span> 
                {/* <span class="badge rounded-pill text-bg-warning offset-3" name="servicename">            > 
                    {enquiryDetails.name} 
                 </span> */} 
                 
             </div> 
             <div className="form-group mb-2"> 
                <textarea class="form-control"
                 placeholder="Description" 
                 name="description"
                 value={description} 
                 onChange={(e)=>setdesc(e.target.value)}></textarea> 
             </div> 
             <div className="form-group mb-2"> 
             <label className="form-label mt-2">When do you want:</label> 
                <input class="form-control"
                 placeholder="Date" 
                 name="orderdate"
                 value={orderdate} 
                  type="date"
                 onChange={(e)=>setDate(e.target.value)}></input> 
             </div> 
             
            <div className='d-grid gap-2'> 
             <button className="btn btn-success mt-3 rounded-pill" onClick={(e)=>saveOrder(e)}>Send Enquiry</button> 
             </div> 
         </form> 
      
     <Link to={`/c/card`}><div className='text-center mt-3'><button type="button" class="btn btn-outline-primary">Back to Services</button></div> </Link>
 
</div> 
</div> 
    ) 
  } 
export default CEnquiryForm