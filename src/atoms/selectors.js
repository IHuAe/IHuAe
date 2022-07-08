import {selector} from 'recoil';
import {dayState , initDay} from '~/atoms/atoms';

const dayCount = selector({
  key: 'dayCount',
  get : async ({get}) => {
    const dayState = await get(initDay);
    const initDayInfo = new Date(dayState.initDayInfo);
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

export {dayCount};
