import React, {useState, useRef} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, ScrollView, Keyboard } from 'react-native';
import styled  from 'styled-components/native';
// component
import {DefaultText, DefaultBoldText, DayCounter} from '~/components';
// lib
import CalendarStrip from 'react-native-calendar-strip';
import {useRecoilValue} from 'recoil';
import {dayCount} from '~/atoms/selectors';
// asset
import {Icons} from '~/assets';

const DiaryContainer = styled.View`
  height: 100%;
  background-color: #fff; 
`;

const DiaryTitleArea = styled.View`
  margin-top: 23px;
  padding: 0px 20px;
`;
const DiaryTitle = styled(DefaultBoldText)`
  color: #FFBF6A;
  font-size: 20px;
`;
const CalendarContainer = styled.View`
 height: 85px;
 background-color: #F1F1F1;
 padding: 10px 20px;
 margin-top: 26px;
 position: relative;
`;
const Week = styled(DefaultText)`
  color: #000;
  font-size: 15px;
  position: absolute;
  z-index: 5;
  top: 10px;
  left: 20px;
`;

const DiaryContentsContainer = styled.View`
  padding: 30px 20px;
  padding-top: 28px;
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

const DiaryContentsTitle = styled(DefaultText)`
  color: #4A4A4A;
  font-size: 14px;
 
`;
const DiaryContentsQuestion = styled(DefaultText)`
  font-size: 14px;
  margin-top: 17px;
  color: #4A4A4A;
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
  const weekState = useRecoilValue(dayCount);
  return (
    <DiaryContainer>
      {/* COMPONENT HEADER */}
      <View>
        <Text>기록</Text>
      </View>
      {/* COMPONENT CALENDAR */}
      <CalendarContainer>
        {/* https://www.npmjs.com/package/react-native-calendar-strip */}
        {/* COMPONENT DDAY Counter */}
        <DayCounter />
        <CalendarStrip          
          style={{ height: '100%', paddingTop:10, marginBottom:20, }}
          innerStyle ={{  justifyContent:'center',}}
          dayContainerStyle={{}}
          calendarHeaderStyle={{display:'none'}}
          scrollable={true}
          showDayName={false}
          dateNumberStyle={
            {color: '#000', 
            fontSize: 15,
            fontWeight: '400',
          }}
          dateContainerStyle={{
            backgroundColor:'#fff',
          }}
          iconStyle={{display:'none'}}
        />
      </CalendarContainer>
      {/* COMPONENT 오늘의 문답 */}
      <DiaryContentsContainer>
        <DiaryContentsTitle>오늘의 문답</DiaryContentsTitle>
        <DiaryContents>
          <View>
            <Text>Q. 1</Text>
            <DiaryContentsQuestion>X와 어떻게 헤어졌는지 {'\n'}자세히 말해줄래요?</DiaryContentsQuestion>
          </View>
          <View>
            <TouchableOpacity activeOpacity={1}>
              <Text>내 답변 보기</Text>
            </TouchableOpacity>
          </View>
        </DiaryContents>
      </DiaryContentsContainer>
      {/* COMPONENT 오늘의 기록 */}
      <View>
        <View>
          <Text>오늘의 기록</Text>
        </View>
        <View>
         <Text>우울한 날</Text>
         <TouchableOpacity activeOpacity={1}>
          <Text>삭제</Text>
         </TouchableOpacity>
        </View>
        <View>
          <Text>오늘은 기분이 좀 그래. 같이 있다가 너가 없으니 너무너무 허전해.</Text>
        </View>
      </View>
      {/* COMPONENT 글쓰기 버튼 */}
      <WriteBtn activeOpacity={0.7}>
        <Text>+</Text>
        {/* <WriteBtnIcon source={Icons.Union} /> */}
      </WriteBtn>
    </DiaryContainer>    
  )
}

export default Diary;