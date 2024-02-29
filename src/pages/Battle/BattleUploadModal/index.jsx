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
  UploadButtonContainer,
  DeleteExaminer,
} from './steyls';
import BattleRoleSelect from '@components/BttleRoleSelect';
import BattleDayPicekr from '@components/BattleDayPicekr';
import dayjs from 'dayjs';
import api from 'utils/api';

const BattleUploadModal = ({ setModalOpen }) => {
  const [title, setTitle] = useState('');
  const [role, setRole] = useState('');
  const [examiners, setExmainers] = useState([]);
  const [addExaminer, setAddExaminer] = useState('');
  const [examinerError, setExaminerError] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [calendarMode, setCalendarMode] = useState('');
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const handleTttleChange = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const hanldeRole = useCallback((selectedRole) => {
    setRole(selectedRole);
  }, []);

  const handleAddExaminerChange = useCallback((e) => {
    setAddExaminer(e.target.value);

    if (!e.target.value) {
      setExaminerError(false);
    }
  }, []);

  const handleAddExaminer = useCallback(
    (e) => {
      e.preventDefault();

      api
        .get('contest/id-designate', {
          params: {
            loginId: addExaminer,
          },
        })
        .then((res) => {
          if (res.data) {
            setExmainers([...examiners, addExaminer]);
            setAddExaminer('');
            setExaminerError(false);
          } else {
            setExaminerError(true);
          }
        })
        .catch((err) => console.error(err));
    },
    [examiners, addExaminer]
  );

  const deleteExaminer = useCallback(
    (selectedExaminer) => {
      setExmainers(
        examiners.filter((examiner) => examiner !== selectedExaminer)
      );
    },
    [examiners]
  );

  const openStartCalendar = useCallback(() => {
    setCalendarMode('start');
    setIsCalendarOpen(true);
  }, []);

  const openEndCalendar = useCallback(() => {
    setCalendarMode('end');
    setIsCalendarOpen(true);
  }, []);

  const handleUploadBattle = useCallback(() => {
    api
      .post('/contest/contestCreate', {
        contestName: title,
        examinerUsernames: examiners,
        enterAuthority: role === '동아리' ? 0 : 1,
        startTime: startDate,
        endTime: endDate,
        contestHost: 1,
      })
      .then((res) => setModalOpen(false))
      .catch((err) => console.error(err));
  }, [title, examiners, role, startDate, endDate]);

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
                <TextBox notfound={examinerError.toString()}>
                  <p>{examiner}</p>
                  <DeleteExaminer onClick={() => deleteExaminer(examiner)}>
                    &times;
                  </DeleteExaminer>
                </TextBox>
              </TextBoxWrapper>
            ))}
            <form onSubmit={handleAddExaminer}>
              <TextBoxWrapper>
                <InputIdBox
                  value={addExaminer}
                  onChange={handleAddExaminerChange}
                  placeholder='아이디를 입력하세요.'
                  error={examinerError.toString()}
                />
                <ExaminerSearchButton type='submit'>
                  <p>검색</p>
                </ExaminerSearchButton>
              </TextBoxWrapper>
            </form>
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
        <UploadButtonContainer>
          <button
            onClick={handleUploadBattle}
            disabled={
              !(title && role && examiners.length > 0 && startDate && endDate)
            }
          >
            <p>대회 등록</p>
          </button>
        </UploadButtonContainer>
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
