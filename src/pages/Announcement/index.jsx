import React, { useState } from 'react';

import {
  HeaderTitle,
  HeaderWriter,
  HeaderDate,
  AnnouncementWrapper,
  AnnouncementTitle,
  AnnouncementWriter,
  AnnouncementDate,
  AnnouncementBody,
  AnnouncementBlock,
  RightBox,
  RightHeaderBox,
  PageMenu,
  Styledbutton,
} from './styles';

const AnnouncementList = [
  {
    id: 1,
    title: '📌  페이지 이용자 분들은 해당 글을 꼭 읽어 주시길 바랍니다.',
    writer: '운영자',
    date: '2024.01.12',
  },
  {
    id: 2,
    title: '📌 이용자 분들은 해당 글을 꼭 읽어 주시길 바랍니다.',
    writer: '운영자',
    date: '2024.08.12',
  },
  {
    id: 3,
    title: '📌 해당 글을 꼭 읽어 주시길 바랍니다.',
    writer: '운영자',
    date: '2024.01.12',
  },
  {
    id: 4,
    title: '📌  페이지 이용자 분들은 해당 글을 꼭 읽어 주시길 바랍니다.',
    writer: '운영자',
    date: '2024.01.12',
  },
  {
    id: 5,
    title: '📌  페이지 이용자 분들은 해당 글을 꼭 읽어 주시길 바랍니다.',
    writer: '운영자',
    date: '2024.01.12',
  },
  {
    id: 6,
    title: '📌  페이지 이용자 분들은 해당 글을 꼭 읽어 주시길 바랍니다.',
    writer: '운영자',
    date: '2024.01.12',
  },
  {
    id: 7,
    title: '📌 이용자 분들은 해당 글을 꼭 읽어 주시길 바랍니다.',
    writer: '운영자',
    date: '2024.08.12',
  },
  {
    id: 8,
    title: '📌 해당 글을 꼭 읽어 주시길 바랍니다.',
    writer: '운영자',
    date: '2024.01.12',
  },
  {
    id: 9,
    title: '📌  페이지 이용자 분들은 해당 글을 꼭 읽어 주시길 바랍니다.',
    writer: '운영자',
    date: '2024.01.12',
  },
  {
    id: 10,
    title: '📌  페이지 이용자 분들은 해당 글을 꼭 읽어 주시길 바랍니다.',
    writer: '운영자',
    date: '2024.01.12',
  },
  {
    id: 11,
    title: '📌  페이지 이용자 분들은 해당 글을 꼭 읽어 주시길 바랍니다.',
    writer: '운영자',
    date: '2024.01.12',
  },
  {
    id: 12,
    title: '📌 이용자 분들은 해당 글을 꼭 읽어 주시길 바랍니다.',
    writer: '운영자',
    date: '2024.08.12',
  },
  {
    id: 13,
    title: '📌 해당 글을 꼭 읽어 주시길 바랍니다.',
    writer: '운영자',
    date: '2024.01.12',
  },
  {
    id: 14,
    title: '📌  페이지 이용자 분들은 해당 글을 꼭 읽어 주시길 바랍니다.',
    writer: '운영자',
    date: '2024.01.12',
  },
  {
    id: 15,
    title: '📌  페이지 이용자 분들은 해당 글을 꼭 읽어 주시길 바랍니다.',
    writer: '운영자',
    date: '2024.01.12',
  },
  {
    id: 16,
    title: '📌  페이지 이용자 분들은 해당 글을 꼭 읽어 주시길 바랍니다.',
    writer: '운영자',
    date: '2024.01.12',
  },
  {
    id: 17,
    title: '📌 이용자 분들은 해당 글을 꼭 읽어 주시길 바랍니다.',
    writer: '운영자',
    date: '2024.08.12',
  },
  {
    id: 18,
    title: '📌 해당 글을 꼭 읽어 주시길 바랍니다.',
    writer: '운영자',
    date: '2024.01.12',
  },
  {
    id: 19,
    title: '📌  페이지 이용자 분들은 해당 글을 꼭 읽어 주시길 바랍니다.',
    writer: '운영자',
    date: '2024.01.12',
  },
  {
    id: 20,
    title: '📌  페이지 이용자 분들은 해당 글을 꼭 읽어 주시길 바랍니다.',
    writer: '운영자',
    date: '2024.01.12',
  },
  {
    id: 21,
    title: '📌  페이지 이용자 분들은 해당 글을 꼭 읽어 주시길 바랍니다.',
    writer: '운영자',
    date: '2024.01.12',
  },
  {
    id: 22,
    title: '📌 이용자 분들은 해당 글을 꼭 읽어 주시길 바랍니다.',
    writer: '운영자',
    date: '2024.08.12',
  },
  {
    id: 23,
    title: '📌 해당 글을 꼭 읽어 주시길 바랍니다.',
    writer: '운영자',
    date: '2024.01.12',
  },
  {
    id: 24,
    title: '📌  페이지 이용자 분들은 해당 글을 꼭 읽어 주시길 바랍니다.',
    writer: '운영자',
    date: '2024.01.12',
  },
  {
    id: 25,
    title: '📌  페이지 이용자 분들은 해당 글을 꼭 읽어 주시길 바랍니다.',
    writer: '운영자',
    date: '2024.01.12',
  },
];

const Announcement = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = (currentPage - 1) * postsPerPage;
  const currentPosts = AnnouncementList.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(AnnouncementList.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  return (
    <>
      <AnnouncementWrapper>
        <HeaderTitle>제목</HeaderTitle>
        <RightHeaderBox>
          <HeaderWriter>작성자</HeaderWriter>
          <HeaderDate>등록일</HeaderDate>
        </RightHeaderBox>
      </AnnouncementWrapper>
      <AnnouncementBody>
        {currentPosts.map((announcement) => (
          <AnnouncementBlock key={announcement.id}>
            <AnnouncementTitle>{announcement.title}</AnnouncementTitle>
            <RightBox>
              <AnnouncementWriter>{announcement.writer}</AnnouncementWriter>
              <AnnouncementDate>{announcement.date}</AnnouncementDate>
            </RightBox>
          </AnnouncementBlock>
        ))}
      </AnnouncementBody>
      <PageMenu>
        <Styledbutton onClick={prevPage} disabled={currentPage === 1}>
          prev
        </Styledbutton>

        {pageNumbers.map((number) => (
          <Styledbutton
            key={number}
            onClick={() => setCurrentPage(number)}
            className={currentPage === number ? 'active' : ''}
          >
            {number}
          </Styledbutton>
        ))}

        <Styledbutton
          onClick={nextPage}
          disabled={currentPage === pageNumbers.length}
        >
          next
        </Styledbutton>
      </PageMenu>
    </>
  );
};

export default Announcement;
