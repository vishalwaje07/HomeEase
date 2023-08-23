import { useState,useEffect } from "react";
import { Navbar,Nav} from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import logo from '../../Assets/image/logo.png';
import navIcon2 from '../../Assets/image/admin.png';
import navIcon3 from '../../Assets/image/logout.png';
import navIcon4 from '../../Assets/image/search.png';

export const CustomerNav=()=>{
    const[scrolled,setScrolled]=useState(false);
    const[search,setSearch]=useState()
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
        
         const menuTarget3=document.getElementById("menuChevron5");
         const menuContainer3=document.getElementById("menuContainer5");
 
         menuTarget3.addEventListener('mouseenter',()=>{
             menuContainer3.style.transform ='translateX(0px)';
         });
 
         menuTarget3.addEventListener('mouseleave',()=>{
             menuContainer3.style.transform ='translateX(700px)'
         });

          const menuTarget4=document.getElementById("menuChevron6");
          const menuContainer4=document.getElementById("menuContainer6");
 
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
          
          <Link to={`/c/card`}><img src={logo} alt=""/></Link><b>WISH-IT</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              </Nav>
            <span className="navbar-text">
            <div className="searchbar">
                <input name="search" onChange={e=>{setSearch(e.target.value)}} className="searchinput" placeholder="Search By Pincode"></input>
                <Link to={`customsuppliers/${search}`}><img src={navIcon4} alt=""/></Link>
            </div>
                <div className="social-icon">
                  <Link to={`profilec`}><img src={navIcon2} alt="" className="menuChevron5" id="menuChevron5"/></Link>
                  <Link to={`/`}><img src={navIcon3} onClick={(e)=>{Logout(e)}} alt="" className="menuChevron6" id="menuChevron6"/></Link> 
                </div>
                <Link to={`contactUs`}><button className="vvd"><span>Contact Us</span></button></Link>
            </span>&nbsp;&nbsp;&nbsp;
            <div className="menuContainer5" id="menuContainer5">
                <h5>Profile</h5>
            </div>
            <div className="menuContainer6" id="menuContainer6">
                <h5>Logout</h5>
            </div>
          </Navbar.Collapse>
          </div>
      </Navbar>
    )
}