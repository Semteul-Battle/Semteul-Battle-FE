import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  ConfirmButton,
  InputContainer,
  SelectHeader,
  SelectWrapper,
  TimeButton,
  TimeButtonWrapper,
  TimeInputWrapper,
  TimeSelectContainer,
} from './styles';

const TimeSelect = ({
  date,
  setDate,
  setIsOpen,
  setIsModalOpen,
  setCalendarVisible,
}) => {
  const [time, setTime] = useState('pm');
  const [hour, setHour] = useState('');
  const [miniute, setMiniute] = useState('');

  const timeRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (timeRef.current && !timeRef.current.contains(e.target)) {
        setIsOpen(false);
        setIsModalOpen(false);
        setCalendarVisible(true);
      }
    };
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, [timeRef]);

  const handleHour = useCallback((e) => {
    setHour(e.target.value);
  }, []);

  const handleMiniute = useCallback((e) => {
    setMiniute(e.target.value);
  }, []);

  const handleConfirmButton = useCallback(() => {
    const newDate = new Date(date);
    newDate.setHours(parseInt(hour) + (time === 'pm' ? 12 : 0));
    newDate.setMinutes(parseInt(miniute));

    setDate(newDate);
    setIsOpen(false);
    setIsModalOpen(false);
    setCalendarVisible(true);
  }, [date, hour, miniute]);

  return (
    <SelectWrapper ref={timeRef}>
      <SelectHeader>
        <p>시간 선택</p>
      </SelectHeader>
      <TimeSelectContainer>
        <TimeButtonWrapper>
          <TimeButton
            onClick={() => setTime('am')}
            selecte={time === 'am' ? 'true' : 'false'}
          >
            <p>오전</p>
          </TimeButton>
          <TimeButton
            onClick={() => setTime('pm')}
            selecte={time === 'pm' ? 'true' : 'false'}
          >
            <p>오후</p>
          </TimeButton>
        </TimeButtonWrapper>
        <InputContainer>
          <TimeInputWrapper>
            <input value={hour} onChange={handleHour} placeholder='시간' />
          </TimeInputWrapper>
          <TimeInputWrapper>
            <input value={miniute} onChange={handleMiniute} placeholder='분' />
          </TimeInputWrapper>
        </InputContainer>
      </TimeSelectContainer>
      <ConfirmButton
        onClick={handleConfirmButton}
        active={hour && miniute ? 'true' : 'false'}
      >
        <p>일정 등록</p>
      </ConfirmButton>
    </SelectWrapper>
  );
};

export default TimeSelect;
