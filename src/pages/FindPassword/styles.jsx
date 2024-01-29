import styled, { css } from 'styled-components';
import { ReactComponent as EmailIcon } from '@assets/EmailIcon.svg';
import { ReactComponent as KeyIcon } from '@assets/KeyIcon.svg';
import { ReactComponent as LockIcon } from '@assets/LockIcon.svg';

const fontStyled = css`
  color: #000;
  font-family: NanumSquare Neo variable;
  font-size: 20px;
  font-weight: 300;
`;

export const FindPasswordWrapper = styled.div`
  display: flex;
  //background-color: pink;
  flex-direction: column;

  width: 320px;
  margin: 0 auto;
`;

export const FindPasswordTitle = styled.div`
  ${fontStyled};
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-top: 80px;
  margin-bottom: 80px;
  //background-color: yellow;
`;

export const EmailBox = styled.input`
  // 이거 왜 InputStyle로 만들어서  가져다 쓰면 런타임 에러 나는거지?
  display: flex;
  justify-content: center;
  ${fontStyled}

  margin-left: 4px;
  border: none;
  width: 200px;
  background: none;

  ${fontStyled}
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.25px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #726c6c;
  }

  //background-color: yellow;
`;

export const EmailWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 240px;
  height: 40px;

  border-radius: 3px;
  border: 1px solid #000;

  margin: 0 auto;
  margin-bottom: 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  //background-color: yellow;
`;

export const StyleEmailIcon = styled(EmailIcon)`
  margin: 12px;
`;

export const StyleKeyIcon = styled(KeyIcon)`
  margin: 12px;
`;

export const StyleLockIcon = styled(LockIcon)`
  margin: 12px;
`;

export const Bar = styled.div`
  width: 1px;
  height: 16px;
  background: #000;
`;

export const SendButton = styled.button`
  ${fontStyled}
  font-size: 15px;
  font-weight: 400;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 70px;
  height: 42px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  background-color: #404040;
`;

export const LineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const KeynumberWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 240px;
  height: 40px;

  border-radius: 3px;
  border: 1px solid #000;

  margin: 0 auto;
  margin-bottom: 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  //background-color: yellow;
`;

export const KeynumberBox = styled.input`
  // 이거 왜 InputStyle로 만들어서  가져다 쓰면 런타임 에러 나는거지?
  display: flex;
  justify-content: center;
  ${fontStyled}
  margin-left: 4px;
  border: none;
  width: 200px;
  background: none;
  ${fontStyled}
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.25px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #726c6c;
  }

  //background-color: yellow;
`;

export const CheckButton = styled.button`
  ${fontStyled}
  font-size: 15px;
  font-weight: 400;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 70px;
  height: 42px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  background-color: #404040;
`;

export const CenterBar = styled.div`
  margin: 45px auto;

  width: 180px;
  height: 1px;

  background: #000;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const NewPasswordWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 320px;
  height: 40px;

  border-radius: 3px;
  border: 1px solid #000;

  margin: 0 auto;
  margin-bottom: 12px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  //background-color: yellow;
`;

export const NewPasswordBox = styled.input`
  display: flex;
  justify-content: center;

  width: 310px;
  margin-left: 4px;
  border: none;

  ${fontStyled}
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.25px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #726c6c;
  }

  //background-color: yellow;
`;

export const RePasswordWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 320px;
  height: 40px;

  border-radius: 3px;
  border: 1px solid #000;

  margin: 0 auto;
  margin-bottom: 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  //background-color: yellow;
`;

export const RePasswordBox = styled.input`
  display: flex;
  justify-content: center;

  width: 310px;
  margin-left: 4px;
  border: none;

  ${fontStyled}
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.25px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #726c6c;
  }

  //background-color: yellow;
`;

export const RePasswordButton = styled.button`
  ${fontStyled}
  font-size: 16px;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 180px;
  height: 40px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin: 48px auto;

  background-color: #404040;
`;
