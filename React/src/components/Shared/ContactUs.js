import Contact from '../../Assets/image/WishitContactUs.png'
import React,{useEffect, useState}  from 'react'
import { Container, Row, Col } from "react-bootstrap"
const styles = {
  color: "#A8A944",
  fontSize: 100,
  
 // border: "3px solid black"
}
const ContactUs = () => {
  useEffect(() => {
    document.title = "Wish-it || ContactUs"
  })
  return (
<>
<Col  xl={12}>
                        <img src={Contact} alt="Header Img"></img>

                    </Col>

{/* <Contact></Contact>
<div className='text-center mt-5 mb-5'>
      <br></br><br></br>
    <i><h1 style={styles}>SAY HELLO TO US!</h1><br></br>
      <h3>prashantdaradeos@gmail.com</h3><br></br>
      <h5>+91 89562 16939</h5></i>
      <br></br><br></br><br></br>
      </div> */}
</>




   
  )
}

export default ContactUs
