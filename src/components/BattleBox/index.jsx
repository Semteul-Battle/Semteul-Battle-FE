import React, { useCallback } from 'react';
import {
  AutorityBox,
  BattleButton,
  BattleTitle,
  BoxWrapper,
  LeftConatiner,
  TimeConatainer,
} from './styles';

const BattleBox = ({ battle }) => {
  // 함수 너무 더러움
  const getBattleDate = useCallback(() => {
    const date = battle.start.split('T')[0];
    const [year, month, day] = date.split('-');

    const startTime = battle.start.split('T')[1];
    const [startHour, starMinute] = startTime.split(':');
    const endTime = battle.end.split('T')[1];
    const [endHour, endMinute] = endTime.split(':');

    // eslint-disable-next-line prettier/prettier
    return `${year}년 ${parseInt(month)}월 ${parseInt(
      day
    )}일  ${startHour}시${starMinute}분 ~ ${endHour}시${endMinute}분`;
  }, [battle.start, battle.end]);

  const getBattleState = useCallback(() => {
    if (battle.state === 1) {
      return '참가하기';
    } else if (battle.state == 2) {
      return '신청하기';
    } else {
      return '풀어보기';
    }
  }, [battle.state]);

  const onClickButton = useCallback(() => {
    console.log('button click');
  }, []);

  return (
    <BoxWrapper>
      <LeftConatiner>
        <BattleTitle>
          <h5>봄봄배 코드컵</h5>
          <AutorityBox>
            <p>{battle.authority === 1 ? '동아리 대회' : '전체 대회'}</p>
          </AutorityBox>
        </BattleTitle>
        <TimeConatainer>
          <p>{getBattleDate()}</p>
        </TimeConatainer>
      </LeftConatiner>
      <BattleButton onClick={onClickButton}>{getBattleState()}</BattleButton>
    </BoxWrapper>
  );
};

export default BattleBox;
