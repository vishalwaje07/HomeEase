import React,{useEffect, useState}  from 'react'
import {Link,useParams} from 'react-router-dom'
import projImg1 from '../../Assets/image/painting.png'
import projImg2 from '../../Assets/image/Buildingmaintena.jpg'
import projImg3 from '../../Assets/image/electrician.jpeg'
import projImg4 from '../../Assets/image/fabricator.png'
import projImg5 from '../../Assets/image/flooring.jpg'
import projImg6 from '../../Assets/image/carpenter1.jpg'
import projImg7 from '../../Assets/image/gardening.jpg'
import projImg8 from '../../Assets/image/interiordesign.jpg'
import projImg9 from '../../Assets/image/kitchen.jpg'
import projImg10 from '../../Assets/image/desktoplaptoprepair.jpg'
import projImg11 from '../../Assets/image/actv.png'
import projImg12 from '../../Assets/image/pestControl.png'
import projImg13 from '../../Assets/image/plumbing.jpg'
import projImg14 from '../../Assets/image/homesafety.jpg'
import projImg15 from '../../Assets/image/solar.jpg'
import projImg16 from '../../Assets/image/watertankcleaning.jpg'
import projImg17 from '../../Assets/image/waterproofing.png'

const Card = () => {

       const infor = [
           {
               id:1,
               ImgUrl:projImg1,
               name:"Painting ",
           },
          {
            id:2,
            ImgUrl:projImg2,
            name:"Building Maintenance",
          },
          {
            id:3,
            ImgUrl:projImg3,
            name:"Electrician",
          },
          {
            id:4,
            ImgUrl:projImg4,
            name:"Fabrication",
          },
          {
            id:5,
               ImgUrl:projImg5,
               name:"Flooring",
          },
          {
            id:6,
            ImgUrl:projImg6,
            name:"Furniture",
          },
          {
            id:7,
            ImgUrl:projImg7,
            name:"Gardening",
          },
          {
            id:8,
            ImgUrl:projImg8,
            name:"Interior Design",
         },
         {
          id:9,
          ImgUrl:projImg9,
          name:"Kitchen Appliance Repair",
         },
         {
          id:10,
          ImgUrl:projImg10,
          name:"Laptop/Desktop Repair",
         },
          {
            id:11,
            ImgUrl:projImg11,
            name:"AC/TV Repair",
          },
          {
            id:12,
            ImgUrl:projImg12,
            name:"Pest Control",
          },
          {
            id:13,
            ImgUrl:projImg13,
            name:"Plumbing",
          },
          {
            id:14,
            ImgUrl:projImg14,
            name:"Security System",
          },
          {
            id:15,
            ImgUrl:projImg15,
            name:"Solar Installation",
          },
          {
            id:16,
            ImgUrl:projImg16,
            name:"Water Tank Cleaning",
          },
          {
            id:17,
            ImgUrl:projImg17,
            name:"Waterproofing",
          },
      ]
    
  return (
    <>
    <div className='container'>
        <div className='row'>
        {
            infor.map(
                       sup =>
                     <div className='abc  col-sm mt-4' >
                     <body style={{alignItems:"flex-start",height:"56vh"}}>
                         <div className='cards'>
                             <div className='image-container'>
                                 <img src={sup.ImgUrl} alt=" "/>
                             </div>
                             <div className='card-footer'>
                                 <span>{sup.id}</span>
                                 <h3>{sup.name}</h3>
                                 <Link to={`d/${sup.id}`} className="read-more">Get Suppliers <span>&rarr;</span></Link>
                             </div>
                          </div>
                     </body>
                     </div>
                      )
                    }   
         </div>
    </div>
                    
    </>
    )
}

export default Card
