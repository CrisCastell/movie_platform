import React from 'react';
import { Modal as BootstrapModal } from 'react-bootstrap';
import { ModalBody, ModalFooter, ModalHeader, Button } from './Modal.styled';

const InfoModal = ({ show, onHide, item }) => {
  return (
    <BootstrapModal show={show} onHide={onHide} centered>
      <ModalHeader closeButton>
        <BootstrapModal.Title>{item.title}</BootstrapModal.Title>
      </ModalHeader>
      <ModalBody>
        <img src={item.backdropPath} alt={item.title} className="img-fluid mb-3" />
        <h6>Popularidad: {item.popularity}</h6>
        <p><strong>Fecha de lanzamiento:</strong> {item.releaseDate}</p>
        <p>{item.mediaType.nombre}</p>
        <p>{item.overview}</p>
      </ModalBody>
      <ModalFooter>
        <Button variant="secondary" onClick={onHide}>
          Cerrar
        </Button>
      </ModalFooter>
    </BootstrapModal>
  );
};

export default InfoModal;