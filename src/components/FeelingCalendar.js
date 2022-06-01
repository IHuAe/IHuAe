import React, {useState, useEffect} from 'react';
import { View, Text, ToastAndroid } from 'react-native';
import styled  from 'styled-components/native';
import {DefaultText} from '~/components/DefaultText';
import DayCounter from '~/components/DayCounter';

import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';


LocaleConfig.locales['fr'] = {
  monthNames: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
  monthNamesShort: ['Janv.','Févr.','Mars','Avril','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'],
  dayNames: ['일요일','월요일', '화요일','수요일','목요일','금요일','토요일'],
  dayNamesShort: ['일', '월','화','수','목','금','토'],
  today: 'Aujourd\'hui'
};
LocaleConfig.defaultLocale = 'fr';


const CalendarContainer = styled.View`
background: #ffffff;
  height: 100%;
  padding: 0 20px;
`;

const DayCounterContainer = styled.View`
margin-top: 23px;
`;

const DiaryContainer = styled.View`

  margin-top: 7px;
  background-color: #F3F3F3;
  padding: 10px 16px;
  border-radius: 5px;
`;

const StyledDefaultText = styled(DefaultText)`
  color: #000;
  font-size: 13px;

`;

const FeelingCalendar = () => {
 const [selectedDay, setSelectedDay] = useState('');
 const [selectedDate, setSelectedDate] = useState('');

 useEffect(()=>{
  //  mount시에만 실행
  const now = new Date();

  function leftPad(value) {
    if (value >= 10) {
        return value;
    }
    return `0${value}`;
}
  function toStringByFormatting(source, delimiter = '-') {
    const year = source.getFullYear();
    const month = leftPad(source.getMonth() + 1);
    const day = leftPad(source.getDate());
    return [year, month, day].join(delimiter);
}
  const date = toStringByFormatting(now);
  setSelectedDay(date);
}, []);

useEffect(()=> {
  // mount시, selectDay 변경 시 실행
  const dateArr = selectedDay.split('-');
  let day;
  if (dateArr[2].slice(0,1) == '0'){
    day = dateArr[2].slice(1,2);
  } else{
    day = dateArr[2];
  }
  setSelectedDate(day); 
}, [selectedDay]);

  return(   
    <CalendarContainer>
       <DayCounterContainer>
        <DayCounter/>
      </DayCounterContainer>
    <Calendar
      monthFormat={'M월'}
      onDayPress={(day) => {
        setSelectedDay(day.year + "-" + day.dateString.split('-')[1] + "-" + day.dateString.split('-')[2]);
      }}
      markedDates={{
        [selectedDay]: {
            selected: true,
            marked: true,
            selectedColor: "rgb(76,174,249)"
        }
    }}
      theme = {{
        selectedDayBackgroundColor: '#00adf5',
    selectedDayTextColor: '#ffffff',
        textDayFontFamily: 'SpoqaHanSansNeo-Regular',
        textMonthFontFamily: 'SpoqaHanSansNeo-Bold',
        textDayHeaderFontFamily: 'SpoqaHanSansNeo-Bold',
        textDayFontWeight: '400',
        textMonthFontWeight: '600',
        textDayHeaderFontWeight: '600',
      }}
    />
    <DiaryContainer>
      <StyledDefaultText>{selectedDate}일</StyledDefaultText>
      <StyledDefaultText style={{marginTop: 16,}}>햇병아리똥같은날</StyledDefaultText>
    </DiaryContainer>
    </CalendarContainer>
   
  );
}

export default FeelingCalendar;