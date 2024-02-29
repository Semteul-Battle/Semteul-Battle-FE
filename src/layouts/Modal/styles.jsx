import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
`;

export const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: #fff;
  border-radius: 10px;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 8px;
  right: 16px;
  font-size: 24px;
  cursor: pointer;
`;
