// utils
  import { leftPad } from '~/utils';

// 테스트 일기 data
const diaryData = [{date: '20220630', diary : true}];
const diaryDateData = diaryData.map((el)=>el.date).sort();
// // 테스트 일기 data

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

  export default makeMonthCalendar;