import React,{useEffect, useState}  from 'react'
import {Link,useParams} from 'react-router-dom'
import projImg1 from '../../Assets/image/homesafety.jpg'
import projImg2 from '../../Assets/image/interiordesign.jpg'
import projImg12 from '../../Assets/image/waterproofing.png'
import CustConnection from '../../components/Customer/ConnectionCustomer/CustConnection'

const Carddbypass = () => {

    const infor = [
        {
          id:1,
            ImgUrl:projImg1,
            path:"/",
           name:"Interior Design",
        },
       {
        id:2,
            ImgUrl:projImg2,
           path:"/",
           name:"Interior Design",
       },
       {
        id:3,
        ImgUrl:projImg12,
        path:"/",
        name:"Interior Design",
    },
    {
        id:3,
        ImgUrl:projImg12,
        path:"/",
        name:"Interior Design",
    },
    {
        id:3,
        ImgUrl:projImg12,
        path:"/",
        name: "Interior Design",
    },
]

 const {id} =useParams()
        // var token=sessionStorage.setItem("JwtToken", response.data.token)
       const [custservice,setcustservice] =useState([])

       useEffect(()=>{
           CustConnection.getAllServices().then((response)=>{
               setcustservice(response.data.servicelist)
           }).catch(error =>{
               console.log(error);
           })
       },[])

  return (
     <div className='container'>
         <div className='row'>
         {
           infor.map(
                      sup =>
         <div className='col-md-3 border bg-dark bg-gradient m-4' key={sup.id}>
             <img src={sup.ImgUrl} alt='a' className='container-'></img>
             <div className='card__info'>
                 <span className='card__id'>{sup.id}</span>
                 <h3 className='card__title'>{sup.name}</h3>
                 <a href='' target="_blank">
                 <Link to={`d/${sup.id}`}> <button className='btn btn-success'>Details</button></Link>
                 </a>
             </div>
         </div>
    
     )
     }  
     </div>
     </div>
    )
}

export default Carddbypass