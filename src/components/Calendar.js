import React, {useState} from 'react';
import {View, Text, ToastAndroid, Image, TouchableOpacity} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { exp } from 'react-native/Libraries/Animated/Easing';
import styled from 'styled-components/native';
// components
import {DefaultText, DayCounter} from '~/components/index';


const leftPad = (value) => {
  if (value >= 10) {return value};
  return `0${value}`;
}

// 테스트 일기 data
const diaryData = [{date: '20220630', diary : true}];
const diaryDateData = diaryData.map((el)=>el.date).sort();
// // 테스트 일기 data

const Calendar = () => {
  const now = new Date();
  const today = {
    year : now.getFullYear(),
    month : now.getMonth(),
    date : now.getDate(),
  }
  const todayFullDate = `${today.year}${leftPad(today.month)}${leftPad(today.date)}`;
  const week = ['일','월','화','수','목','금','토']
  // 캘린더 생성 함수
  const makeMonthCalendar = (year,month) => {
    const lastDate = new Date(year,month+1,0); // 이번 달 마지막 날짜
    const firstDay = new Date(year, month, 1).getDay(); // 이번 달 첫번째 날짜의 요일
    const calendarArr = [];
    let weekArr = Array(7).fill("");
    let dayIndex = firstDay;
    // 이전 달 날짜 출력
    if (dayIndex != 0) {
      let lastMonthLastDate = new Date(year, month, 0).getDate();
      for (let i = dayIndex-1; i>=0; i--){
        const fullDate = `${year}${leftPad(month)}${leftPad(lastMonthLastDate)}`;
        weekArr[i] = {
          date : lastMonthLastDate,
          fullDate : fullDate,
          diary: diaryDateData.filter(el => el == fullDate.length >= 1),
          currentMonth : false,
        }
        lastMonthLastDate--;
      }
    }
    // // 이전 달 날짜 출력
    // 이번 달 날짜 출력
    for (let date=1; date<=lastDate.getDate(); date++){
      const fullDate = `${year}${leftPad(month+1)}${leftPad(date)}`
      weekArr[dayIndex] = {
        date: date,
        fullDate : fullDate,
        diary: diaryDateData.filter(el => el==fullDate).length>=1,
        currentMonth : true
      }
      if (dayIndex == 6 || date == lastDate.getDate()){
        // 마지막 인덱스일 경우
        // 다음 달 날짜 출력
        if (date == lastDate.getDate()){
          let nextMonthDate = 1;
          for (let i = lastDate.getDay()+1; i<=6; i++){
            const fullDate = `${year}${leftPad(month+2)}${leftPad(nextMonthDate)}}`
            weekArr[i] = {
            date: nextMonthDate,
            fullDate: fullDate,
            diary: diaryDateData.filter(el => el == fullDate).length >= 1,
            currentMonth: false,
            }
            nextMonthDate++;
          }
        }
        // // 다음 달 날짜 출력
        // week 배열이 다 찼을 경우 calendarArr 에 push하고 week 배열 초기화
        calendarArr.push(weekArr);
        weekArr = Array(7).fill("");
        dayIndex = 0;
      } else{
        dayIndex++;
      }
        
    }
    // // 이번 달 날짜 출력   
    return calendarArr;
  }
  // // 캘린더 생성 함수
  const [month, setMonth] = useState(today.month);
  const [year,setYear] = useState(today.year);
  const [selectedDate, setSelectedDate] = useState("");
  const thisMonthCalendar = makeMonthCalendar(year, month);
  const handleSetYear = type => {
    switch (type){
      case "prev": 
        if (month != 0){
          setMonth(month-1);
        }
        else {setMonth(11); setYear(year-1);}
        break;
      case "next" :
        if(month != 11){
          setMonth(month + 1);        
        } else {
          setMonth(0);
          setYear(year + 1);
        }
        break;
    }
  }

  return(
    <View style={{backgroundColor: '#ddd'}}>
      {/* 캘린더 헤더 */}
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={()=>{handleSetYear("prev")}}>
          {/* left btn */}
          <Text>◀</Text>
        </TouchableOpacity>
        <View>
          <Text>{year}.</Text>
          <Text>{month + 1}</Text>
        </View>
        <TouchableOpacity onPress={()=>{handleSetYear("next")}}> 
          {/* right btn */}
          <Text>▶</Text>
        </TouchableOpacity>
      </View>
      {/* // 캘린더 헤더 */}
      <View>
        <View style={{flexDirection:'row'}}>
          {/* 주 표시 */}
          {week.map(el => {return <Text key={el} style={{width: 40,}}>{el}</Text>})}
        </View>
          {/* 캘린더 본문 */}
        <View>
          {thisMonthCalendar.map((dayRow, idx)=> {
            return(
              // row
              <View key ={`week${idx}`} style={{flexDirection:'row'}}>
                {dayRow.map((dayCell) => {
                  return (
                    // cell
                    <View key={dayCell.fullDate}  style={{width: 40,}}>
                      <Text>{dayCell.date}</Text>
                    </View>
                  )
                })}
              </View>
            )
          })}
        </View>
          {/* //캘린더 본문 */}
      </View>
    </View>
  )
}

export default Calendar;
