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
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const [id, setId] = useState('');
  const [pass, setPass] = useState('');

  const [idpasswordError, setIdPasswordError] = useState(false);

  const navigate = useNavigate();

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangePass = useCallback((e) => {
    setPass(e.target.value);
  }, []);

  const onChangeClick = useCallback(() => {
    axios
      .post('http://52.78.34.140:8080/users/sign-in', {
        loginId: id,
        password: pass,
      })
      .then((res) => {
        console.log(res);

        if (!res?.accessToken) {
          // alert('로그인 실패');
          setIdPasswordError(true);
        } else {
          localStorage.setItem('accessToken', res.data.accessToken);
          localStorage.setItem('refershToken', res.data.refreshToken);
          setIdPasswordError(false);
          navigate('/');
        }
      })
      .catch((err) => console.error(err));
  }, [id, pass]);

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
          <Membership to='/signup'>회원가입 /</Membership>
          <FindPassword to='/findpassword'>비밀번호 찾기</FindPassword>
        </RightWrapper>

        {idpasswordError && (
          <IdPasswordError>
            아이디 혹은 비밀번호가 올바르지 않습니다.
          </IdPasswordError>
        )}
      </OptionWrapper>
      <LoginButton onClick={onChangeClick}>로그인</LoginButton>
    </LogInWrapper>
  );
};

export default LogIn;
