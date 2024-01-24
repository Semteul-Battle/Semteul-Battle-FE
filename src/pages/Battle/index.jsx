import React from 'react';
import {
  BattleButton,
  BattleDuration,
  BattleHeader,
  BattleInfoWrapper,
  BattleList,
  BattleListWrapper,
  BattleStartTime,
  BattleStatus,
  BattleTitle,
  BattleWrapper,
  FlexBox,
} from '@pages/Battle/styles';
import BattleContent from '@pages/Battle/BattleContent';

// erd 대회 테이블 state 삭제

const Battles = [
  {
    id: 1,
    name: '봄봄배 코드컵',
    autority: 1,
    start: new Date('2024-03-01T15:00'),
    end: new Date('2024-03-01T18:00'),
  },
  {
    id: 2,
    name: '봄봄배 코드컵',
    autority: 1,
    start: new Date('2024-03-01T15:00'),
    end: new Date('2024-03-01T18:00'),
  },
  {
    id: 3,
    name: '봄봄배 코드컵',
    autority: 1,
    start: new Date('2024-03-01T15:00'),
    end: new Date('2024-03-01T18:00'),
  },
  {
    id: 4,
    name: '봄봄배 코드컵',
    autority: 1,
    start: new Date('2024-03-01T15:00'),
    end: new Date('2024-03-01T18:00'),
  },
  {
    id: 5,
    name: '봄봄배 코드컵',
    autority: 1,
    start: new Date('2024-03-01T15:00'),
    end: new Date('2024-03-01T18:00'),
  },
];

const Battle = () => {
  return (
    <FlexBox>
      <BattleWrapper>
        <BattleHeader>
          <h5>대회</h5>
        </BattleHeader>
        <BattleListWrapper>
          <BattleInfoWrapper>
            <BattleTitle>
              <p>대회명</p>
            </BattleTitle>
            <BattleStartTime>
              <p>시작 시간</p>
            </BattleStartTime>
            <BattleDuration>
              <p>진행 시간</p>
            </BattleDuration>
            <BattleStatus>
              <p>대회 상태</p>
            </BattleStatus>
            <BattleButton>
              <p>상태</p>
            </BattleButton>
          </BattleInfoWrapper>
        </BattleListWrapper>
        <BattleList>
          {Battles.map((battle) => (
            <BattleContent key={battle.id} battle={battle} />
          ))}
        </BattleList>
      </BattleWrapper>
    </FlexBox>
  );
};

export default Battle;
