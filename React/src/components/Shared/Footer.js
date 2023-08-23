import { Container,Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../../Assets/image/logo.png';

export const Footer=()=>{
    return (
        <footer className="footer">
            <div className="container-fluid">
                <Row className="align-items-center">
                    <Col>
                    <Link to={`/`}><img src={logo} alt="logo"></img></Link>
                    </Col>
                    <Col className="text-center text-sm-end">
                        <div>
                        <p>&copy; All Rights Reserved - 2022</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </footer>
    )
}