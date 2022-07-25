import React, {useState} from 'react';
// import tag
import {Text, View, Image, Button, ImageBackground} from 'react-native';
// import styled-component
import styled, {css} from 'styled-components/native';
// import component
import {
  DefaultText,
  DefaultMediumText,
  DefaultBoldText,
  MainModal,
  DayCounter,
  ButtonComponent,
} from '~/components';
// asset
import {Icons, CardImg} from '~/assets';
import {useRecoilState} from 'recoil';
import {initDay} from '../atoms/atoms';
// style
const MainContainer = styled.View`
  background: #ffffff;
  height: 100%;
`;
const DayCounterContainer = styled.View`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 0 20px;
  margin-top: 23px;
  margin-bottom: 27px;
`;

const MainCard = styled.View`
  width: 100%;
  height: 238px;
`;

const MainCardBg = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

const MainCardText = styled(DefaultBoldText)`
  padding: 40px 20px;
  color: #847144;
  font-size: 20px;
`;

const TodayFeelContainer = styled.View`
  margin-top: 26px;
  background-color: #fff3a0;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TodayFeelLeftArea = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TodayFeelTitle = styled(DefaultMediumText)`
  color: #847144;
  font-size: 20px;
`;

const TodayFeelIcon = styled.Image`
  width: 28px;
  height: 28px;
  margin-left: 6px;
`;

const TodayQuestionContainer = styled.View`
  padding: 0 20px;
  margin-top: 25px;
`;

const TodayQuestionTitle = styled(DefaultText)`
  font-size: 20px;
  font-weight: 400;
  color: #847144;
`;

// component
const Main = () => {
  // Modal state
  const [modalVisible, setModalVisible] = useState(false);
  // const [testVal, setTestVal] = useRecoilState(initDay);

  return (
    <MainContainer>
      <DayCounterContainer>
        <DayCounter />
      </DayCounterContainer>

      <MainCard>
        <MainCardBg source={CardImg.Img01}>
          <MainCardText>
            오늘은 좋아하는 걸 {'\n'}
            적어보는 건 어때요?
          </MainCardText>
        </MainCardBg>
      </MainCard>

      <TodayFeelContainer>
        <TodayFeelLeftArea>
          <TodayFeelTitle>오늘의 기분</TodayFeelTitle>
          <TodayFeelIcon source={Icons.Smile} />
        </TodayFeelLeftArea>
        <ButtonComponent
          shadow={3}
          onPress={() => {
            setModalVisible(true);
          }}
          title="기록하기"
          round="100px"
          textColor="#222"
        />
      </TodayFeelContainer>
      <TodayQuestionContainer>
        <TodayQuestionTitle>오늘의 문답 모음</TodayQuestionTitle>
      </TodayQuestionContainer>
      <MainModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </MainContainer>
  );
};

export default Main;
