import React, { useState, useEffect, useCallback } from 'react';

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
      setStatus('current');
    } else if (status === 'current' && end < currentTime) {
      setStatus('next');
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
