import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { login } from '../../../core/useCases/auth/authUseCase';
import { ModalBody, ModalFooter, ModalHeader, Button } from './CustomCard/Modal.styled';
import { Modal as BootstrapModal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import SpinnerLoading from './SpinnerLoading';


const LoginModal = ({ show, handleClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    setLoading(true);
    try {
      await login(username, password);  // Usa el caso de uso de login
      toast.success('Inicio de sesión exitoso');  // Notificación de éxito
      setUsername('');
      setPassword('');
      handleClose(); // Cierra el modal si el login es exitoso
    } catch (err) {
      setError(err)
      toast.error('Error al iniciar sesión');  // Notificación de error
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
    <BootstrapModal show={show} onHide={handleClose} centered>
        <ModalHeader closeButton>
          <BootstrapModal.Title>Iniciar Sesión</BootstrapModal.Title>
        </ModalHeader>
        <ModalBody>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Form>
            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control
                type="text"
                placeholder="Ingresa tu nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                type="password"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            {loading && <SpinnerLoading />}
            {!loading && (
                <div className='container  my-5 d-flex justify-content-center  align-items-center'>
                    <Button
                        variant="primary"
                        onClick={handleLogin}
                        disabled={loading}
                    >
                        Iniciar Sesión
                    </Button>
                </div>
            )}
            </Form>
        </ModalBody>
        <ModalFooter>
        <Button variant="secondary" onClick={handleClose}>
          Cerrar
        </Button>
      </ModalFooter>
    </BootstrapModal>
    </>
  );
};

export default LoginModal;
