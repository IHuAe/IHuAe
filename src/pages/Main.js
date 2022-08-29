import React, {useState} from 'react';
// import tag
import {
  Text,
  View,
  Image,
  Button,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
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
import {nowDay} from '../atoms/atoms';
// style
const MainContainer = styled.View`
  background: #f6f8fd;
  padding-bottom: 69px;
  height: 100%;
  overflow: hidden;
`;

const MainHeader = styled.View`
  width: 100%;
  padding: 18px 20px 30px 20px;
  background: #fff;
`;

const MainHeaderTopContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const MainHeaderTopText = styled(DefaultBoldText)`
  color: #8291e6;
  font-size: 12px;
`;

const TodayFeelContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TodayFeelIcon = styled.View`
  width: 28px;
  height: 28px;
  border-radius: 100px;
  border: 2px dashed #8291e6;
  margin-left: 15px;
`;

const TodayQuestionContainer = styled.View`
  margin-top: 38px;
`;

const TodayQuestionTitle = styled(DefaultBoldText)`
  height: 25px;
  color: #8291e6;
  font-size: 12px;
`;

const TodayQuestionTextWrap = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TodayQuestionText = styled(DefaultMediumText)`
  font-size: 15px;
  color: #8291e6;
`;

const TodayQuestionWriteButton = styled.TouchableOpacity`
  width: 82px;
  height: 28px;
  border-radius: 5px;
  background: #8996f3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TodayQuestionWriteButtonText = styled(DefaultMediumText)`
  font-size: 12px;
  color: #fff;
`;

const MainCardImgContainer = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 69px;
  flex-direction: row;
`;

const MainCard = styled.View`
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  width: 100%;
  overflow: hidden;
`;

// component
const Main = () => {
  // Modal state
  const [modalVisible, setModalVisible] = useState(false);
  // const [testVal, setTestVal] = useRecoilState(nowDay);

  return (
    <MainContainer>
      {/* COMPONENT HEADER */}
      <MainHeader
        style={{
          borderRadius: 15,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 32,
          },
          shadowOpacity: 0.14,
          shadowRadius: 5,
          elevation: 16,
        }}>
        <MainHeaderTopContainer>
          {/* COMPONENT DAY COUNTER */}
          <DayCounter />
          {/* COMPONENT 오늘의 기분 표현 */}
          <TodayFeelContainer>
            <MainHeaderTopText>오늘의 기분을 표현해보세요</MainHeaderTopText>
            <TodayFeelIcon />
          </TodayFeelContainer>
        </MainHeaderTopContainer>
        {/* COMPONENT 하루 문답 */}
        <TodayQuestionContainer>
          <TodayQuestionTitle>하루문답</TodayQuestionTitle>
          <TodayQuestionTextWrap>
            <TodayQuestionText>
              요즘 가장 하고 싶은 게 뭐예요?
            </TodayQuestionText>
            {/* COMPONENT 하루문답 기록하기 버튼 */}
            <TodayQuestionWriteButton
              style={{
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 32,
                },
                shadowOpacity: 0.25,
                shadowRadius: 5,
                elevation: 5,
              }}
              onPress={setModalVisible.bind(this, true)}>
              <TodayQuestionWriteButtonText>
                기록하기
              </TodayQuestionWriteButtonText>
            </TodayQuestionWriteButton>
          </TodayQuestionTextWrap>
        </TodayQuestionContainer>
      </MainHeader>

      {/* COMPONENT CARD */}
      <MainCard>
        <MainCardImgContainer>
          <Image
            style={{
              width: 295,
              height: 453,
            }}
            source={CardImg.Img01}
          />
        </MainCardImgContainer>
      </MainCard>

      <MainModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </MainContainer>
  );
};

export default Main;
