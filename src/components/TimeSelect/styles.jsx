import styled from 'styled-components';

export const SelectWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 340px;
  height: 180px;
  padding: 28px 20px;
  box-sizing: border-box;
  border: 1px solid #000;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const SelectHeader = styled.div`
  > p {
    color: #000;
    text-align: center;
    font-family: 'NanumSquare Neo variable';
    font-size: 20px;
    font-weight: 500;
  }
`;

export const TimeSelectContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 18px;
`;

export const TimeButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const TimeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 32px;
  border-radius: 5px;
  border: ${(props) =>
    props.selected === 'true' ? 'none' : '1px solid #bebebe'};
  background: ${(props) => (props.selecte === 'true' ? '#404040' : '#FEFFFF')};

  > p {
    color: ${(props) => (props.selecte === 'true' ? '#fff' : '#2E2E2E')};
    font-family: 'NanumSquare Neo variable';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const TimeInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 32px;
  border-radius: 5px;
  border: 1px solid #000;

  > input {
    width: 100%;
    text-align: center;
    color: #000;
    font-family: 'NanumSquare Neo variable';
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    border: none;

    &::placeholder {
      color: #9e9e9e;
    }

    &:focus-visible {
      outline: none;
    }
  }
`;

export const ConfirmButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 112px;
  height: 32px;
  background: ${(props) => (props.active === 'true' ? '#106D1F' : '#9e9e9e')};
  border: none;
  border-radius: 5px;

  > p {
    color: #fff;
    font-family: 'NanumSquare Neo variable';
    font-size: 16px;
    font-weight: 700;
  }
`;
