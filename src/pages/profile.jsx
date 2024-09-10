import React from "react";
import { Container,Row,Col,Image,Card,Button } from "react-bootstrap";
import '../styles/Profile.css'



const Profile = () => {

    return(
        <Container>
            <Row className='banner justify-content-center white-text'>
                <Col md={(6)} className="text-center">
                   <Image src="gato.avif" roundedCircle className="mb-3 profile-img"/>
                   <h2>Julia Developer</h2>
                   <p>Full Stack Developer</p>
                </Col>
            </Row>
            <Row className="justify-content-center mt-4">
                <Col md={8}>
                 <Card>
                    <Card.Body>
                        <Card.Title>
                            Sobre Mim 
                        </Card.Title>
                        <Card.Text>
                            blablablablablablablabablablablablablablablablabalab
                        </Card.Text>
                    </Card.Body>
                 </Card>
                </Col>
            </Row>


            <Row className="justify-content-center mt-4">
                <Col md={8}>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            Skills
                        </Card.Title>
                        <ul>
                            <li>
                                HTML,CSS,BOOTSTRAP
                            </li>
                            <li>JAVASCRIPT,REACT,NODE.JS</li>
                            <li>PYTHON,DJANGO</li>
                            <li>SQL,MONGODB</li>
                        </ul>
        
                    </Card.Body>
                 </Card>
                </Col>
            </Row>

           
        </Container>
    )
}

export default Profile;