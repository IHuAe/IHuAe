import React, {useState, useRef} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, ScrollView, Keyboard } from 'react-native';
import styled  from 'styled-components/native';
// component
import {DefaultText, DefaultBoldText} from '~/components';
// asset
import {Icons} from '~/assets';

const DiaryContainer = styled.View`
  border: 1px solid red;
  height: 100%;
  background-color: #fff;
`;
const DiaryTitleArea = styled.View`
  margin-top: 23px;
  padding: 0 20px;
`;
const DiaryTitle = styled(DefaultBoldText)`
  color: #FFBF6A;
  font-size: 20px;
`;
const CalendarContainer = styled.View`
 height: 85px;
 background-color: #F1F1F1;
 padding: 0 20px;
 margin-top: 26px;
`;
const DiaryContentsContainer = styled.View`
  padding: 30px 20px;
  padding-top: 28px;
  border: 1px solid red;
  flex-grow: 1;
`;

const DiaryContents = styled.View`
  width: 100%;
  height: 90px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #C4C4C4;
  border-radius: 5px;
`;

const WriteBtn = styled.TouchableOpacity`
  width:56px;
  height: 56px;
  background-color: #FFBF6A;
  border-radius: 100px;
  position: absolute;
  bottom: 87px;
  right: 20px;
  justify-content: center;
  align-items: center;
`;

const WriteBtnIcon = styled.Image`
  width: 34px;
  height: 34px;  
`;

const Diary = () => {
  return (
    <DiaryContainer>
      <DiaryTitleArea>
      <DiaryTitle>내 글 쓰기</DiaryTitle>
      </DiaryTitleArea>
      <CalendarContainer>
        <DefaultText>달력 추가 영역</DefaultText>
      </CalendarContainer>
      <DiaryContentsContainer>
        <DiaryContents>
          <Text>오늘의 문답</Text>
          <Text>당신이 가장 좋아하는 장소는 어디인가요?</Text>
        </DiaryContents>
      </DiaryContentsContainer>
      <WriteBtn activeOpacity={0.7}>
        <WriteBtnIcon source={Icons.Union} />
      </WriteBtn>
    </DiaryContainer>    
  )
}

export default Diary;