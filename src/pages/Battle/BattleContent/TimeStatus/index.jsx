/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from 'react';

/*
status가 바뀔때 reload로 새로고침해서 입장으로 변경
많은 고민이 필요
대회 진행 예정 한시간 이전부터는 버튼 비활성화
*/

const TimeStatus = ({ status, setStatus, start, end }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (status === 'prev' && start < currentTime) {
      window.location.reload();
      // setStatus('current');
    } else if (status === 'current' && end < currentTime) {
      window.location.reload();
      // setStatus('next');
    }
  }, [currentTime, status, start, end]);

  const numberFormatting = useCallback((number) => {
    return parseInt(number).toString().padStart(2, '0');
  }, []);

  const getStatus = useCallback(() => {
    if (status === 'prev') {
      const timeDiff = (start - currentTime) / 1000;
      const hours = numberFormatting(timeDiff / 60 / 60);
      const miniutes = numberFormatting((timeDiff / 60) % 60);
      const seconds = numberFormatting((timeDiff % 60) % 60);
      return `시작까지 ${hours}:${miniutes}:${seconds}`;
    }

    const timeDiff = (end - currentTime) / 1000;
    const hours = numberFormatting(timeDiff / 60 / 60);
    const miniutes = numberFormatting((timeDiff / 60) % 60);
    const seconds = numberFormatting((timeDiff % 60) % 60);
    return `종료까지 ${hours}:${miniutes}:${seconds}`;
  }, [currentTime, status, start, end]);

  return <p>{getStatus()}</p>;
};

export default TimeStatus;
