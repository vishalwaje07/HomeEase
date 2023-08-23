import {Col} from 'react-bootstrap';
// import {Link} from 'react-router-dom'
export const ProjectCards=({title,description,imgUrl})=>{
return (
    <Col sm={6} md={4}>
        <div className="proj-proj-imgbx">
           <img src={imgUrl} alt="pic5"/> 
            <div className="proj-proj-txtx">
            <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
    </Col>
)
}