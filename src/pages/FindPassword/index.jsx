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
} from './styles';

const FindPassword = () => {
  const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const onChange = useCallback((e) => setValue(e.target.value), []);
    return [value, onChange];
  };

  const [email, onChangeEmail] = useInput('');
  const [keynumber, onChangeKeynumber] = useInput('');
  const [newpassword, onChangeNewPassword] = useInput('');
  const [repassword, onChangeRePassword] = useInput('');

  // const handleSendButtonClick = () => {
  //   // 이메일 전송 처리를 여기에 추가
  //   console.log('이메일을 전송합니다:', email);
  // };

  return (
    <FindPasswordWrapper>
      <FindPasswordTitle>비밀번호 재설정</FindPasswordTitle>
      <LineWrapper>
        <EmailWrapper>
          <StyleEmailIcon />
          <Bar />
          <EmailBox
            type='text'
            placeholder='이메일을 입력해주세요'
            value={email}
            onChange={onChangeEmail}
          />
        </EmailWrapper>
        <SendButton>전송</SendButton>
      </LineWrapper>

      <LineWrapper>
        <KeynumberWrapper>
          <StyleKeyIcon />
          <Bar />
          <KeynumberBox
            type='text'
            placeholder='인증번호를 입력해주세요'
            value={keynumber}
            onChange={onChangeKeynumber}
          />
        </KeynumberWrapper>
        <CheckButton>확인</CheckButton>
      </LineWrapper>

      <CenterBar />

      <NewPasswordWrapper>
        <StyleLockIcon />
        <Bar />
        <NewPasswordBox
          type='password'
          placeholder='새로운 비밀번호를 입력해주세요'
          value={newpassword}
          onChange={onChangeNewPassword}
        />
      </NewPasswordWrapper>

      <RePasswordWrapper>
        <StyleLockIcon />
        <Bar />
        <RePasswordBox
          type='password'
          placeholder='비밀번호를 다시 입력해주세요'
          value={repassword}
          onChange={onChangeRePassword}
        />
      </RePasswordWrapper>

      <RePasswordButton>비밀번호 재설정</RePasswordButton>
    </FindPasswordWrapper>
  );
};

export default FindPassword;
