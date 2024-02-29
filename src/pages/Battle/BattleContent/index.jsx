import React, { useCallback, useEffect, useState } from 'react';
import {
  Button,
  ButtonWrapper,
  ContentRow,
  ContentWrapper,
} from '@pages/Battle/BattleContent/styles';
import TimeStatus from '@pages/Battle/BattleContent/TimeStatus';
import dayjs from 'dayjs';

const BattleContent = ({ battle }) => {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const currentTime = new Date();
    const startTime = new Date(battle.startTime);
    const endTime = new Date(battle.endTime);

    if (startTime > currentTime) {
      setStatus('prev');
    } else if (endTime < currentTime) {
      setStatus('next');
    } else {
      setStatus('current');
    }
  }, [battle]);

  const getDurationHour = useCallback(() => {
    const duration = dayjs(battle.endTime).diff(dayjs(battle.startTime), 'h');
    return duration % 1 === 0 ? duration : duration.toFixed(1);
  }, [battle]);

  const getStatus = useCallback(() => {
    const currentTime = new Date();

    if (status === 'next') {
      return <p>종료</p>;
    }
    if (
      status === 'prev' &&
      battle.startTime.getMilliseconds() - currentTime.getMilliseconds() >
        1000 * 60 * 60 * 24
    ) {
      return (
        <p>{`시작까지 ${parseInt(
          (battle.startTime.getMilliseconds() - currentTime.getMilliseconds()) /
            1000 /
            60 /
            60 /
            24
        )}일`}</p>
      );
    }

    return (
      <TimeStatus
        status={status}
        setStatus={setStatus}
        start={battle.startTime}
        end={battle.endTime}
      />
    );
  }, [status, battle.startTime, battle.endTime]);

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
      <ContentRow width='25%'>
        <p>{battle.contestName}</p>
      </ContentRow>
      <ContentRow width='25%'>
        <p>{dayjs(battle.startTime).format('YYYY년 MM월 DD일 HH:mm')}</p>
      </ContentRow>
      <ContentRow width='15%'>
        <p>{getDurationHour()}</p>
      </ContentRow>
      <ContentRow width='20%'>
        <p>{getStatus()}</p>
      </ContentRow>
      <ButtonWrapper>{getButton()}</ButtonWrapper>
    </ContentWrapper>
  );
};

export default BattleContent;
