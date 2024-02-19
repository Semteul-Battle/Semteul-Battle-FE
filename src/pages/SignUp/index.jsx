import React, { useCallback, useState } from 'react';
import {
  SignUpTitle,
  SignUpWrapper,
  IdBox,
  Text,
  DoubleCheck,
  IdWrapper,
  PasswordBox,
  ConfirmPassword,
  Bar,
  NameBox,
  EmailBox,
  SchoolWrapper,
  SignUpButton,
  HalfContainer,
  DepartWrapper,
  DepartBox,
  SchoolBox,
  IdErrorText,
  PasswordError,
  NameError,
  EmailError,
  StyleCheckIcon,
  EmailSendButton,
  EmailWrapper,
  AuthenticWrapper,
  AuthenticSendButton,
  AuthenticNumber,
  AuthenticNumberError,
} from './styles';

const SignUp = () => {
  const [id, SetId] = useState('');
  const [password, SetPassword] = useState('');
  const [repassword, SetRePassword] = useState('');
  const [name, SetName] = useState('');
  const [email, SetEmail] = useState('');
  const [authenticnumber, SetAuthenticNumber] = useState('');
  const [school, SetSchool] = useState('');
  const [depart, SetDepart] = useState('');

  const [idError, setIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordmismatchError, setPasswordMismatchError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [authenticnumberError, setAuthenticNumberError] = useState(false);

  const onChangeId = useCallback((e) => {
    SetId(e.target.value);
  }, []);

  const onChangePassword = useCallback(
    (e) => {
      SetPassword(e.target.value);

      const validatePassword =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

      setPasswordError(!validatePassword.test(e.target.value));
      setPasswordMismatchError(e.target.value !== repassword);
    },
    [password, repassword]
  );

  const onChangeRePassword = useCallback(
    (e) => {
      SetRePassword(e.target.value);
      setPasswordMismatchError(password !== e.target.value);
    },
    [password, repassword]
  );

  const onChangeName = useCallback((e) => {
    SetName(e.target.value);

    const validateName = e.target.value.length > 0;

    setNameError(!validateName);
  }, []);

  const onChangeEmail = useCallback((e) => {
    SetEmail(e.target.value);

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setEmailError(!emailPattern.test(e.target.value));
  }, []);

  const onChangeAuthenticNumber = useCallback((e) => {
    SetAuthenticNumber(e.target.value);
  }, []);

  const onChangeSchool = useCallback((e) => {
    SetSchool(e.target.value);
  }, []);

  const onChangeDepart = useCallback((e) => {
    SetDepart(e.target.value);
  }, []);

  const isAllValid = () => {
    return (
      !idError &&
      !passwordError &&
      !passwordmismatchError &&
      !nameError &&
      !emailError &&
      !authenticnumberError &&
      password &&
      repassword &&
      name &&
      email
    );
  };

  const handleSignUp = () => {
    if (isAllValid()) {
      console.log('회원가입이 완료되었습니다.');
    }
  };

  const handleButtonCheck = () => {
    console.log('버튼 확인');
  };

  return (
    <SignUpWrapper>
      <SignUpTitle>회원가입</SignUpTitle>

      <Text>아이디</Text>
      <IdWrapper>
        <IdBox
          type='text'
          placeholder='아이디를 입력해주세요'
          value={id}
          onChange={onChangeId}
          //disabled={}
        ></IdBox>
        {!idError && <StyleCheckIcon />}
        <DoubleCheck onClick={handleButtonCheck}>중복체크</DoubleCheck>

        {idError && <IdErrorText>이미 존재하는 아이디입니다.</IdErrorText>}
        {passwordError ? (
          <PasswordError>
            8~16자리 영어 대/소문자, 숫자, 특수문자를 사용해 주세요.
          </PasswordError>
        ) : (
          passwordmismatchError && (
            <PasswordError>비밀번호가 일치하지 않습니다.</PasswordError>
          )
        )}

        {nameError && <NameError>이름을 입력해주세요.</NameError>}

        {emailError && <EmailError>이메일 형식이 잘못 되었습니다.</EmailError>}

        {authenticnumberError && (
          <AuthenticNumberError>
            인증번호가 올바르지 않습니다.
          </AuthenticNumberError>
        )}
      </IdWrapper>

      <Text>비밀번호</Text>
      <PasswordBox
        type='password'
        placeholder='비밀번호를 입력해주세요'
        value={password}
        onChange={onChangePassword}
      />

      <Text>비밀번호 재입력</Text>
      <ConfirmPassword
        type='password'
        placeholder='비밀번호를 다시 입력해주세요'
        value={repassword}
        onChange={onChangeRePassword}
      />

      <Bar />

      <Text>이름</Text>
      <NameBox
        type='text'
        placeholder='이름을 입력해주세요'
        value={name}
        onChange={onChangeName}
      />

      <Text>이메일</Text>
      <EmailWrapper>
        <EmailBox
          type='text'
          placeholder='이메일을 입력해주세요'
          value={email}
          onChange={onChangeEmail}
        />
        <EmailSendButton onClick={handleButtonCheck}>전송</EmailSendButton>
      </EmailWrapper>

      <Text>인증번호</Text>
      <AuthenticWrapper>
        <AuthenticNumber
          type='text'
          placeholder='인증번호를 입력해주세요'
          value={authenticnumber}
          onChange={onChangeAuthenticNumber}
        />
        <AuthenticSendButton onClick={handleButtonCheck}>
          확인
        </AuthenticSendButton>
      </AuthenticWrapper>
      <HalfContainer>
        <SchoolWrapper>
          <Text>학교</Text>
          <SchoolBox
            type='text'
            placeholder='숭실대학교'
            value={school}
            onChange={onChangeSchool}
          />
        </SchoolWrapper>
        <DepartWrapper>
          <Text>학과(선택)</Text>
          <DepartBox
            type='text'
            placeholder='ex) 컴퓨터학부'
            value={depart}
            onChange={onChangeDepart}
          />
        </DepartWrapper>
      </HalfContainer>
      <SignUpButton
        onClick={handleSignUp}
        color={
          isAllValid() && authenticnumber && !authenticnumberError
            ? '#404040'
            : '#b0b0b0'
        }
        disabled={!(isAllValid() && authenticnumber && !authenticnumberError)}
      >
        회원가입
      </SignUpButton>
    </SignUpWrapper>
  );
};

export default SignUp;
