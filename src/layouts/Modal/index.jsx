import React from 'react';
import { CloseButton, ModalBox, Overlay } from './styles';

const Modal = ({ children, width, height, setModalOpen }) => {
  return (
    <Overlay>
      <ModalBox width={width} height={height}>
        <CloseButton onClick={() => setModalOpen(false)}>&times;</CloseButton>
        {children}
      </ModalBox>
    </Overlay>
  );
};

export default Modal;
