import React, { useState, useCallback } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import Modal from '@layouts/Modal';
import { useNavigate } from 'react-router-dom';
import BattleDayPicekr from '@components/BattleDayPicekr';
import { TextBoxCenter } from '@pages/Battle/BattleUploadModal/steyls';
import dayjs from 'dayjs';
import axios from 'axios';
import api from 'utils/api';
import {
  HeaderWrapper,
  NewBattleTitle,
  CustomDateWrapper,
  StyleSettingIcon,
  ModifyButton,
  LeftWrapper,
  RightWrapper,
  SaveButton,
  HeaderBar,
  NewBattleWrapper,
  Number,
  ProblemName,
  LimiteTime,
  LimiteMemory,
  Points,
  NewProblem,
  StylePlusIcon,
  StyleModifyIcon,
  ProblemTitle,
  ProblemMemory,
  ProblemTime,
  Score,
  BattleOpenButton,
  BattleOpenWrapper,
  Text,
  InputWrapper,
  InputBox,
  FinalSaveButton,
  TextBox,
  CheckButton,
  CheckButtonWrapper,
  StyleDeleteIcon,
  DateContaner,
} from './style';

const NewBattle = () => {
  //const [problem, setproblem] = useState([]);
  const [problems, setProblems] = useState([]);
  const [isModifyClicked, setIsModifyClicked] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [BattlemodalOpen, setBattlemodalOpen] = useState(false);

  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [calendarMode, setCalendarMode] = useState('');
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const handleAdd = useCallback(() => {
    api
      .post('/contests/addProblem', {
        number: null,
        title: null,
        content: null,
        input: null,
        output: null,
        timeLimit: null,
        score: 0,
        pic: [],
        inputExample: null,
        outputExample: null,
        contestId: 1,
      })
      .then((res) => {
        console.log(res);
        api
          .get('contests/problemInfo', {
            params: {
              contestId: 1,
            },
          })
          .then((res) => {
            console.log(res);
            setProblems(res.data);
          });
      })
      .catch((err) => console.error(err));
  }, []);

  const openStartCalendar = useCallback(() => {
    setCalendarMode('start');
    setIsCalendarOpen(true);
  }, []);

  const openEndCalendar = useCallback(() => {
    setCalendarMode('end');
    setIsCalendarOpen(true);
  }, []);

  const onCreate = () => {
    handleAdd();
    const newProblem = {
      id: problems.length + 1,
      title: '-',
      time: '-',
      memory: '-',
      score: '-',
    };

    setProblems([...problems, newProblem]);
  };

  const onDelete = (index) => {
    const updatedProblems = problems.filter((_, i) => i !== index);
    const updatedProblemsWithNumber = updatedProblems.map((problem, index) => ({
      ...problem,
      id: index + 1,
    }));
    setProblems(updatedProblemsWithNumber);
  };

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // 드래그가 취소되었을 경우
    if (!destination) {
      return;
    }

    // 동일한 위치로 드래그된 경우
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // 아이템의 배열 업데이트
    const updatedProblems = Array.from(problems);
    const [removed] = updatedProblems.splice(source.index, 1); // 드래그된 아이템 제거
    updatedProblems.splice(destination.index, 0, removed); // 목적지에 아이템 삽입

    // 문제의 번호 업데이트
    const updatedProblemsWithNumber = updatedProblems.map((problem, index) => ({
      ...problem,
      id: index + 1,
    }));

    // 업데이트된 배열 상태 반영
    setProblems(updatedProblemsWithNumber);

    // 로그 출력
    console.log(
      `Item moved from index ${source.index} to index ${destination.index}`
    );
  };

  const handleModifyClick = () => {
    setIsModifyClicked((prevState) => !prevState); // 이전 상태의 반대값으로 설정
  };

  const navigate = useNavigate();

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <NewBattleWrapper>
          <HeaderWrapper>
            <LeftWrapper>
              <NewBattleTitle>새로 만든 대회</NewBattleTitle>
              <CustomDateWrapper>
                {startDate && dayjs(startDate).format('YYYY.MM.DD / HH:mm')}
              </CustomDateWrapper>
              <StyleSettingIcon onClick={() => setModalOpen(true)} />
            </LeftWrapper>
            <RightWrapper>
              <ModifyButton onClick={handleModifyClick}>
                {isModifyClicked ? '완료' : '편집'}
              </ModifyButton>

              <SaveButton>저장</SaveButton>
            </RightWrapper>
          </HeaderWrapper>

          <HeaderBar>
            <Number>번호</Number> <ProblemName>문제 이름</ProblemName>
            <LimiteTime>제한 시간</LimiteTime>
            <LimiteMemory>제한 메모리</LimiteMemory> <Points>배점</Points>
          </HeaderBar>

          <Droppable droppableId='problems'>
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {problems.map((problem, index) => (
                  <Draggable
                    key={problem.id}
                    draggableId={problem.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <NewProblem>
                          <Number>{problem.id}</Number>
                          <ProblemTitle>{problem.title}</ProblemTitle>
                          <ProblemTime>{problem.time}</ProblemTime>
                          <ProblemMemory>{problem.memory}</ProblemMemory>
                          <Score>{problem.score}</Score>
                          {isModifyClicked ? (
                            <StyleDeleteIcon onClick={() => onDelete(index)} />
                          ) : (
                            <StyleModifyIcon
                              onClick={() => {
                                navigate('/detailproblem');
                              }}
                            />
                          )}
                        </NewProblem>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <NewProblem onClick={onCreate}>
            <StylePlusIcon />
          </NewProblem>

          <BattleOpenWrapper>
            <BattleOpenButton onClick={() => setBattlemodalOpen(true)}>
              대회 개최
            </BattleOpenButton>
          </BattleOpenWrapper>
        </NewBattleWrapper>
      </DragDropContext>
      {modalOpen && (
        <Modal width='520px' height='600px' setModalOpen={setModalOpen}>
          <>
            <InputWrapper>
              <Text>대회 이름</Text>
              <InputBox type='text' />

              <Text>시간 설정</Text>

              <BattleDayPicekr
                isOpen={isCalendarOpen}
                setIsOpen={setIsCalendarOpen}
                date={calendarMode === 'start' ? startDate : endDate}
                setDate={calendarMode === 'start' ? setStartDate : setEndDate}
              />

              <DateContaner>
                <TextBoxCenter onClick={openStartCalendar}>
                  <p>
                    {startDate && dayjs(startDate).format('YYYY.MM.DD / HH:mm')}
                  </p>
                </TextBoxCenter>
                <span>~</span>
                <TextBoxCenter onClick={openEndCalendar}>
                  <p>
                    {endDate && dayjs(endDate).format('YYYY.MM.DD / HH:mm')}
                  </p>
                </TextBoxCenter>
              </DateContaner>

              <Text>간략 소개</Text>
              <InputBox type='text' width='466px' height='120px' />

              <Text>문제 설명</Text>
              <InputBox type='text' width='466px' height='120px' />
            </InputWrapper>

            <FinalSaveButton>저장</FinalSaveButton>
          </>
        </Modal>
      )}
      {BattlemodalOpen && (
        <Modal width='400px' height='250px' setModalOpen={setBattlemodalOpen}>
          <>
            <TextBox>
              해당 버튼을 누를 경우, 대회가 개최되어 참가 신청이 가능해집니다.
              정말 개최하시겠습니까?
            </TextBox>
            <CheckButtonWrapper>
              <CheckButton>확인</CheckButton>
            </CheckButtonWrapper>
          </>
        </Modal>
      )}
    </>
  );
};

export default NewBattle;
