import {atom} from 'recoil';

const dayState = atom({
  key: 'dDayCount', // 유니크 ID
  default: 1, // 기본값
});

export {dayState};
