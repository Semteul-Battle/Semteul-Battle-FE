import React, { useState, useEffect, useCallback } from 'react';
import {
  BattleHeader,
  BattleInfoWrapper,
  BattleList,
  BattleListWrapper,
  BattleWrapper,
  FlexBox,
  HeadRow,
  UploadButtonWrapper,
} from '@pages/Battle/styles';
import BattleContent from '@pages/Battle/BattleContent';
import { ReactComponent as UploadIcon } from '@assets/upload_icon.svg';
import Modal from '@layouts/Modal';
import BattleUploadModal from './BattleUploadModal';
import api from 'utils/api';

const Battle = () => {
  const [battles, setBattles] = useState([]);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  // useEffect(() => {
  //   const rawBattles = [
  //     {
  //       id: 1,
  //       name: '봄봄배 코드컵',
  //       autority: 1,
  //       start: new Date('2024-01-25T14:13'),
  //       end: new Date('2024-01-25T18:00'),
  //     },
  //     {
  //       id: 2,
  //       name: '봄봄배 코드컵',
  //       autority: 1,
  //       start: new Date('2023-03-01T15:00'),
  //       end: new Date('2023-03-01T18:00'),
  //     },
  //     {
  //       id: 3,
  //       name: '봄봄배 코드컵',
  //       autority: 1,
  //       start: new Date('2024-03-02T15:00'),
  //       end: new Date('2024-03-02T18:00'),
  //     },
  //     {
  //       id: 4,
  //       name: '봄봄배 코드컵',
  //       autority: 1,
  //       start: new Date('2024-03-03T15:00'),
  //       end: new Date('2024-03-03T18:00'),
  //     },
  //     {
  //       id: 5,
  //       name: '봄봄배 코드컵',
  //       autority: 1,
  //       start: new Date('2024-03-04T15:00'),
  //       end: new Date('2024-03-04T18:00'),
  //     },
  //   ];

  //   const sortBattles = [...rawBattles];
  //   const currentTime = new Date();
  //   sortBattles.sort((left, right) => {
  //     const leftStatus =
  //       left.end < currentTime ? 2 : left.start > currentTime ? 1 : 0;
  //     const rightStatus =
  //       right.end < currentTime ? 2 : right.start > currentTime ? 1 : 0;

  //     if (leftStatus !== rightStatus) {
  //       return leftStatus - rightStatus;
  //     }

  //     return right.start - left.start;
  //   });

  //   setBattles([...sortBattles]);
  // }, []);

  useEffect(() => {
    api
      .get('/contests/all', {
        params: {
          page: 0,
          size: 10,
        },
      })
      .then((res) => {
        const newBattles = res.data.contests.map((contest) => ({
          ...contest,
          startTime: new Date(contest.startTime),
          endTime: new Date(contest.endTime),
        }));
        console.log(newBattles);
        setBattles(res.data.contests);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleUploadButton = useCallback(() => {
    setIsUploadModalOpen(true);
  }, []);

  return (
    <>
      <FlexBox>
        <BattleWrapper>
          <BattleHeader>
            <h5>대회</h5>
          </BattleHeader>
          <BattleListWrapper>
            <BattleInfoWrapper>
              <HeadRow width='25%'>
                <p>대회명</p>
              </HeadRow>
              <HeadRow width='25%'>
                <p>시작 시간</p>
              </HeadRow>
              <HeadRow width='15%'>
                <p>진행 시간</p>
              </HeadRow>
              <HeadRow width='20%'>
                <p>대회 상태</p>
              </HeadRow>
              <HeadRow width='15%'>
                <p>상태</p>
              </HeadRow>
            </BattleInfoWrapper>
          </BattleListWrapper>
          <BattleList>
            {battles.map((battle) => (
              <BattleContent key={battle.id} battle={battle} />
            ))}
          </BattleList>
          <UploadButtonWrapper>
            <UploadIcon onClick={handleUploadButton} />
          </UploadButtonWrapper>
        </BattleWrapper>
        {isUploadModalOpen && (
          <Modal
            width='512px'
            height='fit-content'
            setModalOpen={setIsUploadModalOpen}
          >
            <BattleUploadModal setModalOpen={setIsUploadModalOpen} />
          </Modal>
        )}
      </FlexBox>
    </>
  );
};

export default Battle;
