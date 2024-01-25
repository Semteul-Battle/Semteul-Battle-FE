import React, { useCallback, useState } from 'react';
import {
  LogInTitle,
  LogInWrapper,
  LogInId,
  LogInpassword,
  StyleIDIcon,
  Bar,
  LoginInput,
  StylePasswordIcon,
  OptionWrapper,
  SaveId,
  SaveIdCheck,
  LeftWrapper,
  RightWrapper,
  Membership,
  FindPassword,
  LoginButton,
  IdPasswordError,
} from './styles';

const LogIn = () => {
  //eslint-disable-next-line no-unused-vars
  const [id, setId] = useState('');
  //eslint-disable-next-line no-unused-vars
  const [pass, setPass] = useState('');

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangePass = useCallback((e) => {
    setPass(e.target.value);
  }, []);

  //eslint-disable-next-line no-unused-vars
  const [idpasswordError, setIdPasswordError] = useState(true);

  return (
    <LogInWrapper>
      <LogInTitle>로그인</LogInTitle>
      <LogInId>
        <StyleIDIcon />
        <Bar />
        <LoginInput
          type='text'
          placeholder='아이디'
          value={id}
          onChange={onChangeId}
        />
      </LogInId>
      <LogInpassword>
        <StylePasswordIcon />
        <Bar />
        <LoginInput
          type='password'
          placeholder='비밀번호'
          value={pass}
          onChange={onChangePass}
        />
      </LogInpassword>
      <OptionWrapper>
        <LeftWrapper>
          <SaveId>아이디 저장</SaveId>
          <SaveIdCheck type='checkbox' />
        </LeftWrapper>
        <RightWrapper>
          <Membership>회원가입 /</Membership>
          <FindPassword>비밀번호 찾기</FindPassword>
        </RightWrapper>

        {idpasswordError && (
          <IdPasswordError>
            아이디 혹은 비밀번호가 올바르지 않습니다.
          </IdPasswordError>
        )}
      </OptionWrapper>
      <LoginButton>로그인</LoginButton>
    </LogInWrapper>
  );
};

export default LogIn;
