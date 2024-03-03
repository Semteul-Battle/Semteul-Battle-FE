import styled, { css } from 'styled-components';
import { ReactComponent as SettingIcon } from '@assets/SettingIcon.svg';
import { ReactComponent as PlusIcon } from '@assets/PlusIcon.svg';
import { ReactComponent as ModifyIcon } from '@assets/ModifyIcon.svg';
import { ReactComponent as DeleteIcon } from '@assets/DeleteIcon.svg';

const fontStyled = css`
  color: #000;
  font-family: NanumSquare Neo variable;
  font-size: 20px;
  font-weight: 300;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 80px;

  width: 730px;
  height: 35px;
`;

export const NewBattleTitle = styled.div`
  display: flex;
  ${fontStyled};
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  font-size: 30px;
  font-weight: 700;
`;

export const CustomDateWrapper = styled.div`
  display: flex;
  align-items: end;

  ${fontStyled};
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  font-size: 18px;
  font-weight: 500;

  margin-left: 20px;
`;

export const StyleSettingIcon = styled(SettingIcon)`
  width: 20px;
  height: 20px;
  margin: 12px;
  margin-top: 14px;
`;

export const LeftWrapper = styled.div`
  display: flex;
`;

export const RightWrapper = styled.div`
  display: flex;
  margin-top: 4px;
`;

export const ModifyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 60px;
  height: 30px;
  border: none;
  border-radius: 12px;
  background-color: #ea173d;

  ${fontStyled};
  font-size: 16px;
  font-weight: 500;
  color: white;

  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);

  &:hover {
    cursor: pointer;
  }
`;

export const SaveButton = styled(ModifyButton)`
  background-color: #106d1f;
  margin-left: 8px;
`;

export const NewBattleWrapper = styled.div`
  width: 730px;
  margin: 0 auto;
`;

export const HeaderBar = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 8px;

  width: 730px;
  height: 35px;
  border: 1px solid #9e9e9e;
`;

export const Number = styled.div`
  ${fontStyled}
  font-size: 14px;
  font-weight: 700;
  padding-left: 23px;
`;

export const ProblemName = styled(Number)`
  padding-right: 220px;
  padding-left: 76px;
`;

export const LimiteTime = styled(Number)`
  padding-right: 47px;
  padding-left: 0px;
`;

export const LimiteMemory = styled(Number)`
  padding-right: 46px;
  padding-left: 0px;
`;

export const Points = styled(Number)`
  padding-right: 40px;
  padding-left: 0px;
`;

export const NewProblem = styled.button`
  display: flex;

  align-items: center;

  width: 730px;
  height: 35px;
  background-color: white;
  border: 1px solid #9e9e9e;
  margin-bottom: 8px;

  &:hover {
    cursor: pointer;
  }
`;

export const StylePlusIcon = styled(PlusIcon)`
  width: 16px;
  height: 16px;
  margin-top: 4px;
  margin-left: 356px;
`;

export const ProblemTitle = styled.div`
  ${fontStyled}
  font-size: 14px;
  font-weight: 700;

  margin-left: 88px;
  width: 38%;
  text-align: left;
`;

export const ProblemTime = styled.div`
  ${fontStyled}
  font-size: 14px;
  font-weight: 700;

  width: 10%;
`;

export const ProblemMemory = styled.div`
  ${fontStyled}
  font-size: 14px;
  font-weight: 700;

  margin-left: 44px;
  width: 10%;
`;

export const Score = styled.div`
  ${fontStyled}
  font-size: 14px;
  font-weight: 700;

  margin-left: 30px;
  width: 10%;
`;

export const StyleModifyIcon = styled(ModifyIcon)`
  width: 16px;
  height: 16px;
  margin-top: 4px;
  margin-left: 14px;
  &:hover {
    cursor: pointer;
  }
`;

export const BattleOpenWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const BattleOpenButton = styled(SaveButton)`
  width: 80px;
  height: 34px;
  font-size: 15px;
`;

export const Text = styled.p`
  ${fontStyled}
  font-size: 10px;
  font-weight: 700;

  margin-bottom: 4px;
`;

export const InputBox = styled.textarea`
  width: ${(props) => props.width || '220px'};
  height: ${(props) => props.height || '36px'};

  margin-right: 20px;
  border-radius: 5px;

  font-size: 20px;

  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
  resize: none;
`;

export const InputWrapper = styled.div`
  display: block;
  justify-content: left;
  margin-left: 20px;
  margin-top: 40px;
`;

export const FinalSaveButton = styled(SaveButton)`
  margin-left: 150px;
  margin-top: 24px;

  width: 210px;
  height: 40px;

  border-radius: 10px;
  font-size: 20px;
`;

export const TextBox = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 50px 44px 80px 44px;

  ${fontStyled}
  font-size: 17px;
  font-weight: 700;
  white-space: pre-wrap;

  //background-color: yellow;
`;
export const CheckButton = styled(SaveButton)`
  width: 138px;
  height: 35px;
`;

export const CheckButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyleDeleteIcon = styled(DeleteIcon)`
  width: 18px;
  height: 18px;

  margin-left: 10px;
  &:hover {
    cursor: pointer;
  }
`;
export const DateContaner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 470px;
`;
