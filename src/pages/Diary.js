import React, {useState, useRef} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, ScrollView, Keyboard } from 'react-native';
import styled  from 'styled-components/native';
// component
import {DefaultText, DefaultMediumText, DefaultBoldText, DayCounter} from '~/components';
// lib
import CalendarStrip from 'react-native-calendar-strip';
import {useRecoilValue} from 'recoil';
import {dayCount} from '~/atoms/selectors';
// asset
import {Icons} from '~/assets';

const DiaryContainer = styled.View`
  height: 100%;
  background-color: #f5f8fd; 
`;

const DiaryContainerTitle = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 50px;
  background: #fff;
`;

const DiaryContainerTitleText = styled(DefaultMediumText)`
  font-size: 16px;
  color: #4a4a4a;
  text-align: center;
`;

const CalendarContainer = styled.View`
 height: 90px;
 background-color: #fff;
 padding: 10px 20px;
 margin-top: 6px;
 position: relative;
`;

const DiaryContentsContainer = styled.View`
  padding: 0 20px;
  padding-top: 28px;
`;

const DiaryContents = styled.View`
  width: 100%;
  padding: 25px 20px;
  padding-bottom: 40px;
  background-color: #EFE7F6;
  border: 1px solid #EBDFF4;
  border-radius: 5px;
  margin-top: 10px;
`;


const DiaryContentsTitle = styled(DefaultBoldText)`
font-size: 14px;
color: #4a4a4a;
`;

// TODO font 적용
const DiaryContentsNumber = styled.Text`
  font-size: 16px;
  color: #C5A0D9;
`;

const DiaryContentsQuestion = styled(DefaultMediumText)`
  font-size: 16px;
  margin-top: 17px;
  color: #C5A0D9;
`;

const DiaryWriteBtn = styled.TouchableOpacity`
  width: 64px;
  height: 64px;
  background: #fff;
  border-radius: 100px;
  align-items: center;
  justify-content: center;
`;

const DiaryWriteBtnText = styled(DefaultMediumText)`
  font-size: 12px;
  color: #caa9dd;
`;

const TodayMemoContainer = styled.View`
  margin-top: 24px;
  padding: 0 20px;
`;


const TodayMemoContainerTitleText = styled(DefaultBoldText)`
  color: #4a4a4a;
  font-size: 14px;
  margin-bottom: 9px;
`;

const TodayMemo = styled.View`
  border-radius: 3px;
  padding: 18px 20px;
  background : #fff;
  border: 1px solid #ECECEC;
  margin-top: 5px;
`;

const TodayMemoTitle = styled.View`
  width: 100%;
  flex-direction: row;
  justofy-contents: space-between;
  align-items: center;
`;

const TodayMemoTitleText = styled(DefaultMediumText)`
  color: #7a7a7a;
  font-size: 16px;
  flex-grow: 1;  
`;

const TodayMemoDelete = styled(DefaultMediumText)`
  color: #4a4a4a;
  font-size: 10px;
  width: 50px;
  text-align: right;
`;

const TodayMemoContent = styled(DefaultMediumText)`
  color: #9a9a9a;
  font-size: 12px;
  margin-top: 16px;
  width: 100%;
  overflow: hidden;
`;

const WriteBtn = styled.TouchableOpacity`
  width:48px;
  height: 48px;
  background-color: #8291E6;
  border-radius: 100px;
  position: absolute;
  bottom: 78px;
  right: 20px;
  justify-content: center;
  align-items: center;
`;

const WriteBtnText = styled(DefaultBoldText)`
  color: #fff;
  font-size: 40px;
  align-items: center;
  justify-content: center;
  margin-top: -4px;
  margin-left: 1px;  
`;

const dayCounterStyle = {
  fontFamily: 'SpoqaHanSansNeo-Medium',
  color: '#4a4a4a',
};

const Diary = () => {
  const weekState = useRecoilValue(dayCount);
  return (
    <DiaryContainer>
      {/* COMPONENT HEADER */}
      <DiaryContainerTitle>
        <DiaryContainerTitleText>기록</DiaryContainerTitleText>
      </DiaryContainerTitle>
      {/* COMPONENT CALENDAR */}
      <CalendarContainer
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: -4,
          },
          shadowOpacity: 0.1,
          shadowRadius: 0,
          elevation: 15,
        }}
      >
        {/* https://www.npmjs.com/package/react-native-calendar-strip */}
        {/* COMPONENT DDAY Counter */}
        <DayCounter style={dayCounterStyle}/>
        <CalendarStrip          
          style={{padding: 0,}}
          innerStyle ={{  justifyContent:'center', padding: 0,}}
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
        <DiaryContents
        // TODO shadow
          // style={{
          //   shadowColor: '#000',
          //   shadowOffset: {
          //     width: 0,
          //     height: -4,
          //   },
          //   shadowOpacity: 0.1,
          //   shadowRadius: 0,
          //   elevation: 5,
          // }}
        >
          <DiaryContentsNumber>Q. 1</DiaryContentsNumber>
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>            
            <DiaryContentsQuestion>X와 어떻게 헤어졌는지 {'\n'}자세히 말해줄래요?</DiaryContentsQuestion>
            <DiaryWriteBtn activeOpacity={1}>
              <DiaryWriteBtnText>기록하기</DiaryWriteBtnText>
            </DiaryWriteBtn>
          </View>         
        </DiaryContents>
      </DiaryContentsContainer>
      {/* COMPONENT 오늘의 기록 */}
      <TodayMemoContainer>
        <TodayMemoContainerTitleText>
          오늘의 기록
        </TodayMemoContainerTitleText>
        {/* COMPONENT 기록 메모 컴포넌트 */}
        <TodayMemo>
          <TodayMemoTitle>
            <TodayMemoTitleText numberOfLines={1} ellipsizeMode='tail'>우울한 날</TodayMemoTitleText>
            <TouchableOpacity activeOpacity={0}>
              <TodayMemoDelete>삭제</TodayMemoDelete>
            </TouchableOpacity>
          </TodayMemoTitle>
          <TodayMemoContent numberOfLines={1} ellipsizeMode='tail'>
            오늘은 기분이 좀 그래. 같이 있다가 너가 없으니 너무너무 허전해.          
          </TodayMemoContent>
        </TodayMemo>     
        <TodayMemo>
          <TodayMemoTitle>
            <TodayMemoTitleText numberOfLines={1} ellipsizeMode='tail'>우울한 날</TodayMemoTitleText>
            <TouchableOpacity activeOpacity={0}>
              <TodayMemoDelete>삭제</TodayMemoDelete>
            </TouchableOpacity>
          </TodayMemoTitle>
          <TodayMemoContent numberOfLines={1} ellipsizeMode='tail'>
            오늘은 기분이 좀 그래. 같이 있다가 너가 없으니 너무너무 허전해.          
          </TodayMemoContent>
        </TodayMemo>   
      </TodayMemoContainer>
      {/* COMPONENT 글쓰기 버튼 */}
      <WriteBtn activeOpacity={0.7}
      // TODO shadow
      >
        <WriteBtnText>+</WriteBtnText>
        {/* <WriteBtnIcon source={Icons.Union} /> */}
      </WriteBtn>
    </DiaryContainer>    
  )
}

export default Diary;