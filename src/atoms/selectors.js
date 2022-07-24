import {selector} from 'recoil';
import {initDay, nowDay, message} from '~/atoms/atoms';

const dayCount = selector({
  key: 'dayCount',
  get: async ({get}) => {
    const dayState = await get(initDay);
    const nowState = await get(nowDay);
    const initDayInfo = new Date(dayState.initDayInfo);
    const initDate = initDayInfo.getDate();
    const nowDate = new Date(nowState).getDate();

    const calculatedDay = nowDate - initDate + 1;
    const week = Math.floor(calculatedDay / 7) + 1;

    return {
      dayCount: calculatedDay,
      weekCount: week,
    };
  },
});

const filteredMessage = selector({
  key: 'filteredMessage',
  get: async ({get}) => {
    const messageState = await get(message);
    const now = await get(nowDay);

    const newMessageList = messageState.filter(el => {
      const messageDateState = new Date(el.sendTime).getTime();
      // console.log(new Date(el.sendTime));
      // console.log(messageDateState);
      const timeGap = new Date(now).getTime();
      // console.log(timeGap);
      return timeGap - messageDateState <= 86400;
    });
    return newMessageList;
  },
});

export {dayCount, filteredMessage};
