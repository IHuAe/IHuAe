import React, {useState, useEffect} from 'react';
import {View, Text, ToastAndroid, Image} from 'react-native';
import styled from 'styled-components/native';
// components
import {
  DefaultText,
  DefaultMediumText,
  DefaultBoldText,
  DayCounter,
  Calendar,
} from '~/components/index';
// util
import {useDidMountEffect, leftPad} from '~/utils/index';
// lib
// import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';
// asset
import {Icons} from '~/assets';

// LocaleConfig.locales['fr'] = {
//   monthNames: [
//     'Janvier',
//     'Février',
//     'Mars',
//     'Avril',
//     'Mai',
//     'Juin',
//     'Juillet',
//     'Août',
//     'Septembre',
//     'Octobre',
//     'Novembre',
//     'Décembre',
//   ],
//   monthNamesShort: [
//     'Janv.',
//     'Févr.',
//     'Mars',
//     'Avril',
//     'Mai',
//     'Juin',
//     'Juil.',
//     'Août',
//     'Sept.',
//     'Oct.',
//     'Nov.',
//     'Déc.',
//   ],
//   dayNames: [
//     '일요일',
//     '월요일',
//     '화요일',
//     '수요일',
//     '목요일',
//     '금요일',
//     '토요일',
//   ],
//   dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
//   today: "Aujourd'hui",
// };
// LocaleConfig.defaultLocale = 'fr';

const CalendarContainer = styled.View`
  background: #f6f8fd;
  height: 100%;
  padding-bottom: 94px;
`;

const CalendarContainerTop = styled.View`
  height: 426px;
  padding: 0 36px;
  background: #fff;
`;

const CalendarContainerTitle = styled.View`
  height: 50px;
  justify-content: center;
  align-items: center;
`;

const CalendarContainerTitleText = styled(DefaultMediumText)`
  color: #4a4a4a;
  font-size: 16px;
`;

const TodayFeelingContainer = styled.View`
  margin-top: 28px;
  padding: 0 20px;
  flex-grow: 1;
  flex-shrink: 1;
`;

const TodayFeelingContainerTitleText = styled(DefaultBoldText)`
  font-size: 14px;
  color: #4a4a4a;
`;

const TodayFeelingContent = styled.View`
  background: #fff;
  padding: 23px 25px;
  margin-top: 16px;
  border-radius: 8px;
  height: 100%;
  flex-grow: 1;
  flex-shrink: 1;
`;

const TodayFeelingContentTitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TodayFeelingIcon = styled.View`
  width: 46px;
  height: 46px;
  border-radius: 100px;
  border: 2px dashed #8291e6;
  margin-right: 16px;
`;

const TodayFeelingContentTitleText = styled(DefaultText)`
  font-size: 14px;
  color: #4a4a4a;
`;

const TodayFeelingDiary = styled(DefaultText)`
  margin-top: 22px;
  font-size: 14px;
  color: #6d6d6d;
`;

const DirectionArrowStyle = {
  width: 11,
  height: 16,
  resizeMode: 'contain',
};

const FeelingCalendar = () => {
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    //  mount시에만 실행
    const now = new Date();

    function toStringByFormatting(source, delimiter = '-') {
      const year = source.getFullYear();
      const month = leftPad(source.getMonth() + 1);
      const day = leftPad(source.getDate());
      return [year, month, day].join(delimiter);
    }
    const date = toStringByFormatting(now);
    setSelectedDay(date);
  }, []);

  useDidMountEffect(() => {
    // mount시, selectDay 변경 시 실행
    const dateArr = selectedDay.split('-');
    let day = dateArr[2];
    if (day.slice(0, 1) == '0') {
      day = day.slice(1, 2);
    }
    setSelectedDate(day);
  }, [selectedDay]);

  return (
    <CalendarContainer>
      <CalendarContainerTop
        style={{
          borderBottomLeftRadius: 23,
          borderBottomRightRadius: 23,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 32,
          },
          shadowOpacity: 0.14,
          shadowRadius: 5,
          elevation: 8,
        }}>
        {/* COMPONENT 페이지 헤더 */}
        <CalendarContainerTitle>
          <CalendarContainerTitleText>캘린더</CalendarContainerTitleText>
        </CalendarContainerTitle>
        {/* COMPONENT 달력 */}
        <Calendar />
      </CalendarContainerTop>
      {/* COMPONENT 오늘의 기분 */}
      <TodayFeelingContainer>
        <View>
          <TodayFeelingContainerTitleText>
            오늘의 기분
          </TodayFeelingContainerTitleText>
        </View>
        <TodayFeelingContent
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.14,
            shadowRadius: 5,
            elevation: 8,
          }}>
          <TodayFeelingContentTitleContainer>
            <TodayFeelingIcon></TodayFeelingIcon>
            <TodayFeelingContentTitleText>
              오늘은 어떤 기분이 드나요?
            </TodayFeelingContentTitleText>
          </TodayFeelingContentTitleContainer>
          <TodayFeelingDiary>(기분에 대해서 기록해보세요)</TodayFeelingDiary>
        </TodayFeelingContent>
      </TodayFeelingContainer>
    </CalendarContainer>
  );
};

export default FeelingCalendar;
