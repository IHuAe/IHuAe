import React, {useState} from 'react';
import {View, Text, ToastAndroid, Image, TouchableOpacity} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {exp} from 'react-native/Libraries/Animated/Easing';
import styled from 'styled-components/native';
// utils
import {makeMonthCalendar, leftPad} from '~/utils';
// components
import {
  DefaultText,
  DefaultBoldText,
  DefaultMediumText,
  DayCounter,
} from '~/components/index';
// import {DefaultText, DefaultBoldText, DefaultMediumText} from '~/components/DefaultText';

const Header = styled.View`
  width: 100%;
  height: 45px;
  flex-direction: row;
  border: 1px solid red;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  background-color: #bababa;
`;
const HeaderTextContainer = styled.View`
  flex-direction: row;
`;
const HeaderText = styled(DefaultBoldText)`
  color: #545454;
  font-size: 20px;
`;
const WeekContainer = styled.View`
  margin-top: 30px;
`;
const WeekText = styled(DefaultBoldText)`
  width: 14.285%;
  border: 1px solid red;
  font-size: 10px;
  color: #000;
  flex-grow: 1;
  flex-shrink: 0;
  text-align: center;
`;
const DateItem = styled.View`
  width: 14.285%;
  flex-grow: 1;
  flex-shrink: 0;
  border: 1px solid red;
`;
const DateItemText = styled(DefaultText)`
  color: #000;
  font-size: 10px;
  text-align: center;
`;
const DateContainer = styled.View`
  margin-top: 20px;
`;

const Calendar = () => {
  const now = new Date();
  const today = {
    year: now.getFullYear(),
    month: now.getMonth(),
    date: now.getDate(),
  };
  const todayFullDate = `${today.year}${leftPad(today.month)}${leftPad(
    today.date,
  )}`;
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  // // 캘린더 생성 함수
  const [month, setMonth] = useState(today.month);
  const [year, setYear] = useState(today.year);
  const [selectedDate, setSelectedDate] = useState('');
  const thisMonthCalendar = makeMonthCalendar(year, month);
  const handleSetYear = type => {
    switch (type) {
      case 'prev':
        if (month != 0) {
          setMonth(month - 1);
        } else {
          setMonth(11);
          setYear(year - 1);
        }
        break;
      case 'next':
        if (month != 11) {
          setMonth(month + 1);
        } else {
          setMonth(0);
          setYear(year + 1);
        }
        break;
    }
  };

  return (
    <View style={{backgroundColor: '#ddd'}}>
      {/* 캘린더 헤더 */}
      <Header>
        <TouchableOpacity
          onPress={() => {
            handleSetYear('prev');
          }}>
          {/* left btn */}
          <Text>◀</Text>
        </TouchableOpacity>
        <HeaderTextContainer>
          <HeaderText>{year}.</HeaderText>
          <HeaderText>{month + 1}</HeaderText>
        </HeaderTextContainer>
        <TouchableOpacity
          onPress={() => {
            handleSetYear('next');
          }}>
          {/* right btn */}
          <Text>▶</Text>
        </TouchableOpacity>
      </Header>
      {/* // 캘린더 헤더 */}
      <View>
        <WeekContainer style={{flexDirection: 'row'}}>
          {/* 주 표시 */}
          {week.map(el => {
            return <WeekText key={el}>{el}</WeekText>;
          })}
        </WeekContainer>
        {/* 캘린더 본문 */}
        <DateContainer>
          {thisMonthCalendar.map((dayRow, idx) => {
            return (
              // row
              <View key={`week${idx}`} style={{flexDirection: 'row'}}>
                {dayRow.map(dayCell => {
                  return (
                    // cell
                    <DateItem key={dayCell.fullDate}>
                      <DateItemText>{dayCell.date}</DateItemText>
                    </DateItem>
                  );
                })}
              </View>
            );
          })}
        </DateContainer>
        {/* //캘린더 본문 */}
      </View>
    </View>
  );
};

export default Calendar;
