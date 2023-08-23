import { useState,useEffect } from "react";
import { Navbar,Nav} from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import logo from '../../Assets/image/logo.png';
import navIcon2 from '../../Assets/image/admin.png';
import navIcon3 from '../../Assets/image/logout.png';



export const AdminNav=({click})=>{
    const[scrolled,setScrolled]=useState(false);
    let navigate = useNavigate()
    useEffect(()=>{
        const onScroll = ()=>{
            if(window.scrollY>50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll",onScroll);
        return ()=>window.removeEventListener("scroll",onScroll)
    },[])

     useEffect(()=>{
        
         const menuTarget3=document.getElementById("menuChevron3");
         const menuContainer3=document.getElementById("menuContainer3");
 
         menuTarget3.addEventListener('mouseenter',()=>{
             menuContainer3.style.transform ='translateX(0px)';
         });
 
         menuTarget3.addEventListener('mouseleave',()=>{
             menuContainer3.style.transform ='translateX(700px)'
         });

          const menuTarget4=document.getElementById("menuChevron4");
          const menuContainer4=document.getElementById("menuContainer4");
 
          menuTarget4.addEventListener('mouseenter',()=>{
              menuContainer4.style.transform ='translateX(0px)';
          });
 
          menuTarget4.addEventListener('mouseleave',()=>{
              menuContainer4.style.transform ='translateX(700px)'
          });
     },[]);
     const Logout =()=>{
        sessionStorage.removeItem('JwtToken')
        navigate('/')
     }
    
    return(
        <Navbar expand="lg" className={scrolled?"scolled":"" }>
        <div className="container-fluid">
          <Navbar.Brand href="#home" >
          <Link to={`/a/adashboard`}><img src={logo} alt=""/></Link><b>WISH-IT</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              </Nav>
            <span className="navbar-text">
        
                <div className="social-icon">
                  <Link to={`adminprofile`}><img src={navIcon2} alt="" className="menuChevron3" id="menuChevron3"/></Link>
                  <Link to={`/`}><img src={navIcon3} alt="" onClick={(e)=>{Logout(e)}} className="menuChevron4" id="menuChevron4"/></Link> 
                </div>
            </span>&nbsp;&nbsp;&nbsp;
            <div className="menuContainer3" id="menuContainer3">
                <h5>Profile</h5>
            </div>
            <div className="menuContainer4" id="menuContainer4">
                <h5>Logout</h5>
            </div>
          </Navbar.Collapse>
          </div>
      </Navbar>
    )
}