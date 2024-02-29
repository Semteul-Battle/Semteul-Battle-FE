import styled from 'styled-components';
import { ReactComponent as ArrowDown } from '@assets/arrow_down.svg';

export const RoleSelectWrapper = styled.div`
  position: relative;
  width: 76px;
`;

export const SelectMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 20px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid
    ${(props) =>
      props.selected === '' && props.isopen === 'false' ? '#9E9E9E' : '#000'};
  background: #fff;
  cursor: pointer;

  > p {
    margin-left: 8px;
    font-family: 'NanumSquare Neo variable';
    font-size: 12px;
    font-style: normal;
    line-height: normal;
    font-weight: 500;
    color: ${(props) =>
      props.selected === '' && props.isopen === 'false' ? '#9E9E9E' : '#000'};
  }

  > svg {
    cursor: pointer;
    margin-right: 4px;

    > path {
      fill: ${(props) =>
        props.selected === '' && props.isopen === 'false' ? '#9E9E9E' : '#000'};
    }
  }
`;

export const ArrowUp = styled(ArrowDown)`
  transform: rotate(180deg);
`;

export const SelectList = styled.div`
  z-index: 1;
  position: absolute;
  top: 22px;
  left: 0;
  width: 100%;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid #000;
  background: #fff;
  padding: 4px 0;

  ul {
    display: flex;
    flex-direction: column;
    padding: 0px;
    margin: 0px;
  }

  li {
    display: flex;
    justify-content: flex-start;
    list-style: none;
    cursor: pointer;
    color: #000;
    font-family: 'NanumSquare Neo variable';
    font-size: 12px;
    font-weight: 500;
    padding: 2px 12px;
  }
`;
