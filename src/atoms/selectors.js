import {selector} from 'recoil';
import {dayState , initDay} from '~/atoms/atoms';

// const calculatedWeek = selector({
//   // 주 계산
//   key: 'calculatedWeek',
//   get: ({get}) => {
//     const day = get(dayState);

//     if (day.dayCount <= 7) {
//       return 1;
//     } else if (day.dayCount > 7 && day.dayCount <= 14) {
//       return 2;
//     } else if (day.dayCount > 14 && day.dayCount <= 21) {
//       return 3;
//     } else if (day.dayCount > 21) {
//       return 4;
//     } else {
//       return null;
//     }
//   },
// });

const dayCount = selector({
  key: 'dayCount',
  get : ({get}) => {
    const dayState = get(initDay);
    const initDayInfo = dayState.initDayInfo;
    const now = new Date();
    const elaspedMSec = now.getTime() - initDayInfo.getTime();
    const elaspedHour = elaspedMSec/1000/60/60;
    const calculatedDay = Math.floor(elaspedHour/24) + 1;
    const week = Math.floor(calculatedDay/7)+1;
    return {
      dayCount : calculatedDay,
      weekCount : week
    }
  }
})

// const resetDay = selector({
//   key: 'resetDay',
//   get: ({get}) => {
//     const day = get(dayState);

//   }
// })

export {dayCount};
