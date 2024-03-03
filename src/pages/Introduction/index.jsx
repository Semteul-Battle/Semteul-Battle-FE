import React from 'react';
import { ImgWrapper, BackgroundContainer, Text, Title } from './styles';
import soongsil from '@assets/soongsil.jpg';

const Introduction = () => {
  return (
    <ImgWrapper>
      <BackgroundContainer>
        <Title>{'"셈틀"'}</Title>
        <Text>
          숫자를 세는 것을 통틀은 말 {'셈'}과 {'기계'}의 우리말인, {'틀'}이
          합해져서 나온 말
        </Text>
        <Text>
          <br />
          안녕하세요.
          <br /> {'"셈틀"'} 알고리즘 대회 사이트는 숭실대학교 컴퓨터학부
          친구들이 모여 제작한 사이트입니다.
          <br />
          <br /> 저희들은 평소 온라인 저지 사이트에서 함께 알고리즘 문제를
          풀곤했습니다.
          <br /> 자연스레 우리들이 만든 알고리즘 대회 사이트가 있으면 좋겠다는
          생각에 이 사이트를 만들게 되었습니다.
          <br />
          <br /> {'"셈틀"'} 사이트는 숭실대학교 컴퓨터학부 학생만 이용할 수 있는
          사이트가 아닙니다.
          <br /> 알고리즘 문제 해결을 좋아하는 누구라도 이용할 수 있습니다.
        </Text>
      </BackgroundContainer>
    </ImgWrapper>
  );
};

export default Introduction;
