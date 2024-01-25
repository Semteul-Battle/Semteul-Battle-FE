import React, { useState, useEffect } from 'react';
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

const Battle = () => {
  const [battles, setBattles] = useState([]);

  useEffect(() => {
    const rawBattles = [
      {
        id: 1,
        name: '봄봄배 코드컵',
        autority: 1,
        start: new Date('2024-01-25T04:00'),
        end: new Date('2024-01-25T06:00'),
      },
      {
        id: 2,
        name: '봄봄배 코드컵',
        autority: 1,
        start: new Date('2023-03-01T15:00'),
        end: new Date('2023-03-01T18:00'),
      },
      {
        id: 3,
        name: '봄봄배 코드컵',
        autority: 1,
        start: new Date('2024-03-02T15:00'),
        end: new Date('2024-03-02T18:00'),
      },
      {
        id: 4,
        name: '봄봄배 코드컵',
        autority: 1,
        start: new Date('2024-03-03T15:00'),
        end: new Date('2024-03-03T18:00'),
      },
      {
        id: 5,
        name: '봄봄배 코드컵',
        autority: 1,
        start: new Date('2024-03-04T15:00'),
        end: new Date('2024-03-04T18:00'),
      },
    ];

    const sortBattles = [...rawBattles];
    const currentTime = new Date();
    sortBattles.sort((left, right) => {
      const leftStatus =
        left.end < currentTime ? 2 : left.start > currentTime ? 1 : 0;
      const rightStatus =
        right.end < currentTime ? 2 : right.start > currentTime ? 1 : 0;

      if (leftStatus !== rightStatus) {
        return leftStatus - rightStatus;
      }
      return right.start - left.start;
    });

    setBattles([...sortBattles]);
  }, []);

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
          {battles.map((battle) => (
            <BattleContent key={battle.id} battle={battle} />
          ))}
        </BattleList>
      </BattleWrapper>
    </FlexBox>
  );
};

export default Battle;
