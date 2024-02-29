import React, { useEffect, useRef, useState } from 'react';
import 'react-day-picker/dist/style.css';
import { ko } from 'date-fns/locale';
import { PickerWrapper, StyledDayPicker } from './styles';
import TimeSelect from '@components/TimeSelect';

const BattleDayPicker = ({ isOpen, setIsOpen, date, setDate }) => {
  const [calendarVisible, setCalendarVisible] = useState(true);
  const [isTimeSelectOpen, setIsTimeSelectOpen] = useState(false);

  const calendarRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (
        calendarVisible &&
        calendarRef.current &&
        !calendarRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    window.addEventListener('mousedown', handleClick);
    return () => window.removeEventListener('mousedown', handleClick);
  }, [calendarRef, calendarVisible]);

  useEffect(() => {
    if (date) {
      setCalendarVisible(false);
      setIsTimeSelectOpen(true);
    } else {
      setCalendarVisible(true);
      setIsTimeSelectOpen(false);
    }
  }, [date]);

  if (!isOpen) {
    return <></>;
  }

  return (
    <>
      <PickerWrapper ref={calendarRef} visible={calendarVisible.toString()}>
        <StyledDayPicker
          locale={ko}
          mode='single'
          selected={date}
          onSelect={setDate}
          showOutsideDays
        />
      </PickerWrapper>
      {isTimeSelectOpen && (
        <TimeSelect
          date={date}
          setDate={setDate}
          setIsOpen={setIsTimeSelectOpen}
          setIsModalOpen={setIsOpen}
          setCalendarVisible={setCalendarVisible}
        />
      )}
    </>
  );
};

export default BattleDayPicker;
