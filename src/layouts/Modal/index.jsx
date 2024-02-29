import React from 'react';
import { CloseButton, ModalBox, Overlay } from './styles';

/**
 *
 * @param {ReactComponent} children - 모달의 컴포넌트
 * @param {string} width - 피셀 단위의 모달 너비
 * @param {string} height - 픽셀 단위의 모달 높이
 * @param {React.Dispatch} setModalOpen - 모달창을 닫는 set 함수
 * @returns
 */
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
