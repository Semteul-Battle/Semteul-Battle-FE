import React from 'react';
import { BattleBoxWrapper, HeaderTitle } from './styles';
import BattleBox from '@components/BattleBox';

const BattleList = [
  {
    id: 1,
    name: '봄봄배 코드컵',
    authority: 1,
    start: '2024-01-11T12:00',
    end: '2024-01-11T15:00',
    status: 3,
  },
  {
    id: 2,
    name: '봄봄배 코드컵',
    authority: 1,
    start: '2024-01-11T12:00',
    end: '2024-01-11T15:00',
    status: 3,
  },
  {
    id: 3,
    name: '봄봄배 코드컵',
    authority: 1,
    start: '2024-01-11T12:00',
    end: '2024-01-11T15:00',
    status: 3,
  },
  {
    id: 4,
    name: '봄봄배 코드컵',
    authority: 1,
    start: '2024-01-11T12:00',
    end: '2024-01-11T15:00',
    status: 3,
  },
  {
    id: 5,
    name: '봄봄배 코드컵',
    authority: 1,
    start: '2024-01-11T12:00',
    end: '2024-01-11T15:00',
    status: 3,
  },
];

const BattlePrev = () => {
  return (
    <>
      <HeaderTitle>
        <h3>종료된 대회</h3>
      </HeaderTitle>
      <BattleBoxWrapper>
        {BattleList.map((battle) => (
          <BattleBox battle={battle} key={battle.id}></BattleBox>
        ))}
      </BattleBoxWrapper>
    </>
  );
};

export default BattlePrev;
