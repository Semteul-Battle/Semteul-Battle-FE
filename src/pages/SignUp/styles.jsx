import styled, { css } from 'styled-components';

const fontStyled = css`
  color: #000;
  font-family: NanumSquare Neo variable;
  font-size: 20px;
  font-weight: 300;
`;

const inputStyle = css`
  ${fontStyled}
  font-size: 13px;
  display: flex;
  align-items: center;
  border-radius: 3px;
  border: 1px solid #000;
  margin-bottom: 10px;
  margin-right: 8px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #726c6c;
  }
`;

export const SignUpWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 20%;
  margin: 0 auto;
  flex-direction: column;
`;

export const SignUpTitle = styled.div`
  display: flex;
  justify-content: center;
  ${fontStyled};
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 30px;
  font-weight: 700;

  margin-top: 40px;
  margin-bottom: 30px;
`;

export const Text = styled.div`
  ${fontStyled}
  font-size: 13px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  margin-bottom: 4px;
`;

export const IdBox = styled.input`
  ${fontStyled}
  ${inputStyle}
  width: 230px;
  height: 30px;
`;

export const IdWrapper = styled.div`
  position: relative;
  display: flex;
  width: 302px;
`;

export const DoubleCheck = styled.button`
  ${fontStyled}
  font-size: 13px;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 70px;
  height: 33px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  background-color: #404040;
`;

export const IdErrorText = styled.p`
  position: absolute;
  top: 28px;
  right: 0px;
  color: #f00;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 10px;
`;

export const PasswordBox = styled.input`
  ${fontStyled}
  ${inputStyle}
  width: 302px;
  height: 30px;
`;

export const ConfirmPassword = styled.input`
  ${fontStyled}
  ${inputStyle}
  width: 302px;
  height: 30px;
`;

export const Bar = styled.div`
  margin: 45px auto;

  width: 180px;
  height: 0.5px;

  background: #000;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const NameBox = styled.input`
  ${fontStyled}
  ${inputStyle}
  width: 302px;
  height: 30px;
`;

export const EmailBox = styled.input`
  ${fontStyled}
  ${inputStyle}
  width: 302px;
  height: 30px;
  margin-bottom: 20px;
`;

export const HalfContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 302px;
`;

export const SchoolWrapper = styled.div`
  width: 48%;
`;

export const DepartWrapper = styled.div`
  width: 48%;
`;

export const SchoolBox = styled.input`
  ${fontStyled}
  ${inputStyle}
  width: 100%;
  height: 30px;
  margin-right: 0;

  &::placeholder {
    color: #000;
  }
`;

export const DepartBox = styled.input`
  ${fontStyled}
  ${inputStyle}
  width: 100%;
  height: 30px;
  margin-right: 0%;

  &::placeholder {
    color: #000;
  }
`;

export const SignUpButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  ${fontStyled}
  font-size: 16px;
  color: #fff;

  width: 189px;
  height: 40px;

  border: none;
  border-radius: 3px;
  margin: 44px auto;

  background-color: #404040;
`;

export const PasswordError = styled.p`
  position: absolute;
  top: 160px;
  right: 0px;
  color: #f00;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 10px;
`;

export const PasswordMismatchError = styled.p`
  position: absolute;
  top: 180px;
  right: 0px;
  color: #f00;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 10px;
`;

export const NameError = styled.p`
  position: absolute;
  top: 314px;
  right: 0px;
  color: #f00;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 10px;
`;

export const EmailError = styled.p`
  position: absolute;
  top: 380px;
  right: 0px;
  color: #f00;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 10px;
`;
