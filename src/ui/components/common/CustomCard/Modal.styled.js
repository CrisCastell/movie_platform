import styled from "styled-components";
import { Modal as BootstrapModal, Button as BootstrapButton } from 'react-bootstrap';
import { darkTheme } from "../../../../styles/theme";

export const ModalHeader = styled(BootstrapModal.Header)`
  background-color: ${darkTheme.colors.background};
  color: ${darkTheme.colors.text};
`;

export const ModalBody = styled(BootstrapModal.Body)`
  background-color: ${darkTheme.colors.background};
  color: ${darkTheme.colors.text};
`;

export const ModalFooter = styled(BootstrapModal.Footer)`
  background-color: ${darkTheme.colors.background};
`;

export const Button = styled(BootstrapButton)`
  background-color: ${darkTheme.colors.text};
  color: ${darkTheme.colors.background};
  border: none;

  &:hover {
    background-color: ${darkTheme.colors.primary} !important;
    color:${darkTheme.colors.text};
  }
`;
