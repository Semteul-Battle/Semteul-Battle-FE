import React, { useCallback, useState } from 'react';
import {
  FindPasswordTitle,
  FindPasswordWrapper,
  EmailBox,
  EmailWrapper,
  StyleEmailIcon,
  Bar,
  SendButton,
  LineWrapper,
  KeynumberWrapper,
  StyleKeyIcon,
  KeynumberBox,
  CheckButton,
  CenterBar,
  NewPasswordWrapper,
  NewPasswordBox,
  StyleLockIcon,
  RePasswordWrapper,
  RePasswordBox,
  RePasswordButton,
  EmailError,
  KeynumberError,
  PasswordError,
  StyleIdIcon,
} from './styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FindPassword = () => {
  const [email, SetEmail] = useState('');
  const [keynumber, SetKeynumber] = useState('');
  const [newpassword, SetNewPassword] = useState('');
  const [repassword, SetRePassword] = useState('');
  const [id, SetId] = useState('');

  const [emailConfirm, setEmailConfirm] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [keynumberError, setKeynumberError] = useState(false);
  const [newpasswordError, setNewPasswordError] = useState(false);
  const [repassError, setRepassError] = useState(false);

  const navigate = useNavigate();

  const onChangeEmail = useCallback((e) => {
    SetEmail(e.target.value);
  }, []);

  const onChangeId = useCallback((e) => {
    SetId(e.target.value);
  }, []);

  //인증번호 틀릴경우 처리 필요
  const onChangeKeynumber = useCallback((e) => {
    SetKeynumber(e.target.value);
  }, []);

  const onChangeNewPassword = useCallback(
    (e) => {
      SetNewPassword(e.target.value);

      const validatePassword =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;

      setNewPasswordError(!validatePassword.test(e.target.value));
      setRepassError(e.target.value !== repassword);
    },
    [newpassword, repassword]
  );

  const onChangeRePassword = useCallback(
    (e) => {
      SetRePassword(e.target.value);
      setRepassError(newpassword !== e.target.value);
    },
    [newpassword, repassword]
  );

  const hanldeCheckButton = useCallback(() => {
    console.log('인증번호 확인 버튼 클릭');

    // 인증번호가 맞는 번호면
    setEmailConfirm(true);

    // 인증번호가 맞지 않으면
    // setKeynumberError(true)
  }, []);

  const handleSubmit = useCallback(() => {
    axios
      .post('http://52.78.34.140:8080/users/send', {
        email: email,
        loginId: id,
      })
      .then((res) => {
        console.log(res);
        if (!res.data) {
          setEmailError(true);
        } else {
          setEmailError(false);
        }
      })
      .catch((err) => console.error(err));
  }, [email, id]);

  const handleVerification = useCallback(() => {
    axios
      .post('http://52.78.34.140:8080/users/find', {
        email: email,
        verificationCode: keynumber,
      })
      .then((res) => {
        console.log(res);
        if (res.data) {
          setEmailConfirm(true);
          setKeynumberError(false);
        } else {
          setKeynumberError(true);
        }
      })
      .catch((err) => console.error(err));
  }, [email, keynumber]);

  const handlePasswordUpate = useCallback(() => {
    axios
      .put('http://52.78.34.140:8080/users/update', {
        loginId: id,
        password: repassword,
      })
      .then((res) => {
        console.log(res);
        if (res.data) {
          navigate('/');
        }
      })
      .catch((err) => console.error(err));
  }, [id, repassword]);

  return (
    <FindPasswordWrapper>
      <FindPasswordTitle>비밀번호 재설정</FindPasswordTitle>
      <NewPasswordWrapper color={emailConfirm ? '#b0b0b0' : '#404040'}>
        <StyleIdIcon color={emailConfirm ? '#b0b0b0' : '#404040'} />
        <Bar color={emailConfirm ? '#b0b0b0' : '#404040'} />
        <NewPasswordBox
          type='text'
          placeholder='아이디를 입력해주세요'
          value={id}
          onChange={onChangeId}
          disabled={emailConfirm}
        />
      </NewPasswordWrapper>
      <LineWrapper>
        <EmailWrapper color={emailConfirm ? '#b0b0b0' : '#404040'}>
          <StyleEmailIcon color={emailConfirm ? '#b0b0b0' : '#404040'} />
          <Bar color={emailConfirm ? '#b0b0b0' : '#404040'} />
          <EmailBox
            type='text'
            placeholder='이메일을 입력해주세요'
            value={email}
            onChange={onChangeEmail}
            disabled={emailConfirm}
          />
        </EmailWrapper>
        <SendButton
          onClick={handleSubmit}
          color={emailConfirm ? '#b0b0b0' : '#404040'}
          disabled={emailConfirm}
        >
          전송
        </SendButton>
        {emailError && (
          <EmailError>해당 이메일로 가입된 회원 정보가 없습니다.</EmailError>
        )}
      </LineWrapper>

      <LineWrapper>
        <KeynumberWrapper color={emailConfirm ? '#b0b0b0' : '#404040'}>
          <StyleKeyIcon color={emailConfirm ? '#b0b0b0' : '#404040'} />
          <Bar color={emailConfirm ? '#b0b0b0' : '#404040'} />
          <KeynumberBox
            type='text'
            placeholder='인증번호를 입력해주세요'
            value={keynumber}
            onChange={onChangeKeynumber}
            disabled={emailConfirm}
          />
        </KeynumberWrapper>
        <CheckButton
          onClick={handleVerification}
          color={emailConfirm ? '#b0b0b0' : '#404040'}
          disabled={emailConfirm}
        >
          확인
        </CheckButton>
        {keynumberError && (
          <KeynumberError>인증번호가 올바르지 않습니다.</KeynumberError>
        )}
      </LineWrapper>

      <CenterBar />

      <NewPasswordWrapper color={emailConfirm ? '#404040' : '#b0b0b0'}>
        <StyleLockIcon color={emailConfirm ? '#404040' : '#b0b0b0'} />
        <Bar color={emailConfirm ? '#404040' : '#b0b0b0'} />
        <NewPasswordBox
          type='password'
          placeholder='새로운 비밀번호를 입력해주세요'
          value={newpassword}
          onChange={onChangeNewPassword}
          disabled={!emailConfirm}
        />
        {newpasswordError ? (
          <PasswordError>
            8~16자리 영어 대/소문자, 숫자, 특수문자를 사용해 주세요.
          </PasswordError>
        ) : (
          repassError && (
            <PasswordError>비밀번호가 일치하지 않습니다.</PasswordError>
          )
        )}
      </NewPasswordWrapper>

      <RePasswordWrapper color={emailConfirm ? '#404040' : '#b0b0b0'}>
        <StyleLockIcon color={emailConfirm ? '#404040' : '#b0b0b0'} />
        <Bar color={emailConfirm ? '#404040' : '#b0b0b0'} />
        <RePasswordBox
          type='password'
          placeholder='비밀번호를 다시 입력해주세요'
          value={repassword}
          onChange={onChangeRePassword}
          disabled={!emailConfirm}
        />
      </RePasswordWrapper>

      <RePasswordButton
        onClick={handlePasswordUpate}
        color={
          repassword !== '' && !repassError && !newpasswordError
            ? '#404040'
            : '#b0b0b0'
        }
        disabled={!(repassword !== '' && !repassError && !newpasswordError)}
      >
        비밀번호 재설정
      </RePasswordButton>
    </FindPasswordWrapper>
  );
};

export default FindPassword;
