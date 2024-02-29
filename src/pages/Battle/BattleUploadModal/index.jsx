import React, { useCallback, useState } from 'react';
import {
  BattleTitleWrapper,
  DesignateContainer,
  BoxWrapper,
  ExaminerSearchButton,
  FlexBox,
  TextBox,
  InputIdBox,
  TextBoxWrapper,
  TextBoxCenter,
  DateContaner,
} from './steyls';
import BattleRoleSelect from '@components/BttleRoleSelect';
import BattleDayPicekr from '@components/BattleDayPicekr';
import dayjs from 'dayjs';

const BattleUploadModal = () => {
  const [title, setTitle] = useState('');
  const [role, setRole] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [examiners, setExmainers] = useState(['hochi', 'asm', 'dbrdldh']);
  const [addExaminer, setAddExaminer] = useState('');
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [calendarMode, setCalendarMode] = useState('');
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const handleTttleChange = useCallback(
    (e) => {
      setTitle(e.target.value);
    },
    [title]
  );

  const hanldeRole = useCallback((selectedRole) => {
    setRole(selectedRole);
  }, []);

  const handleAddExaminerChange = useCallback((e) => {
    setAddExaminer(e.target.value);
  }, []);

  const handleAddExaminer = useCallback(() => {}, []);

  const openStartCalendar = useCallback(() => {
    setCalendarMode('start');
    setIsCalendarOpen(true);
  }, []);

  const openEndCalendar = useCallback(() => {
    setCalendarMode('end');
    setIsCalendarOpen(true);
  }, []);

  return (
    <>
      <FlexBox>
        <BattleTitleWrapper>
          <input
            value={title}
            onChange={handleTttleChange}
            placeholder='대회명'
          />
        </BattleTitleWrapper>
        <BattleRoleSelect selectedRole={role} hanldeRole={hanldeRole} />
        <BoxWrapper>
          <p>문제 출제자</p>
          <DesignateContainer>
            {examiners.map((examiner, index) => (
              <TextBoxWrapper key={index}>
                <TextBox>
                  <p>{examiner}</p>
                </TextBox>
              </TextBoxWrapper>
            ))}
            <TextBoxWrapper>
              <InputIdBox
                value={addExaminer}
                onChange={handleAddExaminerChange}
                placeholder='아이디를 입력하세요.'
              />
              <ExaminerSearchButton onClick={handleAddExaminer}>
                <p>검색</p>
              </ExaminerSearchButton>
            </TextBoxWrapper>
          </DesignateContainer>
        </BoxWrapper>
        <BoxWrapper>
          <p>시간설정</p>
          <DateContaner>
            <TextBoxCenter onClick={openStartCalendar}>
              <p>
                {startDate && dayjs(startDate).format('YYYY.MM.DD / HH:mm')}
              </p>
            </TextBoxCenter>
            <span>~</span>
            <TextBoxCenter onClick={openEndCalendar}>
              <p>{endDate && dayjs(endDate).format('YYYY.MM.DD / HH:mm')}</p>
            </TextBoxCenter>
          </DateContaner>
        </BoxWrapper>
      </FlexBox>
      <BattleDayPicekr
        isOpen={isCalendarOpen}
        setIsOpen={setIsCalendarOpen}
        date={calendarMode === 'start' ? startDate : endDate}
        setDate={calendarMode === 'start' ? setStartDate : setEndDate}
      />
    </>
  );
};

export default BattleUploadModal;
