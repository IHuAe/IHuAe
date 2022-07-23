import React, {useState} from 'react';
import {
  View,
  Text,
  ToastAndroid,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import styled, {css} from 'styled-components/native';
// utils
import {makeMonthCalendar, leftPad} from '~/utils';
// asset
import {Icons} from '~/assets';
// components
import {
  DefaultText,
  DefaultBoldText,
  DefaultMediumText,
  DayCounter,
} from '~/components/DefaultText';
import {Fragment} from 'react/cjs/react.production.min';
import Icon from 'react-native-ionicons';
// import {DefaultText, DefaultBoldText, DefaultMediumText} from '~/components/DefaultText';

const CalendarWrap = styled.View`
  background: #f3f3f3;
`;
const Header = styled.View`
  width: 100%;
  height: 45px;
  flex-direction: row;
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

  ${props =>
    props.display == 'none' &&
    css`
      width: 0;
      height: 0;
    `};
`;

const MonthChangeBtn = styled.ImageBackground`
  width: 12px;
  height: 16px;
`;

const Contents = styled.View`
  padding: 0 20px;
`;
const WeekContainer = styled.View`
  margin-top: 30px;
  flex-direction: row;
`;
const WeekText = styled(DefaultBoldText)`
  width: 14.285%;
  font-size: 10px;
  color: #000;
  flex-grow: 1;
  flex-shrink: 0;
  text-align: center;
`;

const DayRow = styled.View`
  flex-direction: row;
`;
const DateItem = styled.TouchableOpacity`
  width: 14.285%;
  flex-grow: 1;
  flex-shrink: 0;
  position: relative;
  padding: 10px 0;
`;
const DateItemText = styled(DefaultText)`
  font-size: 10px;
  text-align: center;

  color: ${props => (props.currentMonth ? '#000' : '#aaa')};
  ${props =>
    props.today &&
    props.currentMonth &&
    // 오늘 날짜
    css`
      color: #fff;
      font-weight: bold;
    `}
  ${
    // 선택된 날짜
    props =>
      props.selected &&
      css`
        color: orange;
      `
  }
 ${
    // 일기 기록이 있는 날짜
    props =>
      props.diary &&
      css`
        color: purple;
      `
  }
`;
const DateContainer = styled.View`
  margin-top: 10px;
  margin-bottom: 20px;
`;
const TodayIcon = styled.ImageBackground`
  width: 20px;
  height: 24px;
  margin-top: -2px;
  position: absolute;
  top: 7px;
  left: 50%;
  margin-left: -10px;
`;

const Calendar = () => {
  const now = new Date();
  const today = {
    year: now.getFullYear(),
    month: now.getMonth(),
    date: now.getDate(),
  };
  const todayFullDate = `${today.year}${leftPad(today.month + 1)}${leftPad(
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
    <CalendarWrap>
      {/* 캘린더 헤더 */}
      <Header>
        <TouchableOpacity
          onPress={() => {
            handleSetYear('prev');
          }}>
          {/* left btn */}
          <MonthChangeBtn source={Icons.Left} resizeMode="contain" />
        </TouchableOpacity>
        <HeaderTextContainer>
          {/* 년, 월 표시 */}
          <HeaderText display="none">{year}년</HeaderText>
          <HeaderText>{month + 1}월</HeaderText>
        </HeaderTextContainer>
        <TouchableOpacity
          onPress={() => {
            handleSetYear('next');
          }}>
          {/* right btn */}
          <MonthChangeBtn source={Icons.Right} resizeMode="contain" />
        </TouchableOpacity>
      </Header>
      {/* // 캘린더 헤더 */}
      <Contents>
        <WeekContainer>
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
              <DayRow key={`week${idx}`}>
                {dayRow.map(dayCell => {
                  return (
                    // cell
                    <DateItem
                      key={dayCell.fullDate}
                      onPress={() => {
                        setSelectedDate(dayCell.fullDate);
                        // console.log(
                        //   selectedDate,
                        //   dayCell.fullDate,
                        //   todayFullDate,
                        //   dayCell.currentMonth,
                        // );
                      }}>
                      {dayCell.fullDate == todayFullDate ? (
                        <Fragment>
                          <TodayIcon
                            source={Icons.Today}
                            resizeMode="contain"
                          />
                          <DateItemText
                            currentMonth={dayCell.currentMonth ? true : false}
                            today={true}
                            selected={
                              selectedDate == dayCell.fullDate ? true : false
                            }
                            diary={dayCell.diary}>
                            {/* 해당 월에 해당하는 날짜만 보이도록 */}
                            {dayCell.currentMonth ? dayCell.date : ''}
                            {/* 해당 월에 해당하는 날짜만 보이도록 */}
                          </DateItemText>
                        </Fragment>
                      ) : (
                        <DateItemText
                          currentMonth={dayCell.currentMonth ? true : false}
                          today={false}
                          selected={
                            selectedDate == dayCell.fullDate ? true : false
                          }
                          diary={dayCell.diary}>
                          {/* 해당 월에 해당하는 날짜만 보이도록 */}
                          {dayCell.currentMonth ? dayCell.date : ''}
                          {/* 해당 월에 해당하는 날짜만 보이도록 */}
                        </DateItemText>
                      )}
                    </DateItem>
                  );
                })}
              </DayRow>
            );
          })}
        </DateContainer>
        {/* //캘린더 본문 */}
      </Contents>
    </CalendarWrap>
  );
};

export default Calendar;
