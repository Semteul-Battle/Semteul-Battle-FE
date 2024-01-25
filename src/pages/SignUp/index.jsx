// eslint-disable no-unused-vars
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
  PasswordMismatchError,
  NameError,
  EmailError,
} from './styles';

const SignUp = () => {
  const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const onChange = useCallback((e) => setValue(e.target.value), []);
    return [value, onChange];
  };

  const [id, onChangeId] = useInput('');
  const [pass, onChangePass] = useInput('');
  const [repass, onChangeRePass] = useInput('');
  const [name, onChangeName] = useInput('');
  const [email, onChangeEmail] = useInput('');
  //eslint-disable-next-line no-unused-vars
  const [school, onChangeSchool] = useInput('');
  //eslint-disable-next-line no-unused-vars
  const [depart, onChangeDepart] = useInput('');
  //eslint-disable-next-line no-unused-vars
  const [idError, setIdError] = useState(true);

  //eslint-disable-next-line no-unused-vars
  const [passworderror, setPasswordError] = useState(true);
  //eslint-disable-next-line no-unused-vars
  const [passwordmismatcherror, setPasswordMismatchError] = useState(true);
  //eslint-disable-next-line no-unused-vars
  const [nameerror, setNameError] = useState(true);
  //eslint-disable-next-line no-unused-vars
  const [emailerror, setEmailError] = useState(true);
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
        />
        <DoubleCheck>중복체크</DoubleCheck>
        {idError && <IdErrorText>이미 존재하는 아이디입니다.</IdErrorText>}
        {passworderror && (
          <PasswordError>
            8~16자리 영어 대/소문자, 숫자, 특수문자를 사용해 주세요.
          </PasswordError>
        )}
        {passwordmismatcherror && (
          <PasswordMismatchError>
            비밀번호가 일치하지 않습니다.
          </PasswordMismatchError>
        )}
        {nameerror && <NameError>이름을 입력해주세요.</NameError>}
        {emailerror && <EmailError>이메일 형식이 잘못 되었습니다.</EmailError>}
      </IdWrapper>

      <Text>비밀번호</Text>
      <PasswordBox
        type='password'
        placeholder='비밀번호를 입력해주세요'
        value={pass}
        onChange={onChangePass}
      />

      <Text>비밀번호 재입력</Text>
      <ConfirmPassword
        type='password'
        placeholder='비밀번호를 다시 입력해주세요'
        value={repass}
        onChange={onChangeRePass}
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
      <EmailBox
        type='text'
        placeholder='이메일을 입력해주세요'
        value={email}
        onChange={onChangeEmail}
      />
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
      <SignUpButton>회원가입</SignUpButton>
    </SignUpWrapper>
  );
};

export default SignUp;
