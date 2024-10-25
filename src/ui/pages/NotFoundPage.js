import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center">
      <Row>
        <Col className="text-center">
          <h1>404 - Página no encontrada</h1>
          <p>Lo sentimos, la página que estás buscando no existe.</p>
          <p>Serás redirigido a la página de inicio en unos segundos...</p>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFoundPage;