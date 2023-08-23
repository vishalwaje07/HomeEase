import { useState,useEffect } from "react";
import { Navbar,Nav} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../../Assets/image/logo.png';
import navIcon1 from '../../Assets/image/joinUs.png';
import navIcon2 from '../../Assets/image/SignIn.png';
import navIcon3 from '../../Assets/image/SignUp.png';


export const NavBar=()=>{
   // const [activeLink,setActiveLink]=useState('home');
    const[scrolled,setScrolled]=useState(false);

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
         const menuTarget=document.getElementById("menuChevron");
         const menuContainer=document.getElementById("menuContainer");

         menuTarget.addEventListener('mouseenter',()=>{
             menuContainer.style.transform ='translateX(0px)';
         });

         menuTarget.addEventListener('mouseleave',()=>{
             menuContainer.style.transform ='translateX(700px)'
         });


         const menuTarget1=document.getElementById("menuChevron1");
         const menuContainer1=document.getElementById("menuContainer1");
 
         menuTarget1.addEventListener('mouseenter',()=>{
             menuContainer1.style.transform ='translateX(0px)';
         });
 
         menuTarget1.addEventListener('mouseleave',()=>{
             menuContainer1.style.transform ='translateX(700px)'
         });

         const menuTarget2=document.getElementById("menuChevron2");
         const menuContainer2=document.getElementById("menuContainer2");
 
         menuTarget2.addEventListener('mouseenter',()=>{
             menuContainer2.style.transform ='translateX(0px)';
         });
 
         menuTarget2.addEventListener('mouseleave',()=>{
             menuContainer2.style.transform ='translateX(700px)'
         });
     },[]);
     
    //  const onUpdateActiveLink=(value)=>{
    //      setActiveLink(value);
    //  }
    return(
        <Navbar expand="lg" className={scrolled?"scolled":"" }>
        <div className="container-fluid">
          <Navbar.Brand href="#home" >
          
          <Link to={`/`}><img src={logo} alt=""/></Link><span className=""><b>HomeEase</b></span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#home" className={activeLink==='home'?'active navbar-Link':'navbar-Link'} onClick={()=>onUpdateActiveLink('home')}></Nav.Link>
              <Nav.Link href="#skills" className={activeLink==='skills'?'active navbar-Link':'navbar-Link'} onClick={()=>onUpdateActiveLink('skills')}></Nav.Link>
              <Nav.Link href="#projects" className={activeLink==='projects'?'active navbar-Link':'navbar-Link'} onClick={()=>onUpdateActiveLink('projects')}></Nav.Link>
            */}</Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    {/* <Link to={``}><img src={adminIcon} alt="" className="menuChevron" id="menuChevron"/></Link> */}
                  <Link to={`joinUs`}><img src={navIcon1} alt="" className="menuChevron" id="menuChevron"/></Link>
                  <Link to={`signIn`}><img src={navIcon2} alt="" className="menuChevron1" id="menuChevron1"/></Link>
                  <Link to={`signUp`}><img src={navIcon3} alt="" className="menuChevron2" id="menuChevron2"/></Link> 
                </div>
                <Link to={`contactUs`}><button className="vvd"><span>Contact Us</span></button></Link>
            </span>&nbsp;&nbsp;&nbsp;
            {/* <div className="menuContainer" id="menuContainer">
                <ul>
                    <li><Link to={``}>Customers List</Link></li>
                    <li><Link to={``}>Vendors List</Link></li>
                    <li><Link to={``}>Order's List</Link></li>
                    <li><Link to={``}>Site Setting</Link></li>
                    <li><Link to={``}>LogIn</Link></li>
                </ul>
                <p>abc</p>
            </div> */}
            <div className="menuContainer" id="menuContainer">
                <h5>Join Us</h5>
            </div>
            <div className="menuContainer1" id="menuContainer1">
                <h5>Sign In</h5>
            </div>
            <div className="menuContainer2" id="menuContainer2">
                <h5>Sign Up</h5>
            </div>
          </Navbar.Collapse>
          </div>
      </Navbar>
    )
}