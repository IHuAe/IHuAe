import {selector} from 'recoil';
import {dayState} from '~/atoms/atoms';

const calculatedWeek = selector({
  // 주 계산
  key: 'calculatedWeek',
  get: ({get}) => {
    const day = get(dayState);

    if (day.dayCount <= 7) {
      return 1;
    } else if (day > 7 && day <= 14) {
      return 2;
    } else if (day > 14 && day <= 21) {
      return 3;
    } else if (day > 21) {
      return 4;
    } else {
      return null;
    }
  },
});

export {calculatedWeek};
