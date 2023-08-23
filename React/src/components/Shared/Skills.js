import Carousel from 'react-multi-carousel';
import { Container, Row, Col } from "react-bootstrap"
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../../Assets/image/Banner.png';
import meter2 from '../../Assets/image/yourstory-plumbers.jpg';
import meter3 from '../../Assets/image/beautiful-home.jpg';
import meter4 from '../../Assets/image/Wishitlogo3.png';


export const Skills = ()=>{
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 2000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return(
          <section className='skill' id="skills">
              <Container>
                  <Row>
                      <Col>
                      <div className="skill-bx">
                          <h2>About Us</h2>
                      <Carousel responsive={responsive} infinite={true} className="skill-slider">
                          <div className='item'>
                              <img src={meter1} alt="pic"/>
                          </div>

                          <div className='item'>
                              <img src={meter2} alt="pic2"/>
                          </div>

                          <div className='item'>
                              <img src={meter3} alt="pic3"/>
                          </div>

                          {/* <div className='item'>
                              <img src={meter4} alt="pic4"/>
                          </div> */}
                      </Carousel>
                      </div>
                      </Col>
                  </Row>
              </Container>
          </section>
      )
}