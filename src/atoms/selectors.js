import { selector } from 'recoil';
import { initDay, nowDay, message } from '~/atoms/atoms';

const dayCount = selector({
  key: 'dayCount',
  get: async ({ get }) => {
    const dayState = await get(initDay);
    const nowState = await get(nowDay);
    const initDayInfo = new Date(dayState);
    const initDate = initDayInfo.getTime();
    const nowDate = new Date(nowState).getTime();

    const calculatedDay = Math.floor(
      (nowDate - initDate) / (1000 * 60 * 60 * 24),
    );
    const week = Math.floor(calculatedDay / 7) + 1;

    return {
      dayCount: calculatedDay,
      weekCount: week,
    };
  },
});

const filteredMessage = selector({
  key: 'filteredMessage',
  get: async ({ get }) => {
    const messageState = await get(message);
    const now = await get(nowDay);

    const newMessageList = messageState.filter(el => {
      const messageDateState = new Date(el.sendTime).getTime();
      const timeGap = new Date(now).getTime();
      return timeGap - messageDateState <= 86400;
    });
    return newMessageList;
  },
});

export { dayCount, filteredMessage };
