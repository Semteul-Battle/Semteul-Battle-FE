import React, { useCallback, useEffect, useState } from 'react';
import {
  Button,
  ButtonWrapper,
  ContentWrapper,
  Duration,
  StartTime,
  Status,
  Title,
} from '@pages/Battle/BattleContent/styles';
import TimeStatus from '@pages/Battle/BattleContent/TimeStatus';

const BattleContent = ({ battle }) => {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const currentTime = new Date();

    if (battle.start > currentTime) {
      setStatus('prev');
    } else if (battle.end < currentTime) {
      setStatus('next');
    } else {
      setStatus('current');
    }
  }, [battle.start, battle.end]);

  const getStartTimeString = useCallback(() => {
    const start = new Date(battle.start);
    start.setHours(start.getHours() + 9);

    const [dateString, timeString] = start.toISOString().split('T');
    const [years, months, days] = dateString.split('-');
    const time = timeString.substring(0, 5);

    return `${years}년 ${months}월 ${days}일 ${time}`;
  }, [battle.start]);

  const getDurationHour = useCallback(() => {
    const duration = (battle.end - battle.start) / 1000 / 60 / 60;
    return duration % 1 === 0 ? duration : duration.toFixed(1);
  }, [battle.start, battle.end]);

  const getStatus = useCallback(() => {
    const currentTime = new Date();

    if (status === 'next') {
      return <p>종료</p>;
    }
    if (status === 'prev' && battle.start - currentTime > 1000 * 60 * 60 * 24) {
      return (
        <p>{`시작까지 ${parseInt(
          (battle.start - currentTime) / 1000 / 60 / 60 / 24
        )}일`}</p>
      );
    }

    return (
      <TimeStatus
        status={status}
        setStatus={setStatus}
        start={battle.start}
        end={battle.end}
      />
    );
  }, [status, battle.start, battle.end]);

  const getButton = useCallback(() => {
    if (status === 'prev') {
      return <Button color='#2A6490'>신청</Button>;
    } else if (status === 'current') {
      return <Button color='#841827'>입장</Button>;
    }
    return <Button color='#404040'>연습</Button>;
  }, [status]);

  return (
    <ContentWrapper>
      <Title>
        <p>{battle.name}</p>
      </Title>
      <StartTime>
        <p>{getStartTimeString()}</p>
      </StartTime>
      <Duration>
        <p>{getDurationHour()}시간</p>
      </Duration>
      <Status>{getStatus()}</Status>
      <ButtonWrapper>{getButton()}</ButtonWrapper>
    </ContentWrapper>
  );
};

export default BattleContent;
