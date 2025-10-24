import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";

const Footer = () => {
    return (
        <footer className="bg-dark text-white mt-4 py-4 text-center">
            <Container>
                <Row>
                    <Col md={6}>
                        <p className="mb-0">NanoShop</p>
                        <p className="mb-0">Benavidez, Buenos Aires</p>
                    </Col>
                    <Col md={6}>
                        <div>
                            <a href="https://www.facebook.com/nanoshop" className="text-white mx-2">
                                <i className="fa fa-facebook fa-2x"></i>
                            </a>
                            <a href="https://www.instagram.com/nanoshop" className="text-white mx-2">
                                <i className="fa fa-instagram fa-2x"></i>
                             </a>
                            <a href="https://www.twitter.com/nanoshop" className="text-white mx-2">
                                <i className="fa fa-twitter fa-2x"></i>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;