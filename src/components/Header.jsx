import React from "react";
import { Link } from "react-router-dom";
import { NavBar, Nav, Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <NavBar bg="dark" expand="lg" variant="dark" className="mb-4">
            <Container>
                <NavBar.Brand as={Link} to="/" className="d-flex align-items-center">
                    <img
                        src="/https://via.placeholder.com/40"
                        alt="Logo"
                        className="d-inline-block aling-top me-2"
                        />
                    <span>NanoShop la mejor tienda</span>
                </NavBar.Brand>

                <Nav className="ms-auto aling-items-center">
                    <Nav.Link as={Link} to="/" className="me-3">Home</Nav.Link>
                    <Nav.Link as={Link} to="/ofertas" className="me-3">Ofertas</Nav.Link>
                    <Nav.Link as={Link} to="/infantables" className="me-3">Infaltables</Nav.Link>

                <div className="d-flex aling-item-center">
                    <Button variant="outline-light" as={Link} to="/administracion" className="me-2">
                    administracion
                    </Button>
                    <Link to="/carrito" className="text-white">
                        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                    </Link>
                </div>
                </Nav>
            </Container>
        </NavBar>
    );
}

export default Header;