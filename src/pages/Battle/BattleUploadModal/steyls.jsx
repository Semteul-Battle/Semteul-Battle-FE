import styled from 'styled-components';

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 28px 20px;
  box-sizing: border-box;
`;

export const BattleTitleWrapper = styled.div`
  margin-bottom: 12px;

  > input {
    max-width: 100%;
    height: 32px;
    border: 1px solid #9e9e9e;
    border-radius: 1px;

    text-align: center;
    color: #000;
    font-family: 'NanumSquare Neo variable';
    font-size: 20px;
    font-weight: 500;
    margin: 0;

    &::placeholder {
      color: #9e9e9e;
    }

    &:focus-visible {
      outline: none;
    }
  }
`;

export const BoxWrapper = styled.div`
  width: 100%;
  margin-top: 16px;

  > p {
    width: 100%;
    color: #000;
    font-family: 'NanumSquare Neo variable';
    font-size: 10px;
    font-weight: 500;
    margin-bottom: 4px;
  }
`;

export const DesignateContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 232px);
  grid-template-rows: repeat(auto-fill, 40px);
  gap: 8px;
`;

export const TextBoxWrapper = styled.div`
  display: flex;
  gap: 4px;
  width: 100%;
  height: 40px;
`;

export const TextBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-left: 12px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #000;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  > P {
    color: #000;
    font-family: 'NanumSquare Neo variable';
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }
`;

export const InputIdBox = styled.input`
  width: 75%;
  height: 100%;
  padding-left: 12px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #000;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  color: ${(props) => (props.error === 'true' ? '#FF0000' : '#000')};
  font-family: 'NanumSquare Neo variable';
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;

  &::placeholder {
    color: #9e9e9e;
  }

  &:focus-visible {
    outline: none;
  }
`;

export const ExaminerSearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(25% - 4px);
  height: 100%;
  border-radius: 5px;
  background: #404040;
  border: none;

  > p {
    color: #fff;
    font-family: 'NanumSquare Neo variable';
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
  }
`;

export const DateContaner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextBoxCenter = styled(TextBox)`
  width: 216px;
  height: 40px;
  justify-content: center;
  padding: 0;
`;

export const UploadButtonContainer = styled.div`
  margin-top: 36px;

  > button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 210px;
    height: 40px;
    background: #106d1f;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    > p {
      color: #fff;
      font-family: 'NanumSquare Neo variable';
      font-size: 20px;
      font-weight: 700;
    }
  }
`;
