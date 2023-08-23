import { Container } from "react-bootstrap";
import { Row, Col,Nav,Tab} from "react-bootstrap";
import { ProjectCards } from './../Shared/ProjectCards.js';
import projImg1 from '../../Assets/image/homesafety.jpg'
import projImg2 from '../../Assets/image/interiordesign.jpg'
import projImg3 from '../../Assets/image/carpenter1.jpg'
import projImg4 from '../../Assets/image/electrician.jpeg'
import projImg5 from '../../Assets/image/plumbing.jpg'
import projImg6 from '../../Assets/image/painting.png'
import projImg7 from '../../Assets/image/Buildingmaintena.jpg'
import projImg8 from '../../Assets/image/desktoplaptoprepair.jpg'
import projImg9 from '../../Assets/image/fabricator.png'
import projImg10 from '../../Assets/image/flooring.jpg'
import projImg11 from '../../Assets/image/gardening.jpg'
import projImg12 from '../../Assets/image/waterproofing.png'

export const Projects=()=>{
    const projects = [
        {
            title:"Home Security Services",
            description:"Get your home secured",
            imgUrl:projImg1,
        },
        {
            title:"Interior Services",
            description:"Make your home beautiful",
            imgUrl:projImg2,
        },
        {
            title:"Carpentar Services",
            description:"Get your furniture",
            imgUrl:projImg3,  
        },
        {
            title:"Electrician Services",
            description:"Lets make your home bright",
            imgUrl:projImg4,
        },
        {
            title:"Plumbing Services",
            description:"Let there be water everywhere",
            imgUrl:projImg5,
        },
        {title:"Painting Services",
        description:"Make life colorful",
        imgUrl:projImg6,
            
        },
    ];
    
    const projects1 = [
        {
            title:"Cleaning Services",
            description:"Your hygiene our first priority",
            imgUrl:projImg7,
        },
        {
            title:"Laptop/Desktop Services",
            description:"Keep laptops in good condditions",
            imgUrl:projImg8,
        },
        {
            title:"Fabricator Services",
            description:"Make your things with us",
            imgUrl:projImg9,   
        },
        {
            title:"Flooring Services",
            description:"Keep your floor plane",
            imgUrl:projImg10,
        },
        {
            title:"Gardening Services",
            description:"Lets shape your trees",
            imgUrl:projImg11,
        },
        {
            title:"Waterproofing Services",
        description:"Protect your home from rain",
        imgUrl:projImg12,
        },
    ];

return (
    <section className="project" id="project">
        <Container>
            <Row>
                <Col>
                <h2>HomeEase Services</h2>
                <p>These all Services are available at Your Door</p>
                <Tab.Container id="project-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Tab One</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Tab Two</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                        <Nav.Link eventKey="third">Tab Three</Nav.Link>
                    </Nav.Item> */}
                </Nav>
                <Tab.Content>
               <Tab.Pane eventKey="first">
                   <Row>
                       {
                           projects.map((project,index)=>{
                               return(
                                   <ProjectCards 
                                   key={index}
                                   {...project}
                                   />
                               )
                           })
                       }
                   </Row>
               </Tab.Pane>
               <Tab.Pane eventKey="second"><Row>
                       {
                           projects1.map((project,index)=>{
                               return(
                                   <ProjectCards 
                                   key={index}
                                   {...project}
                                   />
                               )
                           })
                       }
                   </Row></Tab.Pane>
                </Tab.Content>
                </Tab.Container>
                </Col>
            </Row>
        </Container>
    </section>
)
}