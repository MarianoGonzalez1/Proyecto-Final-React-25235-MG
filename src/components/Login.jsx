import React from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Inicio de sesión exitoso");
        // Lógica de autenticación aquí
    };
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
        <Row className="w-100 justify-content-center">
            <Col md={6} lg={4}>
                <Card className="p-4 shadow-lg">
                    <Card.Body>
                        <h2 className="text-center mb-4">Iniciar Sesion</h2>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formUserName" className="mb-3">
                                <Form.Label>Nombre de Usuario</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese su nombre de usuario" required />
                            </Form.Group> 

                            <Form.Group controlId="formPassword" className="mb-4">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Ingrese su contraseña" required />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-100">
                                Iniciar Sesion
                            </Button>   
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  );
}

export default Login;